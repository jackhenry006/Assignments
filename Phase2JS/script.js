console.log("Hii Ankit");

// ************************************************Beginner Level********************************************

// function greet(){
//     console.log("Hello World");
// }
// greet()

// function add(a,b){
//     return a+b
// }
// console.log(add(12,34))

// function square(a){
//     return a*a;
// }
// console.log(square(2));

// function check(a) {
//   if (a % 2 == 0) {
//     return "Even";
//   } else {
//     return "odd";
//   }
// }
// console.log(check(3))

// function temp(c) {
//   let F = c * (9 / 5) + 32;
//   console.log(`${F} F`);
// }
// console.log(temp(25));

// function Guest(name="Sir"){
//     console.log(`Good Night ${name}`);
// }
// Guest()

// function greatest(a,b){
//     var ans = a>b ? a:b;
//     return ans;
// }
// console.log(greatest(6,7));

// function area(l,b){
//     return l*b;
// }
// console.log(area(6,7))

// function vote(age) {
//   var vot = age > 18 ? "Adult" : "Minor";

//   return vot;
// }
// console.log(vote(62));

// function rev(str){
// let reversed = str.split("").reverse().join("");
// console.log(reversed);
// }
// rev("Ankit")

//*******************************Intermediate Level**********************************************

// var mul= (a,b) =>{
//     return a*b;
// }
// console.log(mul(2,4));

// var ans= (a)=>{
//     return a;
// }
// console.log(ans("Ankit"))

// function un(...arr){
//  console.log(arr);
// }
// un(2,3,4,5,6,7,8)

// function count(str){
//     let len=str.length
//     let vowels="aieouAEIOU"
//     let count=0
//     for(let i=1;i<=len;i++){
//         if(vowels.includes(str.charAt(i))){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count("Ankit"))

// function plaindrome(str){
//     let copy = str.touppercase;
//     let rev = str.split("").reverse().join("").touppercase;

//     var ans= copy==rev? "Yes it is a Palindrome":"Not a plaindrome";
//     return ans;
// }
// console.log(plaindrome("Madam"))

// function hii(cb){
//     console.log("Hii Sir")
//     cb()
// }

// function hlo(){
//     console.log("Hello Sir & Madam")
// }

// hii(hlo)

// function call(cb){
//     console.log("The main function")
//     function call2(cb){
//         console.log(cb);
//     }
//     call2(cb)
//     call2(cb)

// }
// call(67)

// function back(cb){
//     return cb;
// }

// function ank(){
//     console.log("Hii pila.....");
// }
// console.log(back(ank))

// function pure(a,b){
//     return a-b;
// }
// console.log(pure(10,2));

// var a=3;
// function impure(){
//     a++;
//     return a
// }

// console.log(impure())
// console.log(impure())

// *************************JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 2**********************

// var arr = ["superman", "Demonslayer", "GOT", "pro", "hello"];
// for (let a of arr) {
//   console.log(a);
// }

// var arr =["hey",123,true,[1,3,4,5,67,7]]
// console.log(arr[3][2])

// var arr = [1,3,45,6,7,8,98,76,12,34,56,76,90,67,237]
// console.log(arr[0])
// console.log(arr[arr.length-1])

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// var temp = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = temp;
// console.log("The swapped result ", arr);

// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[0][1], arr[1][1], arr[2][1]);

// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[0][0] + arr[1][1] + arr[2][2]);

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237]
// console.log(arr.length)

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// var ans = (a) => {
//   if (a.length % 2 == 0) {
//     return "Even";
//   } else {
//     return "odd";
//   }
// };
// console.log(ans(arr));

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237]
// arr.push(2393)
// arr.push(6767)
// arr.push(9090)
// console.log(arr)

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// var arrPush = [98, 69, 78, 43, 23, 12, 21, 34, 35, 80];
// for (let a = 0; a < arrPush.length; a++) {
//   var i = arrPush[a];
//   arr.push(i);
// }
// console.log(arr)

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// console.log(arr.pop())

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// var count = arr.length;
// while (count > 0) {
//   console.log(arr.pop());
//   count--;
// }
// if (arr.length == 0) {
//   console.log("The arry is empty ", arr);
// }

// var arr = ["superman", "Demonslayer", "GOT", "pro", "hello"];
// arr.unshift("Ankit")
// console.log(arr)

// var arr = ["superman", "Demonslayer", "GOT", "pro", "hello"];
// var enter = prompt("Enter the you want to enter in the array");
// arr.unshift(enter);
// console.log(arr);

// var arr = [1, 3, 45, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// var count = arr.length;
// while (count > 0) {
//   console.log(arr.shift());
//   count--;
//   if (count == 2) {
//     break;
//   }
// }
// console.log(arr);

// var arr = [1, 3, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// arr.splice(6, 2);
// console.log(arr);

// var arr = [1, 3, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// arr.splice(6, 3, 40, 50, 67, 89, 87);
// console.log(arr);

// var arr = [1, 3, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// console.log(arr.reverse());

// var arr = [1, 3, 6, 7, 8, 98, 76, 12, 34, 56, 76, 90, 67, 237];
// console.log(arr);
// var half = arr.length / 2;
// for (let i = 0; i < half / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[half - 1 - i];
//   arr[half - 1 - i] = temp;
// }
// console.log(arr);
