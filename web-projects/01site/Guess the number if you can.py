# Guess the number if you can
import random as rd
t = 0
def game(a):
    global t
    if a > random:
        t +=1
        print("Are you sure? gibay!")
        game(int(input("number")))
        
    
    elif a < random:
        t +=1
        print("Are you sure? llamsay!")
        game(int(input("number")))
       
    
    else:
        print("你好厲害")
        if (t <= 10):
            print("You take only ", t, " times to do this, you are the master of this game!")
        elif (10 < t <= 17 ):
            print("You take ", t, " times to do this, you are the senior of this game!")
        else:
            print("You take ", t, " times to do this, you looser!") 

random = rd.randint(1,300)
rd_random = chr(random)
print("The value is between 1 and 300, try your best to guess it!\n",rd_random)

b = int(input("Input a number"))
game(b)
        