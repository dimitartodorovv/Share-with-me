const mongoose = require('mongoose');

module.exports = (app) => {

    const uri = 'mongodb://localhost/shareMe'

    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => console.log(`Connected to shareMe db!!!`));
}