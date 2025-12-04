////////////part 1
const fs = require("fs")
const path = require("path")
const http = require("http")
const zlib = require("zlib")
//1
// const filePath= path.resolve("./assi.txt")
// const readStream = fs.createReadStream(filePath , {encoding:"utf-8" , highWaterMark:1})
// readStream.on("data" , (chunk)=>{
//     console.log("================");
//     console.log(chunk)
// })
//2
// const filePath= path.resolve("./assi.txt")
// const destPath= path.resolve("./write.txt")
// const readStream = fs.createReadStream(filePath , {encoding:"utf-8" , highWaterMark:1})
// const writeStream = fs.createWriteStream(destPath )
// readStream.on("data" , (chunk)=>{
//     writeStream.write(chunk)
// })
//3
// const filePath= path.resolve("./assi.txt")
// const destPath= path.resolve("./write.txt.gz")
// const readStream = fs.createReadStream(filePath , {encoding:"utf-8" , highWaterMark:1})
// const writeStream = fs.createWriteStream(destPath )
// const gzip = zlib.createGzip()
// readStream.pipe(gzip).pipe(writeStream)
//////////part 2
//1
let users = [{"email":"zizoo@gmail","password":"555","id":"1"},{"email":"yasser","password":"666","id":"2"}]
const server = http.createServer((req,res)=>{
    const {method , url} = req
    if(method==="POST" && url ==="/signup"){
        let data = ""
        req.on("data" , (chunk)=>{
            data+=chunk
        })
        req.on("end" , ()=>{
            data = JSON.parse(data)
            const{email , password} = data
            let findUser = users.find((ele)=>{
                return ele.email == email
            })
            if(findUser){
                res.writeHead(409 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"email exist"}))
                res.end()
            }else{
                users.push({email , password })
                res.writeHead(201 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"email added successfully"}))
                fs.writeFileSync(path.resolve("./users.json") , JSON.stringify({users}))
                res.end()
            }
        })
        //2
    }else if(method==="DELETE" , url.startsWith("/delete/")){
        const parts = url.split("/")
        const id = parts[2]
        const userIndex = users.findIndex((ele)=>{
            return ele.id == id
        })
        if(userIndex <0){
            res.writeHead(404 , {"content-type":"application/json"})
            res.write(JSON.stringify({message:"user not found"}))
            res.end()
        }else{
            users.splice(userIndex)
            res.writeHead(404 , {"content-type":"application/json"})
            res.write(JSON.stringify({message:"user deleted"}))
            res.end()
        }
        //3
    }else if(method === "GET" && url==="/getall"){
        res.writeHead(200 , {"content-type":"application/json"})
        const users = JSON.parse(fs.readFileSync(path.resolve("./users.json") , {encoding:"utf-8"}))
        res.write(JSON.stringify(users))
        res.end()
        //4
    }else if(method === "GET" && url.startsWith("/getbyid/")){
        const parts = url.split("/")
        const id = parts[2]
        const findUser = users.find((ele)=>{
            return ele.id ==id
        })
        if(findUser){
            res.writeHead(200 , {"content-type":"application/json"})
            res.write(JSON.stringify({findUser}))
            res.end()
        }else{
            res.writeHead(404 , {"content-type":"application/json"})
            res.write(JSON.stringify({message:"not found"}))
            res.end()
        }
    }
    //5
    else if(method === "PATCH" && url.startsWith("/sign/")){
        const parts = url.split("/")
        const id = parts[2]
        let data = ''
        req.on("data" , (chunk)=>{
            data += chunk
        })
        req.on("end" , ()=>{
            data = JSON.parse(data)
            const {email , password } = data
            const findUser = users.find((ele)=>{
                return ele.id == id
            })
            if(!findUser){
                res.writeHead(404 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"user not found"}))
                res.end()
            }else{
                findUser.email = email
                findUser.password = password
                fs.writeFileSync(path.resolve("./users.json") , JSON.stringify(users))
                res.writeHead(200 , {"content-type":"application/json"})
                res.write(JSON.stringify({message:"user updated "}))
                res.end()

            }
        })
    }
    else{
        res.writeHead(404 , {"content-type":"text/plain"})
        res.end("404 page not found")
    }
})
server.listen(3000 , 'localhost' , ()=>{
    console.log("server is running 😪");
    
})
server.on("error" , (err)=>{
    console.log(err);
})

// essay 

/*
1. The Node.js Event Loop is the mechanism that controls the execution of asynchronous operations and determines when callbacks are executed on the call stack.


2. Libuv is a C library used by Node.js to handle the event loop, the thread pool, and all asynchronous input/output operations.


3. Node.js handles asynchronous operations by delegating heavy tasks to the operating system or to the Libuv thread pool, then placing the completed callbacks in the event queue.


4. The Call Stack executes synchronous code, the Event Queue holds completed asynchronous callbacks, and the Event Loop transfers callbacks from the queue to the stack.


5. The Node.js Thread Pool is managed by Libuv and is used to run heavy operations such as file system and cryptographic tasks. Its size can be set using the environment variable UV_THREADPOOL_SIZE.


6. Node.js handles non-blocking code using asynchronous mechanisms such as callbacks, promises, and async/await, while blocking code pauses the event loop until it finishes*/ 




