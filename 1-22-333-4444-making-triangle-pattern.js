let n = 4; // Size of the square pattern
// let p = '*';
for (let i = 1; i <= n; i++) {
  let row = ''; // Create a row for the current line
  for (let j = 0; j < i; j++) {
    row += i; // Append the current number and increment `p`
  }
  console.log(row); // Print the current row
}


/// ans is 1
// 22
// 333
// 4444
