const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjetSchema = new Schema({
    status:{type:String,required:true},
    titre:{type:String, required:true,unique:true},
    sujet:{type:String, required:true},
    participant:{type:String,require:true},
    date:{type:Date, required:true},
    
   
}, {
  timestamps: true,
});

const Projet = mongoose.model('Projet', ProjetSchema);

module.exports = Projet;