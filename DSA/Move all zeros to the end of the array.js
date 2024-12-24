// Move all zeros to the end of the array

let arr=[0,0,1, 2, 0, 3, 4, 0]

// let nonZero=[]
// let zero=[]

// for(i=0;i<arr.length ;i++){
 
//     if(arr[i]==0){
//         zero.push(arr[i])
//     }
//     else{
//         nonZero.push(arr[i])
//     }

// }
// let result=[...nonZero,...zero]

// console.log(result)

// !alternative ways to 
 let j=0
for (i=0;i<arr.length;i++){

    if(arr[i]!==0){
        
        [arr[i] ,arr[j]]=[arr[j] , arr[i]]
        j++;

    }

}

console.log(arr)
