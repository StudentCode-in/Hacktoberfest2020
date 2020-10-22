import time
import random
item = []


def roomkey_1():
    print_pause("You took the stairs for the sixth room.")
    print_pause("After a few moments, you find "
                "yourself in the staff survey room.")
    print_pause("you reached the sixth room ")
    if "key_1" in item:
        print_pause("congrats you already have the first key!")
        print_pause("best wishes, go for the second key!")
        print_pause("you reached the staircases, "
                    "now time to make a choice!")
        room_choose()
    else:
        print_pause("congrats you found the first key!")
        item.append("key_1")
        print_pause("now seek for the second key!")
        print_pause("be aware! the zombies are very dangerous,"
                    " one wrong choice! you are dead!")
        print_pause("you reached the staircases, "
                    "now time to make a choice!")
        room_choose()


def roomkey_2():
    print_pause("You choose the stairs for the fifth room")
    print_pause("After a few moments, you find yourself "
                "in the peon room.")
    print_pause("finally! you reached the peon room")
    if "key_2" in item:
        print_pause("you have nothing to doo here, "
                    "you already have the second key!")
        print_pause("go ahead for your last choose!")
        print_pause("one right choose will save the earth from corona virus!")
        print_pause("and one wrong choose will "
                    "lead to the death of all hopes!")
        room_choose()
    else:
        if "key_1" in item:
            print_pause("you can easily see the second key, grab it!")
            item.append("key_21")
            print_pause("congrats for your second success!")
            print_pause("go ahead for your last choose!")
            print_pause("one right choose will"
                        " save the earth from corona virus!")
            print_pause("and one wrong choose will "
                        "lead to the death of all hopes!")
            room_choose()
        else:
            print_pause("nice luck!")
            print_pause("you are not killed, it means,"
                        "you dont't have the first key")
            print_pause("go and search for the first key")
            print_pause("you reached the stairs, now make your choice,"
                        "that leads you to the first key")
            room_choose()


def room_boss():
    print_pause("You push the button for the third room.")
    print_pause("After a few moments, you find yourself "
                "in the engineering department.")
    print_pause(" you reached the third room")
    if "key_1" in item:
        print_pause("you can enter the office with the help of key_1")
        print_pause("the manager greets you and asks your key_2")
        if "key_2" in item:
            print_pause("you can have your meeting with your boss")
            print_pause("congrats you compleated the game")
        else:
            print_pause("go and collect your key_2")
            room_choose()
    else:
        print_pause("go and collect your key_1")
        print_pause("you reached the lift, which room you want to go?")
        room_choose()


def info():
    print_pause("This is the life saving mission!")
    print_pause("if you succeed in this mission, "
                "you can irradicate corona virus from this world")
    print_pause("rules for the game:")
    print_pause("1. there are total 6 rooms in this business building")
    print_pause("2.  only 2 of which contains the key for the 3rd room"
                " containing vaccine")
    print_pause("3. if you catch a wrong staircase, it will"
                " lead to your death,as zombies are waiting for you inside")
    print_pause("4. the numbers on the staircases are jumbled,so be careful")
    print_pause("and if you managed to get to the vaccine chamber,"
                " you will eventually win")
    print_pause("5. the vaccine is mounted on a movable robot"
                "which is on move, in every new game its position changes!")
    print_pause("6. you can only see the second key"
                " if you have the first one with you!\n")
    print_pause('''1. stairs to Lobby
2. stairs to Human resources
3. stairs to Engineering department
4. stairs to mechanical department
5. stairs to peon room
6. staff survey room\n''')
    print_pause("now make a choice! and save the world")
    room_choose()


def print_pause(data):
    print(data)
    time.sleep(2)


def input_check(prompt, option1, option2, option3, option4, option5, option6):
    while True:
        res = input(prompt)
        if res == option1:
            break
        elif res == option2:
            break
        elif res == option3:
            break
        elif res == option4:
            break
        elif res == option5:
            break
        elif res == option6:
            break
        else:
            print_pause("sorry,i didn't understand"
                        "please give a proper room number")
    return res


def input_check1(prompt):
    while True:
        response = input(prompt)
        if response == "yes":
            break
        elif response == "no":
            break
        else:
            print_pause("sorry, i didn't understand")
    return response


def room_choose():
    room = input_check("which room you want to go",
                       "1", "2", "3", "4", "5", "6")
    if room == "6":
        roomkey_1()
    elif room == "5":
        roomkey_2()
    elif room == random.randint(1, 5):
        room_boss()
    else:
        print_pause("you were killed! The " + choose() + " zombie killed you!")
        print_pause("better luck next time!")
        reply = input_check1("do you want to try again,reply in yes or no\n")
        if reply == "yes":
            print_pause("so here we are:")
            global item     # emptying the list for the new game
            item.clear()
            print_pause("now make your choice for the stairs again!")
            room_choose()
        elif reply == "no":
            print_pause("Thank you for playing  the game with us")
            print_pause("we welcome you anytime you want to play!")


def choose():
    z_list = ["zombo", "curley", "frgo", "drako"]
    return random.choice(z_list)


def start_game():
    info()


start_game()
