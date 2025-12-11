const path = require("path")
const http = require("http")
const fs = require("fs")
let users =JSON.parse(fs.readFileSync(path.resolve("./users.json")  , {encoding:"utf-8"}))
const server  = http.createServer((req , res)=>{
    const {method , url} = req
    if(method === "POST" && url ==="/signup"){
        let data =''
        req.on("data" , (chunk)=>{
            data += chunk
        })
        req.on("end" , ()=>{
            data = JSON.parse(data)
            const {email , password , id} = data
            const findUser = users.find((ele)=>{
                return ele.email == email
            })
            if(findUser){
                res.writeHead(409 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"email already exists"}))
                res.end()
            }else{
                users.push({email , password ,id})
                fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
                res.writeHead(201 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"email added successfully"}))
                res.end()
            }
        })
    }else if(method==="GET" , url === "/allusers"){
        res.writeHead(200 , {"content-type":"application/json"})
        const content = fs.readFileSync(path.resolve("./users.json") , {encoding:"utf-8"})
        res.write(JSON.stringify({content}))
        res.end()
    }
    else if(method==="PATCH" , url === "/update"){
        let data = ''
        req.on("data" , (chunk)=>{
            data+=chunk
        })
        req.on("end" , ()=>{
            data = JSON.parse(data)
            const {email , password , id} = data
            const findUser = users.find((ele)=>{
                return ele.id == id
            })
            if(findUser){
                findUser.email = email
                findUser.password = password
                fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
                res.writeHead(201 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"user updated"}))
                res.end()
            }else{
                res.writeHead(404 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"user not found"}))
                res.end()
            }
        })
    }
    else{
        res.writeHead(404 , {"content-type":"application/json"})
        res.write(JSON.stringify({message:"404 page not found"}))
        res.end()
    }
})

server.listen(3000 , ()=>{
    console.log("server running on port 3000 😛");
    
})

server.on("error" , (err)=>{
    console.log(err);
})













