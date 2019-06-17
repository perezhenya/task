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


function previous() {
    thisYear = thisMonth === 0 ? thisYear : thisYear - 1;
    thisMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    fillCalendar(thisMonth, thisYear);
}

function next() {
    thisYear = thisMonth === 11 ? thisYear + 1: thisYear;
    thisMonth = (thisMonth + 1) % 12; 
    fillCalendar(thisMonth, thisYear); 
}
