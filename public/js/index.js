let mode = 'dark';
const r = document.querySelector(':root');
const icons = document.getElementsByClassName('icon');
const rs = getComputedStyle(r);
const logo = document.querySelector('.logo');
const hero = document.querySelector('.welcome-section');
const btn = document.getElementById('btn-dot')
const navContact = document.getElementById('nav-contact-btn')
const homeContact = document.getElementById('home-contact')

const toggleDarkMode = () =>{
    if(mode==='dark'){
        btn.classList.toggle('activeDarkModeBtn')
        r.style.setProperty('--primary','#FBFBFB')
        r.style.setProperty('--secondary','#FEFBF3')
        r.style.setProperty('--el','black')
        r.style.setProperty('--accent','black')
        r.style.setProperty('--homeBtnText','white')
        logo.classList.toggle('logoLight')
        hero.classList.toggle('heroLight')
        navContact.classList.toggle('lightHomeBtn')
        homeContact.classList.toggle('lightHomeBtn')
        for(let i=0;i<icons.length;i++){
            icons[i].classList.toggle('darkIcon')
        }
        mode = 'light';

    }else if(mode==='light'){
        btn.classList.toggle('activeDarkModeBtn')
        r.style.setProperty('--primary','#1a1d22')
        r.style.setProperty('--secondary','#FEFBF3')
        r.style.setProperty('--el','white')
        r.style.setProperty('--accent','#b82a34')
        r.style.setProperty('--homeBtnText','lightgray')
        logo.classList.toggle('logoLight')
        hero.classList.toggle('heroLight')
        navContact.classList.toggle('lightHomeBtn')
        homeContact.classList.toggle('lightHomeBtn')
        for(let i=0;i<icons.length;i++){
            icons[i].classList.toggle('darkIcon')
        }
        mode = 'dark';
    }
}
