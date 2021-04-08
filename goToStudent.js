function goToStudent(){
    var selectedName = document.getElementById("searchForStudent").elements[0].value;
    var idFromName = selectedName.split(" ").join("");
    document.getElementById(idFromName).scrollIntoView({behavior:'smooth'});
}