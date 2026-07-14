const burger = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const closeNav = document.getElementById('closeNav');
const overlay = document.getElementById('overlay');

function openNav(){ mobileNav.classList.add('open'); overlay.classList.add('show'); }
function closeNavFn(){ mobileNav.classList.remove('open'); overlay.classList.remove('show'); }

if(burger){
  burger.addEventListener('click', openNav);
  closeNav.addEventListener('click', closeNavFn);
  overlay.addEventListener('click', closeNavFn);
  document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', closeNavFn));
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const header = document.querySelector('header');
if(header){
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 40){ header.style.background = 'rgba(11,11,13,.98)'; }
    else{ header.style.background = 'rgba(11,11,13,.92)'; }
  });
}
