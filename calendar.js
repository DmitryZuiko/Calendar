const year = +prompt('Введите год');
const month = +prompt('Введите месяц');
const calendar = document.getElementById('calendar');

const getDay = (date) => {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
}

let currentDate = new Date(year, month-1);

let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

for (let i = 0; i < getDay(currentDate); i++) {
    table += '<td></td>';
}

while (currentDate.getMonth() === month-1) {
    table += `<td>${currentDate.getDate()}</td>`;

    if (getDay(currentDate) % 7 === 6) {
        console.log(getDay(currentDate), (getDay(currentDate) % 7));
        table += '<tr></tr>';
    }

    currentDate.setDate(currentDate.getDate() + 1);
}

if (getDay(currentDate) !== 0) {
    for (let i = getDay(currentDate); i < 7; i++) {
        table += '<td></td>';
    }
}

table += '</tr></table>';

calendar.innerHTML = table;



