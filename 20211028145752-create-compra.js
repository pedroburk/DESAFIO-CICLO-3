'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ClienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
      data: {
        type: Sequelize.DATEONLY
      },     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Compras');
  }
};