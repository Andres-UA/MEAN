const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChampionSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    lane: {type: String, required: true}
});

module.exports = mongoose.model('champions', ChampionSchema);