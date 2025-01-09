function foo(a, b) {
  // Check if both arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Arguments must be numbers.');
    return NaN; // Or throw an error: throw new Error('Arguments must be numbers');
  }
  return a + b;
}

function bar() {
  let x = 10;
  let y = "20"; // Example of non-numeric input
  let z = foo(x, parseInt(y, 10)); // Explicitly convert to a number
  console.log(z); // Output: 30
}

bar();

// Test case with non-numeric input 
let z2 = foo(10, "abc");
console.log(z2); // Output: NaN or error message
