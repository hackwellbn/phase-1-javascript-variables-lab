// Code your solution in this file!
let companyName = 'elevated steel solutions'

const greetingsUpdates = `${companyName.slice(0, 3)} can be sliced as well`



function addData(sampleData){
    if(sampleData < 10){
        result =  sampleData + 1
    }
    return result

}

addData(20)


function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return "This will be a great ride!";
    } else if (distance > 400 && distance <= 2000) {
      return "That will be a big ride!";
    } else if (distance > 2000 && distance <= 2500) {
      return "I hope you have a wonderful trip!";
    } else {
      return "Sorry, we don't provide rides for this distance.";
    }
  }


  function ternaryCheckCity(city) {
    return city === "NYC" ? "Welcome to the Big Apple!" : "Sorry, we only serve NYC.";
  }

  
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case "generous":
        return "Thank you for your generosity!";
      case "not generous":
        return "Thank you for riding with us.";
      default:
        return "Have a nice day!";
    }
  }
  

  let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

let random = Math.floor(Math.random() * 100) + 1;

let num3 = 20;
let num4 = 6;
let mod = num3 % num4;

let numbers = [10, 15, 20, 5, 30];
let max = Math.max(...numbers);

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  // Test saturdayFun
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("hike")); // "This Saturday, I want to hike!"

// Test mondayWork
console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

// Test wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); // "You are !!!special!!!!"
console.log(encouragingPromptFunction("amazing")); // "You are !!!amazing!!!!"


// Function 1: saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function 2: mondayWork
  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  // Function 3: wrapAdjective
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Export the functions to be used in tests
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  