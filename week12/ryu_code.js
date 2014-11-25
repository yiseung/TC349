$(document).ready(function() {
		$('#ryu-container').html('<img src="img/standing.png">')

$('#ryu-container img').hover( function() {
    this.src = 'img/jumping.gif'
}, function() {
    this.src = 'img/standing.png'
})

$('#ryu-container img').mousedown( function() {
    this.src = 'img/shooting.png' 
})

$('#ryu-container img').mousedown(function() {
    $('.hadouken').remove();
})

$('#ryu-container img').mousedown(function() {
    $('#ryu-container').append(
    '<img class="hadouken" style="position:absolute; top:65px;" src="img/hadouken.gif">'
    );
})

$('#ryu-container img').mousedown(function() {
    $('.hadouken').animate( {
        "margin-left": "600px"
    }, 1000, 'swing', function() {
        this.remove();
    })
})

$('#ryu-container img').mouseup(function() {
    this.src = 'img/standing.png'
})
})

