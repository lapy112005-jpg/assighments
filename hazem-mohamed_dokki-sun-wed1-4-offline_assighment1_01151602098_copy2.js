const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()

let users = JSON.parse(fs.readFileSync(path.resolve("./users.json") , {encoding:"utf-8"}))
// quesion 1
app.use(express.json())
app.post("/signup" , (req,res,next)=>{
    const {email , password , id} = req.body
    const findUser = users.find((ele)=>{
        return ele.email == email
    })
    if(findUser){
        res.status(409).json({message:"email already exist mr hacker afandy"})
    }else{
        users.push({email , password , id})
        fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
        res.status(200).json({message:"done"})
    }
})
//question 2

app.patch("/user/:id" , (req , res, next)=>{
    const id = req.params.id
    const {email} = req.body
    const findUser = users.find((ele)=>{
        return ele.id === id
    })
    if(!findUser){
        res.json({message:"user id not exist"})
    }else{
        findUser.email = email
        fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
        res.json({message:"user email updated successfully"})
    }
})





//question 3
app.delete("/delete" , (req,res,next)=>{
    let users = JSON.parse(fs.readFileSync(path.resolve("./users.json") , {encoding:"utf-8"}))
    const {id} = req.body
    const findIndex = users.findIndex((ele)=>{
        return ele.id === id
    })
    console.log(findIndex);
    
    if(findIndex===-1){
        res.status(404).json({message:"this user not exist"})
    }else{
        users.splice(findIndex , 1)
        fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
        res.json({message:"user deleted "})
    }

})
//question 4
app.get("/getbyname" , (req,res,next)=>{
    const name = req.query.name
     const findUser = users.find((ele)=>{
     return ele.name === name
    })
    if(!findUser){
        res.json({message:"user not found"})
    }else{
        res.json(findUser)
    }

})





//question 5
app.get("/getall" , (req,res,next)=>{
    const content = fs.readFileSync(path.resolve("./users.json") , {encoding:'utf-8'})
    res.json(JSON.parse(content))
})
//question 6
app.get("/filter" , (req,res,next)=>{
    const minage = Number(req.query.minage)
    const filterUsers = users.filter((ele)=>{
        return ele.age>minage
    })
    if(filterUsers.length === 0 ){
        res.json({message:`no users exist with age more than ${minage}` })
    }
    res.json(filterUsers)
    

})
//question 7 
app.get("/getuser" , (req,res,next)=>{
    const {id} = req.body
    const findUser = users.find((ele)=>{
        return ele.id == id
    })
    if(!findUser){
        res.status(400).json({message:"not exist"})
    }else{
        res.json({findUser})
    }
    res.json(JSON.parse(content))
})












app.listen(3000 , ()=>{
    console.log("Server running ya basha ⚡");
    
})