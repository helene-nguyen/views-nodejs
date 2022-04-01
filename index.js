//^import modules
const express = require('express');
const app = express();
//~routes
const router = require('./app/routes/router');

//~navbar locals
const nav = require('./app/data/nav');
app.locals.nav = nav;

//~statics
app.use('/', express.static('public'));

//~ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//~middlewares
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
})