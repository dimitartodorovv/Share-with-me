const {Router} = require('express');

const router = Router();


router.get('/', (req,res) => {
    res.render('loginPage');
});

router.post('/login', (req,res) => {

});


module.exports = router;