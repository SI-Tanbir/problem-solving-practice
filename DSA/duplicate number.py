
# Duplicate Number
# Write a function to remove the duplicate numbers on given integer array/list.

# Example

# remove_duplicates([1, 1, 2, 2, 3, 4, 5])
# Output : [1, 2, 3, 4, 5]
new_array=[]
def remove_duplicates(arr):
    new_array = []
    for i in arr:
        if i not in new_array:
            new_array.append(i)
    return new_array


result=remove_duplicates([1, 1, 2, 2, 3, 4, 5])

print(result)