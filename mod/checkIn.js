var s = require('../Skeleton/saveUsr');
module.exports = (username, password) => {
    var dataBuild = {username, password};
    s(dataBuild);
    return console.log("New user created!");
}