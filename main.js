// to top

window.addEventListener('scroll',function(){
    var toTop = this.document.querySelector('.to-top');
    toTop.classList.toggle('active',window.scrollY > 100)
})



// sticky header

window.addEventListener('scroll',function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0)
})




// slide show

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})













