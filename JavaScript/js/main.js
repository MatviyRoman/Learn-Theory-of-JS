$(function(){
	$('h2').click( function(){
		$('h2').addClass('active');
	})
})

$(function(){
	$('#typeData').click( function(){
		$('.typeData').toggle();
	})
})

$(function(){
	$('#this').click( function(){
		$('.this').toggle();
	})
})

$(function(){
	$('#let-var').click( function(){
		$('.let-var').toggle();
	})
})

$(function(){
	$('#let-var-const').click( function(){
		$('.let-var-const').toggle();
	})
})

// Nav Read
$(function(){
	$('#read').click( function(){
		$('.read').toggle();
	})
})





// $(window).on('load', function(){
// 	$('.typeData').on('typeData.html .jumbotron');
// })



$(window).on('load', function(){
	$('.open').click( function(){
		$('.window').toggle();
	})
})





var callbacks = []

for (var i = 0; i < 3; ++i) {
	// console.log(i);
  callbacks[i] = function () {
    console.log(i);
  }
}

callbacks.forEach(function (cb) {
  cb()
})



