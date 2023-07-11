
class Order:
    all = []

    def __init__(self, customer, coffee, price):
        self.customer = customer
        self.coffee = coffee
        self.price = price
        Order.add_new_order(self)
        # Order.all.append(self)

    @classmethod
    def add_new_order(cls, new_order):
        if isinstance(new_order, cls):
            cls.all.append(new_order)

    def get_price(self):
        return self._price

    def set_price(self, new_price):
        if isinstance(new_price, int) and 1 <= new_price <= 10:
            self._price = new_price
        else:
            raise Exception("must be a number between 1 and 10")

    price = property(get_price, set_price)

    def get_customer(self):
        return self._customer

    def set_customer(self, new_customer):
        from classes.customer import Customer
        if isinstance(new_customer, Customer):
            self._customer = new_customer
        else:
            raise Exception('Must be a customer object')

    customer = property(get_customer, set_customer)

    def get_coffee(self):
        return self._coffee

    def set_coffee(self, new_coffee):
        from classes.coffee import Coffee
        if isinstance(new_coffee, Coffee):
            self._coffee = new_coffee
        else:
            raise Exception("must be a coffee object")

    coffee = property(get_coffee, set_coffee)
