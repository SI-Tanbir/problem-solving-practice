let num = [1, 3, 5, 7, 8, 9];  
let sum = 0;  

for (let i = 0; i < num.length; i++) {
    
    if (num[i] % 3 === 0) {

        sum += num[i];  

    }
}

console.log("Sum of numbers divisible by 3:", sum);
