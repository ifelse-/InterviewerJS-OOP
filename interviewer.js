// Object parent Marvin Elmore GiveMe5ive.com
// Define the Person constructor
function Interviewer(firstName, personality, talk, resume) {
 this.firstName = firstName;
 this.person = personality;
 this.speak = talk;
 this.resumeLevel = resume;
 this.getpoints = [];
 this.currentScore = 0;
}


// Add methods to Interviewer.prototype
Interviewer.prototype.name = function(){
  console.log("Interviewer name is" + " "+ this.firstName);
}; 


Interviewer.prototype.personality = function(arr){
  var personalityArr = arr;
  if(this.person != 1)
  var points = this.person * 10;
   else
  var points = this.person * 0;
  this.getpoints.push(points)
  for(var i = 0; i < personalityArr.length; i++) {
	  if(this.person == i+1){
		 console.log(this.firstName + " personality " + personalityArr[i]);
		 console.log(points + " points");
		 return false;
		  }
	  }
}; 

Interviewer.prototype.talk = function(arr){
  var speak = arr;
  var points = this.speak * 10;
  this.getpoints.push(points)
  for(var i = 0; i < speak.length; i++) {
	  if(this.speak == i+1){
		 console.log(this.firstName + " speak " + speak[i]);
		 console.log(points + " points");
		 return false;
		  }
	  }
}; 


Interviewer.prototype.resume = function(arr){
  var resumeLevel = arr;
  var points = this.resumeLevel * 10;
  this.getpoints.push(points)
  for(var i = 0; i < resumeLevel.length; i++) {
	  if(this.resumeLevel == i+1){
		 console.log(this.firstName + " resume level " + resumeLevel[i]);
		 console.log(points + " points");
		 return false;
		  }
	  }
};

// Interviewer Score
Interviewer.prototype.showScore = function() {
	 // console.log(this.getpoints);
	  var total=0;
	  var gotScore;
	  for(var i = 0; i < this.getpoints.length; i++) {
		  gotScore = total += this.getpoints[i]
		  }
		  percent = (gotScore / 100)*100+10;
		  console.log(this.firstName + " score " +percent + "%");
};
/*
var interviewer1 = new Interviewer("Janet", 3, 2, 1);
interviewer1.name();
interviewer1.personality(["bad", "good", "professional"]);
interviewer1.talk(["bad", "good", "professional"]);
interviewer1.resume(["junior level", "intermediate", "advance", "Guru"]);
interviewer1.showScore();
*/
//console.log();