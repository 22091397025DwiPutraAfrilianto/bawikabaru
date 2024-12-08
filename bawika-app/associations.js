const User = require('./models/userModel');
const Dongeng = require('./models/dongenModel');

Dongeng.belongsTo(User, { foreignKey: 'createdBy', as: 'owner' });

module.exports = {
    User,
    Dongeng
}