const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:clk-node@ds247838.mlab.com:47838/clicker-nodejs');

let Schema = mongoose.Schema;

let Users = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', Users);