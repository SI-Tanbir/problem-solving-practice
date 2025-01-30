function printNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    // Print leading spaces for centering
    // let spaces = ' '.repeat(n - i);
    // let row = spaces; // Start with spaces
    for (let s = i; s <= n - 1; s++) {
      row += ' ';
    }

    // Print increasing numbers
    for (let j = 1; j <= i; j++) {
      row += j; // Append increasing numbers
    }

    // Print decreasing numbers
    for (let j = i - 1; j >= 1; j--) {
      row += j; // Append decreasing numbers
    }

    console.log(row); // Print the current row
  }
}

// Call the function with the desired number of rows
printNumberPyramid(3);
