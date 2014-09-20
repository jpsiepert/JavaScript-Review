/* Declare and Define the functions here that will make the function calls below work properly */













var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});
var firstNameArr = function(arr, cb) {
   var firstName = arr[i];
   cb(firstName)
};


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

var lastNameArr = function(arr, cb) {
  var lastName = arr[arr.length - 1];
  cb(lastName);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    'Colt is in the array';
  } else {
    'Colt is not in the list';
  }
});

var yesArr = function(idx, arr, cb) {
  var yes;
  var no;
  for (var i = 0; i < arr.length; i++) {
    if(idx === arr[i]) {
      cb(yes);
      break;
    }
    else {
      cb(no);
      break;
    }
  }
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});

var map = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
      cb(arr[i])
  };
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniq){
  console.log('The new names array with all the duplicate items removed is ', uniq);
});

 //var uniq = function(arr, cb)
 names = names.filter(function(item, index, callArr){
  callArr.indexOf(item) == index;
}
      
  };
 }  
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});

var idxArr = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(i, arr[i])
  };
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

  var getUserById = function(arr, str, cb) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].id === str) {
        cb(arr[i]);
      }
    }
  }
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num //should return 2
});

  var find = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
           return cb(arr[i])
        }
      }
  }

