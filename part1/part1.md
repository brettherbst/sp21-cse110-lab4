# Part A
1. values added: 20 (no error)
2. values added: 20 (no error)
3. values added: 20 (no error)
4. Error. This line ran into a error because in the scope of this print statement, the variable result is unknown (because 'let' was used, result is only recognized in the scope of it's block, thus since this print statement is not in the same block as the declaration of result, result is unknown at this point and does not exist)
5. Error. An error is reached before you reach this line because on line 7 we tried to redefine a const variable, which is not allowed, thus an error. If we did not reassign the result variable, we would not run into a error
6. Error. An error is reached before you reach this line because on line 7 (for reasons above). But even if we fixed this error, this line would still run into an error for a similar reason as to why ‘let’ caused an error, the variable ‘result’ is not known in this block of code where this print statement is, thus when you try to use it you get an error.
# Part B
1. It will print 3. The code does this because in our for loop we declared i as a var, thus it will live outside of its block, so after the for loop finished and we call the print statement, we know the value of i (3), and will print that variable successfully. 
2. It will print 150 (300 * (1-.5)). For a similar reason above, the variable discountedPrice is accessible outside of its block because it is a var, so when called it will print its last assigned value, which is 150.
3. It will print 150 (Math.round(150 * 100) / 100), for the same reason as above. Since finalPrice is a var, it will remain accessible outside of its block, and the print statement will print the most recent updated value of finalPrice.
4. The function will return an array with the values of the input array after applying the given discount (aka returns the array with proper values after the discount is applied). This is because we return the discounted array at line 16, so it returns that value and the properties of that value.
5. Error. This code runs into an error because variable i is a let variable, thus it is only defined in the block that it is defined in. Because the print is called outside of i’s block, the code does not know what i is by the time we reach the print statement (because it exited the for loop), thus the code runs into an error.
6. Error. This code runs into an error for similar reasons as above. discountedPrice is a let variable, so once we leave its block discountedPrice becomes undefined, thus when we try to print it we run into an error.
7. It will print 150. This is because despite discountedPrice being a let variable, it is defined in the same block as the print statement, thus when we get to the print statement the code will know how to find the variable.The variable is edited in the for loop, which is fine, and will run into no errors there.
8. The function will return an array with the values of the input array after applying the given discount (aka returns the array with proper values after the discount is applied). This is because we return the discounted array at line 16, so it returns that value and the properties of that value. (the fact that discounted is a let does not affect the return)
9. Error. This code ran into an error because we declared i as a let variable, so when we exit the for loop, we lost the reference to i, thus when we tried to print it we get an error because variable i is undefined at that point.
10. It will print 3.That is because we declared the value of length at line 4, and since we didn’t leave the block, when we call print it will print the value.
11. The function will return an array with the values of the input array after applying the given discount (aka returns the array with proper values after the discount is applied). This is because we return the discounted array at line 14, so it returns that value and the properties of that value. (You are allowed to modify a array even if it is const, thus modifying the array does not throw an error)
12. 	A. student.name
	    B. student["Grad Year"]
	    C. student.greeting();
	    D. student["Favorite Teacher"].name
	    E. student.courseLoad[0]
13.     A. ‘32’
        B. 1
        C. 3
        D. ‘3null’
        E. 4
        F. 0
        G. ‘3undefined’
        H. NaN
14.     A. true
	    B. false
	    C. true
	    D. false
	    E. false
	    F. true
15. == will compare two variables regardless of the variable types (ie ‘2’ == 2 is true)  
    === will compare two variables but will ensure the data types are the same (ie ‘2’ === 2 is false)

17. This method will take every element of the input array (in this case [1,2,3]) and multiply it by two, push it into a new array, and return that array (In this case, return [2,4,6]). This is because inside the for loop in modifyArray, we iterate through each element of the array, call the callback function (in our case doSomething, which multiples a given num by 2 and returns that num), and puts whatever result of the callback function is into the the new array. After it has done this for each element, it then returns the new array.

19.     1
	    4
	    4
	    4
	    2
