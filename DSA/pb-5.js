// square pattern 
// 1234
// 1234
// 1234
// 1234

let n=4
for(let i=1;i<=n;i++){

    let row='';
    for(let j=1;j<=n;j++){
        row =row + j;
    }
    console.log(row);
}