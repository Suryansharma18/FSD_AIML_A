const { myReadFile, myWriteFile,username } = require("./fileSync1");

myReadFile();
const data = "my WT class";
myWriteFile(data);
myReadFile();
console.log("username =", username);