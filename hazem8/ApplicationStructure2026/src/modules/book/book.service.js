import { booksModel } from "../../DB/model/book.model.js"

//q5
export const insertBook = async(inputs)=>{
    const result = await booksModel.insertOne(inputs)
    return result
}
//6
export const insertManyBooks = async (inputs)=>{
    if(inputs.length<=3){
        throw new Error("minimum is 3");
    }
    const result = await booksModel.insertMany(inputs)
    return result
}
//8
export const updatebook = async(inputs)=>{
    const updated = await booksModel.updateOne({title:inputs.title} , {$set:{year:2022}})
    return updated
}
//9
export const findBook = async(input)=>{
    const result = await booksModel.find({title:input}).toArray()
    return result
}
//10
export const findBooksFromTo=async(from , to)=>{
    const result =await booksModel.find({
        $and:[{year:{$gt:from}} , {year:{$lt:to}}]
    }).toArray()
    return result
}
//11
export const findDocsThatIncludeEleInArr = async (input)=>{
    const result = await booksModel.find({genre:input}).toArray()
    return result
}
//12
export const findAndFilter = async ()=>{
    const result = await booksModel.find({}).skip(2).limit(3).sort({year:-1}).toArray()
    return result
}
//13
export const findIntergerYear = async ()=>{
    const result = await booksModel.find({year:{$type:16}}).toArray()
    return result
}
//14
export const exclude = async ()=>{
    const result = await booksModel.find({
        genre: { $nin: ["horror", "science"] }
    }).toArray()
    return result
}
//15
export const deleteBeforeYear = async(year)=>{
    const result = await booksModel.deleteMany({year:{$lt:year}})
    return result
}
//16
export const aggregate1 = async()=>{
    const result = await booksModel.aggregate([
        {
            $match:{year:{$gt:2000}}
        },{
            $sort:{year:-1}
        }  
]).toArray()
    return result
}
//17
export const aggregate2 = async()=>{
    const result = await booksModel.aggregate([
        {$match:{year:{$gt:2000}}},
        {$project:{title:1 , author:1 , year:1 , _id:0}}
    ]).toArray()
    return result
}
//18
export const aggregate3= async()=>{
    const result = await booksModel.aggregate([
        {$unwind:"$genre"}

    ]).toArray()
    return result
}
//19
export const aggregate4= async()=>{
const result = await booksModel.aggregate([
    {
        $lookup: {
            from: "logs",          
            localField: "_id",     
            foreignField: "bookId",
            as: "logs"             
        }
    }
]).toArray();
    return result
}





