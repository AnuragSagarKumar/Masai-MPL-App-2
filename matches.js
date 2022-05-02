// write js code here corresponding to matches.html

var masaiArray = JSON.parse(localStorage.getItem("shedule"))
console.log(masaiArray);

displayData(masaiArray);

var favoriatesArr = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(masaiArray) {

    document.querySelector("tbody").innerHTML = "";

    masaiArray.forEach(function(ele) {

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = ele.match;

        var td2 = document.createElement("td");
        td2.innerText = ele.TeamA;

        var td3 = document.createElement("td");
        td3.innerText = ele.TeamB;

        var td4 = document.createElement("td");
        td4.innerText = ele.Date;

        var td5 = document.createElement("td");
        td5.innerText = ele.Venue;

        var td6 = document.createElement("td");
        td6.innerText = "Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";

        td6.addEventListener("click", function() {
            functionFav(ele);
        })

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    })
}


function functionFav(ele) {
    favoriatesArr.push(ele);

    localStorage.setItem("favourites", JSON.stringify(favoriatesArr));
    window.location.href = "favourites.html";
}