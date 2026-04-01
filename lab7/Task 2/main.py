from models import Animal, Dog, Cat

dog = Dog("Rex", 3 , "brown", "Labrabull")
cat = Cat("Misik", 4, "white", True)

animals = [dog, cat]


for animal in animals:
    print(animal)
    print(animal.info())
    print(animal.speak())
    print()
    
    
print(dog.fetch())
print(cat.purr())
