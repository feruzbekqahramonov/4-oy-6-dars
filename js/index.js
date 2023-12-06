// 1-masala
// let j = 1;
// while (j <= 10) {
//     console.log(j)
//     j++;
// }

// let i = 10;
// let n = 20;
// let counter = 0;
// while(i <= n) {
//     if (n % i == 0) {
//         counter++;
//     }
// }

// 2-masala
// let i = +prompt('Birinchi sonni kiriting');
// let n = +prompt('Ikkinchi sonni kiriting');
// let counter = 0;
// while(i <= n) {
//     if (n || i % 3 == 0); {
//         counter++;
//     }
// }
// console.log(counter);

// 3-masala
// let a = +prompt('Birinchi sonni kiriting');
// let b = +prompt('ikkinchi sonni kiriting');
// let sum = 0;
// for(let  i = a; i <= b; i++) {
//     if (i % 3 == 0 && i % 7 == 0)
//     sum += i;
// }
// console.log(sum);

// 4-masala
// let a = +prompt('Sonni kiriting');
// let tub = true;
// if (a <= 1) {
//   tub = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       tub = false;
//       break;
//     }
//   }
// }
// if (tub) {
//   console.log(`Siz kiritgan son tub`);
// } else {
//   console.log(`Siz kiritgan son tub emas`);
// }

// 5-masala
// let a = 141;
// let sum = 0;
// if(a / 100) {
//     sum += a;
// }
// if((a % 100) / 10) {
//     sum += a;
// }
// if((a % 100) % 10) {
//     sum += a;
// }
// let summa = sum + sum +sum;
// console.log(summa);

// 6-masala
// let n = +prompt('Sonni kiriting');
// let res;
// switch (n) {
//   case 100:
//     res = "yuz";
//     break;
//   case 200:
//     res = "ikkiyuz";
//     break;
//   case 300:
//     res = "uchyuz";
//     break;
//   case 400:
//     res = "to`rttuz";
//     break;
//   case 500:
//     res = "beshyuz";
//     break;
//   case 600:
//     res = "oltiyuz";
//     break;
//   case 700:
//     res = "yettiyuz";
//     break;
//   case 800:
//     res = "sakkizyuz";
//     break;
//   case 900:
//     res = "to`qqizyuz";
//     break;

//     case 10:
//     res = "o`n";
//     break;
//   case 20:
//     res = "yigirma";
//     break;
//   case 30:
//     res = "o`ttiz";
//     break;
//   case 40:
//     res = "qirq";
//     break;
//   case 50:
//     res = "ellik";
//     break;
//   case 60:
//     res = "oltmush";
//     break;
//   case 70:
//     res = "yetmush";
//     break;
//   case 80:
//     res = "sakson";
//     break;
//   case 90:
//     res = "to`qson";
//     break;

//   case 1:
//     res = "bir";
//     break;
//   case 2:
//     res = "ikki";
//     break;
//   case 3:
//     res = "uch";
//     break;
//   case 4:
//     res = "to`rt";
//     break;
//   case 5:
//     res = "besh";
//     break;
//   case 6:
//     res = "olti";
//     break;
//   case 7:
//     res = "yetti";
//     break;
//   case 8:
//     res = "sakkiz";
//     break;
//   case 9:
//     res = "to`qiz";
//     break;
//     default:
//     res = "Platformada bunday son mavjud emas";
//     break;
//     console.log(res);
// }

// 7-masala
// const a = +prompt('Birinchi sonni kiriting');
// const b = +prompt('Ikkinchi sonni kiriting');
// const operator = prompt('operator');

// if (a && b && operator) {
//     switch (operator) {
//         case '+': console.log(a + b);
//             break;
//         case '-': console.log(a - b);
//             break;
//         case '*': console.log(a * b);
//             break;
//         case '/': console.log(a / b);
//             break;
//         case '%': console.log(a % b);
//             break;
//         default:
//             console.log('Hech nima yo`q');
//             break;
//     }
// }