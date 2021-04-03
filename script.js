 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18d4XwUBwMFqMQj1GXLfeQCZ5wfjlcVFZ_UDVEVprWqI/pubhtml';


function init() {
  Tabletop.init( {
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true 
  } )
}

function showInfo(data, tabletop) {
  const body = document.body
  const template = document.querySelector('template')
  

  alert('Successfully processed!')
  console.log(data);
    //insert code here
    for (var i = 0; i < data.length; i++){
        const content = template.content.cloneNode(true)
        content.querySelector('h3').innerText = data[i]["Email Address"]
        if (data[i].Image != ""){ 
        content.querySelector('img').src = data[i].Image
        }
        content.querySelector('p').innerText = data[i].Quote
        body.append(content)
    }

}

window.addEventListener('DOMContentLoaded', init)


