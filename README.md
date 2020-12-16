# 20 12 16 JS Classes 02 Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly

## Lecture 
### Products
Declare a `Product` class. The Product class should instantiate each object with id, price, inStock, and description properties. The Product class should also have three methods : `outputProduct`, `updateProduct`, and `discountProduct`.

The outputProduct method outputs the following depending on if a product is in stock.

Product in stock
```
Product ID : 175
Product Price : $140.67
Product Description : Bose Bluetooth Comfort Headphones
Product is In Stock
```
Product not in stock
```
Product ID : 175
Product Price : $140.67
Product Description : Bose Bluetooth Comfort Headphones
Product NOT In Stock
```
The updateProduct method accepts a product property and value then updates the appropriate property with the passed value. This method will only update properties id, description, and inStock. If an invalid product property is passed to the method display a `warning` in the console with the message "You did not enter a valid product property".

The discountProduct method updates a product's price property with a 25% discount. This method should return the message "[PRODUCT] discounted 25%. Updated Price : [NEW_PRICE]"

Create one instance of this class using the values :
```
ID - 175
Price - 140.67
Description - Bose Bluetooth Comfort Headphones
in Stock - false
```
Output the product object's properties using the correct class method, update the inStock property using the correct class method, discount the product using the correct class method and output the returned value.

### Professors
Declare a `Professor` class. The Professor class should should instantiate each object with id, name, students, and isTenured properties. The students property should be set o an empty array. The Professor class should also have two methods : `addStudent` and `outputProfessor`.

The outputProfessor method outputs the following with the number for Professor Students representing to the length of the students array
```
Professor ID : 78
Professor Name : Abigail Sachs
Professor Students : 2
Professor Is Tenured : true
```

The addStudent method accepts a student name and student class and add a student object with those properties to a Professor object's students array using object literal notation. This method should return the message : "[NAME] added to [CLASS] Total number of students : [NUM_OF_STUDENTS]"

Create one instance of this class using the values : 
```
ID - 78
Name - Abigail Sachs
```

Output the professor object's properties using the correct class method. Ask the user to confirm if the professor is tenured or not and update the value of the professor  object's tenured property to the returned value. Add two students to the professor object's student array using the correct class method and output the returned value
```
Name - Monique
Class - The Failure of American Cities
Name - Keisha
Class - The Success of American Cities
```