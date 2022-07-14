const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PartenaireSchema = new Schema({
    denomination:{type:String, required:true,unique:true},
    secteur:{type:String, required:true},
    presentation:{type:String,required:true},
    adress:{type:String, required:true},
    site:{type:String,required:false},
    mail:{type:String,required:true},
    tel:{type:Number,required:true},
    responsable:{type:String,required:true},
    offre:{type:String,required:false}, 
}, {
  timestamps: true,
});

const Partenaire = mongoose.model('Partenaire', PartenaireSchema);

module.exports = Partenaire;