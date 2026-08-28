# This is a comment. The interpreter ignores lines starting with #.
# Comments are notes for humans reading the code.

print("Hello, Prakruthi. This is your first line of code.")

# Assigning variables of different types
name = "Prakruthi"        # str
age = 25                  # int
height_m = 1.68           # float
is_learning_to_code = True  # bool

# You can print multiple things separated by commas — print() joins them with spaces
print(name, age, height_m, is_learning_to_code)

# type() tells you the data type of a variable
print(type(name))
print(type(age))
print(type(height_m))
print(type(is_learning_to_code))

# Reassignment — the box's contents change
age = 26
print(age)

#exercise 1
city="Ujjire" 
year_started_coding= 2026
is_excited=True
print(city,year_started_coding,is_excited) 
print(type(city),type(year_started_coding),type(is_excited))

a = 10
b = 3

# Arithmetic
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333333333333335
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000

# Comparison
print(a == b)  # False
print(a != b)  # True
print(a > b)   # True

# Logical
x = True
y = False
print(x and y)  # False
print(x or y)   # True
print(not x)    # False

#exercise 2
x=26 
y=35
print(x%2==0)
print(x>y)

temperature = 15

if temperature > 30:
    print("It's hot, wear light clothes.")
elif temperature > 15:
    print("It's mild, a light jacket is fine.")
elif temperature > 0:
    print("It's cold, wear a coat.")
else:
    print("It's freezing, bundle up.")
    
#exercise 3
score= 45
if(score >= 40):
 print("Pass")
else:
 print("Fail")

age=26  
if(age<=13):
 print("Child")
elif(age>=13 and age<=19):
    print("Teenager") 
else:
    print("Adult")
    
age=5  
if(age<=13):
 print("Child")
elif(age>=13 and age<=19):
    print("Teenager") 
else:
    print("Adult")
    
age=15  
if(age<=13):
 print("Child")
elif(age>=13 and age<=19):
    print("Teenager") 
else:
    print("Adult")

username= "admin"
password= "1234"
if (username == "admin" and password == "1234"):
 print("Login successful")  
else:
 print("Access denied")  

username= "admin"
password= "9999"
if (username == "admin" and password == "1234"):
 print("Login successful")  
else:
 print("Access denied")  
 
 
 # for loop with range
for i in range(5):
    print(i)
# Output: 0 1 2 3 4, each on its own line

print("---")

# for loop over a string (yes, strings are iterable, char by char)
for letter in "abc":
    print(letter)
# Output: a b c

print("---")

# while loop
count = 0
while count < 3:
    print("count is", count)
    count = count + 1   # CRITICAL — without this, infinite loop
print("done")

print("---")

# break and continue
for i in range(10):
    if i == 3:
        continue   # skip printing 3, jump to next iteration
    if i == 6:
        break      # stop the loop entirely once we hit 6
    print(i)
# Output: 0 1 2 4 5   (3 skipped, stops before printing 6)

#exercise 4
for i in range(1,11):
    print(i)
    
for i in range(0,21):
 while(i%2==0):
  print(i)
  i=i+1

for i in range(1, 21):
 if(i%3==0 and i%5==0):
  print("FizzBuzz") 
 elif (i%5==0):
  print("Buzz") 
 elif (i%3==0):
  print ("Fizz") 
 else:
  print(i)
  
for i in range(0,21):
 while(i % 2 == 0):
    print(i)
    i = i + 1 
    
    
    #exercise functions
def square(w):
 return w**2

print(square(13))
print(square(10))

def is_prime(x):
 count=0
 for i in range(2,x):
  if (x%i==0):
   count=count+1
 if(count==0 and x>1):
     return "Prime number"
 else:
     return "Not Prime"
    
print(is_prime(7))
print(is_prime(8))
print(is_prime(2))
print(is_prime(1))

def fizzbuzz_value(n):
 if(n%3==0 and n%5==0):
  return "FizzBuzz"
 elif (n%5==0):
  return "Buzz" 
 elif (n%3==0):
  return "Fizz"
 else:
  return n

