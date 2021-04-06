/*
function init(){
    alert("Whoo")
    const head = document.head
    const body = document.body
    var url = window.location.href
    var partsArr = url.split("#")
    //Helps ensure url be valid
    if (! partsArr.length == 2){
        return;
    }
    
    var divID = partsArr[1]
    var selectedDiv = body.querySelector("#"+divID)
    alert(divID)


    head.getElementsByTagName('meta').item(property='og:url').setAttribute("content",url) 
    var test = selectedDiv.querySelector("h3").innerText;
    head.getElementsByTagName('meta').item(property='og:title').content = test
    //content.querySelector("meta[property='og:image']").getAttribute("content") = selectedDiv.querySelector("img").innerText;
    //head.querySelector("[property~=og:description][content]").content = selectedDiv.querySelector("#quote").innerText;



    
    
}

window.addEventListener('load', init)
*/

