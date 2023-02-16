const {Band} = require('./Band')
const {Musician} = require('./Musician')

// TODO - define the association between Band and Musician
Band.hasMany(Musician);
Musician.belongsTo(Band);


module.exports = {
    Band,
    Musician
};
