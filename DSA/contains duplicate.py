# Udemy
# The Complete Data Structures and Algorithms Course in Python
# Contains Duplicate
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example :

# Input: nums = [1,2,3,1]
# Output: true
# Hint: Use sets

output=False
def contains_duplicate(nums):
    # TODO
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i] == nums[j]:
                output=True

    return output



        

nums = [1,2,3,1]

test=contains_duplicate(nums)
print(test)