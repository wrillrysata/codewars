
'''
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of
 the strings of a1 which are substrings of strings of a2. r must be without duplicates
'''
def in_array(array1, array2):
 match = []
 for i in array1:
  for j in array2:
   if i in j and not i in match: #if any string in array1 is found in array2 but not in match array
    match.append(i) #append to match
 match= sorted(match) #sort match
 print match

