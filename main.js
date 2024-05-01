function sayHello(theName, theGender) {
    if(theGender === "Male")
    console.log(`Hello Mr ${theName}`);
    else if(theGender === "Female")
    console.log(`Hello Miss ${theName}`);
    else
    console.log(`Hello ${theName}`);
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"




  function calculate(firstNum, secondNum, operation="add") {
    if(secondNum === undefined) {
      console.log("Second Number Not Found");
    }
    else if(operation === "add") {
      console.log(firstNum + secondNum);
    }if(operation === "subtract") {
      console.log(firstNum - secondNum);
    }if(operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600




  function ageInTime(theAge) {
        if(theAge > 10 && theAge < 100) {
      console.log(` ${theAge * 12} Months`);
      console.log(` ${theAge * 48} A week`);
      console.log(` ${theAge * 360} Days`);
      console.log(` ${theAge * 8640} hour`);
      console.log(` ${theAge * 518400} A minute`);
      console.log(` ${theAge * 31104000} Seconds`);
}
 if(theAge < 10 || theAge > 100){
  console.log(`Age Out Of Range `);
}
}
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months


  function checkStatus(a, b, c) {
    let name, age, available;
    
    if (typeof a === 'string') {
      name = a;
    }
    if (typeof b === 'string') {
      name = b;
    }
    if (typeof c === 'string') {
      name = c;
    }
        if (typeof a === 'number') {
      age = a;
    }
    if (typeof b === 'number') {
      age = b;
    }
    if (typeof c === 'number') {
      age = c;
    }
        if (typeof a === 'boolean') {
      available = a;
    }
    if (typeof b === 'boolean') {
      available = b;
    }
    if (typeof c === 'boolean') {
      available = c;
    }
        if (available) {
      return `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`;
    } else {
      return `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`;
    }
  }
  
  // Needed Output
  console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire
