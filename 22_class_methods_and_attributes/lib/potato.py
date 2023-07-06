class Potato:
    all = []
    count = 0

    def __init__(self, variety=""):
        self.variety = variety
        Potato.add_new_potato(self)
        # Potato.all.append(self)
        # Potato.count += 1

    @classmethod
    # higher order functions - takes in a function and/or returns a function
    def add_new_potato(cls, new_potato):
        cls.all.append(new_potato)
        cls.count += 1

    def get_variety(self):
        return self._variety

    def set_variety(self, new_variety):
        print('validating...')
        if type(new_variety) == str and len(new_variety) > 2:
            self._variety = new_variety
        else:
            self._variety = "Regular"
            print('not valid variety')

    variety = property(get_variety, set_variety)
