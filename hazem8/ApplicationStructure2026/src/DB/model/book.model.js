
import { db } from "../connection.db.js"
//q1
export const booksModel = await db.createCollection("books" , {validator:{title:{$type:"string"}}})







