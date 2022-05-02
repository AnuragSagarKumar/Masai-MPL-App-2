// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", myFunction);
var masaiArray = JSON.parse(localStorage.getItem("shedule")) || [];

function myFunction() {
    event.preventDefault();

    arrObj = {
        match: masaiForm.matchNum.value,
        TeamA: masaiForm.teamA.value,
        TeamB: masaiForm.teamB.value,
        Date: masaiForm.date.value,
        Venue: masaiForm.venue.value,
    }


    masaiArray.push(arrObj);
    localStorage.setItem("shedule", JSON.stringify(masaiArray))

    console.log(masaiArray);
    window.location.href = "matches.html";
}