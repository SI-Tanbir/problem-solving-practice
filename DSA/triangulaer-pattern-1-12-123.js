let n = 4; // Size of the square pattern
// let p = 64;
for (let i = 1; i <= n; i++) {
  let row = ''; // Create a row for the current line
  p++;
  for (let j = 1; j < i + 1; j++) {
    row += j;
    // Append the current number and increment `p`
  }
  console.log(row); // Print the current row
}
