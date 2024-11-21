// check if a number is prime or not 

let n=7;
let isPrime=true;

for (let i=2;i<= Math.sqrt(n);i++){

    if(n % i===0){
        isPrime = false;
        break;
    }

}

if(isPrime && n>1){
    console.log("it's a prime number")
}

else{
    console.log('its not a prime number')
}