for i in range(1, 21):
 print(fizzbuzz_value(i))
    
    # A simple function with two parameters and a return value
def add(a, b):
    result = a + b
    return result

# Calling it — arguments 3 and 5 get assigned to parameters a and b
print(add(3, 5))      # 8
print(add(10, 20))    # 30

# A function with no parameters
def greet():
    print("Hello!")

greet()   # Hello!  (note: this prints inside the function, no return needed here)

# A function with a default parameter value
def power(base, exponent=2):   # exponent defaults to 2 if not given
    return base ** exponent

print(power(5))       # 25  (uses default exponent=2)
print(power(5, 3))    # 125 (overrides default, uses 3)

# A function using earlier concepts — if/else inside a function
def check_even(n):
    if n % 2 == 0:
        return True
    else:
        return False

print(check_even(4))   # True
print(check_even(7))   # False

# Scope demonstration
def my_function():
    local_var = "I only exist inside this function"
    print(local_var)

my_function()
# print(local_var)   # <-- this line would ERROR if uncommented — local_var doesn't exist out here

fruits = ["apple", "banana", "cherry"]

print(fruits[0])          # apple
print(fruits[-1])         # cherry (last item)
print(fruits[1:3])        # ['banana', 'cherry']
print(len(fruits))        # 3

fruits.append("date")
print(fruits)              # ['apple', 'banana', 'cherry', 'date']

fruits[0] = "avocado"      # mutability — replacing an item
print(fruits)              # ['avocado', 'banana', 'cherry', 'date']

fruits.remove("banana")
print(fruits)               # ['avocado', 'cherry', 'date']

print("cherry" in fruits)   # True
print("banana" in fruits)   # False (we removed it)

# Looping over a list — very common pattern
for fruit in fruits:
    print(fruit)

# Looping with index, when you need position too
for i in range(len(fruits)):
    print(i, fruits[i])
    
#exercise lists
choice=[1,2,3,4,5]
print(choice[0],choice[-1], sum(choice))

ten=[1,2,3,4,5,6,7,8,9,10]
count=0
for i in ten:
 if(i%2==0):
  count=count+1
print(count)

nothing=[]

def fizzbuzz_value(n):
 if(n%3==0 and n%5==0):
  return "FizzBuzz"
 elif (n%5==0):
  return "Buzz" 
 elif (n%3==0):
  return "Fizz"
 else:
  return n

for x in range(1, 21):
 result=fizzbuzz_value(x)
 nothing.append(result) 
 
print(nothing) 


person = {
    "name": "Prakruthi",
    "age": 26,
    "city": "Liverpool"
}

print(person["name"])      # Prakruthi
print(person["age"])       # 26

# Adding a new key
person["job"] = "Data Analyst"
print(person)               # {'name': 'Prakruthi', 'age': 26, 'city': 'Liverpool', 'job': 'Data Analyst'}

# Updating an existing key
person["age"] = 27
print(person["age"])        # 27

# Safe access with .get()
print(person.get("email"))            # None (key doesn't exist, no error)
print(person.get("email", "N/A"))     # N/A (custom default)

# Checking existence
print("name" in person)     # True
print("email" in person)    # False

# Looping over a dictionary
for key, value in person.items():
    print(key, ":", value)

# A list of dictionaries — extremely common pattern (e.g. multiple database rows, multiple API results)
people = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25}
]
for p in people:
    print(p["name"], "is", p["age"], "years old")
    
    
#exercise dictonaries
book={
    "title":"I am stupid",
    "author":"Prakruthi",
    "year":2026
}
print(book["title"],book["author"],book["year"])

student={
  "name":"Alice",
  "grades":[85,90,78]  
}
print(sum(student["grades"])/(len(student["grades"])))
    
details=[
   {"name":"Alice","age":23},
   {"name":"Ani","age":27},
   {"name":"Achu","age":28}
]
for i in details:
   if(i["age"]>25):
       print(i["name"])
