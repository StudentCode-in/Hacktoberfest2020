from Encryptor import encrypt,decrypt
import pickle

def encrypt_it():
    password_list = []
    running = True
    while True:
        password_input = input("Password:")
        hashed_pass = encrypt(password_input)
        if password_input == "Exit":
            break

        else:
            password_list.append(hashed_pass)

    with open("pass.txt","wb") as file:
        pickle.dump(password_list,file)
        
def decrypt_it():
    print("\n")
    with open("pass.txt","rb") as file:
        pass_list = pickle.load(file)
        decrypted_password = []

    for h_password in pass_list:
        d_pass = decrypt(h_password)
        decrypted_password.append(d_pass)
    
    print("The passwords are:  \n")

    for password in decrypted_password:
        print(password)

decision = input("Do you want to (e)ncrypt or (d)ecrypt ?  ")
if decision == "e":
    print(" [!] To quit the program just type 'Exit' ")
    encrypt_it()

elif decision == "d":
    try:
        decrypt_it()
        print("[+] Sucessfully decrypted the passwords!")

    except UnicodeDecodeError:
        print("\n \n [-] You have Typed wrong security key!")