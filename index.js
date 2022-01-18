

d3.tsv('data.txt').then(data => {
    console.log(typeof(data))
    var selection = data.slice(0, 20)
    console.log(selection)
    //   for (let i = 0; i < selection.length; i++){
    //     console.log('Nieuw object start hier')
    //     console.log(selection[i].scientificName)
    //     console.log(selection[i].eventDate)
    //     console.log(selection[i].level0Name)
    //     console.log(selection[i].occurrenceRemarks)
    // }


})

