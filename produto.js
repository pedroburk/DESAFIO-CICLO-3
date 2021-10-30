'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      // define association here
      Produto.belongsToMany(models.Compra, {
        foreignKey: 'CompraId', through: 'ItemCompra', as: 'compra_produto'
      });
      Produto.hasMany(models.ItemCompra,{
        foreignKey: 'ProdutoId', as: 'Item_produto'
      });
    }
  };
Produto.init({
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Produto',
});
  return Produto;
};