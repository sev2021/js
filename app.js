let testGame = require('./game.js');
function callback(err, data){
    data = data.toString().trim();
    testGame.testNumber(data);
};
process.stdin.on('data', callback);