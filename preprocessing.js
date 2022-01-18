const fs = require('fs')
const d3 = require('d3')





loadFile()
function loadFile() {

    fs.readFile("data.txt",{ encoding: 'utf8' }, function (err, data) {
        if (!err) {
            //   const parsedData = d3.tsvParse(data);
            console.log('received data items: ' +(data.length));
            parseData(data)
        } else {
            console.log(err);
        }
    })
}


function parseData(source){
  
    const data = d3.tsvParse(source)
    console.log("#Entries in data: ", data.length)
    let selection = data.slice(0, 300)
    console.log(selection)
}


// fs.loadFile('data.txt')
//     .pipe(tsv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//         // [
//         //   { NAME: 'Daffy Duck', AGE: '24' },
//         //   { NAME: 'Bugs Bunny', AGE: '22' }
//         // ]
//     });