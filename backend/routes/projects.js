const router = require('express').Router();
let Projet= require('../models/Projet.model');

router.route('/').get((req, res) => {
  Projet.find()
    .then(projets => res.json(projets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const status = req.body.status;
  const titre = req.body.titre;
  const sujet = req.body.sujet;
  const participant=req.body.participant;
  const date = Date.parse(req.body.date); 
  
  const newProjet = new Projet({
    status,
    titre,
    sujet,
    participant,
    date,

   
  });

  newProjet.save()
  .then(() => res.json('Evenement ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Projet.findById(req.params.id)
    .then(projet => res.json(projet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Projet.findByIdAndDelete(req.params.id)
    .then(() => res.json('Evenement supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Projet.findById(req.params.id)
    .then(projet => {
        projet.status = req.body.status;
        projet.titre = req.body.titre;
        projet.sujet = req.body.sujet;
        projet.participant=req.body.participant; 
        projet.date = Date.parse(req.body.date);
       

      projet.save()
        .then(() => res.json('Evenement mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;