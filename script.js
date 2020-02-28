var wrapper = document.querySelector(".wrapper");
var sizeTable = document.querySelector(".sizeTable");
var button = document.querySelector(".btn");
var buttonClear = document.querySelector(".clear");

button.onclick = createTable;

function createTable() {
    var allTable = document.querySelectorAll("table");
    for (var i = 0; i < allTable.length; i++) {
        allTable[i].remove();
    }
    var x, y, z;
    var randomColor = "rgb" + "(" + Math.round(Math.random() * 254) + "," + Math.round(Math.random() * 254) + "," + Math.round(Math.random() * 254) + ")";
    var size = sizeTable.value;
    var first = 0, second;
    x = document.createElement("table");
    wrapper.appendChild(x);
    for (var i = 0; i < size; i++) {
        y = document.createElement("tr");
        x.appendChild(y);
        for (var j = 0; j < size; j++) {
            z = document.createElement("td");
            y.appendChild(z);
            z.innerHTML = i + "" + j;
            first = 0;
            second = size - 1;
            if (i == j) {
                z.style.backgroundColor = randomColor;
            }
        }
    }
    var stop = size - 1;
    console.log("stop : " + stop);
    while (first != size) {
        var allTd = document.querySelectorAll("td");

        for (var i = 0; i < allTd.length; i++) {
            if (allTd[i].innerHTML == first + "" + second) {
                allTd[i].style.backgroundColor = randomColor;
            }
        }

        first++;
        second--;
    }
}

buttonClear.onclick = removeTable;
function removeTable() {
    var allTable = document.querySelectorAll("table");
    for (var i = 0; i < allTable.length; i++) {
        allTable[i].remove();
    }
}







