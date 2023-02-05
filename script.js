// tusk 1
// let number = +prompt("How old are you?");

// if (number < 12) {
//     let number = alert("Kids");
// } 
// else if (number < 18) {
//     let number = alert("Adult");
// }
// else if (number < 59) {
//     let number = alert("An elderly person");
// }
// else if (number > 59) {
//     let number = alert("Pensioner");
// }

//! Task 2
// let number = +prompt("Let me try to guess what is your keyboard layout from 0 to 9?");
// switch (number) {
//   default:
//     alert("You are not like everyone else");
//   case 1:
//     alert("!");
//     break;
//   case 2:
//     alert("@");
//     break;
//   case 3:
//     alert("#");
//     break;
//   case 4:
//     alert("$");
//     break;
//   case 5:
//     alert("%");
//     break;
//   case 6:
//     alert("^");
//     break;
//   case 7:
//     alert("&");
//     break;
//   case 8:
//     alert("*");
//     break;
//   case 9:
//     alert("(");
//     break;
//   case 0:
//     alert(")");
//     break;
// }


// // tusk 3
// let a = +prompt("Enter a three-digit number");
// let number3 = a % 10;
// a = Math.floor(a / 10);
// let number2 = a % 10;
// a = Math.floor(a / 10);
// let number1 = a % 10;

// if ((number1 == number2)&&(number2 == number3)) {
//     alert("Парне число");
// } 
// else {
//       alert("Не підходить");
//     }



// tusk 4
// let yer = +prompt("Спиздани рік?");
// let number = yer % 4;
// if (number == 0) {
//     alert("Високосний");
// } 
// else {
//       alert("Не високосний");
//     }

// // tusk 5
// let a = +prompt("Enter a five-digit number");
// let b = a;
// let number5 = a % 10;
// a = Math.floor(a / 10);
// let number4 = a % 10;
// a = Math.floor(a / 10);
// let number3 = a % 10;
// a = Math.floor(a / 10);
// let number2 = a % 10;
// a = Math.floor(a / 10);
// let number1 = a % 10;
// let result = "" + number5 + number4 + number3 + number2 + number1;
// if (b == result) {
//     alert("Паліндром");
// } 
// else {
//       alert("Не палідром");
//     }

// // tusk 6
// let usd = +prompt("Enter the quantity USD ");
// const eur = 1.08;
// const uah = 0.027;
// const azn = 0.59;
// if (usd > 0) {
//   let convert = +prompt(
//     "Choose a currency: 1 - EUR, 2 - UAH, 3 - AZN"
//   );
//   switch (convert) {
//     case 1:
//       let convert = (usd / eur).toFixed(2);
//       alert(`You will have ${convert} EUR`);
//       break;
//     case 2:
//       let convert1 = (usd / uah).toFixed(2);
//       alert(`You will have ${convert1} UAH`);
//       break;
//     case 3:
//       let convert2 = (usd / azn).toFixed(2);
//       alert(`You will receive ${convert2} AZN`);
//       break;
//     default:
//       alert("This currency is not in the list");
//   }
// } 


// // tusk 7
// let a = +prompt("Введіть суму");
// if (a < 200) {
//     alert (`Знижки не буде і ми отримаємо = ${a}`)
// }
// else if (a >= 200 && a < 300) {
//     let result = a - (a * 3) / 100;
//     alert(`Вартість зі знижкою 3% = ${result}`);
// } 
// else if (a >= 300 && a < 500) {
//     let result = a - (a * 5) / 100;
//     alert(`Вартість зі знижкою 5% = ${result}`);
// } 
// else if (a > 500) {
//     let result = a - (a * 7) / 100;
//     alert(`Вартість зі знижкою 7% = ${result}`);
// } 

// // tusk 8
// let square = +prompt("Периметр квадрата");
// let circles = +prompt("Довжина кола");
// if (circles > 0 && square > 0) {
//     let squareitem = square / 4;
//     let result = squareitem >= circles ? true : false;
//   alert(
//     result
//       ? "a square can contain a circle"
//       : "a square can not contain a circle"
//   );
// } else {
//   alert("помилка");
// }

// tusk 9
// let question1 = +prompt("Якого кольору небо: 1 - синього, 2 - фіолетове, 3 - бордове");
// let question2 = +prompt("Скільки пальців на 1 руці: 1-5 ,2-3, 3-11?");
// let question3 = +prompt("Який по рахунку місяць лютий: 1-2, 2-6, 3-12?");
// let result1 = question1 === 1 ? 2 : 0;
// let result2 = question2 === 1 ? 2 : 0;
// let result3 = question3 > 0 && question3 <= 3 ? 2 : 0;
// let result = result1 + result2 + result3;
// {
//   alert(`У вас ${result} відповідей з 6`);
// } 

//! Task 10
// let day = +prompt("Enter this day");
// let month = +prompt("Enter this month");
// let year = +prompt("Enter this year");
// let leapYear = year % 400;
// let leapYear2 = year % 4;
// let leapYear3 = year % 100;
// if (leapYear === 0 || (leapYear2 === 0 && leapYear3 !== 0)) {
//   leapYear = 1;
// }
// if (day > 0 && day <= 32 && month > 0 && month < 13) {
//   if (day > 0 && day <= 30) {
//     ++day;
//     if (
//       month === 4 ||
//       month === 6 ||
//       month === 9 ||
//       month === 11 ||
//       (month === 1 && day === 30)
//     ) {
//       day = 1;
//       month = ++month;
//     }
//     if (month === 2 && day >= 28 && leapYear !== 1) {
//       day = 1;
//       month = 3;
//       if (leapYear === 1) {
//         day = 29;
//         month = 2;
//       }
//     }
//   } else if (day === 31 && month === 12) {
//     month = 1;
//     year = ++year;
//     day = 1;
//   } else if (day === 31) {
//     day = 1;
//     month = ++month;
//   }
//   alert(`Tomorrow ${day}/${month}/${year}year`);
// } else {
//   alert("Enter the correct data");
// }