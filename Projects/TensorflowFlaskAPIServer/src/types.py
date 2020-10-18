import os

class ModelFolder:
    def __init__(self, path, versions=[]):
        self.path = path
        self.name = self.geModelName(path)
        self.versions = versions

    def getVersion(self, version):
        if len(self.versions) < version: return ""
        return os.path.join(self.path, str(self.versions[version - 1]))

    def addVersion(self, version):
        return self.versions.append(version)

    def geModelName(self, path):
        elements = path.split('/')
        return elements[len(elements) - 1]