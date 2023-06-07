// evenement bouton afficher version
const fenetreAng=document.querySelector('.fenetreFrancais');
const button=document.getElementById('ang');

button.addEventListener ('click' , () =>{
   fenetreAng.classList.toggle('show');
})

//evenement responsive version telephone
const button_menu=document.querySelector('.logoBurger');
const head=document.querySelector('.header');

button_menu.addEventListener('click',() =>{
    head.classList.toggle('hideshow');
})