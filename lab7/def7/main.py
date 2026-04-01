from models import Book, EBook, AudioBook, PrintedBook

ebook = EBook("Harry", "Rou", "24B01" , True, 130, "PDF")
ebook1 = EBook("Mister", "Beast", "24B02", True, 120, "PDF")

audiBook1 = AudioBook("School", "#66", "24B03", True, 5, "u")
audiBook2 = AudioBook("Uni", "KBTU", "24B04", False, 4 , "uu" )

printed1 = PrintedBook("Money", "Conor", "24B05", False, 200, "Good")
printed2 = PrintedBook("Liverpool", "Klopp", "24B06", False, 300, "New")

books = [
    EBook("Harry", "Rou", "24B01" , True, 130, "PDF"),
    EBook("Mister", "Beast", "24B02", True, 120, "PDF"),
    AudioBook("School", "#66", "24B03", True, 5, "u"),
    AudioBook("Uni", "KBTU", "24B04", False, 4 , "uu" ),
    PrintedBook("Money", "Conor", "24B05", False, 200, "Good"),
    PrintedBook("Liverpool", "Klopp", "24B06", False, 300, "New")
]

    
    
#Demo
#1
print("=== Library Inventory ===")
for b in books:
    print(b)
    
#2
print(ebook.borrow())
print(ebook1.borrow())

#3
print(printed1.borrow())

#4
print(ebook.borrow())

#5
print(audiBook1.get_info())

#6
for b in books:
    print(b.is_available)
        
#7

#8

#9

#10
for b in books:
    print(b.get_info())