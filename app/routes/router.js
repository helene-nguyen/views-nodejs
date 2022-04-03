//^import modules
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('navbar/homePage', {title : 'Home Page'});
});

router.get('/:page', (req, res) => {
    let navInfos = req.app.locals.nav;
    let pages = req.params.page;

    console.log(navInfos.navElement);

    for (let page of navInfos.navElement) {
        if (pages === page.title) {
            res.render(`navbar/${page.name}`, { myPage: `${page.title}`, title: `${page.title}` });
        }
    }
});

// embed ejs for css and js file
//test error 404

module.exports = router;