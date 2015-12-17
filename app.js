var cohortArray = [ "Natalie", "Charlie", "Sam", "Zach", "Nathan", "Paul", "Anthony", "Liz", "Eric", "Jeremy", "Chris", "Brooks", "Altamir", "Amber", "Joe", "Kenzie", "Matthew", "Robby", "Mark", "Scott"];


$(document).ready(function(){

	for (var i = 2; i <= cohortArray.length/2; i++) {
	
		$(".numbers").append("<button>" + i + "</button>");
	}

$('.numbers').on('click', 'button',  numberClick)
$('.buttonContainer').on('click', '.randomizer', genGroup)

});
	

var num = 0;

function numberClick () {
	num = $(this).text();
	console.log("number of groups", num)
}


function genGroup () {

	//create temporary cohort array called selected
	var selected = [];
	for (var i = 0; i < cohortArray.length; i++) {
		selected[i]=cohortArray[i];
	}

	//delete groups if they already exist
	$(".container").children().remove();

	//create Groups
	for (var i = 1; i <= num; i++) {
		$(".container").append("<div class='group' id=" + i + ">Group " + i + "</div>");		
	}
	
	//loop through array of students
	//select random student, add to next group
	var group = 1;
	for (i = 0; i < cohortArray.length; i++) {
		var person = randomNumber(0, selected.length - 1);
		$("#" + group).append("<p>" + selected[person] + "</p>");
		selected.splice(person, 1);
		console.log(selected);
		console.log("group is ", group);
		if (group == num) {
			group = 1;
		} else {
			group++;
		}
	};	
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}