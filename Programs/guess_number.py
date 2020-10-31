"""
A small game using python.
In this game, user input a number and then computer generate a random number.
If numbers are equal then you win else loss.
"""
import random
import sys


class GuessNumber:
    """GuessNumber"""

    """Method to allow user to exit game"""
    @staticmethod
    def exit_game():
        sys.exit()

    def user_input(self):
        """Method to take input from user."""
        self.num = input("Guess a number: ")
        if self.num == int:
            return self.num
        else:
            if self.num == str:
                return self.num 

    def computer_output(self):
        """Method to generate random number and checks for the equality."""
        self.random_number = random.randint(1, 100)
        if self.num == self.random_number:
            print("Hurray! You won and number is {}".format(self.num))
        elif self.num == "exit" or "e":
            guess.exit_game()
        else:
            print("Please try again")


# Driver code
# while True:
if __name__ == "__main__":
    guess = GuessNumber()
    guess.user_input()
    guess.computer_output()
    guess.exit_game()

