import os
import json

class Setup:
    def __init__(self,absolute_path):
        self.path = absolute_path

    def list_files(self):
        files_list = []
        for file_name in os.listdir(self.path):
            result = os.path.isfile(file_name)
            if not result:
                files_list.append(file_name)
            
        with open("info.json","w+") as file:
            json.dump(files_list,file)
            file.close()

    def group(self):

        with open("info.json","r") as file:
            details = json.load(file)
            #print(details)
        
        os.remove("info.json")
        
        doc = [".docx",".pdf",".pptx",".xlsx"]
        executables = [".exe",".bat",".ova"]
        pics = [".jpg",".jpeg",".png"]
        vids = [".mp3",".mp4",".avi"]

        doc_files = []
        exe_files = []
        pic_files = []
        vid_files = []

        for file_name in details:
            for extension in doc:
                #print(extension)
                if file_name.endswith(extension):
                    #print(file_name)
                    doc_files.append(file_name)
                    break
                    

            for extension in executables:
                if file_name.endswith(extension):
                    exe_files.append(file_name)
                    break
                   

            for extension in pics:
                if file_name.endswith(extension):
                    pic_files.append(file_name)
                    break
                    

            for extension in vids:
                if file_name.endswith(extension):
                    vid_files.append(file_name)
                    break

        return pic_files,vid_files,exe_files,doc_files
