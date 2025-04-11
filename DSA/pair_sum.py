# Pairs
# Write a function to find all pairs of an integer array whose sum is equal to a given number. Do not consider commutative pairs.

# Example

# pair_sum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9],7)
# Output : ['2+5', '4+3', '3+4', '-2+9']

output=[]
def pair_sum(myList,sum):

    for i in range(len(myList)):
        for j in range(i+1,len(myList)):
            if myList[i] + myList[j] ==sum:
                output.append(" {} + {} ".format(myList[i],myList[j]))
        
    return output
    

result=pair_sum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9],7)
print(result)

