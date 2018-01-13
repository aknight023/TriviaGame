$(document).ready(function() {
       
	$('.timer').hide();
	$('.content').hide();

	var correct = wrong = unanswer= 0;
	var questionAll = [{

			q: "BB-8 is an astromech droid from what film?", 
			a: ["Star Wars" ,"Star Track", "RobotCop", "Transformers"], 
			correct: 0,
			form: "#form0"

		}, {

			q: "Who does the voice over for Dory from Finding Nemo and Finding Dory?", 
			a: ["Jodi Benson" ,"Ellen Degeneres", "Tom Hanks","Joe Ranft"], 
			correct: 1,
			form: "#form1"

		}, {

			q: "What school does Harry Potter attend?", 
			a: ["Florida State" ,"Yale", "Boston U", "Hogwarts"], 
			correct: 3,
			form: "#form2"

		}, {

			q: "In which Star Wars film did the Ewoks first appear?", 
			a: ["Revenge of the Sith" ,"Attack of the Clones", "The Empire Strikes Back","Return of the Jedi" ], 
			correct: 3,
			form: "#form3"

		},{

			q: "What fictional city is the home of Batman?", 
			a: [ "Gateway City","Gotham City","The Hidden City", "Zenith City" ], 
			correct: 1,
			form: "#form4"

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
		var i = 0
		for (i; i < 5; i++ ) {
            // $('.content').append('<div class="question"></div><br>');
            // $('.question').html('<h2>' + questionAll[i].q + '</h2> ');

            var question = $('<div class="question'+i+'"></div><br>');
            $('.content').append(question);
            // var allquestions = '';                        
            //  allquestions += '<h1>'+questionAll[i].q+'</h1><br>';
                                    
            var allquestions = $('<h1 class="header'+i+'">'+questionAll[i].q+'</h1>');
			$(".question"+i).append(allquestions);

			// this was append inside the h1 element
			// var allforms = $('<form class ="form'+i+'"></form>');
	  //       $(".header"+i).append(allforms);
	  		var allforms = $('<form class ="form'+i+'"></form>');
	        $(".question"+i).append(allforms);

	        for (var j = 0; j < 4 ; j ++) {
	        	var inputButn = $('<input type="radio" name="choice" value="'+(questionAll[i].correct == j?1:0) +'">'+questionAll[i].a[j]+'</input><br>');
	        	$('.form'+i).append(inputButn);

	        };


        };       	



	});

	$('.submit').on ('click', function () {
		// var submitBtn = $(this);
		// $('.timer').hide();
		// $('.content').hide();
		// submitBtn.hide();
		

		var radioCheck = $(":radio:checked");
		unanswer =	questionAll.length - radioCheck.length;
		console.log(unanswer);
		radioCheck.each( function (elem) {

			console.log(parseInt($(this).val()));
			if(parseInt($(this).val())) {
				correct++;
				console.log ("Correct " + correct);

			} else  {
				wrong++;
				console.log ("Wrong " + wrong);
			}

		});

			$(":radio").not(":checked").each( function (elem) {

				// if ($(this) = 4) {
				// 	unanswer = 1;
				// } 
				// else if ($(this) = 8) {
				// 	unanswer= 2; 
				// }
				// else if ($(this) = 12) {
				// 	unanswer= 3 ;
				// }
				// else if ($(this) = 16) {
				// 	unanswer= 4 ;
				// }
				// else if ($(this) = 20) {
				// 	unanswer= 5 ;
				// }

				console.log(unanswer);
				
		

			});



	});







});