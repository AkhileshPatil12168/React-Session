// `${}`

// Template Literals

// let a = 10;
// let b = 20;

// let str2 = "abcdefghi"
// console.log(`sum is : ${a > b ? "is great" : "is less"}`);

//date   2026-01-14T13:52:18.238Z   2026-01-14 14-01-2026
// let today = new Date();
// console.log(today)
// let timeStamp = Date.now();
// console.log(timeStamp/1000/60/60/24/365)

//akhilesh@gmail.com
//regexp
// let regexpForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test("akhileshgmail.com")
// console.log(regexpForEmail)

//promises

// Create a Promise Object

// let info = fetch("https://test.api.vspireinnovations.com/courses?limited=true")
//   .then((response) => {
//     // console.log(response?.data)
//     // response.ok checks status code 200–299
//     if (!response.ok) {
//       throw new Error("Request failed with status " + response.status);
//     }
//     return response.json(); // convert to JSON
//   })
//   .then((data) => {
//     // console.log("✅ Data received:", data?.data);
//   })
//   .catch((error) => {
//     // console.log("❌ Error:", error.message);
//   });

//   console.log(info)

// async function getPost() {
//   try {
//     const response = await fetch(
//       "https://test.api.vspireinnovations.com/courses?limited=true"
//     );
// console.log(response)
//     if (!response.ok) {
//       throw new Error("Request failed with status " + response.status);
//     }

//     const data = await response.json();
//     console.log("✅ get data:", data);
//   } catch (error) {
//     console.log("❌ Error:", error.message);
//   }
// }

// getPost();

//import export

export let a = 10;
export function abc (a){
    console.log("hello")
}

//closer
//try catch
//math
//
