// let arr = [3, -1, 2, -7, 5, -6, 4];

// let neg = [];  // Array to store negative numbers
// let pos = [];  // Array to store positive numbers

// // Separate negative and positive numbers
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         neg.push(arr[i]);
//     } else {
//         pos.push(arr[i]);
//     }
// }

// // Combine negative and positive arrays
// let newarr = [...neg, ...pos];

// console.log(newarr); // Output: [-1, -7, -6, 3, 2, 5, 4]


// !alternative ways to do that

let arr = [3, -1, 2, -7, 5, -6, 4];

let j=0
for(i=0;i<arr.length;i++){

    if(arr[i]<0){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        j++;
    }
}
console.log(arr)