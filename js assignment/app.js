

//                                                                      Question No 01

// var arr=[,[],]
// var arr=[[],[],[]]

// console.log(arr)



//                                                                      Question No 04

// var table = [+prompt("Enter a number to show its multiplication table")];
// var tableLenght = [+prompt("Enter a length multiplication table")];

// tableLenght = 10;
// var table = +prompt("Enter a number to show its multiplication table");
// var tableLenght = +prompt("Enter a length multiplication table");

// document.write(
//   "Multipalication table of " + table + " lenght " + tableLenght + "<br/>"
// );

// for (var i = 1; i <= 10; i++) {
// for (var i = 1; i <= tableLenght; i++) {
//   var multi = i * table;

//   console.log(table + " x " + i + " = " + multi);


//                                                                      Question No 07

var user = prompt("Welcome To feefo Bakery! What do you want to your order");
var item = ["cake", "choco pie", "coockies", "chips", "patties roll"];
var check = "";
var count = [0];

for (var i = 0; i < item.length; i++) {
  count;
  if (user == item[i]) {
    console.log(user + " is availabe at index " + count++ + " in our bakery");
  }

}
console.log("check")//

// if (check === item[i]) {
//   console.log(check + " is availabe at index " + "in our bakery");
// } else {
//   console.log(check + " is not available in our bakery");
// }
// var user = prompt("Welcome To Chaman Bakery! What do you want to order");
// var item = ["cake", "apple pie", "coockie", "chips", "patties"];
// var flag = true;

// console.log(item);
// for (var i = 0; i < item.length; i++) {
//   if (user == item[i]) {
//     console.log(user + " is availabe at index " + [i] + " in our bakery");
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("We are sorry " + user + " is not availbe in our bakery");
// }

//                                                                      Question No 08

// var num = [24, 53, 78, 91, 12];
// var large = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] > large) {
//     large = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The largest num is " + large);

//                                                                      Question No 09

// var num = [24, 53, 78, 91, 12];
// var small = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] < small) {
//     small = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The smallest num is " + small);

//                                                                      Question No 10

// var num = 5;

// for (var i = 1; i <20; i++) {
//   var multi = i * num;
//   console.log(multi);
// }
 
// Swting Name & update array

// var arr = ["umer", "ahmed", "zain"];

var arr = ["umer", "usman", "zain"];
// arr[2] = [arr[0],arr[2]]

arr[2] = [arr[0],arr[2]]
// console.log(arr)

console.log(arr)
// update = text.slice(21,24);

// var text =
//   "IHC reserves verdict on Imrans plea challenging Toshakhana conviction";

// var firstChar = text.slice(21,7);
// if (firstChar !== -1) {
//   text = text.slice(21, firstChar) + "Nawaz " + text.slice(firstChar + 0);
// }

// console.log(text);

// Methods

// .push()  & unshift return the orignal value with update

// .push() add the value in last

// var arr = ["umer", "usman"];

// arr.push("ahmed");
// console.log(arr);

// // unshift() add the value in first
// var a = ["shafiq", "iftikhar"];

// a.unshift("ahmed");
// console.log(a);

// update = text.slice(21,24);

// var text =
//   "IHC reserves verdict on Imrans plea challenging Toshakhana conviction";
//var arr = ["ahmed", "adnan"];

//arr.pop();
//console.log(arr);//


// var firstChar = text.slice(21,7);
// if (firstChar !== -1) {
//   text = text.slice(21, firstChar) + "luqman " + text.slice(firstChar + 0);
// }

// console.log(text);