// console.log(`20 12 16 JS Classes Lecture`); // check that files are linked

// Declare a `Product` class. The Product class should instantiate each object with id, price, inStock, and description properties. 
class Product {
    constructor(id, price, inStock, description){
        this.id = id;
        this.price = price;
        this.inStock = inStock;
        this.description = description;
    }
    // The outputProduct method outputs a message depending on if a product is in stock.
    outputProduct(){
        if(this.inStock){
            console.log(`Product ID : ${this.id}\nProduct Price : $${this.price}\nProduct Description : ${this.description}\nProduct is In Stock`);
        } else {
            console.log(`Product ID : ${this.id}\nProduct Price : $${this.price}\nProduct Description : ${this.description}\nProduct is NOT In Stock`);
        }
    }
    // The updateProduct method accepts a product property and value then updates the appropriate property with the passed value. 
    updateProduct(productProperty, productValue){
        // This method will only update properties id, description, and inStock.
        if(productProperty == "id"){
            this.id = productValue;
        } else if(productProperty == "inStock"){
            this.inStock = productValue;
        } else if(productProperty == "description"){
            this.description = productValue;
        } else {
            // If an invalid product property is passed to the method display a `warning` in the console with the message "You did not enter a valid product property".
            console.warn("You did not enter a valid property");
        }
    }
    // The discountProduct method updates a product's price property with a 25% discount. This method should return the message "[PRODUCT] discounted 25%. Updated Price : [NEW_PRICE]"
    discountProduct(){
        let discount = this.price / 4;
        this.price = this.price - discount;
        return(`${this.description} discounted 25%. Updated Price : ${this.price}`);
    }
}

// create an instance of the Product class
let saleItem = new Product(1, 6.78, false, "Fuzzy socks");
// console.log(saleItem);
// called class method to output properties
saleItem.outputProduct();


// prompt user to enter property and value
let userProp = prompt("enter a property to change");
let userValue = prompt("enter a value to change property to");
// class method to update property with value
saleItem.updateProduct(userProp, userValue);
// called class method to output properties
saleItem.outputProduct();

// discounted product and output the return value
console.log(saleItem.discountProduct());
// -----------------------------------------------
// Declare a Professor class. The Professor class should instantiate each object with id, name, students, and isTenured properties. 
class Professor {
    constructor(id, name, isTenured){ 
        this.id = id;
        this.name = name;
        this.isTenured = isTenured;
        this.students = []; // The students property should be set an empty array. 
    }
    // The outputProfessor method outputs a message with the number for Professor Students representing to the length of the students array
    outputProfessor(){
        console.log(`Professor ID : ${this.id}\nProfessor Name : ${this.name}\nProfessor Students : ${this.students.length}\nProfessor Is Tenured : ${this.isTenured}`);
    }
    // The addStudent method accepts a student name and student class and add a student object with those properties to a Professor object's students array using object literal notation
    addStudent(studentName, studentClass){
        let professorStudent = {
            name : studentName,
            class : studentClass
        }
        this.students.push(professorStudent);
        // This method should return the message : "[NAME] added to [CLASS] Total number of students : [NUM_OF_STUDENTS]"
        return(`${professorStudent.name} added to ${professorStudent.class} Total number of students : ${this.students.length}`);
    }
}

// Create one instance of this class using the values : ID - 78, Name - Abigail Sachs
let sachs = new Professor(78, "Abigail Sachs", true);
// console.log(sachs);
// Output the professor object's properties using the correct class method.
sachs.outputProfessor();

// Add two students to the professor object's student array using the correct class method and output the returned value
let studentAdded = sachs.addStudent("Monique", "the Failure of American Cities");
console.log(studentAdded);
let student2Added = sachs.addStudent("Keisha", "the Success of American Cities");
console.log(student2Added);

// iterate through Professor object's students array property 
for(let i = 0; i < sachs.students.length; i++){
    // output each student objects name and class properties
    console.log(`Student : ${sachs.students[i].name}\n
    Class : ${sachs.students[i].class}`);
}

// Ask the user to confirm if the professor is tenured or not and update the value of the professor object's tenured property to the returned value.
sachs.isTenured = confirm(`Is ${sachs.name} a tenured professor?`);
sachs.outputProfessor();
