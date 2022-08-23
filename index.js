// # Callbacks

// #### Greet Users
// * Create a function which will print greeting message
// * Create a function which will receives array of different users and greet each user.

function greetMessage(str) {
  return ` Good Morning, ${str}`;
}

function greetUsers(array, cb) {
  for (let name of array) {
    console.log(cb(name));
  }
}

greetMessage("john"); // print "Good Morning, John"

greetUsers(["John", "Peter", "Mark"], greetMessage);
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"
