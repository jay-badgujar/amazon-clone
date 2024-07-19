var image = document.getElementsByClassName("key")
var lis = document.getElementsByClassName('i')
console.log(image);
console.log(lis);
var li = Array.from(lis)
li.forEach(element => {
    element.addEventListener('click', function () {
        image[0].src = element.src
    })
});