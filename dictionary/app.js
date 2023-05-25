let server = require('./public/js/Dictionary');
const toml = require('toml');
const fs = require('fs');
const config = toml.parse(fs.readFileSync("config.toml", 'utf-8'));

server.Server.start(config.config, config.port);