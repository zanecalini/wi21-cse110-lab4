
1. You will get the price.length - 1 value printed in your console because "var" variables ignore code blocks meaning it
   will be accesible after the for loop. The last time we assigned i is when it is just less than prices.length.
2. You will get the last discounted price calculated printed in your console becaues "var" variables ignore code blocks
   meaning you will be able to access it after the loop. The last time we assigned discountedPrice is the last iteration of 
   our for loop
3. The last finalPrice value will be printed in the console because we have altered its value inside our for loop.
4. The function would return an array [50,100,150] due to the fact that the loop pushes values into our return value.
   This means that it calculates each of the discounted prices and then pushes it to our return array. 
   
5. You will get an error at line 11 because you can not access the variable i outside the above loop
6. You will get an error at line 12 because you can not access the variable discountedPrice outside the loop
7. The last finalPrice value will be printed in the console
8. The function would return an array [50,100,150] due to the fact that the loop pushes values into our return value.
   This means that it calculates each of the discounted prices and then pushes it to our return array. 

9. You will get an error at line 11 because you can not access the variable i outside the loop
10. If we pretend that there were no errors thrown for attempting to alter the value of the const discountedPrice,
    then we would see the first assigned value of discoutnedPrice printed in the console
11. If we pretend that there were no errors thrown for attempting to alter the value of the const finalPrice,
    then we would see the original value 0 printed in the console
12. Ignoring any previous errors, discountPrices([100,200,300],.5) would return an empty array because we declared
    "discounted" as a const and declared it as an empty array. This means we can not change its assignment.
    
13. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
    
14. A. '32' ; The first variable was a string and there for concatenated the 2 onto the string
    B. 1 ; Though the first variable was a string, you can only subtract numbers
    C. 3 ; We are adding nothing onto the number 3
    D. '3null' ; We are concatenating null onto the string '3'
    E. 4 ; Since we are adding, we consider true to be the numerical value 1 and add that to 3
    F. 0 ; Since we are adding, we consder false to be the numerical value 0 and add that to null (nothing)
    G. '3undefined' ; We are concatenating the string 3 and undefined
    H. NaN ; We get "not a number" because we are using subtraction on 3, but undefined can not be determined as a numerical value

15. A. true ; We are comparing the numerical value of 2 to 1
    B. false ; We are comparing 2 and 12 as strings via lexicographical order 
    C. true ; the string '2' becomes a number compared to the number 2
    D. false ; the strict equality operator checks without type conversion meaning that because the number and string are different
       types, it returns false
    E. false ; we see that true has a numerical value of 1, not 2
    F. true ; we are comparing true to a converted true statement for type equality and also value equality
    
16. The == operator converts all types into numbers and then compares the inputs. The === operator first checks for type equality,
    then it will check for value equality.
    
17. How are you? ; The first if statement is skipped because true == 1. The else if statement is triggered because any number other than
    0 is converted to true.

18. 
