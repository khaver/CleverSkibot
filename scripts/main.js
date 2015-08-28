// Description:
//   Cleverbot in your very own chatroom
//
// Dependencies:
//   "cleverbot-node": "^0.2.1"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot <statement> - <Gets cleverbot's reply>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   <github username of the original script author>
module.exports = function (robot) {
  robot.respond(/clever (.*)/i, function (res) {
    var Cleverbot = require('cleverbot-node');
    cleverbot = new Cleverbot;
    Cleverbot.prepare(function(){
      cleverbot.write(res.match[1], function (response) {
           res.reply(response.message);
      });
    });
  });
};
