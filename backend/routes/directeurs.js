const router = require('express').Router();
let Directeur =require('../models/Directeur.model');

router.route('/').get((req, res) => {
 Directeur.find()
    .then(directeur => res.json(directeur))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
    const nom =req.body.nom;
    const prenom=req.body.prenom;
    const sexe=req.body.sexe
    const tel_mobile=Number(req.body.tel_mobile);
    const tel_fix=Number(req.body.tel_fix);
    const email=req.body.email;
    const fax=Number(req.body.fax);
 

  const newDirecteur = new Directeur({
    nom,
    prenom,
    sexe,
    tel_mobile,
    tel_fix,
    email,
    fax,
   
  });
  newDirecteur.save()
  .then(() => res.json('Directeur ajoutée!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
 Directeur.findById(req.params.id)
    .then(directeur => res.json(directeur))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
 Directeur.findByIdAndDelete(req.params.id)
    .then(() => res.json('Directeur supprimée.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 Directeur.findById(req.params.id)
    .then(directeur => {
        directeur.nom =req.body.nom;
        directeur.prenom=req.body.prenom;
        directeur.sexe=req.body.sexe
        directeur.tel_mobile=Number(req.body.tel_mobile);
        directeur.tel_fix=Number(req.body.tel_fix);
        directeur.email=req.body.email;
        directeur.fax=Number(req.body.fax);
        

     directeur.save()
        .then(() => res.json('Directeur mise à jour!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;