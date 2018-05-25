var nameVar = "David";
nameVar = "Yoda";
var nameVar = "Darth";
console.log("nameVar", nameVar);


let nameLet = "Jenny";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frankenstien";
console.log("nameConst", nameConst);

function getPetName() {
    var petName = "Hal";
    return petName;
}

// you cannot acces var, let or const outside of the scope of the function
// you'd have to declare a varaible outside the function like this:

let petName = getPetName();
console.log(petName);

// But then there is also ...
// Block scoping

var fullName = "David Rytell";

if (fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName); //with these two last console.log's we'll get David both times - not block scoped

// However, let and const are block-scoped:

var fullName2 = "David Rytell";

if (fullName2) {
    const firstName2 = fullName.split(" ")[0];
    console.log(firstName);
}

//console.log(firstName2); //error - can't access outside of block (same for let)

//If you want to use it in both places - define outside the if statement like so:

console.log("------ declare outside the if statement --------------");

const fullName3 = "David Rytell";
let firstName3;

if (fullName3) {
    firstName3 = fullName.split(" ")[0];
    console.log(firstName3);
}

console.log(firstName3);