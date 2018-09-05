# orms-intro

## SWBATs

* Define Object Relational Mapper \(ORM\)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models


1. Books and Authors where each book has a single author. Books should have a title

books
id   |    title                |  author_id
1       ' Stuff my dad says'        1
2        '100 years war vol 1'      2
3       ' 100 years war vol 2'      2
4       ' 100 years war vol 3'      2
5       ' 100 years war vol 4'      2

authors
id   | name
1      'Ya dad'
2      'jon'



Q: Write the SQL to find all books written by a certain author given that author's id

```SQL
  SELECT * FROM books WHERE author_id = 2
```

2. Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

 - What type of relationship is this?
  - many to many

  books
  id   |    title                
  1       ' Stuff my dad says'        
  2        '100 years war vol 1'      
  3       ' 100 years war vol 2'      
  4       ' 100 years war vol 3'      
  5       ' Mulan'      

  books_authors
  id   |   books_id  |      authors_id
  1           1                 1
  2           2                 2
  3           3                 2
 4           4                 2
  5           5                3
  6           4                4

  authors
  id   | name
  1      'Ya dad'
  2      'jon'
  3       'mulan'
  4       " wangtron"

  Q. Write the SQL to find all books written by certain author given their name

  ``` SQL
  SELECT * FROM books
  JOIN book_authors
  ON books.id = books_authors.books_id
  JOIN authors
  ON authors.id = books_authors.authors_id
  WHERE authors.name = 'jon'
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
    4     4           2

    trees
    id |  name
    1     apple tree
    2     christmas tree
    3     old tree

Q: Write the SQL to find all Squrrels in a "christmas tree"


```SQL
 SELECT * FROM squirrels
 JOIN nests
 ON squrrels.id = nests.squirrel_id
 JOIN trees
 ON tree.id = nests.tree_id
 WHERE tree.name = "christmas tree"
```


## Object Relational Mapper (ORM)

## CRUD

What are the four ways we can interact with Data?
Create
- INSERT INTO books (title, author_id) VALUES ('generic book vol1', 1)
- Book.new("generic title", 1)

Read
  - SELECT * FROM books
   - Book.all

Update
  UPDATE books SET ( title, author_id ) VALUES ( ' New Edition', 1) WHERE id = 1
  book.title = "new edition"

Delete
 Destroy books WHERE id = 2
 book.destroy


## Active Record Pattern

- each table in our DB should correspond to a ruby class (Model)
- table is ALWAYS plural and the Model/Class is Singular
- instances of one of those classes are represented as a row in our DB
- each column represents an attribute on each instance


## How to persist Data?


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

* how do we implement an author having many books and a book having many authors
* join table having two foreign keys
* write the sql to find all books written by a certain author given their name
* highlight order of writing sql syntax
* another example with tweets and tags



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
