def find_max(numbers):
 max=numbers[0]
 for i in numbers:
        if(i>max):
          max=i
 return max
    
print(find_max([3,7,2,9,4]))

products = [
    {"name": "Pen", "price": 10},
    {"name": "Notebook", "price": 50},
    {"name": "Bag", "price": 500}
]
total=0
for i in products:
    total = i["price"]+ total
    
print(total)

def count_vowels(word):
 count=0
 word.upper()
 for i in word[0:]:
     if ("A"==i or "E"==i or "I"==i or "O"==i or "U"==i):
         count=count+1
 return count

print(count_vowels("PRAKRUTHI"))