import os
from os import listdir
from os import path

authors = os.listdir()

result = {}

for author in authors:
    if os.path.isdir(author):
        audios = os.listdir(author)
        audios_array = []
        for audio in audios:
            audios_array.append(audio)
        result[author] = audios_array

print(result)