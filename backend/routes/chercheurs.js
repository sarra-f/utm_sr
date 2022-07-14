const router = require('express').Router();
let Chercheur =require('../models/chercheur.model');

router.route('/').get((req, res) => {
 Chercheur.find()
    .then(chercheur => res.json(chercheur))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
    const nom =req.body.nom;
    const prenom=req.body.prenom;
    const date_naissance=Date.parse(req.body.date_de_naissance);
    const sexe=req.body.sexe
    const tel=Number(req.body.tel);
    const email=req.body.email;
    const grade=req.body.grade;
    const specialite=req.body.specialite;
    const cursus=req.body.cursus;
    const experience=req.body.experience;
    const avancement=req.body.avancement;

  const newChercheur = new Chercheur({
    nom,
    prenom,
    date_naissance,
    sexe,
    tel,
    email,
    grade,
    specialite,
    cursus,
    experience,
    avancement
  });

  newChercheur.save()
  .then(() => res.json('Chercheur ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
 Chercheur.findById(req.params.id)
    .then(chercheur => res.json(chercheur))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
 Chercheur.findByIdAndDelete(req.params.id)
    .then(() => res.json('Chercheur supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 Chercheur.findById(req.params.id)
    .then(chercheur => {
         chercheur.nom =req.body.nom;
         chercheur.prenom=req.body.prenom;
         chercheur.date_naissance=Date.parse(req.body.date_de_naissance);
         chercheur.sexe=req.body.sexe
         chercheur.tel=Number(req.body.tel);
         chercheur.email=req.body.email;
         chercheur.grade=req.body.grade;
         chercheur.specialite=req.body.specialite;
         chercheur.cursus=req.body.cursus;
         chercheur.experience=req.body.experience;
         chercheur.avancement=req.body.avancement;

     chercheur.save()
        .then(() => res.json('Chercheur mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;