import { config } from "dotenv";
import path from "path"

const NODE_ENV = process.env.NODE_ENV
const envPath = {
    dev:".env.development",
    prod:".env.production"
}


config({path: path.resolve(`./config/${envPath[NODE_ENV]}`)})


export const PORT = process.env.PORT
export const DB_PORT = process.env.DB_PORT 
export const DB_HOST = process.env.DB_HOST 
export const DB_USER = process.env.DB_USER 
export const DB_PASSWORD = process.env.DB_PASSWORD 
export const DB_NAME= process.env.DB_NAME