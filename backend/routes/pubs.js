const router = require('express').Router();
let Publication= require('../models/pub.model');

router.route('/').get((req, res) => {
  Publication.find()
    .then(publications => res.json(publications))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const titre = req.body.titre;
  const theme = req.body.theme;
  const date = Date.parse(req.body.date);
  const auteur= req.body.auteur;
  const corps = req.body.corps;

 

  const newPublication = new Publication({
    titre,
    theme,
    date,
    auteur,
    corps,
    
    
  });

  newPublication.save()
  .then(() => res.json('Publication ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Publication.findById(req.params.id)
    .then(publication => res.json(publication))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Publication.findByIdAndDelete(req.params.id)
    .then(() => res.json('Publication supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Publication.findById(req.params.id)
    .then(publication => {
      publication.titre = req.body.titre;
      publication.theme = req.body.theme;
      publication.date = Date.parse(req.body.date);
      publication.auteur= req.body.auteur;
      publication.corps = req.body.corps;
     
    

      publication.save()
        .then(() => res.json('Publication mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;