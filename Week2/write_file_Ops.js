const fs = require("fs")
const filePath = "output_data.txt"

console.log(`trying to write data to ${filePath}`);

let dataBuffer = Buffer.from("Yello warning - snow with wind. up to 10 cm of snow\n")
//write to file async
// overwrite exiting content if flag is provided
fs.writeFile(filePath, dataBuffer, (err) => {
    if (error) {
        console.error(`Option 1 - Unable to write to file ${filePath}: ${JSON.stringify(err)}`);
    } else {
        console.log(`Option 1 - Data successfully written to ${filePath}`);
    }
})

dataBuffer = "Avano is cool"

fs.writeFile(filePath, dataBuffer, {flag: "a"}, (err) => {
    if (error) {
        console.error(`Option 2 - Unable to write to file ${filePath}: ${JSON.stringify(err)}`);
    } else {
        console.log(`Option 2 - Data successfully written to ${filePath}`);
    }

    dataBuffer = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const writeAsync = fs.writeFileSync(filePath, dataBuffer)
    if (writeAsync) {
        console.error(`Option 3 - Unable to write to file ${filePath}: ${JSON.stringify(err)}`);
    } else {
        console.log(`Option 3 - Data successfully written to ${filePath}`);
    }
})

console.log(`tring to delete the file ${filePath}`);

fs.unlink(filePath, (err) => {
    if (err) {
        console.error(`failed to unlink to file ${filePath}`);
    }else{
        console.log(`success to unlink to file ${filePath}`);
    }
})

