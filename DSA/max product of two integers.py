#Max Product of Two Integers
#Find the maximum product of two integers in an array where all elements are positive.

#Example

#arr = [1, 7, 3, 4, 9, 5] 
#max_product(arr) # Output: 63 (9*7)

# soluation:

def max_product(arr):
    max_product = 0
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):  # avoid duplicate and self-pairing
            product = arr[i] * arr[j]
            if product > max_product:
                max_product = product
            print(f"Comparing {arr[i]} * {arr[j]} = {product}, max = {max_product}")
    return max_product
