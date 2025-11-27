//question one 
function Paths(){
    console.log("file name = " + __filename)
    console.log("directory = " + __dirname)
}
Paths()

//question 2
const path = require("path")

function getFileName(value){
   return path.basename(value)
}
console.log(getFileName("/sara/hazem/fadoa.js"));

//3
function buildPathFromObject(value){
    console.log(path.format(value))
}
buildPathFromObject({dir:"/folder" , name:"app" , ext:".js"})
//4
function extractExtention(value){
    console.log(path.extname(value))
}
extractExtention("/folder/folder2/index.js")
//5
function fileNameAndExt(value){
   console.log("name = " + path.basename(value)) 
   console.log("ext = " + path.extname(value)) 
}
fileNameAndExt("/folder/folder2/index.js")
//6
function isAbslute(value){
    console.log(path.isAbsolute(value));
}
isAbslute("/folder/folder2")
//7
function join(...value){
    console.log(path.join(...value))
}
join("src","my games","gta")
//8
function RelativeToAbolute(value){
    console.log(path.resolve(value))
}
RelativeToAbolute("./main.js")
//9
function joinTwoPaths(path1,path2){
    console.log(path.join(path1,path2))
}
joinTwoPaths("folder1","folder2/index.js")
//10
const fs = require("fs")
function deleteFile(filePath){
    fs.unlink(filePath , (err)=>{
        if(!err){
            console.log("the file deleted")
        }else{
        console.log(err)
        }
    })
}
deleteFile(path.resolve("./lol.txt"))
//11
function createFolder(folderPath){
    fs.mkdirSync(folderPath , {recursive:true} , (err)=>{
        if(!err){
            console.log("sucess")
        }else{
            console.log(err)
        }
    })
}
createFolder(path.resolve("./folder1"))
//12
const {EventEmitter} = require ("events")
const event = new EventEmitter()
event.on("start" , ()=>{
    console.log("welcome")
})
event.emit("start")
//13
event.on("login", (username)=>{
    console.log("user logged in: "+username);
})
event.emit("login" , "Ahmed")
//14
function readFileSync(filePath){
    const absolute = path.resolve(filePath)
    const content  = fs.readFileSync(absolute , {encoding:"utf-8"})
    console.log(content)
}
readFileSync("./assi.txt")
//15 
function readFileAsync(filepath){
    const absolute = path.resolve(filepath)
    fs.readFile(absolute , {encoding:"utf-8"} , (err,data)=>{
        if(data){
            console.log(data)
        }else{
            console.log(err)
        }
    })
}
readFileAsync("./assi.txt")
//16
function check(filePath){
    return fs.existsSync(filePath);
}
console.log( check("./assi"));

//17
const os = require("os")
function osAndArch(){
    console.log("Platform: "+os.platform)
    console.log("Arch: "+os.arch)
}
osAndArch()