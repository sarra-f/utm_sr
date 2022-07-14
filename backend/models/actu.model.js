const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ActuSchema = new Schema({
    titre:{type:String, required:true,unique:true},
    type:{type:String, required:true},
    corps:{type:String, required:true},
    date:{type:Date,required:true},
  
}, {
  timestamps: true,
});

const Actualite = mongoose.model('Actualite', ActuSchema);

module.exports = Actualite;