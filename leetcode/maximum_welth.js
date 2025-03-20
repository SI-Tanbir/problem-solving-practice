var maximumWealth = function (accounts) {
  let len = accounts.length;
  let container = {}; // Object to store sums dynamically

  // Iterate over each subarray in the accounts
  accounts.forEach((value, index) => {
    // Calculate the sum of each subarray
    let sum = value.reduce((acc, curr) => acc + curr, 0);

    // Dynamically create variable to store sum
    container[`sum_${index}`] = sum;
  });

  // Optional: You can return the container if needed
  console.log(container);

  // Example: Find the maximum sum (wealth)
  let maxWealth = Math.max(...Object.values(container));
  console.log("Maximum wealth:", maxWealth);

  return maxWealth;
};

// Example usage:
let accounts = [
  [1, 2, 3],
  [3, 2, 1],
  [4, 5, 6],
];

maximumWealth(accounts);
