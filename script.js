  
 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1FvH0Fh0LJUGka2FF1w50uGbQFFzQEeULGrC-W1sKYyQ/pubhtml';


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
   
 
   //alert('Successfully processed!')
   console.log(data);
     //insert code here
     for (var i = 0; i < data.length; i++){
         const content = template.content.cloneNode(true)
         content.querySelector('h3').innerText = data[i]["Name"]
         content.querySelector("div").id = data[i]["Name"].split(" ").join("")
         if (data[i].Image != ""){ 
         content.querySelector('img').src = data[i].Image
         }
         content.querySelector('#quote').innerText = data[i].Quote
         body.querySelector("#quoteGrid").appendChild(content)
     }
 
 }
 
 window.addEventListener('DOMContentLoaded', init)