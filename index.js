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

  