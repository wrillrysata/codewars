


def narcissistic(value):
 total = []
 number = len(str(value))
 power = int(number)


 digits = [int(x) for x in str(value)]

 for i in digits:
   product = i**power
   total.append(product)

   sumtotal = sum(total);
 if(sumtotal == value):
    print ( str(value) + " is a narcisstic number")
 else:
    print( str(value) + " is not a narcisstic number")









# for i in value: throws error int object not iterable meaning you can't loop through an int object so we can fix that by creating a string out of the number
#print product
#for 
 #power = len(str(value))
#power = int(power)
#print (power)
 #split_number = str(value)
 #for i in split_number:
  #total = int(i**3)
  #print i
