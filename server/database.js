const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/mean';

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;