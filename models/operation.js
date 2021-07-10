"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Operation.belongsTo(models.User, { 
        foreignKey: "userId", 
        as: "user" 
      });

      Operation.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Operation.init(
    {
      concept: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      date: DataTypes.DATEONLY,
      type: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Operation",
    }
  );
  return Operation;
};
