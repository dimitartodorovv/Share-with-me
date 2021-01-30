const {Router} = require('express');

const router = Router();


router.get('/', (req,res) => {
    res.render('loginPage');
});

router.post('/', (req,res) => {

});
router.get('/registration', (req,res) => {
    res.render('registration')
})

module.exports = router;