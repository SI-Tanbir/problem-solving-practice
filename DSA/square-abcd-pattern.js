let n = 4; // Number of rows and columns

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += String.fromCharCode(65 + j); // Convert ASCII value to character
    }
    console.log(row);
}
