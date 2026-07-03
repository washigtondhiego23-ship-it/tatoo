//=============================
// LOADER
//=============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.display = "none";

    }, 2300);

});

//=============================
// NAVBAR
//=============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        nav.style.background = "rgba(0,0,0,.92)";
        nav.style.padding = "18px 9%";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.4)";

    } else {

        nav.style.background = "rgba(0,0,0,.45)";
        nav.style.padding = "25px 9%";
        nav.style.boxShadow = "none";

    }

});

//=============================
// SCROLL REVEAL
//=============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

cards.forEach(card=>{

    observer.observe(card);

});

//=============================
// ARTISTAS
//=============================

const artists = document.querySelectorAll(".artist");

const artistObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(100px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1000,
fill:"forwards",
easing:"ease"

});

}

});

},{threshold:.25});

artists.forEach(a=>artistObserver.observe(a));

//=============================
// CONTADORES
//=============================

const numbers = document.querySelectorAll(".number h2");

let started = false;

window.addEventListener("scroll",()=>{

const section = document.querySelector(".numbers");

if(!section) return;

const pos = section.getBoundingClientRect().top;

if(pos < window.innerHeight && !started){

started = true;

numbers.forEach(counter=>{

let final = parseInt(counter.innerText.replace(/\D/g,""));

let current = 0;

let speed = Math.max(10, Math.floor(final/120));

const timer = setInterval(()=>{

current += speed;

if(current >= final){

current = final;
clearInterval(timer);

}

counter.innerText = current + "+";

},20);

});

}

});

//=============================
// PARALLAX HERO
//=============================

const hero = document.querySelector(".hero-img");

window.addEventListener("scroll",()=>{

let y = window.scrollY;

if(hero){

hero.style.transform = `translateY(${y*0.3}px) scale(1.08)`;

}

});

//=============================
// LIGHTBOX
//=============================

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

const image = document.createElement("img");

image.src = img.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(image);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

//=============================
// EFEITO MOUSE
//=============================

const cursor = document.createElement("div");

cursor.className = "cursor";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX+"px";
cursor.style.top = e.clientY+"px";

});

//=============================
// BOTÕES
//=============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:500

});

});

});

//=============================
// EFEITO NAS IMAGENS
//=============================

galleryImages.forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const rect = img.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

img.style.transformOrigin = `${x}px ${y}px`;

});

});

//=============================
// TEXTO HERO
//=============================

const title = document.querySelector(".hero-content h1");

if(title){

title.animate([

{

opacity:0,
transform:"translateY(100px)"

},

{

opacity:1,
transform:"translateY(0)"

}

],{

duration:1800,
fill:"forwards",
easing:"ease-out"

});

}//=====================================
// CURSOR INTELIGENTE
//=====================================

const cursor = document.querySelector(".cursor");

document.querySelectorAll("a, button, .card, .artist").forEach(el=>{

    el.addEventListener("mouseenter",()=>{

        cursor.classList.add("hover");

    });

    el.addEventListener("mouseleave",()=>{

        cursor.classList.remove("hover");

    });

});

//=====================================
// BRILHO ACOMPANHANDO O MOUSE
//=====================================

const glow = document.querySelector(".glow");

window.addEventListener("mousemove",(e)=>{

    glow.style.opacity=1;

    glow.style.left=e.clientX-175+"px";

    glow.style.top=e.clientY-175+"px";

});

//=====================================
// REVEAL
//=====================================

const reveals=document.querySelectorAll(".title,.about-text,.number,.artist");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.25});

reveals.forEach(r=>{

r.classList.add("reveal");

revealObserver.observe(r);

});

//=====================================
// PARTÍCULAS
//=====================================

const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const particles=[];

for(let i=0;i<90;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3+1,

dx:(Math.random()-.5),

dy:(Math.random()-.5)

});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="rgba(209,0,0,.45)";

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

});

requestAnimationFrame(animateParticles);

}

animateParticles();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

//=====================================
// PARALLAX DAS SEÇÕES
//=====================================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

const y=window.pageYOffset;

sections.forEach((sec,index)=>{

sec.style.backgroundPositionY=(y*(0.05*(index+1)))+"px";

});

});

//=====================================
// EFEITO NAS FOTOS
//=====================================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.transform=

`perspective(1000px)
rotateX(${-(y-rect.height/2)/25}deg)
rotateY(${(x-rect.width/2)/25}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

//=====================================
// STAGGER NAS IMAGENS
//=====================================

const gallery=document.querySelectorAll(".gallery .card");

gallery.forEach((item,index)=>{

item.style.transitionDelay=`${index*120}ms`;

});

//=====================================
// HERO
//=====================================

const heroTitle=document.querySelector(".hero-content h1");

let angle=0;

function floatingTitle(){

angle+=0.02;

heroTitle.style.transform=`translateY(${Math.sin(angle)*10}px)`;

requestAnimationFrame(floatingTitle);

}

floatingTitle();

//=====================================
// SCROLL PROGRESS
//=====================================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#d10000";
progress.style.zIndex="999999";
progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const h=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/h)*100;

progress.style.width=percent+"%";

});

//=====================================
// MENU MOBILE
//=====================================

const menu=document.querySelector(".menu");

const navLinks=document.querySelector("nav ul");

menu.addEventListener("click",()=>{

navLinks.classList.toggle("open");

});

//=====================================
// FIM
//=====================================

console.log("%cINK STUDIO","font-size:30px;color:#d10000;font-weight:bold;");