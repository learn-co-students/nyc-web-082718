# Dir[File.join(File.dirname(__FILE__), '../lib', '*.rb')].sort.each { |f| require f }

require 'require_all'
require 'pry'
require_all 'lib'
# require_relative '../lib/pet.rb'
