const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TheseSchema = new Schema({
    titre:{type:String, required:true,unique:true},
    thematique:{type:String, required:true},
    date:{type:Date, required:true},
    auteur:{type:String,required:true},
    resume:{type:String,required:true},
    pdf:{type:String,require:false},
   
}, {
  timestamps: true,
});

const These = mongoose.model('These', TheseSchema);

module.exports = These;