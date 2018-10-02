class User < ApplicationRecord
  has_secure_password

  # def password_digest
  #   @password_digest
  # end
  #
  # #pt_pw = plainttext_passwrod
  # def password=(pt_pw)
  #   self.password_digest = BCrypt::Password.create(pt_pw)
  # end
  # # def password
  # #   @password
  # # end
  #
  # def authenticate(pt_pw)
  #   BCrypt::Password.new(self.password_digest) == pt_pw
  # end

end
