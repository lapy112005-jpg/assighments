// //how to create model by sequelize....?
// // sequelize.define( name , attributes , options)

import { DataTypes, ENUM } from "sequelize";
import { sequelize } from "../connection.js";


export const userModel = sequelize.define(
    "User",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            validate:{
            isEmail:true
        }
        },
        name:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        },
        role:{
            type:ENUM("user","admin"),
            defaultValue:"user"
        }
        //createdat and updateded and id at added by default i just created id cause i ll use it in relations
    },
    {
        hooks:{
            beforeCreate(user){
                function checkNameLength(value){
                    if(value.length<2){
                        throw new Error("enter valid name")
                    }
                }
                checkNameLength(user.name)
            }
            
        }
    }
)