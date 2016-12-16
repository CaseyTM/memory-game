var cards = [
    '<img src="images/animal-kingdom-01.jpg">',
    '<img src="images/animal-kingdom-04.jpg">',
    '<img src="images/animal-kingdom-night-06.jpg">',
    '<img src="images/animal-kingdom-07.jpg">',
    '<img src="images/animal-kingdom-night-06.jpg">'
];



// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 8;

	var card = '<img src="http://www.relatably.com/m/img/iron-man-meme-generator/mc-iron-man-meme-generator-stop-i-am-iron-man-ce3373.jpg">';
	


	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 2){card = cards[0];
		}else if(i < 4){
			card = cards[1];
		}else if(i < 6){
			card = cards[2]
		}else{
			card = cards[3]
		}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

    $('.mg-contents').html(mgHTML);
	$('.mg-tile-inner').click(function(){
		$(this).toggleClass('flip');
		var cardsUp = $('.flip');
		// console.log(cardsUp.length);
		// console.log(cardsUp);
		if(cardsUp.length == 2){
			var cardsUpImages = cardsUp.find('.mg-front img');
						// check to see if they are the same 
			if(cardsUpImages[0].src == cardsUpImages[1].src){
				// THIS IS A MATCH
				// console.log("match");
				cardsUp.addClass('matched');
				cardsUp.removeClass('flip');
			}else{
				// the user has flipped 2 cards that do not match, flip them back over
				setTimeout(function(){
				cardsUp.removeClass('flip');
				}, 2000);
				
			}
		}else{
			// DO NOTHING
		}




	});






});





