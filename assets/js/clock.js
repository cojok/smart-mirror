/**
 * Created by cojok on 30/04/17.
 */

function displayTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    // ampm = h >= 12 ? 'pm' : 'am';
//            h = h % 12;

    // Adds zeros to single digit times
    if (h <= 9) {
        h = '0' + h;
    }
    if (m <= 9) {
        m = '0' + m;
    }
    if (s <= 9) {
        s = '0' + s;
    }

    // Assign time format to variable. If you want to change how time is displayed do it here
    // Example time = h + ":" + m;
    time = h + ":" + m + ":" + s;

    // Print your clock to an element.
    document.getElementsByClassName("clock")[0].innerHTML = time;

    // Refreshes clock every second. If you're just using minutes change to 60000
    setTimeout(displayTime, 1000);
}

function date() {
    let days = ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fri', 'Sam'];
    d = new Date();
    day = days[d.getDay()] + ' ' + d.getDate();
    month= d.toLocaleString('de-DE', { month: "short" });
    document.getElementsByClassName("date")[0].innerHTML = day + ' ' + month;
}

date();

displayTime();
