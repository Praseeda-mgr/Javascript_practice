// const someObject = { str: "Hello world", id:5};
// console.log(someObject);

// const Obj = {};
// console.log(Obj);
// Obj.prop = 1,2,3;
// console.log(JSON.parse(JSON.stringify(Obj)));

// const Car = {str:"BMW"};
// const someObj = {str: "Salary"};
// console.info("My first car is", Car,". I bought it with my first",someObj,);

// console.time("answer time");
// alert("Click to Continue");
// console.timelog("answer time");
// alert("Do a bunch of other stuffs...");
// console.timeEnd("answer time");

console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
