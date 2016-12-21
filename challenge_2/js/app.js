console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);

// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }

// var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Erik Isaac"; // change me
  this.age = 44;
  this.city = "Denver";
  this.state = "CO";
  this.shout = function(shout) {
		shout = shout.toUpperCase() + "!!!";
		return shout;
	};
}

app.controller("SecondController", SecondController);

function SecondController(){
	console.log("Second controller online!!");
	this.class_name = "GA WDI";
	this.enrolled_students = 10;
	this.start_date = new Date("03/25/2015");
	this.end_date = new Date("3/25/2016");
	// NOTE: This is not a readable format but I am not going to spend more time on this becasue I want to finish this homeowrk.
	this.daysRemaining = function() {
		console.log("daysRemaining function online!");
		return this.end_date - this.start_date;
	};
};














