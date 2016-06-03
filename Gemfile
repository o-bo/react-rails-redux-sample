source 'https://rubygems.org'

ruby '2.3.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Use sqlite3 as the database for Active Record
gem 'mysql2', '0.4.2'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Devise for authentication
gem 'devise'

# Roles
gem "rolify"
gem "pundit"

# File uploads
gem 'carrierwave'
gem 'carrierwave-base64'
gem 'mini_magick'

# Cache (for sidekiq and geocoder)
gem 'redis'

# Elastic search
gem 'chewy', '0.8.4'

# Workers
gem 'sidekiq', '< 5'
gem 'sinatra', :require => nil
gem 'sidekiq-failures'

# Manage secrets and api keys in ENV
gem "figaro"

# Serializer
gem 'active_model_serializers'

gem 'react-rails', '1.7.1'

gem 'browserify-rails'

gem 'nprogress-rails'

group :development do

  # Generate data relations graph
  # Be sure to install graphviz on your laptop
  # http://voormedia.github.io/rails-erd/install.html
  gem "rails-erd"

  # Chrome extension
  gem 'meta_request'

  # Documentation
  gem 'yard'
  gem 'yard-activerecord'

  # Trying Puma instead of webrick
  gem 'puma'

  gem 'foreman'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Monitoring exceptions
  gem 'better_errors'
  gem 'binding_of_caller'

  # Remove traces from assets
  gem 'quiet_assets'

  # Live Reload
  gem 'guard-livereload', require: false

  # Automated tests
  # This is the core gem that installs Guard and is setup to watch files and call actions when they change.
  gem 'guard-minitest' # https://github.com/guard/guard-minitest
  # This is the notifier for Mac OS X 10.8 and above.
  # When a test is run, a notification will pop up with the pass/fail status.
  # This way you never have to switch back to your terminal window.
  gem 'terminal-notifier-guard' # https://github.com/Springest/terminal-notifier-guard
  # You will need to install terminal-notifier with: brew install terminal-notifier
  gem 'terminal-notifier' # https://github.com/alloy/terminal-notifier
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

