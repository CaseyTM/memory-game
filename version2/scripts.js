
var cards = [
'<img src="1s.png">',
'<img src="3s.png">',
'<img src="4s.png">',
'<img src="5s.png">',
'<img src="6s.png">',
'<img src="7s.png">',
'<img src="8s.png">',
'<img src="9s.png">',
'<img src="10s.png">',
'<img src="11s.png">',
'<img src="12s.png">', 
'<img src="13s.png">',
'<img src="1h.png">',
'<img src="3h.png">',
'<img src="4h.png">',
'<img src="5h.png">',
'<img src="6h.png">',
'<img src="7h.png">',
'<img src="8h.png">',
'<img src="9h.png">',
'<img src="10h.png">',
'<img src="11h.png">',
'<img src="12h.png">',
'<img src="13h.png">',
'<img src="1d.png">',
'<img src="3d.png">',
'<img src="4d.png">',
'<img src="5d.png">',
'<img src="6d.png">',
'<img src="7d.png">',
'<img src="8d.png">',
'<img src="9d.png">',
'<img src="10d.png">',
'<img src="11d.png">',
'<img src="12d.png">',
'<img src="13d.png">',
'<img src="1c.png">',
'<img src="3c.png">',
'<img src="4c.png">',
'<img src="5c.png">',
'<img src="6c.png">',
'<img src="7c.png">',
'<img src="8c.png">',
'<img src="9c.png">',
'<img src="10c.png">',
'<img src="11c.png">',
'<img src="12c.png">',
'<img src="13c.png">',
 
];




$(document).ready(function(){
	var gridSize = 98;

	var card = [];
	


	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 2){card = cards[0];
		}else if(i < 4){
			card = cards[1];
		}else if(i < 6){
			card = cards[2];
		}else if(i < 8){
			card = cards[3];
		}else if(i < 10){
			card = cards[4];
		}else if(i < 12){
			card = cards[5];
		}else if(i < 14){
			card = cards[6];
		}else if(i < 16){
			card = cards[7];
		}else if(i < 18){
			card = cards[8];
		}else if(i < 20){
			card = cards[9];
		}else if(i < 22){
			card = cards[10];
		}else if(i < 24){
			card = cards[11];
		}else if(i < 26){
			card = cards[12];
		}else if(i < 28){
			card = cards[13];
		}else if(i < 30){
			card = cards[14];
		}else if(i < 32){
			card = cards[15];
		}else if(i < 34){
			card = cards[16];
		}else if(i < 36){
			card = cards[17];
		}else if(i < 38){
			card = cards[18];
		}else if(i < 40){
			card = cards[19];
		}else if(i < 42){
			card = cards[20];
		}else if(i < 44){
			card = cards[21];
		}else if(i < 46){
			card = cards[22];
		}else if(i < 48){
			card = cards[23];
		}else if(i < 50){
			card = cards[24]
		}else if(i < 52){
			card = cards[25];
		}else if(i < 54){
			card = cards[26]
		}else if(i < 56){
			card = cards[27];
		}else if(i < 58){
			card = cards[28]
		}else if(i < 60){
			card = cards[29];
		}else if(i < 62){
			card = cards[30]
		}else if(i < 64){
			card = cards[31];
		}else if(i < 66){
			card = cards[32];
		}else if(i < 68){
			card = cards[33];
		}else if(i < 70){
			card = cards[34];
		}else if(i < 72){
			card = cards[35];
		}else if(i < 74){
			card = cards[36];
		}else if(i < 76){
			card = cards[37];
		}else if(i < 78){
			card = cards[38];
		}else if(i < 80){
			card = cards[39];
		}else if(i < 82){
			card = cards[40];
		}else if(i < 84){
			card = cards[41];
		}else if(i < 86){
			card = cards[42];
		}else if(i < 88){
			card = cards[43];
		}else if(i < 90){
			card = cards[44];
		}else if(i < 92){
			card = cards[45];
		}else if(i < 94){
			card = cards[46];
		}else if(i < 96){
			card = cards[47];
		}else{card = cards[48];
		}
		mgHTML += '<div class="mg-tile">';
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


// function shuffleArray(){
// 	for(let i = 0; i < cards.length; i++){
// 		var random1 = Math.floor.(Math.random() * cards.length);
// 		var random2 = Math.floor.(Math.random() * cards.length);
// 		var temp = cards[random1];
// 		cards[random1] = cards[random2];
// 		cards[random2] = temp;
// 	}
// };







