$(document).ready(function() {
    var   correct = wrong = unanswer= 0;
	
	var reset = function () {
		$('.content').empty();
		$('.summary').empty();
		$('.timer').hide();
		$('.content').hide();
		$('.submit').hide();
		$('.summary').hide();	
		$('.reset').hide();
		$('.startButn').show();
		$('.instructions').show();
		correct = wrong = unanswer= 0;
	};

	reset();
	
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
   		$(".timer").html("Time left: "+ counter + " Seconds");
		setInterval(function() {
		counter--;
			if (counter >= 0) {				
				$(".timer").html("Time left: "+ counter + " Seconds");
			}
			if (counter == 0) {
				clearInterval(counter);
				$( '.submit' ).trigger( "click" );
			}
		}, 1000);

	};


	$('.startButn').on ('click', function () {
		var startB = $(this);
		startB.hide();
		$ ('.instructions').hide();
		$('.timer').show();
		$('.content').show();
		$('.submit').show();		
		

		timer(); 

		// Display questions and choice 
		
		for (var i = 0; i < 5; i++ ) {

            var question = $('<div class="question'+i+'"></div><br>');
            $('.content').append(question);

                                    
            var allquestions = $('<h1 class="header'+i+'">'+questionAll[i].q+'</h1>');
			$(".question"+i).append(allquestions);

	  		var allforms = $('<form class ="form'+i+'"></form>');
	        $(".question"+i).append(allforms);

	        for (var j = 0; j < 4 ; j ++) {
	        	var inputButn = $('<input type="radio" name="choice" value="'+(questionAll[i].correct == j?1:0) +'">'+questionAll[i].a[j]+'</input><br>');
	        	$('.form'+i).append(inputButn);

	        };

        };       	



	});

	$('.submit').on ('click', function () {
		var submitBtn = $(this);
		$('.timer').hide();
		$('.content').hide();
		submitBtn.hide();
		$('.summary').show();
		$('.reset').show();
		

		var radioCheck = $(":radio:checked");
		unanswer =	questionAll.length - radioCheck.length;
		
		radioCheck.each( function (elem) {

			console.log(parseInt($(this).val()));
			if(parseInt($(this).val())) {
				correct++;	
			} else  {
				wrong++;	
			}

		});

		$('.summary').html('<ul><li> Correct: '+correct+'</li>  <li>Wrong: '+wrong+' </li>  <li>Unanswer: '+unanswer+'</li></ul>')

		if(correct >= 4) {

			$('.summary').append('<img src="assets/images/youawesome.gif" alt="you rock" height="250" width="250">')

		} else {

			$('.summary').append('<img src="assets/images/lost.gif" alt="you rock" height="250" width="250">')		

		}		

	});

	$('.reset').on ('click', function() {
		reset ();
	});

});