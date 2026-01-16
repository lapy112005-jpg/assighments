//how to create connnection by sequelize....?
// const sequelize = new Sequelize ( database , user , password , { host , dilect})

import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../../config/configService.js";



export const sequelize = new Sequelize(DB_NAME ,DB_USER,DB_PASSWORD ,{
    host:DB_HOST,
    dialect:"mysql"
})

export async function checkConnection(){
    try {
        await sequelize.authenticate()

        console.log("db connected");
        
    } catch (error) {
        console.log("failed to connect with db" ,error);
        
    }
}