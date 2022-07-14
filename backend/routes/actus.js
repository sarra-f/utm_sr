const router = require('express').Router();
let Actualite= require('../models/actu.model');

router.route('/').get((req, res) => {
  Actualite.find()
    .then(actualite => res.json(actualite))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const titre = req.body.titre;
  const type = req.body.type;
  const corps = req.body.corps;
  const date = Date.parse(req.body.date);

  const newActualite = new Actualite({
    titre,
    type,
    corps,
    date,
  });

  newActualite.save()
  .then(() => res.json('Actualité ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Actualite.findById(req.params.id)
    .then(actualite => res.json(actualite))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Actualite.findByIdAndDelete(req.params.id)
    .then(() => res.json('Actualité supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Actualite.findById(req.params.id)
    .then(actualite => {
      actualite.titre = req.body.titre;
      actualite.type = req.body.type;
      actualite.corps = req.body.corps;
      actualite.date = Date.parse(req.body.date);

      actualite.save()
        .then(() => res.json('Actualité mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;