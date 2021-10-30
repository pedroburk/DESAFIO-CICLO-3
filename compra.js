'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    static associate(models) {
      // define association here
      Compra.belongsTo(models.Cliente, {
        foreignKey: 'ClienteId', as: 'clientes'
      });
      Compra.belongsToMany(models.Produto, {
        foreignKey: 'ProdutoId', through: 'ItemCompra', as: 'produto_compra'
      });
      Compra.hasMany(models.ItemCompra, {
        foreignKey: 'CompraId', as: 'item_compra' 
      });
    }
  };
  Compra.init({
    ClienteId: DataTypes.INTEGER,
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};