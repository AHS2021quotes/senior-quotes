  
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
   const template = body.querySelector('template')


   var url = window.location.href
   var partsArr = url.split("#")
   var divID = "perryThePlatypus"
   if (partsArr.length = 2){
     divID = partsArr[1]
   }
   //alert('Successfully processed!')
   console.log(data);
     //insert code here
     for (var i = 0; i < data.length; i++){
         const content = template.content.cloneNode(true)
         content.querySelector('h3').innerText = data[i]["Name"]
         var quoteID = data[i]["Name"].split(" ").join("")
         content.querySelector("div").id = quoteID

         if (quoteID == divID){
          //alert("NI")
          document.querySelector('#ogurl').setAttribute("content", url);
          document.querySelector('#ogtitle').setAttribute("content", data[i]["Name"]);
          if (data[i].Image != ""){ 
          document.querySelector('#ogimage').setAttribute("content", data[i]["Image"]);
          }
          document.querySelector('#ogdescription').setAttribute("content", data[i]["Quote"]);
          
          
         }

         if (data[i].Image != ""){ 
         content.querySelector('img').src = data[i].Image
         }
         content.querySelector('#quote').innerText = data[i].Quote
         body.querySelector("#quoteGrid").appendChild(content)
     }
 
 }
 
 window.addEventListener('DOMContentLoaded', init)