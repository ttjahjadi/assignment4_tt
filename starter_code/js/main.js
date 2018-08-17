// document.querySelector('a').addEventListener('click', function() {
//     event.preventDefault()

// })


// document.querySelector('.readmore a').addEventListener("click" , function() {
//     event.preventDefault()
//     // you can write here
// })


// This is to prevent from any a tag to scroll up when its running a function
$('a, .readmore a, .readless a, .learnmore').click(function(){
    event.preventDefault()
})

// old code
// $('.readmore a').click(function() {
//     $('#show-this-on-click').slideDown(500)
//     $('.readless').removeClass('hide')
//     $('.readmore').hide()
// })

// $('.readless a').click(function() {
//     $('#show-this-on-click').slideUp(500)
//     $('.readless').addClass('hide')
//     $('.readmore').show()
// })

// new code
$('.readmore a').click(function() {
    $('#show-this-on-click').slideToggle('slow')
    var newText = $('.readmore a').text("Read less")
    if(newText === "Read less"){
        $('.readmore a').text("Read more")
    }
    // $('.readmore').html("<a href='#'>Read less</a>")

})


$('.learnmore').click(function(){
    $('#learnmoretext').slideDown()
    $('.learnmore').hide()

})


