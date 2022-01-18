const fs = require('fs')
const d3 = require('d3')


loadFile()
function loadFile() {
    fs.readFile("data.txt", function (err, data) {
        if (!err) {
            //   const parsedData = d3.tsvParse(data);
            console.log('received data items: ' + data.length);
            parseData(data)
        } else {
            console.log(err);
        }
    })
}

function parseData(src) {
    const data = d3.tsvParse(src)
    console.log(data.length)

}