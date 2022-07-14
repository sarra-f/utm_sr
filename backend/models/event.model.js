const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    titre:{type:String, required:true,unique:true},
    sujet:{type:String, required:true},
    date:{type:Date, required:true},
    lieu:{type:String,required:true},
    participant:{type:String,require:true},
   
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;