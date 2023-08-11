import numpy as np



path = './data/os_industries.csv'
columns = 6

class DataManager:
    def __init__(self, dataset):
        self.dataset = dataset

    def validate_dataset(self):
        with open(self.dataset, "r+") as dataset:
            data = dataset.readlines()
            for entry in data:
                if len(entry.split(",")) > columns:
                    split_lines = entry.split(",")
                    data_array = np.array(split_lines)

                    data_1 = split_lines[1]
                    data_2 = split_lines[2]
                    
                    deleted_array = np.delete(data_array, [1,2])
                    data_to_insert = "{} {}".format(data_1, data_2)

                    final_array = np.insert(deleted_array, 1, data_to_insert)

                    try:
                        data_os = np.genfromtxt(final_array, delimiter=',',  dtype=str)
                        print(data_os)
                    except ValueError as e:
                        print(e)
                    
            dataset.close()


DataManager(path).validate_dataset()




# 3,
# "Film, 
# T.V. & Ent.",
# film-and-entertainment.png,
# ,
# ,
#