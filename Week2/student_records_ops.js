const fs = require("fs");

const filePath = 'students.csv'

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.log(`unable to read from ${filePath}`)
    } else if (data) {
        const rows = data.split("\n")
        let fields = []
        let program = ""
        let filepathToWrite = ""
        let dataToWrite = ""

        rows.forEach(record => {
            fields = record.split(",")
            program = fields[2];

            if (program !== undefined) {
                filepathToWrite = `${program}.csv`;
                dataToWrite = "${record}\n"

                fs.appendFile(filePath, dataToWrite, (err) => {
                    if (error) {
                        console.error(`Unable to open file ${filePath}: ${JSON.stringify(err)}`);
                    } else {
                        console.log(`file successfully opened ${filePath}`);
                    }
                })
            }
        })
    } else {
        console.log("data available from file");
    }
})