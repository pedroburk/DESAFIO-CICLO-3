'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ItemCompras', {
      CompraId: { 
        allowNull: false, 
        primaryKey: true, 
        type: Sequelize.INTEGER, 
        references: {
          model: 'compras', 
          key: 'id'
        },
        onUptade: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
      ProdutoId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'produtos',
          key: 'id'
        },
        onUptade: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('ItemCompras');
  }
};