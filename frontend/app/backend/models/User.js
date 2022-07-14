const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    experience:{type:'String', default:""},
    avancement:{type:'String', default:""},
    cursus:{type:'String', default:""},
    specialite:{type:'String', default:""},

    profilePic: String,
    createdAt: String,
});

module.exports = model('User', userSchema);
