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

    @property
    def orders(self):
        from classes.order import Order
        return [order for order in Order.all if order.customer == self]

    @property
    def coffees(self):
        all_customers_coffees = [order.coffee for order in self.orders]
        set_coffees = set(all_customers_coffees)
        return list(set_coffees)

    def create_order(self, coffee, price):
        from classes.order import Order
        Order(self, coffee, price)
