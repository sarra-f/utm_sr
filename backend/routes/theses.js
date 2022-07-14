const router = require('express').Router();
let These= require('../models/these.model');

router.route('/').get((req, res) => {
  These.find()
    .then(theses => res.json(theses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const titre = req.body.titre;
  const thematique = req.body.thematique;
  const date = Date.parse(req.body.date);
  const auteur= req.body.auteur;
  const resume = req.body.resume;
  const pdf= req.body.pdf;

  const newThese = new These({
    titre,
    thematique,
    date,
    auteur,
    resume,
    pdf
  });

  newThese.save()
  .then(() => res.json('These ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  These.findById(req.params.id)
    .then(these => res.json(these))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  These.findByIdAndDelete(req.params.id)
    .then(() => res.json('These supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  These.findById(req.params.id)
    .then(these => {
      these.titre = req.body.titre;
      these.thematique = req.body.thematique;
      these.date = Date.parse(req.body.date);
      these.auteur= req.body.auteur;
      these.resume = req.body.resume;
      these.pdf = req.body.pdf;

      these.save()
        .then(() => res.json('These mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;