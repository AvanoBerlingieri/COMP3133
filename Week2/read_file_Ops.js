const fs = require("fs")
const filePath = "input_data.txt"
// reading the file asynchronously using fs.readFile()
fs.readFile(filePath,(error, data) => {
    if (error) {
        console.error(`error while reading the file: ${filePath} : ${JSON.stringify(error)}`)
    }else{
        //readfile is successful; process the data
        if (data){
            console.log(`Option 1 - data from ${filePath} : \n${filePath}`);
        }else{
            console.log (`No data from ${filePath}`);
        }
    }
})

// read the file synchronously using fs.readFileSync()
console.log("\n");
console.log("trying to read the file synchronously...");

const fileData = fs.readFileSync(filePath);
console.log(`Option 2 - fileData : \n${fileData}`);