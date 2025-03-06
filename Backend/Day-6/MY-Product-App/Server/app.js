// const express = require('express');
// const fs = require('fs/promises');
// const app = express();
// const port = 3002;
// const users = [];
// app.use(express.json());

// const m1 =(req,res,next)=>{
//     const age = req.query.age;
//     if(!age){
//         res.status(400).send("Enter Age in Query");
//     }
//     else{
//         if(age<18){
//             res.status(401).send("User not Authorized")
//         }
//         else{
//             next();
//         }
//     }
// }
// // app.use(m1);

// app.get("/users",async(req,res)=>{
//    // res.status(200).json(users);
//    try{
//     const data = await fs.readFile("./users.json","utf-8")
//     res.status(200).json(JSON.parse(data));
//    }
//   catch(err){
//     res.status(400).send("File not Found");
//   }

    
// })
// app.get("/user/:id",(req,res)=>{
//     const uid = req.params.id;
//     const index = users.findIndex(ind=> ind.id == uid);
//     if(index == -1){
//         res.status(400).json({status:"fail",message:"User not found"});
//     }
//     else{
//         res.status(200).json({status:"success",message:"User found",data:users[index]});
//     }
// })
// app.post("/createuser",m1,async(req,res)=>{
//     const {name,email} = req.body;
//     const newId = Date.now();
//     const newUser = {
//         id: newId,name,email
//     }
//     users.push(newUser);
// //    await fs.writeFile("./users.json",JSON.stringify(users))
// await fs.writeFile("./users.json",JSON.stringify(users))
//     res.status(201).json({status:"success",message:"user created successfully",data: newUser})
// });
// app.patch("/edituser/:id",(req,res)=>{
//     const uid = req.params.id;
//     const {name,email} =  req.body;
   
//     if(!name || !email){
//         res.status(400).json({status:"fail",message:"All fields Required"})
//     }
//     else{
//         const index = users.findIndex(ind=>ind.id==uid);
    
//     if(index==-1){
//         res.status(400).json({status:"fail",message:"User Not found"})
//     }
//     else{
//         users[index].name = name;
//         users[index].email = email;
//         res.status(200).json({status:"success",message:"edited successfully",data: users[index]})
//     }
// }
// })
// app.delete("/deleteuser/:id",(req,res)=>{
//     const uid = req.params.id;
//     const index =  users.findIndex(ind => ind.id==uid);
//     if(index==-1){
//         res.status(400).json({status:"fail",message:"User not found"});
//     }
//     else{
//         users.splice(index,1);
//         res.status(200).json({status:"success",message:"User Delted Successfully",data:users[index]});
//     }
// })

// app.listen(port,()=>{
//     console.log(`Server is running at port ${port}`);
// })