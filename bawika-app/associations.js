const User = require('./models/userModel');
const Dongeng = require('./models/dongenModel');
const Category = require('./models/categoryModel');
const Pembelajaran = require('./models/pembelajaranModel');
const Music = require('./models/musicModel');

Dongeng.belongsTo(User, { foreignKey: 'createdBy', as: 'owner' });
Pembelajaran.belongsTo(User, { foreignKey: 'createdBy', as: 'owner' });
Category.hasMany(Pembelajaran, { foreignKey: 'category_id', as: 'pembelajaran' });
Category.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });
Pembelajaran.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Music.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });

module.exports = {
    User,
    Dongeng,
    Category,
    Pembelajaran,
    Music,
}