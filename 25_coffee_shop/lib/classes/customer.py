class Customer:
    def __init__(self, name):
        self.name = name

    def orders(self):
        from classes.order import Order
        pass

    def coffees(self):
        from classes.coffee import Coffee
        pass

    def create_order(self, coffee, price):
        from classes.order import Order
        pass
