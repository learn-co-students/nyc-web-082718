# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_11_181404) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attacks", force: :cascade do |t|
    t.string "name"
    t.integer "power"
    t.integer "accuracy"
    t.bigint "element_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["element_id"], name: "index_attacks_on_element_id"
  end

  create_table "elements", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "monster_attacks", force: :cascade do |t|
    t.bigint "monster_id"
    t.bigint "attack_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attack_id"], name: "index_monster_attacks_on_attack_id"
    t.index ["monster_id"], name: "index_monster_attacks_on_monster_id"
  end

  create_table "monster_elements", force: :cascade do |t|
    t.bigint "monster_id"
    t.bigint "element_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["element_id"], name: "index_monster_elements_on_element_id"
    t.index ["monster_id"], name: "index_monster_elements_on_monster_id"
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.integer "hp"
    t.integer "power"
    t.integer "defense"
    t.integer "speed"
    t.integer "special_attack"
    t.integer "special_defense"
    t.string "sprite_front"
    t.string "sprite_back"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "main_attack_id"
    t.integer "weight"
    t.integer "evo_level"
  end

  create_table "team_assignments", force: :cascade do |t|
    t.bigint "monster_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["monster_id"], name: "index_team_assignments_on_monster_id"
    t.index ["team_id"], name: "index_team_assignments_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "attacks", "elements"
  add_foreign_key "monster_attacks", "attacks"
  add_foreign_key "monster_attacks", "monsters"
  add_foreign_key "monster_elements", "elements"
  add_foreign_key "monster_elements", "monsters"
  add_foreign_key "team_assignments", "monsters"
  add_foreign_key "team_assignments", "teams"
end
