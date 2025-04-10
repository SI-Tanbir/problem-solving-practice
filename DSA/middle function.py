
# Middle Function
# Write a function called middle that takes a list and returns a new list that contains all but the first and last elements.

# myList = [1, 2, 3, 4]
# middle(myList)  # [2,3]

def middle(lst):
    # TODO
    first=lst[0]
    last=lst[len(lst)-1]
    new_list=[]
    
    for i in range(len(lst)):
        if lst[i]==first or lst[i]== last:
            continue
            
        new_list.append(lst[i])

    return new_list


mylist=[1,2,3,4]
middle(mylist)