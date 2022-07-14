const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChercheurSchema = new Schema({
    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    date_naissance:{type:Date, required:true},
    sexe:{type:String,required:true},
    tel:{type:Number,required:true},
    email:{type:String,required:true},
    grade:{type:Number,required:true},
    specialite:{type:String,required:true},
    cursus:{type:String,required:false},
    experience:{type:String,required:false},
    avancement:{type:String,required:false}
}, {
  timestamps: true,
});

const Chercheur = mongoose.model('Chercheur', ChercheurSchema);

module.exports = Chercheur;