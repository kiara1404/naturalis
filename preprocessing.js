const fs = require('fs')
const d3 = require('d3')

const settings = {
    fileName: 'data',
    filterData: true,
    removeResidenceData: false
}





loadFile()

function loadFile() {

    fs.readFile("data.txt", { encoding: 'utf8' }, function (err, data) {
        if (!err) {
            //   const parsedData = d3.tsvParse(data);
            console.log('received data items: ' + (data.length));
            parseData(data)
        } else {
            console.log(err);
        }
    })
}


function parseData(source) {

    const data = d3.shuffle(d3.tsvParse(source))
    console.log("#Entries in data: ", data.length)
    let selection = settings.filterData ? data.map(filterProperties) : data.slice(0, 10)
    console.log(selection.slice(0, 5))
    writeDataFile(selection)
}


// next step: need to write the new data into new file with fs
function writeDataFile(data, fileIndex = 0) {
    fs.writeFile(settings.fileName + "_" + fileIndex + ".json",
        JSON.stringify(data, null, 4),
        { encoding: 'utf8', flag: 'wx' },
        function (err) {

            if (err && err.code == "EEXIST") {
                writeDataFile(data, ++fileIndex)
            } else if (err) {
                return console.log(err)
            } else {
                console.log("The file was saved!", (settings.fileName + "_" + fileIndex + ".json"))
            }
        })
}

function filterProperties(item) {
    return {
        id: item['gbifID'],
        name: item['scientificName'],
        kingdom: item['kingdom'],
        class: item['class'],
        order: item['order'],
        phylum: item['phylum'],
        family: item['family'],
        date: item['eventDate'],
        place: item['level0Name'],
        description: item['occurrenceRemarks']
    }
}