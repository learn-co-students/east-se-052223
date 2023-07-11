
class Coffee:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self._name

    def set_name(self, new_name):
        if hasattr(self, "_name"):
            raise Exception('cannot change name')
        elif type(new_name) == str:
            self._name = new_name
        else:
            raise Exception('Must be a string')

    name = property(get_name, set_name)

    @property
    def orders(self):
        from classes.order import Order
        coffees_orders = []

        for order in Order.all:
            if order.coffee == self:
                coffees_orders.append(order)

        return coffees_orders

    @property
    def customers(self):
        # coffees_customers = []

        # for order in self.orders:
        #     if order.customer not in coffees_customers:
        #         coffees_customers.append(order.customer)

        # return coffees_customers

        coffees_customers = [order.customer for order in self.orders]
        customer_set = set(coffees_customers)
        return list(customer_set)

    def num_orders(self):
        return len(self.orders)

    def average_price(self):
        order_prices = [order.price for order in self.orders]
        sum_prices = sum(order_prices)
        return sum_prices / self.num_orders()
