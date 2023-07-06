import ipdb


class Owner:
    def __init__(self, name, experience):
        self.name = name
        self.experience = experience

    def get_experience(self):
        return self._experience

    def set_experience(self, new_experience):
        if new_experience > 1:
            self._experience = new_experience
        else:
            print('Need more volunteer/experience time.')

    experience = property(get_experience, set_experience)

    def dogs(self):
        owners_dogs = []
        for dog in Dog.all:
            if dog.owner == self:
                owners_dogs.append(dog)

        return owners_dogs

    def __repr__(self):
        return f'<Owner name={self.name}>'


class Dog:
    all = []

    def __init__(self, owner, name="Good Pup"):
        self.name = name
        self.owner = owner
        Dog.all.append(self)

    def get_owner(self):
        return self._owner

    def set_owner(self, new_owner):
        if isinstance(new_owner, Owner):
            self._owner = new_owner
        else:
            print('not an owner instance')

    owner = property(get_owner, set_owner)

    def __repr__(self):
        return f'<Dog name={self.name} owner={self.owner.name} >'
