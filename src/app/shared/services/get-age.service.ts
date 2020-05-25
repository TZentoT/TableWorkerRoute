import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAgeService {

  constructor() { }

  getAge(birthday) {
    let slash = 0;
    let i = -1, monthS, monthE;
    let day, month, year;
    while (slash != 2) {
      i++;
      if (birthday.slice(i, i + 1) == "/") {
        slash++;
        if (slash == 1) {
          day = +birthday.slice(0, i);
          monthS = i + 2;
        }
        if (slash == 2) {
          monthE = i;
          month = +birthday.slice(monthS - 1, monthE);
          year = +birthday.slice(i + 1, i + 5);
        }
      }
    }
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dob = new Date(year, month - 1, day); // дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age;
    console.log("dob:" + dob)
    console.log("today:" + today)
    //Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today.getTime() < dobnow.getTime()) {
      age = age - 1;
    }

    return age
  }

  isDateValid(birthday){
    let slash = 0;
    let i = -1, monthS, monthE;
    let day, month, year;
    while (slash != 2) {
      i++;
      if (birthday.slice(i, i + 1) == "/") {
        slash++;
        if (slash == 1) {
          day = +birthday.slice(0, i);
          monthS = i + 2;
        }
        if (slash == 2) {
          monthE = i;
          month = +birthday.slice(monthS - 1, monthE);
          year = +birthday.slice(i + 1, i + 5);
        }
      }
    }
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dob = new Date(year, month - 1, day); // дата рождения
    if (dob > today) return false
    else return true
  }
}
