let n = 4; // Number of rows for the triangle
p=1
for (let i = 1; i <= n; i++) {
  let row = ''; // Create a row for the current line
  for (let j = 0; j <i; j++) {
    row += p++; // Append numbers in descending order
  }
  console.log(row); // Print the current row
}
