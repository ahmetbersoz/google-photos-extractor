const fs = require('fs');

// add this file into the takeout folder
const path = './';
const type = 'photos'; // or videos
const format = 'JPG'; // or mp4


fs.readdirSync(path).forEach(function (mainFileName) {
    if (mainFileName === 'main.js' || mainFileName === 'package.json') return;

    console.log(mainFileName);

    fs.readdirSync('./' + mainFileName).forEach((fileName) => {
        if (fileName.split('.').pop() === format) {
            const path = `./${mainFileName}/${fileName}`;
            const pathCopied = `../${type}/${Date.now()}_${fileName}`;
            const modified = new Date(mainFileName);

            fs.copyFileSync(path, pathCopied);

            fs.utimesSync(pathCopied, modified, modified);
        }
    })
});