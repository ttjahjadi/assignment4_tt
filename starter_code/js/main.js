// document.querySelector('a').addEventListener('click', function() {
//     event.preventDefault()

// })


// document.querySelector('.readmore a').addEventListener("click" , function() {
//     event.preventDefault()
//     // you can write here
// })


// This is to prevent from any a tag to scroll up when its running a function
$('.readmore a, .readless a, .learnmore').click(function(){
    event.preventDefault()
})


$('.readmore a').click(function() {
    $('#show-this-on-click').slideDown(500)
    $('.readless').removeClass('hide')
    $('.readmore').hide()
})

$('.readless a').click(function() {
    $('#show-this-on-click').slideUp(500)
    $('.readless').addClass('hide')
    $('.readmore').show()
})


$('.learnmore').click(function(){
    $('#learnmoretext').slideDown()
    $('.learnmore').hide()

})


