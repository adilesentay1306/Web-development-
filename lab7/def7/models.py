class Book():
    def __init__(self, title, author, isbn, is_available):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_available = is_available
        
    def borrow(self):
        if self.is_available:
            return True
        else:
            return False
    
    def return_book(self):
        if self.is_available:
            return True
        else:
            return False
    
    def get_info(self):
        return f"Title is {self.title}, Author is {self.author}, unique book identifier is {self.isbn}, Available: {self.is_available} "
    
    def __str__(self):
        return f"{self.title} by {self.author} (ISBN) - {self.is_available} "
    
    
    
    
    
class EBook(Book):
    def __init__(self, title, author, isbn, is_available, file_size_mb, format):
        super().__init__(title, author, isbn, is_available)
        self.file_size_mb = file_size_mb
        self.format = format
        
    def get_info(self):
        return f"Title is {self.title}, Author is {self.author}, unique book identifier is {self.isbn}, Available: {self.is_available}, file size is {self.file_size_mb}, format is {self.format}"
    
    def borrow(self):
        return "Always available"
    
class AudioBook(Book):
    def __init__(self, title, author, isbn, is_available, duration_hours, narrator):
        super().__init__(title, author, isbn, is_available)
        self.duration_hours = duration_hours
        self.narrator = narrator
        
    def get_info(self):
        return f"Title is {self.title}, Author is {self.author}, unique book identifier is {self.isbn}, Available: {self.is_available}, Duration hours is {self.duration_hours}, Narrator {self.narrator} "
    
    
class PrintedBook(Book):
    def __init__(self, title, author, isbn, is_available, pages, condition):
        super().__init__(title, author, isbn, is_available)
        self.pages = pages
        self.condition = condition
        
    def get_info(self):
        return f"Title is {self.title}, Author is {self.author}, unique book identifier is {self.isbn}, Available: {self.is_available}, pages: {self.pages}, condition is {self.condition} "
    
    

