'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCompra extends Model {
    static associate(models) {
      // define association here
      ItemCompra.belongsTo(models.Compra, {
        foreignKey: 'CompraId', as: 'compras'
      });
      ItemCompra.belongsTo(models.Produto, {
        foreignKey: 'ProdutoId', as: 'produtos'
      });
    }
  };
  ItemCompra.init({
    CompraId: DataTypes.INTEGER, 
    ProdutoId: DataTypes.INTEGER, 
    quantidade:  DataTypes.INTEGER,
    valor:  DataTypes.FLOAT 
  }, {
    sequelize,
    modelName: 'ItemCompra',
  });
  return ItemCompra;
};