let search=document.querySelector('.search-box')
let icon =document.querySelector('#search-icon')
icon.addEventListener('click',()=>{
    search.classList.toggle('active')
    navMenu.classList.remove('active')
    console.log('clicked');
})
let header=document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY>0);
});
let iconMenu = document.querySelector('.menu-icon')

let navMenu=document.querySelector('.nav-menu')
iconMenu.addEventListener('click' , ()=>{
    navMenu.classList.toggle('active')
    search.classList.remove('active')


})
window.onscroll=()=>{
    search.classList.remove('active')
    navMenu.classList.remove('active')



}
