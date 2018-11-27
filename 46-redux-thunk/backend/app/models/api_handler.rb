require 'pry'


class ApiHandler
  attr_reader :type_data, :pokemon_data, :pokemon_urls

  def initialize
    @type_data = []
    @pokemon_data = []
    @pokemon_urls = []
    @move_urls = []
    @evo_links = []
  end

  def get_type_data_from_api
    puts "Fetching type data."
    url = "https://pokeapi.co/api/v2/type/"
    types_info = get_data(url)

    puts "Fetching... "
    types_info['results'].each do |type_data|
      unless type_data['name'] == 'shadow' ||  type_data['name'] == 'unknown'
         print type_data['name'] + "... "
        @type_data << get_data(type_data['url'])
      end
    end
  end

  def make_type_data
    @type_data.each do |element|
      puts 'Making ElementType ' + element["name"]
      Element.create(name: element["name"])
    end
  end

  def make_move_data
    @type_data.each do |element|
      print "Making moves for " + element["name"]
      element['moves'].each do |type_move|
        @move_urls << type_move['url']
        name = type_move['name']
        element = Element.find_by(name: element["name"])
        get_detailed_attack_data(name, element, type_move['url'])
      end
      puts ''
    end
  end

  def get_detailed_attack_data(name, element, url)
    attack = Attack.find_by({name: name})
    if attack == nil
      move_data = JSON.parse(RestClient.get(url) )
      print(".")
      Attack.create({
        name: name, 
        element: element,
        power: move_data['power'],
        accuracy: move_data['accuracy'],
      })
    end
  end 

  def get_pokemon_data
    puts "Fetching Pokemon URLs."
    next_url = "http://pokeapi.co/api/v2/pokemon/"


    while next_url != nil do
      puts "Current URL: " + next_url
      current_dataset = get_data(next_url)
      current_dataset['results'].each do |poke|
        @pokemon_urls << poke['url']
      end
      next_url = current_dataset['next']
    end
  end

  def eliminate_extra_urls
    @pokemon_urls = @pokemon_urls.select do |url|
      url.split('/').last.to_i <= 802
    end
  end


  def get_detailed_pokemon_offset
    Monster.all.length
  end

  def get_detailed_pokemon_data(offset, limit=100000)
    print "Fetched:"
    @pokemon_urls[offset...@pokemon_urls.length].each do |url|
      if @pokemon_data.length == limit
        break
      end
      print " "
      pokemon_data = get_data(url)
      @pokemon_data << pokemon_data
      print pokemon_data['name'] + '...'
      make_pokemon_data(pokemon_data)
    end
  end

  # Remove Move versioning and ID indicies data.
  def prune_pokemon_data(dataset)
    pruned_data = dataset
    pruned_data['moves'] = pruned_data['moves'].map do |move|
      move = move['move']
    end
    pruned_data.delete('game_indices')
    pruned_data
  end

  def make_pokemon_data(data)
    name = data['name']

    hp = data['stats'].find do |stat|
      stat['stat']['name'] == 'hp'
    end['base_stat']

    attack = data['stats'].find do |stat|
      stat['stat']['name'] == 'attack'
    end['base_stat']

    defense = data['stats'].find do |stat|
      stat['stat']['name'] == 'defense'
    end['base_stat']

    speed = data['stats'].find do |stat|
      stat['stat']['name'] == 'speed'
    end['base_stat']

    special_attack = data['stats'].find do |stat|
      stat['stat']['name'] == 'special-attack'
    end['base_stat']

    special_defense = data['stats'].find do |stat|
      stat['stat']['name'] == 'special-defense'
    end['base_stat']

    weight = data['weight']

    sprite_front = data['sprites']['front_default']
    sprite_back = data['sprites']['back_default']

    # binding.pry
    pruned_data = data
    pokemon = Monster.create({
      name: name, 
      hp: hp,
      power: attack,
      defense: defense,
      speed: speed,
      special_attack: special_attack,
      special_defense: special_defense,
      sprite_front: sprite_front,
      sprite_back: sprite_back,
      weight: weight,
    })
    # PokemonJson.create({pokemon_id: pokemon.id, data: pruned_data})
  end

  def make_pokemon_type_data
    @pokemon_data.each do |pokemon_data|
      elements = pokemon_data['types'].map do |type_data|
        Element.find_by(name: type_data['type']['name'])
      end

      pokemon = Monster.find_by(name: pokemon_data['name'])
      puts "Assigning types to " + pokemon.name
      elements.each do |element|
        MonsterElement.create({monster: pokemon, element: element})
      end
    end
  end

  def make_available_moves
    @pokemon_data.each do |pokemon_data|
      pokemon = Monster.find_by(name: pokemon_data['name'])
      puts 'Assigning moves to ' + pokemon.name
      pokemon_data['moves'].each do |move_data|
        move = Attack.find_by(name: move_data['move']['name'])
        MonsterAttack.create(monster: pokemon, attack: move)
      end
    end
  end

  def get_data(link)
    JSON.parse(RestClient.get(link))
  end

  def link_strongest_attack
    Monster.all.each do |monster| 
      if monster.attacks
        main_attack = monster.attacks.where.not(power: nil).order(power: :desc)[0]
        if main_attack 
          main_attack_id = main_attack.id
          Monster.update(monster.id, main_attack_id: main_attack_id)
        end 
      end
    end 
  end 

  def get_evolution_chain_links
    data = JSON.parse(RestClient.get('https://pokeapi.co/api/v2/evolution-chain/'))['results']
    data.each do |r|
      @evo_links << r['url']
      print '.'
    end
  end 

  def set_evolution_chains
    @evo_links.each do |link|
      chain = JSON.parse(RestClient.get(link))['chain']
      handle_chain_data(chain, 1)
      print '.'
    end
  end

  def handle_chain_data(chain_data, counter) 
    monster = Monster.find_by(name: chain_data['species']['name'])
    if monster.nil? 
      return 
    end 
    
    if chain_data['evolves_to'].empty? && counter == 1
      monster = Monster.find_by(name: chain_data['species']['name'])
      Monster.update(monster.id, evo_level: 6)
      return
    end 

    Monster.update(monster.id, evo_level: counter)

    if chain_data['evolves_to'].empty? 
      return
    end 

    chain_data['evolves_to'].each do |evolution|
      handle_chain_data(evolution, counter + 1)
    end 
  end 

end
