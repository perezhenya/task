let today = new Date();
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();


let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

let monthAndYear = document.getElementById("monthAndYear");
fillCalendar(thisMonth, thisYear);



function fillCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year,month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;

    let date = 1;
//row
    for(let i = 0; i < 6; i++) {
        let row = document.createElement('tr')
//individual cells
        for (let x = 0; x < 7; x++) {
            if( i === 0 && x < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if(date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}


var modal = document.getElementById('myModal');
let tbl = document.getElementById("calendar-body");
let myForm = document.getElementById('myInput')




tbl.onclick = (event) => {
    var target = event.target;
    if(target.tagName !== 'TD') return;
    modal.style.display = "block";
};

//отправка при клике
function send() {
// tbl.textContent = myForm.elements.msg.value;
 alert('I tried..(')
}


function previous() {
    thisYear = thisMonth === 0 ? thisYear : thisYear -1;
    thisMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    fillCalendar(thisMonth, thisYear);
}

function next() {
    thisYear = thisMonth === 11 ? thisYear + 1: thisYear;
    thisMonth = (thisMonth + 1) % 12; 
    fillCalendar(thisMonth, thisYear); 
}
function thisDay() {
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth();
    fillCalendar(thisMonth, thisYear);
}

// modal
// var modal = document.querySelector('modal');
// modal.style.display = "block";

// var close = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// close.onclick = function() {
//     modal.style.display = "none";
// }

