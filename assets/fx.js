(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, fine=matchMedia('(pointer: fine)').matches;
// scroll progress
var bar=document.createElement('div');bar.className='fx-progress';bar.innerHTML='<i></i>';document.body.appendChild(bar);var bi=bar.firstChild,tick=false;
function upd(){var h=document.documentElement,m=h.scrollHeight-innerHeight;bi.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')';tick=false;}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});upd();
if(reduce)return;
// headline word reveal
document.querySelectorAll('.page-hero h1,.sites-hero h1').forEach(function(h){if(h.children.length)return;var w=h.textContent.trim().split(/\s+/);h.innerHTML=w.map(function(x,i){return '<span class="fx-w" style="--i:'+i+'">'+x+'</span>';}).join(' ');h.classList.add('fx-words');});
// stagger reveals inside grids
document.querySelectorAll('.curriculum-list,.perk-grid,.flow-grid,.ws-grid,.sites-grid-inner').forEach(function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i%8)*70+'ms';});});
// watermark parallax
var wms=[].slice.call(document.querySelectorAll('.watermark'));
if(wms.length)addEventListener('scroll',function(){wms.forEach(function(w){var r=w.parentNode.getBoundingClientRect();w.style.transform='translate(-50%,calc(-50% + '+(r.top*-0.12)+'px)) rotate(-6deg)';});},{passive:true});
if(!fine)return;
// cursor glow in hero areas
document.querySelectorAll('.page-hero,.sites-hero,#hero,.fx-form-sec,.cta-band').forEach(function(s){var w=document.createElement('div');w.className='fx-glow-wrap';var g=document.createElement('div');g.className='fx-glow';w.appendChild(g);s.classList.add('fx-host');s.insertBefore(w,s.firstChild);s.addEventListener('mousemove',function(e){var r=s.getBoundingClientRect();g.style.left=(e.clientX-r.left)+'px';g.style.top=(e.clientY-r.top)+'px';});});
// tilt cards
document.querySelectorAll('.perk,.flow-step,.ws-item,.ws-step,.service-card,.course-card-side,.instructor-box,.site-card').forEach(function(c){c.classList.add('fx-tilt');c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateY('+(x*6)+'deg) rotateX('+(-y*6)+'deg) translateY(-4px)';});c.addEventListener('mouseleave',function(){c.style.transform='';});});
})();
