class Customer:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self._name

    def set_name(self, new_name):
        if isinstance(new_name, str) and 1 <= len(new_name) <= 15:
            self._name = new_name
        else:
            raise Exception(
                "Name must be a string between 1 and 15 characters")

    name = property(get_name, set_name)

    def orders(self):
        from classes.order import Order
        pass

    def coffees(self):
        from classes.coffee import Coffee
        pass

    def create_order(self, coffee, price):
        from classes.order import Order
        Order(self, coffee, price)
