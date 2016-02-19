mysql: mysqld --gdb
elasticsearch: elasticsearch
worker: bundle exec sidekiq -C ./config/sidekiq.yml -L log/sidekiq.log
web: rails server -p 3000
doc: yard server
