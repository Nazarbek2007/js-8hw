let box = document.querySelector('.box')

console.log(box);


box.addEventListener('click', () => {
    if (box.classList.contains('box')) {
        box.classList.remove('box')
        box.classList.add('circle')
    } else {
        box.classList.add('box')
        box.classList.remove('circle')
    }

})