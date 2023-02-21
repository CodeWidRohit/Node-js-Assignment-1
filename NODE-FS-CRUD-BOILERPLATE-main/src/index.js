const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent);
}
// fs.appendFile("Home.txt", "Home content", function(err){
// 	if(err){
// 	     console.log(err);
// 	}
// 	console.log("File Has been created");
// })

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = fs.readFile(fileName,{encoding: "utf-8"});
    console.log(data);
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent);
}
const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}
myFileDeleter("file.txt")
// myFileUpdater("file.txt","World")
// myFileWriter("file.txt","Hello")
// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }