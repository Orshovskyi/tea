function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
      throw new Error("Both length and width must be positive numbers");
    }
  
    return length * width;
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  try {
    const rectangleArea = calculateRectangleArea(5, 8);
    console.log("Rectangle Area:", rectangleArea);
  
    const numberToCheck = 17;
    if (isPrime(numberToCheck)) {
      console.log(`${numberToCheck} is a prime number.`);
    } else {
      console.log(`${numberToCheck} is not a prime number.`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  