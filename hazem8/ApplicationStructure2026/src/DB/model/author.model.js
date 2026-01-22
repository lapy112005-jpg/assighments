import { db } from "../connection.db.js"
//q2
export const authorModel = await db.createCollection("authors")
await authorModel.insertOne({mn:"sdkd"})

