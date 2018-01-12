$(document).ready(function() {
       
	$('.timer').hide();
	$('.content').hide();

	var correct = wrong = unanswer= 0;
	var questionAll = [{

			q: "BB-8 is an astromech droid from what film?", 
			a: ["Star Wars" ,"Star Track", "RobotCop", "Transformers"], 
			correct: 0,

			form: "#form1"

		}, {

			q: "Who does the voice over for Dory from Finding Nemo and Finding Dory?", 
			a: ["Jodi Benson" ,"Ellen Degeneres", "Tom Hanks","Joe Ranft"], 
			correct: 1,
			form: "#form2"

		}, {

			q: "What school does Harry Potter attend?", 
			a: ["Florida State" ,"Yale", "Boston U", "Hogwarts"], 
			correct: 3,
			form: "#form3"

		}, {

			q: "In which Star Wars film did the Ewoks first appear?", 
			a: ["Revenge of the Sith" ,"Attack of the Clones", "The Empire Strikes Back","Return of the Jedi" ], 
			correct: 3,
			form: "#form4"

		},{

			q: "What fictional city is the home of Batman?", 
			a: [ "Gateway City","Gotham City","The Hidden City", "Zenith City" ], 
			correct: 1,
			form: "#form5"

		}];
   
	var timer = function () {
		
   		var counter = 60;
		setInterval(function() {
		counter--;
			if (counter >= 0) {
			$(".timer").html(counter + " Seconds");

			}
			if (counter == 0) {
			console.log('sorry, out of time');
			clearInterval(counter);
			}
		}, 1000);

	};


	$('.startButn').on ('click', function () {
		var startB = $(this);
		startB.hide();
		$('.timer').show();
		$('.content').show();
		// $(document).delay(500);			
		
		// timer(); 

		// Display questions and choice 

		for (var i = 0; i < 5; i++ ) {
             // $('.content').append('<div class="question"></div><br>');
             // $('.question').html('<h2>' + questionAll[i].q + '</h2> ');

            var question = $('<div class="question'+i+'"></div><br>');
            $('.content').append(question);
            // var allquestions = '';                        
            //  allquestions += '<h1>'+questionAll[i].q+'</h1><br>';
                                    
             var allquestions = $('<h1 class="header'+i+'">'+questionAll[i].q+'</h1>');

            $(".question"+i).append(allquestions);

            var allforms = $('<form class="form'+i+'"></form>');
            $("h1").append(allforms);

            
            


        };



	});

});