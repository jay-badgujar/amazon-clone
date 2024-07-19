var rtsc = document.getElementsByClassName("scroll_span")

var sc1 = document.getElementsByClassName("sc1")
var sc2 = document.getElementsByClassName("sc2")
rtsc[1].addEventListener('click', function () {
    sc2[0].classList.add('transition')
    sc2[0].style.transform = "translate(-1377px)"
    sc1[0].classList.add('transition')
    sc1[0].style.transform = "translate(-1377px)"
})
rtsc[0].addEventListener('click', function () {
    sc2[0].classList.add('transition')
    sc2[0].style.transform = "translate(1377px)"
    sc1[0].classList.add('transition1')
    sc1[0].style.transform = "translate(0px)"
})