# guess number game
import random
minN=1
maxN=100
ans = random.randint(minN, maxN+1)
guessTimes = 0
running = True
while(running):    
    try:
        number = int(input(f'guess a number between {minN} to {maxN}: '))
        if(number< minN or number>maxN):
            print(f'plaese guess a number between {minN} to {maxN}')
            number = int(input('try again:'))
        elif(number < ans):
            guessTimes+=1
            print('guess number is too low!')      
        elif(number >ans):
            guessTimes+=1
            print('guess number is too high!')
        else:
            print(f'correct! The answer is {ans}. You took {guessTimes+1} Attempts.')
            # print('correct!','the answer is', ans, 'you took', guessTimes+1,'attempts.')
            running = False
    except Exception:
        print('enter type is invalid')
        number = int(input('enter a number again:'))
    
    