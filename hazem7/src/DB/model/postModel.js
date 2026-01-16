import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";
import { userModel } from "./userModel.js";

class postModel extends Model{}

 postModel.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING
    },
    content:{
        type:DataTypes.TEXT
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:userModel,
            key:"id"
        }
    }//created at and updated also created by default
},
{
    sequelize,
    tableName:"posts",
    paranoid:true
}
)

postModel.belongsTo(userModel , {foreignKey:"userId"})
userModel.hasMany(postModel , {foreignKey:"userId"})

export {postModel}

