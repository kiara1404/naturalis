

d3.tsv('data.txt').then(data => {
    console.log(data[0])
    var selection = data.slice(0, 20)
      for (let i = 0; i < selection.length; i++){
        console.log(selection[i].scientificName)
        console.log(selection[i].eventDate)
        console.log(selection[i].level0Name)
    }


})

