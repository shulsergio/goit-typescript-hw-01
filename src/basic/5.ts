enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek):boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday; 
}

console.log('lesson 5 - ',isWeekend(DayOfWeek.Saturday));
// -----
// function sayHello(name: string): void {
//     console.log(`Hello, ${ name }!`);
// }
// let result = sayHello("John");