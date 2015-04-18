$(document).ready(function(){
	$("#homeButton").hide();
	$("#contactTab").hide();
	$("#portfolioTab").hide();
	$("#skillsTab").hide();
	$("#resumeTab").hide();
});

$(function() {

	$("#homeButton").click(function() {
		$("#homeTab").show();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#homeButton").fadeOut("slow", function() {
			$("#contactButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});
	});

	$("#contactButton").click(function() {
		$("#homeTab").hide();
		$("#contactTab").show();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#contactButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});
	});

	$("#portfolioButton").click(function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").show();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#portfolioButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#contactButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});

	});

	$("#skillsButton").click(function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").show();
		$("#resumeTab").hide();

		$("#skillsButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#contactButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});
	});

	$("#resumeButton").click(function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").show();

		$("#resumeButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#contactButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
		});
	});
});
