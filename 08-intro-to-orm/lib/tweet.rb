class Tweet
  attr_accessor :message, :username
  attr_reader :id

  def initialize(h={})
    @message = h['message']
    @username = h['username']
    @id = h["id"]
  end

  def self.all
    sql = <<-SQL
    SELECT * FROM tweets
    SQL

    results = DB[:conn].execute(sql)
    results.map do |tweet_info|
      Tweet.new(tweet_info)
     # Tweet.new({'message' => tweet_info['message'], 'username' => tweet_info['username']})
    end
  end

  def save
    sql = <<-SQL
    INSERT INTO tweets (message, username)
    VALUES (?, ?)
    SQL
    DB[:conn].execute(sql, self.message, self.username)
  end
end
