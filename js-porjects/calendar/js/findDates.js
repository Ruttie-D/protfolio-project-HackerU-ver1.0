import { dateInput, days, months } from "./calendar.js";
import { calendarSetup } from "./calendarSetup.js";
import { title } from "./events.js";

let date = new Date();
let activeDate;
export let currentDay = date.getDate();
export let currentMonth = date.getMonth();
export let currentYear = date.getFullYear();

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    calendarSetup(currentDay, currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    calendarSetup(currentDay, currentMonth, currentYear);
}

function goToDate() {
    const dateArr = dateInput.value.split("/");

    if (dateArr.length === 3) {
        if (dateArr[0] > 0 && dateArr[0] < 31 &&
            dateArr[1] > 0 && dateArr[1] < 13 &&
            dateArr[2].length === 4) {
            calendarSetup(dateArr[0] - 1, dateArr[1] - 1, dateArr[2]);

            let day = dateArr[0];
            if (day.includes("0")) {
                day = day.split("0").join("");
            }
            const chosenDate = document.querySelector(`[day-id="${day}"]`);
            const weekday = days[new Date(dateArr[2], dateArr[1] - 1, day).getDay()];

            chosenDate.classList.add("active");
            title(weekday, day, months[dateArr[1] - 1], dateArr[2]);
            return;
        }
    }
    alert("Invalid Date");
    dateInput.value = "";
}

export { previousMonth, nextMonth, goToDate };