import os
import pickle
from Encryptor import decrypt , encrypt
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

if os.path.isfile("creds.pickle"):
    with open("creds.pickle","rb") as file:
        creds = pickle.load(file)
        username = creds[0]
        password = creds[1]
        password = decrypt(password)
        username = str(username)

else:
    username = input("Email Id : ")
    password = input("Password : ")
    os.system('cls')
    #sys.system('clear')
    with open("creds.pickle","wb") as fileobj:
        password_hash = encrypt(password)
        username_hash = encrypt(username)
        credentials = [username_hash,password_hash]
        pickle.dump(credentials,fileobj)

def send_email(content):
    global username
    global password
    msg = MIMEMultipart()
    msg['From'] = username
    msg['To'] = username
    msg['Subject'] = "Intimation On the Amazon product!"
    msg.attach(MIMEText(content,'plain'))
    text = msg.as_string()
    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.ehlo()
    server.login(username,password)
    server.ehlo()
    server.sendmail(username,username,text)
    server.quit()

