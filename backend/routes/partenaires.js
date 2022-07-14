const router = require('express').Router();
let Partenaire =require('../models/Partenaire.model');

router.route('/').get((req, res) => {
 Partenaire.find()
    .then(partenaire => res.json(partenaire))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
    const denomination=req.body.denomination;
    const secteur=req.body.secteur;
    const presentation=req.body.presentation;
    const adress=req.body.adress;
    const site=req.body.site;
    const mail=req.body.mail;
    const tel=Number(req.body.tel);
    const responsable=req.body.responsable;
    const offre=req.body.offre;

  const newPartenaire = new Partenaire({
    denomination,
    secteur,
    presentation,
    adress,
    site,
    mail,
    tel,
   responsable,
    offre
  });

  newPartenaire.save()
  .then(() => res.json('Partenaire ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
 Partenaire.findById(req.params.id)
    .then(partenaire => res.json(partenaire))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
 Partenaire.findByIdAndDelete(req.params.id)
    .then(() => res.json('Partenaire supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 Partenaire.findById(req.params.id)
    .then(partenaire => {
         partenaire.denomination =req.body.denomination;
         partenaire.secteur=req.body.secteur;
         partenaire.presentation=req.body.presentation;
         partenaire.adress=req.body.adress
         partenaire.tel=Number(req.body.tel);
         partenaire.mail=req.body.mail;
         partenaire.site=req.body.site;
         partenaire.responsable=req.body.responsable;
         partenaire.offre=req.body.offre;

     partenaire.save()
        .then(() => res.json('Partenaire mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;