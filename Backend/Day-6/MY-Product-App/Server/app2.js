const express = require("express");
const fs = require("fs/promises")
const app = express();
const cors = require("cors");
const port = 3002;
let users = [];
const loadUsers = async () => {
    try {
        const userdata = await fs.readFile("./users.json", "utf-8");
        users = JSON.parse(userdata);
    }
    catch (err) {
        users = [];
    }
}
const saveUser = async () => {
    await fs.writeFile("./users.json", JSON.stringify(users));
}
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json())
loadUsers();
app.get("/users", async (req, res) => {
    res.status(200).json(users);
})
app.get("/user/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid);
    if (index == -1) {
        res.status(400).json({ status: "fail", message: "User not found" });
    }
    else {
        res.status(200).json({ status: "success", message: "User found", data: users[index] });
    }
})
app.post("/createuser", async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ status: "fail", message: "name and email required to create user" })
    }
    else {
        const newId = Date.now();
        const newUser = {
            id: newId, name, email
        }
        users.push(newUser);
        saveUser();
        res.status(201).json({ status: "success", message: "user created Successfully", data: newUser })
    }
})
app.patch("/edituser/:id", (req, res) => {
    const uid = req.params.id;
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ status: "fail", message: "All Fields Required" })
    }
    else {
        const index = users.findIndex(ind => ind.id == uid);
        if (index == -1) {
            res.status(400).json({ status: "fail", message: "User not found" });
        }
        else {
            users[index].name = name;
            users[index].email = email;
            saveUser();
            res.status(200).json({ status: "success", message: "user Edited Successfully", data: users[index] })
        }
    }
})
app.delete("/deleteuser/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid)
    if (index == -1) {
        res.status(400).json({ status: "fail", message: "User not found" });
    }
    else {
        const deldata = users.splice(index, 1);
        saveUser();
        res.status(200).json({ status: "success", message: "User Deleted Successfully", data: deldata })
    }
})
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})