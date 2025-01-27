let n = 3; // Size of the square pattern
let p = 1; // Counter to print numbers

for (let i = 1; i <= n; i++) {
  let row = ''; // Create a row for the current line
  for (let j = 1; j <= n; j++) {
    row += p++; // Append the current number and increment `p`
  }
  console.log(row); // Print the current row
}


//123
//456
//789
will be the result
