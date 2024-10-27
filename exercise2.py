n=int(input("enter an old number: "))

odd=1
while odd<=n:
    for j in range((odd + 1) // 2):
        print(2*j+1,end=" ")
    print()

    odd+=2
