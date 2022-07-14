const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SrSchema = new Schema({
    code:{type:String, required:true,unique:true},
    type:{type:String, required:true},
    denomination:{type:String, required:true},
    directeur:{type:String,required:true},
    thematique:{type:String,required:true},
    historique:{type:String,required:true},
    nb_chercheur:{type:Number,required:true},
    etablissement:{type:String,required:true},
    lien:{type:String,required:false},
    presentation:{type:String,required:false}
}, {
  timestamps: true,
});

const Sr = mongoose.model('Sr', SrSchema);

module.exports = Sr;