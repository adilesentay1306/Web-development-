class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
        
    def speak(self):
        return "..."
    
    def info(self):
        return f"{self.name}, {self.age} лет, цвет: {self.color}"
    
    def __str__(self):
        return f"Animal: {self.name}"
    

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
        
    def speak(self):
        return "Gav!"
    
    def fetch(self):
        return f"{self.name} fetch the ball!"
    
    def __str__(self):
        return f"Dog: {self.name} ({self.breed})"
    

class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor
        
    def speak(self):
        return "Meow!"
    
    def purr(self):
        return f"{self.name} is purring..."
    
    def __str__(self):
        return f"Cat: {self.name} (indoor: {self.indoor})"
    
