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
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	num = $(this).text();
}

function genGroup () {
	//create temporary cohort array called selected
	var selected = cohortArray.slice(0);

	//delete groups if they already exist
	$(".container").children().remove();

	//create Groups
	for (var i = 1; i <= num; i++) {
		$(".container").append("<div class='group' id=" + i + "><span>Group " + i + "</span></div>");		
	}
	
	//loop through array of students
	//select random student, add to next group
	var group = 1;

	for (i = 0; i < cohortArray.length; i++) {

		var person = randomNumber(0, selected.length - 1);

		$("#" + group).append("<p data-id=" + i + ">" + selected[person] + "</p>");
		var delay = i * 100;
		$("#" + group).children().last().delay(delay).slideDown();

		selected.splice(person, 1);

		if (group == num) {
				group = 1;
			} else {
				group++;
			}
	}
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}