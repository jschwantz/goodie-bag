const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/10/halloween-candies.jpg'
  }
});
