require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactRailsReduxSample
  class Application < Rails::Application

    config.secret_key_base = Figaro.env.secret_key_base
    config.secret_token = Figaro.env.secret_token

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    config.assets.paths << Rails.root.join("node_modules", "bootstrap", "dist", "js")
    config.assets.paths << Rails.root.join("node_modules", "bootstrap", "dist", "css")
    config.assets.paths << Rails.root.join("node_modules", "bootstrap", "dist", "fonts")
    config.assets.paths << Rails.root.join("node_modules", "bootstrap-material-design", "dist", "js")
    config.assets.paths << Rails.root.join("node_modules", "bootstrap-material-design", "dist", "css")

    config.browserify_rails.commandline_options = '-t babelify'
  end
end
