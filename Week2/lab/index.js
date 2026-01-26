const fs = require('fs');
const path = require('path');

// File paths
const inputFile = path.join(__dirname, 'input_countries.csv');
const canadaFile = path.join(__dirname, 'canada.txt');
const usaFile = path.join(__dirname, 'usa.txt');

// Delete canada.txt and usa.txt if they already exist
[canadaFile, usaFile].forEach(file => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`Deleted existing file: ${path.basename(file)}`);
    } else {
        console.log("no existing files found");
    }
});

// Read CSV file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const lines = data.split('\n');

    // Filter Canada
    const canadaData = lines.filter(line =>
        line.toLowerCase().includes('canada')
    );
    console.log("Canada data");
    console.log(canadaData);

    // Filter USA
    const usaData = lines.filter(line =>
        line.toLowerCase().includes('united states')
    );
    console.log("USA data");
    console.log(usaData);

    // Write to canada.txt
    fs.writeFileSync(canadaFile, canadaData.join('\n'));

    // Write to usa.txt
    fs.writeFileSync(usaFile, usaData.join('\n'));

    console.log('Files created successfully.');
});
