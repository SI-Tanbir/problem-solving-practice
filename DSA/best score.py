
# Best Score
# Given a list, write a function to get first, second best scores from the list.

# List may contain duplicates.

# Example

# myList = [84,85,86,87,85,90,85,83,23,45,84,1,2,0]
# first_second(myList) # 90 87


def first_second(my_list):
    # Initialize to negative infinity to handle all values, including negative numbers
    first_number = 0
    second_number = 0
    
    for i in range(len(my_list)):
        if my_list[i] > first_number:
            second_number = first_number
            first_number = my_list[i]
        elif my_list[i] > second_number and my_list[i] != first_number:
            second_number = my_list[i]
    
    return first_number, second_number



myList = [84,85,86,87,85,90,85,83,23,45,84,1,2,0]
print(first_second(myList))