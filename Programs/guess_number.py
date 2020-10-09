"""
A small game using python.
In this game, user input a number and then computer generate a random number.
If numbers are equal then you win else loss.
"""
import random


class GuessNumber:
    """GuessNumber"""

    def user_input(self):
        """Method to take input from user."""
        self.num = int(input("Guess a number: "))
        return self.num

    def computer_output(self):
        """Method to generate random number and checks for the equality."""
        self.random_number = random.randint(1, 100)
        if self.num == self.random_number:
            print("Hurray! You won and number is {}".format(self.num))
        else:
            print("Please try again")


# Driver code
while True:
    guess = GuessNumber()
    guess.user_input()
    guess.computer_output()
