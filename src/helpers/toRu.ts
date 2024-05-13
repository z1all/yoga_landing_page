import {Weekday} from "../types/types";

export function ToRuRange(weekdays: Weekday[]): string {
    let ans = "";
    weekdays.forEach((weekday, index) => {
        ans += ToRu(weekday);
        if(index + 1 !== weekdays.length) {
            ans += ", ";
        }
    })
    return ans;
}

export function ToRu(weekday: Weekday): string {
    switch (weekday) {
        case Weekday.Monday:
            return "пн";
        case Weekday.Tuesday:
            return "вт";
        case Weekday.Wednesday:
            return "ср";
        case Weekday.Thursday:
            return "чт";
        case Weekday.Friday:
            return "пт";
        case Weekday.Saturday:
            return "сб";
        case Weekday.Sunday:
            return "вс";
        default:
            return "ERROR"
    }
}