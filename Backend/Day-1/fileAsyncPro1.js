const fs = require("fs/promises");

function myReadFile(){
    try{
      const res =  fs.readFile("dummy.txt","utf-8");
      res.then((data)=>{
        console.log("file data", data);
      })
      .catch((err)=>{
        throw err;
      })
    }
    catch(err){
        console.log("File Reading Error:", err.message);
    }
}

const myWriteFile = (data) =>{
    try{
        const ref = fs.writeFile("dummy.txt",data);
        res.then(()=>{
            console.log("Writing Successfuly");
        })
        .catch((err)=>{
            throw err;
        })
    }
    catch(err){
        console.log("File Writing Error: err.message");
    }
}


myReadFile();
const data = "full stack development class";
myWriteFile();