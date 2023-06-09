# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Is a way of creating software center around object. Object oriented programming encapsulate blocks code in object intead in functions.

Researched answer: Object-Oriented Programming (OOP) is a way of writing code that focuses on creating objects, which are like containers that hold data and functions. Functional Programming (FP) is a way of writing code that emphasizes using functions to perform computations.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: In ruby a float a number containing decimals and interger is consider a whole number, they are part of their classes in ruby.

Researched answer: In Ruby, the main difference between a float and an integer is that a float can have decimal points or fractional parts, while an integer represents whole numbers without decimal points.

3. Ruby has an implicit return. What does that mean?

Your answer: This means that automatically a Method will return a value.

Researched answer: In Ruby, implicit return means that the last evaluated expression within a method or block is automatically returned as the result. You don't need to explicitly use the return keyword. It makes the code more concise and readable by eliminating the need for explicit return statements.

4. What is a block in Ruby? 

Your answer: I imagine that a block in ruby is code or functionality happening inside of a method.

Researched answer: In Ruby, a block is a piece of code that you can pass to a method. It allows you to customize the method's behavior with additional instructions. Blocks are anonymous functions and are commonly used with iterators. 

5. How do you extract a single value from a Ruby hash?

Your answer: using the simbol : with the name of the key.

Researched answer: To extract a single value from a Ruby hash, you can use the square bracket notation ([]) or the fetch method.

For example:
my_hash = { key1: 'value1', key2: 'value2', key3: 'value3' }

value = my_hash[:key2]
# or
value = my_hash.fetch(:key2)

puts value  # Output: 'value2'


## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a popular testing framework for Ruby that follows Behavior-Driven Development principles. It offers a descriptive syntax, hierarchical organization, and rich matchers for testing Ruby code with clarity and readability.

2. Test-driven development: Test-driven development (TDD) is a software development approach where tests are written before the code. It follows a cycle of writing tests, implementing code to make the tests pass, and then refactoring the code.

3. PostgreSQL: PostgreSQL is a powerful open-source database system that is known for its reliability and compatibility with SQL. It offers advanced features and is widely used for various applications, from small projects to large-scale systems.

4. CRUD: CRUD stands for Create, Read, Update, and Delete, representing the basic operations performed on data in programming. It involves creating new data, reading or retrieving existing data, updating data, and deleting data from a storage system.

5. HTTP: HTTP (Hypertext Transfer Protocol) is a communication protocol used in programming to transfer data between clients (like web browsers) and servers over the internet. Clients send requests to servers, and servers respond with the requested data or perform actions. It's the foundation of web communication and APIs.
