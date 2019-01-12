def repeats(arr):
 arr.sort() #sorting is optional
 single = [] #create a list to store single numbers
 for i in arr: #loop thru the array
    if arr.count(i) == 1: #if a number occurs more than once in the array
        single.append(i) #attach it to the singles list
 print sum(single) #sum up all the values in the singles list and print
  #print sum(arr)

repeats([3,4,5,4,7,7,8])

--------------------------------------------------

def repeats(arr):
  single = []
  for i in arr:
    if arr.count(i) == 1:
        single.append(i)
  total = sum (single)
  return total
