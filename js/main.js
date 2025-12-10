// Language map (ES/EN)
const translations = {
  'es':{
    nav_home:'Inicio',nav_projects:'Proyectos',nav_contact:'Contacto',
    home_title:'Portafolio de Rubén',home_intro:'Soy Rubén, estudio ciberseguridad (ASIXc). Aquí tienes algunos de mis proyectos.',
    proj1_title:'Proyecto 1',proj1_desc:'Breve descripción del proyecto 1. Haz clic en la imagen para ver más.',
    proj2_title:'Proyecto 2',proj2_desc:'Breve descripción del proyecto 2. Haz clic en la imagen para ver más.',
    see_all:'Ver todos los proyectos'
  },
  'en':{
    nav_home:'Home',nav_projects:'Projects',nav_contact:'Contact',
    home_title:'Rubén\'s Portfolio',home_intro:'I study cybersecurity (ASIXc). Here are some of my projects.',
    proj1_title:'Project 1',proj1_desc:'Short description of project 1. Click the image to see more.',
    proj2_title:'Project 2',proj2_desc:'Short description of project 2. Click the image to see more.',
    see_all:'See all projects'
  }
};

const langBtn = document.querySelectorAll('#langBtn');
const themeBtn = document.querySelectorAll('#themeBtn');

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  localStorage.setItem('site-lang',lang);
}

function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? '' : 'dark';
  if(next) document.documentElement.setAttribute('data-theme','dark'); else document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('site-theme', next || 'light');
}

langBtn.forEach(b=>b.addEventListener('click',()=>{
  const cur = document.documentElement.lang || 'es';
  setLang(cur==='es'?'en':'es');
}));

themeBtn.forEach(b=>b.addEventListener('click',toggleTheme));

// initialize
(function(){
  const savedLang = localStorage.getItem('site-lang') || 'es';
  setLang(savedLang);
  const savedTheme = localStorage.getItem('site-theme');
  if(savedTheme === 'dark') document.documentElement.setAttribute('data-theme','dark');
})();
