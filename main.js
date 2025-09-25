
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', ()=>{
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '0.8rem';
  menuBtn.setAttribute('aria-expanded', String(!open));
});
document.getElementById('year').textContent = new Date().getFullYear();
