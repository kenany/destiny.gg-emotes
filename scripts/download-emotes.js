const get = require('simple-get');
const process = require('process');

const opts = {
  url: 'https://cdn.destiny.gg/emotes/emotes.json',
  json: true
};

get.concat(opts, (error, res, data) => {
  if (error) {
    throw error;
  }

  process.stdout.write(JSON.stringify(data.map((emote) => emote.prefix)));
});
