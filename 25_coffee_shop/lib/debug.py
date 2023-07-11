#!/usr/bin/env python3
import ipdb

from classes.customer import Customer
from classes.order import Order
from classes.coffee import Coffee

if __name__ == '__main__':
    print("HELLO! :) let's debug")

    c1 = Customer("Emiley")
    c2 = Customer("Adam")

    coffee = Coffee("Americano with protein")
    coffee2 = Coffee("Mocha")

    o1 = Order(c1, coffee, 1)
    o2 = Order(c1, coffee, 10)
    o3 = Order(c1, coffee2, 5)
    o4 = Order(c2, coffee, 5)

    # print(len(c1.orders))
    c1.create_order(coffee2, 10)
    # print(len(c1.orders))
    print(coffee.average_price())
    # c2 = Customer(2)
    # print(c2)
    # print(c2.name, "c2 name")

    ipdb.set_trace()
