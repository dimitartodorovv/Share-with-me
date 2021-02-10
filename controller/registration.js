const {Router} = require('express');

const router = Router();

const session = require("../services/registrationFn");

const tokenMaker = require("../services/tokenMaker");

router.get('/', (req,res) => {
    res.render('registration')
});

router.post('/', (req,res) => {
        

        session.registration(req.body).then(data => {
           
            res.cookie('toreg', tokenMaker(data));

            res.redirect("/login");

        }).catch(error => {
            let err = false;
                if(error) {
                    err = true;
                }
                res.render("registration", {err, message: error.message})
        })
});

module.exports = router;