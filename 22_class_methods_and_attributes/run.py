# import ipdb
from lib.owner_pet import Owner, Dog
# from lib.potato import Potato

# potato = Potato("")
# another_potato = Potato("Sweet")

emiley = Owner('Emiley', 3)
bob = Owner('Bob', 10)

apollo = Dog(emiley, 'Apollo')
bailey = Dog(emiley)

dog = Dog(bob, 'D.O.G.')

print(emiley.dogs())

print('hello')
