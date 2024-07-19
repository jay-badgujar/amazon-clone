var rt = document.getElementsByClassName("arrow")

var sc1 = document.getElementsByClassName("moving_imgs1")
var sc2 = document.getElementsByClassName("moving_imgs2")
rt[1].addEventListener('click', function () {
    sc2[0].classList.add('transition')
    sc2[0].style.transform = "translate(-1496px)"
    sc1[0].classList.add('transition')
    sc1[0].style.transform = "translate(-1496px)"
})
rt[0].addEventListener('click', function () {
    sc2[0].classList.add('transition')
    sc2[0].style.transform = "translate(1496px)"
    sc1[0].classList.add('transition1')
    sc1[0].style.transform = "translate(0px)"
})