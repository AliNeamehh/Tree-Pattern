n= int(input("enter the number of rows : "))
for i in range(0,n):
    for j in range(0,n-1-i):
        print(" " ,end="")
    print("*",end="")
    for k in range(i):
        print("|",end="")
    for l in range(i-1):
        print("|",end="")
    if i>0:
        print("*",end="")
    print()