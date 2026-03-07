<!-- 1️⃣ What is the difference between var, let, and const?  -->
<!--  1 `var`, `let`, `const` -->
 `var` → function-scoped, redeclarable, updatable. পুরানো স্টাইল।
 `let` → block-scoped, updatable, not redeclarable in same scope।
 `const` → block-scoped, cannot update or redeclare। constants এর জন্য ভালো।

<!-- 2️⃣ What is the spread operator (...)? -->
<!-- 2 Spread Operator `(...)` -->
 Arrays বা objects copy বা expand করতে ব্যবহার হয়।
```js
let arr = [1,2];
let newArr = [...arr,3]; 

let obj = {a:1};
let newObj = {...obj, b:2}; 

// 3️⃣ What is the difference between map(), filter(), and forEach()?
// 3 map(), filter(), forEach()

map() → array transform করে, নতুন array return করে।

filter() → condition pass করা elements return করে।

forEach() → array loop করে, কিছু return করে না।


// 4️⃣ What is an arrow function?
// 4 Arrow Function

const add = (a,b) => a+b;
// this is sort function 



// 5️⃣ What are template literals? 
// 5 Template Literals

Backticks `` ব্যবহার করে string, ${} দিয়ে variable embed করা যায়।

let name = "Arman";
console.log(`Hello, ${name}!`); //output : Hello, Arman!






