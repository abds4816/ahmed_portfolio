window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        document.querySelector('.navbar').classList.add('sticky')
        document.querySelector('.navbar').classList.add('shadow-sm');
    }else{
        document.querySelector('.navbar').classList.remove('sticky')
        document.querySelector('.navbar').classList.remove('shadow-sm');
    }
})