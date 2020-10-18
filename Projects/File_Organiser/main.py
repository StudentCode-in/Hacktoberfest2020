import os,sys
import json
import shutil
import time
from organiser import Setup
from tqdm import tqdm
from colorama import Style,Fore,Back

def create_dir(name):
    try:
        os.mkdir(name) 

    except FileExistsError:
        pass  

def create_file(name):
    try:
        with open(name,"w+") as f_creator:
            pass
    except FileExistsError:
        pass

def configure():
    print("Lets configure ...")
    pic = input("Pictures :  ")
    execu = input("Executables : ")
    docu = input("Documents : ")
    vids = input("Videos : ")

    with open("details.json","w+") as file:
        details_dict = {"Documents":docu,
                        "Pictures":pic,
                        "Executables":execu,
                        "Videos":vids,
                        }
        json.dump(details_dict,file)


path = input("Enter the Target Path : ")
      
file_organiser = Setup(path)
file_organiser.list_files()

pictures,videos,exes,documents = file_organiser.group()

if os.path.isfile("details.json"):
    pass

else:
    configure()
   
with open("details.json","r") as file:
    print(Fore.GREEN)
    file_details = json.load(file)

    create_dir(file_details["Executables"])
    create_dir(file_details["Videos"])
    create_dir(file_details["Pictures"])
    create_dir(file_details["Documents"])

    pics_path = file_details["Pictures"]
    vids_path = file_details["Videos"]
    executables = file_details["Executables"]
    documents_path = file_details["Documents"]

for pics in tqdm(pictures,total=len(pictures)):
    os.chdir(path)
    abs_path = os.path.abspath(pics)
    shutil.copyfile(abs_path,os.path.join(pics_path,pics))
    os.unlink(abs_path)
print("[+] Done processing Pictures.... \n ")

for video in tqdm(videos,total=len(videos)):
    os.chdir(path)
    abs_path = os.path.abspath(video)
    shutil.copyfile(abs_path,os.path.join(vids_path,video))
    os.unlink(abs_path)
print("[+] Done processing pictures .... \n")

for exe in tqdm(exes,total=len(exes)):
    os.chdir(path)
    abs_path = os.path.abspath(exe)
    shutil.copyfile(abs_path,os.path.join(executables,exe))
    os.unlink(abs_path)
print("[+] Done Processing Executables.... \n")

for document in tqdm(documents,total=len(documents)):
    os.chdir(path)
    abs_path = os.path.abspath(document)
    shutil.copy(abs_path,os.path.join(documents_path,document))
    os.unlink(abs_path)
print("[+] Done Processing Documents .... \n")

print("[+] All tasks completed Sucessfully!")
print(Style.RESET_ALL)
