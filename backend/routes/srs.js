const router = require('express').Router();
let Sr =require('../models/sr.model');

router.route('/').get((req, res) => {
 Sr.find()
    .then(sr => res.json(sr))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
    const code= req.body.code;
    const type=req.body.type;
    const denomination=req.body.denomination;
    const directeur=req.body.directeur;
    const thematique=req.body.thematique;
    const historique=req.body.historique;
    const nb_chercheur=Number(req.body.nb_chercheur);
    const etablissement=req.body.etablissement;
    const lien=req.body.lien;
    const presentation=req.body.presentation;

  const newSr = new Sr({
     code,
     type,
     denomination,
     directeur,
     thematique,
     historique,
     nb_chercheur,
     etablissement,
     lien,
     presentation
  });

  newSr.save()
  .then(() => res.json('Sr ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
 Sr.findById(req.params.id)
    .then(sr => res.json(sr))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    console.log('njkhjgv')
 Sr.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sr supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 Sr.findById(req.params.id)
    .then(sr => {
         sr. code=req.body.code;
         sr.type=req.body.type;
         sr.denomination=req.body.denomination;
         sr.directeur=req.body.directeur;
         sr.thematique=req.body.thematique;
         sr.historique=req.body.historique;
         sr.nb_chercheur=Number(req.body.nb_chercheur);
         sr.etablissement=req.body.etablissement
         sr.lien=req.body.lien;
         sr.presentation=req.body.presentation

     sr.save()
        .then(() => res.json('Sr mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;