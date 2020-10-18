from Crypto.Cipher import AES
from Crypto.Hash import SHA256
import os


password = input("Enter the Security Key: ")
os.system('cls')
hash_obj = SHA256.new(password.encode("utf-8"))
hash_key = hash_obj.digest()
#print(hash_key)

def encrypt(msg):
    BLOCK_SIZE = 16
    PAD = "{"
    padding = lambda s: s + (BLOCK_SIZE - len(s) % BLOCK_SIZE) * PAD
    cipher = AES.new(hash_key,AES.MODE_ECB)
    result = cipher.encrypt(padding(msg).encode("utf-8"))
    return result

def decrypt(msg):
    PAD = "{"
    decipher = AES.new(hash_key,AES.MODE_ECB)
    b_decrypted = decipher.decrypt(msg).decode("utf-8")
    pad_index = b_decrypted.find(PAD)
    result = b_decrypted[:pad_index]
    return result





