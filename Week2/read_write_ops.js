const fs = require("fs");
const filePath = "data.txt"

fs.open(filePath, 'r+', (err, fd) => {
    if (error) {
        console.error(`Option 1 - Unable to open file ${filePath}: ${JSON.stringify(err)}`);
    } else {
        console.log(`file successfully opened ${filePath}`);
    }

    const fileData = fs.readFileSync(filePath);
    console.log(`file data ${fileData}`);
    const dataBuffer = Buffer.from("remind me for atklass code")
    fs.write(fd, dataBuffer, (error)=> {
        if (error) {
            console.error(`Option 1 - Unable to write to file ${filePath}: ${JSON.stringify(err)}`);
        } else {
            console.log(`Option 1 - Data successfully written to ${filePath}`);
        }
    })

    fs.close(fd);
})
