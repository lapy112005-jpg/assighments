import { DataTypes, Model } from "sequelize";
import { postModel } from "./postModel.js";
import { sequelize } from "../connection.js";
import { userModel } from "./userModel.js";

class commentModel extends Model {}

commentModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: postModel,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: userModel,
        key: "id",
      },
    }, //created at updated at by default
  },
  {
    sequelize,
    tableName:"comments"
  }
);

postModel.hasMany(commentModel, { foreignKey: "postId" });
commentModel.belongsTo(postModel, { foreignKey: "postId" });

userModel.hasMany(commentModel , {foreignKey: "userId"})
commentModel.belongsTo(userModel, { foreignKey: "userId" });

export { commentModel };
