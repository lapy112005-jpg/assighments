const path = require("path")
const http = require("http")
const fs = require("fs")
let users =[]
const server = http.createServer((req , res)=>{
    const {method , url} = req
    if(method === "POST" , url ==="/signup"){
        let data = ""
        req.on("data" , (chunk)=>{
            data+=chunk
        })
        req.on("end" , ()=>{
            data = JSON.parse(data)
            const {email , password} = data
            const findUser = users.find((ele)=>{
                return ele.email == email
            })
            if(findUser){
                res.writeHead(409 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"email exists"}))
                res.end()
            }else{
                users.push({email , password})
                res.writeHead(200 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"email added"}))
                fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
                res.end()
            }
        })
    }
})
server.listen(3000 , ()=>{
    console.log("running 😪")
})
server.on("error" , (err)=>{
    console.log(err);
    
})