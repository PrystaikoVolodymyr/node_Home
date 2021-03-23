const fs = require('fs');
const path = require('path');

// const dir=__dirname+`/dir`
// const allFiles = `${__dirname}/allfiles`;

function getFile(dir, daughterEll) {
    const filePath = path.join(dir, `${daughterEll}`);
    console.log('------------');
    console.log(filePath);
    console.log('------------');
    fs.readdir(filePath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(files)
        files.forEach((fileName) => {
            fs.stat(`${filePath}/${fileName}`, (err1, stats) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                console.log('================');
                console.log(fileName);
                console.log(stats.isDirectory());
                if (stats.isDirectory()) {
                    getFile(filePath, fileName);
                    return;
                }
                console.log('this file mast REMOVE');
                fs.rename(path.join(filePath, `${fileName}`), path.join(__dirname, 'allfiles', `${fileName}`), (err2) => {
                    console.log(err2);
                });
            });
        });
    });
}

getFile(__dirname, 'dir');
