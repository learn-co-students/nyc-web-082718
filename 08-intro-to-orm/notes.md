
1. Books and Authors where each book has a single author. Books should have a name

books

id | title                      | author_id
1     ' stuff my dad says'          1
2     ' stuff my dad says part 2'   1
3     ' Art of war'                 2
4     ' Ready player 1 '            3

authors
id |  name
1     Justin Halpern
2     Sun Tzu
3     Earnest Cline

Q: Write the SQL to find all books written by a certain author given that author's id

```SQL
  SELECT * FROM books WHERE books.author_id = 1
```

2. Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

 - What type of relationship is this?
  - MANY-TO-MANY
  - We need a JOIN table

  books
  id |  title
  1     ' stuff my dad says'          
  2     ' stuff my dad says part 2'   
  3     ' Art of war'                 
  4     ' Ready player 1 '            

  book_authors
  id |  book_id | author_id
  1     1           1
  2     2           1
  3     3           2
  4     4           1

  authors
  id | name
  1     Justin Halpern
  2     Sun Tzu
  3     Earnest Cline

  Q. Write the SQL to find all books written by certain author given their name

  ``` SQL
  SELECT * FROM books
  (INNER)JOIN book_authors
  ON books.id = book_authors.book_id
  JOIN authors
  ON authors.id = book_authors.author_id
  WHERE authors.name = 'Sun Tzu'
  ```

  3. Squirrels have Nests in Trees -- Build table

  squirrel
  id |  name
  1     ' chipper'          
  2     ' alvin'   
  3     ' theo'                 
  4     ' simon '            

  nests
  id |  squirrel_id | tree_id
  1     1           1
  2     2           1
  3     3           2
  4     4           1

  trees
  id |  name
  1     apple tree
  2     christmas tree
  3     old tree


Q: Write the SQL to find all Squrrels in a "Christmas Tree"


```SQL
SELECT * FROM squirrels
(INNER)JOIN nests
ON squirrel.id = nests.squirrel_id
JOIN trees
ON tree.id = nests.tree_id
WHERE tree.name = 'Christmas tree'
```


## Object Relational Mapper (ORM)

## CRUD

What are the four ways we can interact with Data?
Create
  - INSERT INTO books (title, author_id) VALUES ('book title', 1)
  - book = Book.new({'title' => 'book title', 'author_id' =>
1})
  -book.save

Read
  - SELECT * FROM books
  - Book.all
  - SELECT * FROM books WHERE id = 5 LIMIT 1
  - Book.find(5)

Update
 - UPDATE books SET (title, author_id) VALUES ('new book title', 1 ) WHERE id = 1
 - book.update({'title' = > 'new book title'})


Delete
  - DESTROY books WHERE id = 3
  - book.destroy


## Active Record Pattern

- each table in our DB should correspond to a ruby class (Model)
- instances of one of those classes are represented as a row in our DB
- each column represents an attribute on each instance


## How to persist Data?

- Open up a Pry -- Create a new instance .. close pry, Instances GONE.

# Code Walkthrough

- bin/run.rb
  -

- config/environment.rb
  -

- Gemfile
    -

- db/twitter.db

-lib/tweets.rb && lib/tweets_app.rb

 - Rake
  - Creating a new rake task - rake-T



  ## DB[:conn].class
  ## DB[:conn].execute("SELECT * FROM tweets")
  ## DB[:conn].execute("INSERT INTO tweets (message, username) VALUES ('chirp chirp', 'your boi')")
  ##DB[:conn].execute("SELECT * FROM tweets").class

  Change TWEET #all method and run DB[:conn].execute(sql_method)

 ### Metaprogramming creating instances with hashes


```ruby

#
#
# def initialize(props={})
#   @message = props['message']
#   @username = props['username']
#   @id = props["id"]
# end
#
# def self.all
#   results = DB[:conn].execute("SELECT * FROM tweets")
#   results.map do |sql_tweet_info|
#     Tweet.new(sql_tweet_info)
#   end
# end
#
# def save
#   sql = <<-SQL
#   INSERT INTO tweets (message, username)
#   VALUES (?, ?)
#   SQL
#   DB[:conn].execute(sql, "santaize that database", "smort person")
# end



  def self.all
    # long multi line String
    sql = <<-SQL
    SELECT * FROM tweets
    SQL

    results = DB[:conn].execute(sql)
    results.map do |tweet_info|
     Tweet.new({'message' => tweet_info['message'], 'username' => tweet_info['username']})
    end

    refactor info

    results.map do |tweet_info|
      Tweet.new(tweet_info)
    end
-----------------------------------------
    # we need to add an ID
    attr_reader :id

    add in initialize @id = props['id']

  end
  ```


  ```ruby
    # We van now create DB objects and call them using ruby
    # Lets create ruby objects and save them into the DB

    def save
      sql = <<-SQL
      INSERT INTO tweets (message, username)
      VALUES (? , ?)
      SQL
      # VALUES (#{self.message}, #{self.username})
      DB[:conn].execute(sql, self.message, self.username)


    end

  ```
 Add tweet.save to line 14


 Make new tweet.. do not save

 call #all

 then Tweet.save

 --- Pull  a tweet instance -- update an attribute.. Then save ..
What happens? new tweet instance instead of an update


```ruby
  # if there is an ID then that means it saved..

  #if there is an id ?
    ## UPDATE record?
    sql = <<--SQL


    SQL

  #else
    self.save
  end


  def persisted?
    !!self.id
  end

```


### CRUD in SQL and Ruby

* What are the 4 ways we can interact with data?
* How do we write these in SQL?
* How do we want to write these in Ruby?
* How do we map these SQL applications to Ruby?

### ORM Pattern

* each table in the db should correspond to our ruby class \(models\)
* each row represents an instance in the database
* each column represents an attribute for our instances
* why do we need a database? persistence


### One to Many Relationship in SQL

* Foreign key versus primary key
* Which table is the foreign key placed on? \(has many or belongs to\)
* Show the pain of not putting the foreign key on the child
* Find all books written by a certain author by ID

### Many to Many Relationship in SQL

* who is the parent? both
* how do we implement an author having many books and a book having many authors
* join table having two foreign keys
* write the sql to find all books written by a certain author given their name
* highlight order of writing sql syntax
* another example with tweets and tags



### App Demo and Structure

* demo current app
* little bit of file structure and bundler review
* SQLite3 gem is giving you code to interact with SQLite3 database
* Creating rake tasks
* Environment file
* Gemfile
* Run file

### Selecting and Inserting

* Working with SQLite3 Gem in the console
* class with attributes and initialize method
* write all class method with db execute call
* map results from select \* to create new tweet instances
* mass assignment
* adding IDs to mapped instance

### Saving and Updating

* writing the save method
* parameterized queries and database security
* what's the difference between calling new and create?
