  
 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1GToACVmb0c_wpSH0VTNW5e25t2ur1wrzvarJPewn_zQ/pubhtml';


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

        //adds quotes and stuff to the the css grid
         const content = template.content.cloneNode(true)
         content.querySelector('h3').innerText = data[i]["Name"]
         var quoteID = data[i]["Name"].split(" ").join("")
         content.querySelector("div").id = quoteID

         /* This code changed meta data stuff, but it turns out it didn't work how I wanted to
         if (quoteID == divID){
          //alert("NI")
          document.querySelector('#ogurl').setAttribute("content", url);
          document.querySelector('#ogtitle').setAttribute("content", data[i]["Name"]);
          if (data[i].Image != ""){ 
          document.querySelector('#ogimage').setAttribute("content", data[i]["Image"]);
          }
          document.querySelector('#ogdescription').setAttribute("content", data[i]["Quote"]);
          
          
         }
         */
         if (data[i].Image != ""){ 
         content.querySelector('img').src = data[i].Image
         }
         content.querySelector('#quote').innerText = data[i].Quote
         body.querySelector("#quoteGrid").appendChild(content)

         //Adds Name To Search Bar
         var dataName = document.createElement('option');
         dataName.value = data[i]["Name"];
         body.querySelector("#search").querySelector("#names").appendChild(dataName);
     }
 
 }
 
 window.addEventListener('DOMContentLoaded', init)