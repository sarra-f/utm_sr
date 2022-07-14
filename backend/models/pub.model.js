const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PubSchema = new Schema({
    titre:{type:String, required:true,unique:true},
    theme:{type:String, required:true},
    date:{type:Date, required:true},
    auteur:{type:String,required:true},
    corps:{type:String,required:true}
   
}, {
  timestamps: true,
});

const Publication = mongoose.model('Publication', PubSchema);

module.exports = Publication;