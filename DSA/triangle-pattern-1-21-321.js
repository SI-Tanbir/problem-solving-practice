let n = 4; // Number of rows for the triangle

for (let i = 1; i <= n; i++) {
  let row = ''; // Create a row for the current line
  for (let j = i; j >= 1; j--) {
    row += j; // Append numbers in descending order
  }
  console.log(row); // Print the current row
}
