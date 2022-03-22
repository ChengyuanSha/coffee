import os
import glob
import pandas as pd

DOWNLOAD_PATH = "/home/jack/Downloads/"
SAVE_PATH = "/home/jack/Coffee_Web/coffee_project/"

os.chdir(DOWNLOAD_PATH)

extension = 'csv'
all_filenames = [i for i in glob.glob('*.{}'.format(extension))]

#combine all files in the list
combined_csv = pd.concat([pd.read_csv(f) for f in all_filenames ])
#export to csv
combined_csv.to_csv( SAVE_PATH +"combined_csv.csv", index=False, encoding='utf-8-sig')

