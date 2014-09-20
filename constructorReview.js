//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can
// eat).

  var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = [];
  };


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. 
//name, age, height, gender

  var person =  function(name, age, height, gender) {
   var persObj = {
    name: name,
    age: age,
    height: height,
    gender: gender
   };
   
   return persObj;
  };



//Create a animal array and a person array.

  var animals = [];
  var persons = [];


//Create two instances of Animal and push those into your animal array

  var dog = new Animal("pomeranian", "Pixie", 4, "black", ["kibbles 'n' bits", "sausage"]);
  var cat = new Animal("tabby", "Poe", 4, "gray", ["cat food dry", "cat food canned"]);

  animals.push(dog, cat)


//Create two instances of person and push those into your person array.

  var jennifer = person("Jennifer", 26, "63 in", "F");
  var josh = person("Josh", 28, "66 in", "M");

  persons.push(jennifer, josh)


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, 
//then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function(obj) {
    var arrLength = obj.food.length
    var randNum = Math.floor(Math.random() * (arrLength-1));
        alert(obj.name + " ate " + obj.food[randNum])
    }



//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

//NO!  it would only give them to any that come after, not previous ones becaues it was called as a literal object instead of a 
//constructor


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  //it creates a new object with that constructor
  2) What's a good way to describe the keyword 'this'
  // this refers to what is calling the key
  3) Can a normal function which creates an object and then returns that object use the prototype?
  // ???
  4) What happens if you forget to use 'new' when calling a constructor?
  // it 
*/