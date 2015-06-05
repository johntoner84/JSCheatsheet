var x="5"
var y="5"
console.log {x+y}
// Will return 5 5 b/c these are text values
var x=5
var y=5
alert ( x+y)
console.log {x+y}
// Will post an alert message of 10
// Types of data include "Strings"; numbers such as 1,2,3,4; Boolean - true or fale; or undefined/no value
// Arrays hold type of data, could also think of these as data series/categories
["Apple", "microsoft", "yelp"];

var brands =["Apple", "microsoft", "cocacola"]
var favoritenunmbers = [2, 3, 4, 5, 7]

// note the select of data type by quotes

var products =["iphone, laptop", "car"]
// in the series, these are indexed. Index means the order in which they appear. 
var x="10"
var y= 10
console.log(x===y);
// will return "false" b/c this isn't true"
var x= 10
var y= 10
console.log(x===y);
// will return "true" b/c this is true"

var x="time"
var y="space"
console.log (x+y);
// will return text values together, or, as an alert"
var x="time"
var y="space"
alert(x+y);
// I can pick via index which item in an array is displayed
var hoods=["BK","MH","QNS"]
console.log(hoods[0]);
// this returns "BK". If I wanted to return "QNS" then I'd choose number two:
var hoods=["BK","MH","QNS"]
console.log(hoods[2]);
// If I want to add these together to get QNSBK I would:
var hoods=["BK","MH","QNS"]
console.log(hoods[2]+hoods[0]);
// If I wanna add multiple arrays i can do this as well
var hoods=["BK","MH","QNS"]
var avgincome=[30000,70000,50000]
console.log(hoods[0]+" "+avgincome[0]);
// I can set up logic using if then and else statements.
 // It will output whatever the first true statement is. 
 // So if the first statementn is false, it will move on to the next
 var x = 150
 var y = 110
 if (x>y) {"It's greater than!"};

var x = 150
 var y = 110
 if (x>y) {
 console.log ("It's greater than!");
}

var x = 100
 var y = 110
 if (x>y) {
 console.log ("It's greater than!");
} else {
	console.log ("It's less than brah");
}



// Functions
function alertUSER (Me) {
	return alert(Me) 
	}
		alertName("John");
	
