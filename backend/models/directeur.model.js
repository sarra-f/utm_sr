const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DirecteurSchema = new Schema({
    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    sexe:{type:String,required:true},
    tel_mobile:{type:Number,required:true},
    tel_fix:{type:Number,required:false},
    email:{type:String,required:true},
    fax:{type:Number,require:true},
   
}, {
  timestamps: true,
});

const Directeur = mongoose.model('Directeur', DirecteurSchema);

module.exports = Directeur;