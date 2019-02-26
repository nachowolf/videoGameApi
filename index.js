const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const pg = require('pg');
const ApiRoutes = require('./api/api-routes.js');
const DBServices = require('./services/db-services.js');
const JavaScriptMethods = require('./methods/js-methods.js');


const app = express()

const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
const connectionString = process.env.DATABASE_URL || 'postgresql://nachobits:1997@localhost:5432/games';


const pool = new Pool({
    connectionString,
    ssl: useSSL
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

//Method instances
const service = DBServices(pool);
const methods = JavaScriptMethods(service);
const api = ApiRoutes(methods);

app.get('/', api.home)
app.get('/api', api.routes)
app.get('/api/games', api.allGames);
app.get('/api/platforms', api.allPlatforms);


let PORT = process.env.PORT || 3008;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});