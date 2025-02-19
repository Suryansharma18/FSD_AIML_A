const http = require("http")


const server = http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
    const data = await fetch("https://api.github.com/search/users?q=location:ghaziabad")
    const datajson = await data.json();
    const newdata = datajson.items;
    const loginname = newdata.map((i)=>{

        return i.login;
    })
    res.write(JSON.stringify(loginname));
    res.end();
})











server.listen(3000,(err)=>{
    try{
        if(err) throw err;
        else{
            console.log("Server is running");
        }
    }
    catch(err){
        console.log("Server Error:", err.message);
    }
    console.log("Server is listenning at 3000 port");
})
