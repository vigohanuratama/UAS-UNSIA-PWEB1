const navLink = document.querySelectorAll('.nav-link')

navLink.forEach((el)=>{
    if(el.href === window.location.href){
        el.classList.add('active')
        console.log(el.classList)
    }
})