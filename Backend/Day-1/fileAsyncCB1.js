const fs = require("fs");
function myReadFile(){
    try{
        fs.readFile("dummy.txt","utf-8",(err,data)=>{
            if(err) throw err;
            console.log("file data:" , data);
        });  
    }
    catch(err){
        console.log("File reading error",err.message);
    }
}

function myWriteFile(data){
    try{
        fs.writeFile("dummy.txt",data,(err)=>{
            if(err){
                throw err;
            }
            console.log("Successfully written");
        });
    }
    catch(err){
        console.log("File Writting Error: ", err.message);
    }
}


myReadFile();
const data = "Wowww something amazing!!";
myWriteFile(data);
myReadFile();
