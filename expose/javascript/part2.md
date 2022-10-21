# Part 2

1. It will print "3" because i was last assigned the value 3 within in the
for loop, and because it was assigned using var, the scope is the entire
function, so it's accessible.
2. It will print "150" because it was last assigned the value (300 * 0.5)
or 150 within the for loop and it also used var, so its accessbile and is
able to print it.
3. It will also print "150" because it was last assigned the value 150 at
line 8 inside the for loop and with the var assignment within the function
it's still accessible.
4. An array containing [50, 100, 150] because all the variables in the 
function are assigned with var and so are accessible everywhere in the
function and so it properly returns the right discounted prices.
5. It causes an error because let is used to declare "i" and it's within 
the for loop (the declaration/heading of the loop counts) so it's not 
longer accessible after the loop ends. 
6. Also will cause an error because discountedPrice is also delcared with
"let" within the for loop so the scope ends when the loop does.
7. It'll print "150" because finalPrice was declared just in the function,
not within another block of code, so it's still accessible later in the
function. And it was last assigned the value "150" within the for loop and
blocks within the function also have access to the variable.
8. It returns an array with [50, 100, 150] because all the variables are
declared within the function so are accessible anywhere in the function
and the ones declared in the for loop are only used in the loop, so it 
returns normally.
9. It causes an error because "i"'s scope is only within the for loop so
it's not defined in the rest of the function.
10. It prints "3" because the variable is declared in the main part of the
function so it can access it and the length of the input array is 3.
11. It will return an array with [50, 100, 150] because all the variables
have block scope and are accessible within the fuction, the ones in the
loop are only used in the loop, and the const discountedPrice variable is
being redeclared each iteration so it's not being changed and there's no
error.
12.
	A. studen.name
	B. student["Grade Year"]
	C. student.greeting()
	D. student['Favorite Teacher'].name
	E. student.courseLoad[0]
13. 
	A. '32' because because plus is used to join two strings, and js
	automatically converts the 2 to a string as well.
	B. 1 because other operations between strings convert the strings
	to numbers (if it can be done) and then performs operation
	C. 3 because null is converted to number value, which for null is 0
	D. '3null' because '3' is a string, so the plus is used for joining 
	two strings so it converts null to string of it and joins them
	E. 1 because neither are strings, so it converts them to numbers 
	(true = 1, null = 0) so its 1 + 0
	F. 0 because the same as above but false = 0 so its 0 + 0
	G. '3undefined' because '3' is a string, so it uses the plus to 
	join the strings and converts undefined to string 'undefined' and 
	joins them
	H. NaN because of the minus it tries to convert them to numbers to
	subtract, but undefined doesn't equal any number, so it's NaN
14.
	A. true because '2' is converted to the number 2
	B. false because it compares them as strings using lexigraphical
	order where '2..' is greater than '1...'
	C. true because it converts '2' to the number 2
	D. false because === is strict conversion and checks if type is the
	same, which it's not here
	E. false because it converts true to a number (true = 1) which
	doesn't equal 2
	F. true, because Boolean() converts any non-'empty' value to true
	and thats the same as true and they'er both boolean types
15. == checks if two values are equal but will automatically perform type
conversions on the values in order to check, so they don't need to be the
same type. But === is the strict equality operator and it cares about type
and doesn't convert them, so things compared with that are only equal if
they have the same value and are of the same type.
17. An array, [2, 4, 6]. The 'modifyArray' function call at the bottom
passes an array of numbers in to the array argument and the function
doSomething, which is a declared function, into the callback arg. The
modifyArray function creates a new array and iterates through each item in
the passed array and calls a function using the callback variable, which
holds the doSomething function, passing the current array item for arg. The
doSomething function just doubles that passed number and returns it, which is
pushed onto the new array. So it just returns a new array of doubled numbers.
19. 1 4 3 2 (on separate lines)



