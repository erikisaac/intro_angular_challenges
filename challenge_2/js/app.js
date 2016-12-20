console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);

// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Erik Isaac"; // change me
  this.age = 44;
  this.city = "Denver";
  this.state = "CO";
  // I don't know why this wont work...
  // this.shout = functon()
  // 	{
  // 		// return shout;
  // 	};
}