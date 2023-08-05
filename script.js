  
const apiEndpoint = "https://script.google.com/macros/s/AKfycbwW9SalCgn90xFMWuI825QkN0JyVpuG_BJYBtf93Y_TTEwYetQFwWE0BBgma-PvCqRV8A/exec?action=get"

 function init() {
    getAndDisplayData();
 }

 async function getData() {
    let response = await fetch(apiEndpoint);
    let json = await response.json();
    return json;
 }

 async function getAndDisplayData() {
    let json = await getData();
    showInfo(json);
 }
 
 function showInfo(data) {
   const body = document.body
   const template = body.querySelector('template')

     //insert code here
     for (var i = 0; i < data.length; i++){
        //adds quotes and info to the the css grid
         const content = template.content.cloneNode(true)
         content.querySelector('h3').innerText = data[i]["Name"]
         var quoteID = data[i]["Name"].split(" ").join("")
         content.querySelector("div").id = quoteID

         if (data[i].Image != ""){ 
         content.querySelector('img').src = data[i].Image
         }
         
         if (data[i].Quote != "") {
         content.querySelector('#quote').innerText = data[i].Quote
         }
         else {
          content.querySelector('#quote').innerText = "Class of 2021"
         }
         body.querySelector("#quoteGrid").appendChild(content)

         //Adds Name To Search Bar
         var dataName = document.createElement('option');
         dataName.value = data[i]["Name"];
         body.querySelector("#search").querySelector("#names").appendChild(dataName);
     }
 
 }
 
 window.addEventListener('DOMContentLoaded', init)