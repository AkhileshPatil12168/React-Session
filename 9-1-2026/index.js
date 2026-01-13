//post increment or decrement
// let a = 10;

// console.log(a++)
// console.log(a)

//pre increment or decrement

// let a = 10;

// console.log(--a)
// console.log(a)

//loops

// for (let a = 0; a <= 10; a += 2) {
//   console.log(a);
// }

// while loop

// a = 0;
// while (true) {
//   console.log(a);
//   a++
// }

// do while

// a = 0;
// do {
//   console.log(a);
//   a++
// } while (a <= 10);

//  continue and break

// for (let a = 0; a <= 10; a++) {
//   console.log(a);
//   if (a == 5) break;
//   console.log("hello");
// }

//Array
//          1    2     3   4
//          0     1    2   3

// index = position -1

// console.log(arr.length)

// for (let a = 0; a < arr.length; a++) {
//   if (arr[a] == "b") {
//     console.log(a)
//     break
//   }
// }

// arr.forEach((item, index) => {
//   console.log(arr);
// });

//map
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.map((item, index) => {
//   if (item == "b") return null;
//   return (item += item);
// });

// console.log(newArr);

//filter

// let filtredArr = arr.filter((item) => item % 2 == 0);

// console.log(filtredArr);

//reduce
// let arr = [1, 2, 3, 4];

// let result = arr.reduce((total, value) => total + value, 10);
// console.log(result);

// push and pop

// let arr = [1,2,3,10]
// // let result = arr.push("a")
// let result = arr.pop()
// console.log(arr)
// console.log(result)

// spread and rest operator  "..."

// let arr = ["a", 10, ["b"], "hello"]
// let arr2 = [1,2,3]

// let arr2 = arr
// let arr3 = [...arr, ...arr2]
// // arr2.push(10)
// console.log(arr==arr2)

// console.log(arr3)
// console.log(arr2)

// let arr = ["a", 10, ["b"], "hello"];

// let [a, b, ...c] = arr;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(arr)

//Array destructuring
// let arr = ["a", 10, ["b"], "hello"];

// let [a, , , d] = arr;

// console.log(a,d);

//array methods
//1.concat
// let arr = [ 10, ["b"], "hello", "hello"];
// let arr2 = [1, 2, 3];
// let mixed = arr2.concat(arr);
// // console.log(mixed);

// const ele = arr.findIndex((v) => typeof v == "string");
// console.log(ele)

//shift
// arr.unshift("a")
// console.log(arr)

// let newArr = arr.splice(1, 2,"abcd")
// console.log(newArr)
// console.log(arr)

//slice
// let arr = ["a", "b", "c", "d", "asdf","e"];
// let arr2 = [1, 2, 3, 4];

// let result = arr.slice(2, -2);
// // let result2 = arr2.slice(-2);/

// console.log(result);
// // console.log(result2);
// console.log(arr);

//sort
// let arr2 = [1, 2, 3, 4, 11, 20, 33];

// console.log(arr2[arr2.length - 1]);

// console.log(arr2.sort((a, b) => b - a));

// let arr2 = [1, 2, 3, 4, 11, 20, 33];

// for (let ele of arr2){
//     console.log(ele)
// }

