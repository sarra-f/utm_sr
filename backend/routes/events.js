const router = require('express').Router();
let Event= require('../models/event.model');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const titre = req.body.titre;
  const sujet = req.body.sujet;
  const date = Date.parse(req.body.date);
  const lieu = req.body.lieu;
  const participant=req.body.participant; 
  
  const newEvent = new Event({
    titre,
    sujet,
    date,
    lieu, 
    participant,
  });

  newEvent.save()
  .then(() => res.json('Evenement ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Evenement supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
        event.titre = req.body.titre;
        event.sujet = req.body.sujet;
        event.date = Date.parse(req.body.date);
        event.lieu = req.body.lieu;
        event.participant=req.body.participant; 

      event.save()
        .then(() => res.json('Evenement mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;