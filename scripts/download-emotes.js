const get = require('simple-get');
const process = require('process');

const opts = {
  url: 'https://rawgit.com/destinygg/chat-gui/master/assets/emotes.json',
  json: true
};

get.concat(opts, (error, res, data) => {
  if (error) {
    throw error;
  }
  process.stdout.write(JSON.stringify(data.destiny.concat(data.twitch)));
});
