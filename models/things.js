var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    email : String
});

module.exports = mongoose.model('Profile', profileSchema);
