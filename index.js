// Declare companyName as a const
const companyName = 'elevated steel solutions';

// Declare mostProfitableNeighborhood as a const
const mostProfitableNeighborhood = 'Chelsea';

// Function: Saturday Fun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function: Monday Work
function mondayWork(task = "go to the office") {
  return `This Monday, I will ${task}.`;
}

// Function: Wrap Adjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Function: Scuber Greeting for Feet
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

// Function: Ternary Check City
function ternaryCheckCity(city) {
  return city === "NYC" ? "Welcome to the Big Apple!" : "Sorry, we only serve NYC.";
}

// Function: Switch on Charm from Tip
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

// Higher-order function: createFareMultiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Fare multiplier functions
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Array of drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Functions to return the first and last two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Function: Select Different Drivers
function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}

// Example test cases
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("hike")); // "This Saturday, I want to hike!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); // "You are !!!special!!!!"
console.log(encouragingPromptFunction("amazing")); // "You are !!!amazing!!!!"

// Test fareDoubler and fareTripler
const fare = 10;
console.log(fareDoubler(fare)); // Doubles the fare, outputs 20
console.log(fareTripler(fare)); // Triples the fare, outputs 30

// Test for selectDifferentDrivers
const drivers = ["Alice", "Bob", "Charlie", "David"];
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ["Alice", "Bob"]
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ["Charlie", "David"]

// Export functions for testing
module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective,
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers,
  mostProfitableNeighborhood,
  companyName
};
