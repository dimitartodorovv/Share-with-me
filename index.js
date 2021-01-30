const config = require('./config/ports');
const routes = require('./routes');
const express = require('express');
const app = express();

require('./config/express')(app);
app.use(routes);

app.listen(config.port, console.log(`Listen on port ${config.port}!`));