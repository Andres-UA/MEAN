const Champion = require('../models/champion');

const ChampionController = {};

ChampionController.index = async (req, res) => {
    const champions = await Champion.find();
    res.json(champions);
}

ChampionController.store = async (req, res) => {
    const champion = new Champion(req.body);
    await champion.save();
    res.json({
        "success" : true
    });
}

ChampionController.show = async (req, res) => {
    const champion = await Champion.findById(req.params.id);
    res.json({
        "success" : true,
        "champion": champion
    })
}

ChampionController.update = async (req, res) => {
    const champion = {
        name: req.body.name,
        img: req.body.img,
        lane: req.body.lane
    }
    await Champion.findByIdAndUpdate(req.params.id, { $set: champion }, {new: true});
    res.json({
        "success" : true
    });
}

ChampionController.destroy = async (req, res) => {
    await Champion.findByIdAndRemove(req.params.id);
    res.json({
        "success" : true
    });
}

module.exports = ChampionController;