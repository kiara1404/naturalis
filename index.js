import fs from 'fs'
import * as d3 from 'd3'

loadFile()
function loadFile() {
    fs.readFile("./data/data.txt", function (err, data) {
        if (!err) {
         //   const parsedData = d3.tsvParse(data);
            console.log('received data items: ' + data.length);
            parseData(data)
        } else {
            console.log(err);
        }
    })
}

function parseData(src)
{
 const data = d3.tsvParse(src)
 console.log(data.length)

}

// async function getData() {

//     try {
//         const data = d3.tsv('./data/data.txt')
//         return await data
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// getData().then(data => d3.tsvParse(data))
//    // .then(data => console.log(data))


