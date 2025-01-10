// Part 1: Math Problems
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`The four numbers meet the criteria: ${isSum50}`)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`The four numbers meet the criteria: ${isTwoOdd}`)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
let isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`The four numbers meet the criteria: ${isUnique}`)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(`The four numbers meet the criteria: ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
console.log(`The four numbers meet the criteria: ${dontDoThis}`)

// Checks if numbers are divisible by 5
const isDivisibleBy5 = (n1 / 5 == 0) && (n2 / 5 == 0) && (n3 / 5 == 0) && ((n4 / 5 == 0))
console.log(`The four numbers meet the criteria: ${isDivisibleBy5}`)

// Checks if the first number is larger than the last number
const firstLargerThanLast = n1 > n4
console.log(`The four numbers meet the criteria: ${firstLargerThanLast}`)

// Evaluates the arithmetic chain
const arithmeticChain = ((n2 - n1) * 3) % n4
console.log(`The four numbers meet the criteria: ${arithmeticChain}`)

// Changes isOver25 to not use the 'negate' operator in future iterations (changed previous iteration to 'let' instead of 'const')
let isUnder25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
isOver25 = !isUnder25

// Part 2:
const distance = 1500
const budget = 175
const avgFuelCost = 3
let mph;
let mpg;

  // 55 mph
  {
    mph = 55
    mpg = 30
    const gallonsNeeded = distance / mpg
    const enoughBudget = (gallonsNeeded * 3) < budget
    const tripTime = distance / mph
    console.log
    (`During this trip I am travelling ${mph} mph with a mileage of ${mpg} mpg.
    I will need ${gallonsNeeded} gallons for this trip. 
    It is ${enoughBudget} that I have enough of a budget for this trip.
    This trip will take ${tripTime} hours to complete.`)
  }
  // 60 mph
  {
    mph = 60
    mpg = 28
    const gallonsNeeded = distance / mpg
    const enoughBudget = (gallonsNeeded * 3) < budget
    const tripTime = distance / mph
    console.log
    (`During this trip I am travelling ${mph} mph with a mileage of ${mpg} mpg.
    I will need ${gallonsNeeded} gallons for this trip. 
    It is ${enoughBudget} that I have enough of a budget for this trip.
    This trip will take ${tripTime} hours to complete.`)
  }
  // 75 mph
  {
    mph = 75
    mpg = 23
    const gallonsNeeded = distance / mpg
    const enoughBudget = (gallonsNeeded * 3) < budget
    const tripTime = distance / mph
    console.log
    (`During this trip I am travelling ${mph} mph with a mileage of ${mpg} mpg.
    I will need ${gallonsNeeded} gallons for this trip. 
    It is ${enoughBudget} that I have enough of a budget for this trip.
    This trip will take ${tripTime} hours to complete.`)
  }
// Part 3:

// Part 4: