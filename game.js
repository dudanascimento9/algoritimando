const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LEVELS=[
{id:0,name:'Sanduíche',place:'Cozinha',who:'🧑‍🍳',pic:'🥪',obj:'🥪',color:'#8a5a2b',b1:'#c7a06a',b2:'#b8473f',bg:'#f3e2c4',goal:'Monte o sanduíche na ordem correta!',intro:'Nosso cliente quer um sanduíche! Arraste os passos do 1 ao 4.',err:'Fechar o pão agora? Ainda faltam os recheios!',
 steps:[['🍞','Pegue duas fatias'],['🧀','Coloque o queijo'],['🥓','Coloque o presunto'],['🥪','Feche o sanduíche']]},
{id:1,name:'Robô e o cubo',place:'Fábrica',who:'🤖',pic:'📦',obj:'🧊',color:'#2f4f7f',b1:'#aab0b5',b2:'#31497a',bg:'#e3e0d8',goal:'Mande o robô guardar o cubo!',intro:'Hora do treino! Ensine o robô a pegar o cubo e levar até a base.',err:'O robô não pode soltar o cubo antes de pegar!',
 steps:[['🦾','Pegue o cubo'],['🔄','Vire o cubo'],['🚚','Leve o cubo para a base'],['⬇️','Solte o cubo na base']]},
{id:2,name:'Mochila',place:'Escola',who:'👧',pic:'🎒',obj:'🎒',color:'#3f7d3f',b1:'#2f7a46',b2:'#6b4a2b',bg:'#e7d6dc',goal:'Hora de estudar! Arrume sua mochila.',intro:'A aula já vai começar! Ajude a arrumar a mochila: arraste os passos do 1 ao 4.',err:'Tem que abrir a mochila antes de guardar os livros!',
 steps:[['👜','Abra a mochila'],['📚','Coloque os livros na mochila'],['🤐','Feche a mochila'],['🧍','Coloque a mochila nas costas']]},
{id:3,name:'Abelhas',place:'Jardim',who:'🐝',pic:'🍯',obj:'🍯',color:'#a8820a',b1:'#f5c542',b2:'#e0a91c',bg:'#f6e7b5',goal:'Ajude as abelhas na missão!',intro:'As abelhas querem fazer mel. O que elas precisam fazer primeiro?',err:'Primeiro a abelha precisa voar até a flor!',
 steps:[['🌻','Voe até a flor'],['🌼','Colete o néctar'],['🏠','Leve o néctar para a colmeia'],['🍯','Guarde o mel']]}];
const STORY=[['🏘️','linear-gradient(#b9a9c9,#8a7f93)','Na cidade de Algoritimando, os chamados de ajuda não param de chegar.'],
['🤖','linear-gradient(#f3d9b1,#c9a679)','Este é o Robô-guia. Ele sabe onde cada pessoa precisa de ajuda.'],
['🪪','linear-gradient(#9d8cb0,#6f6380)','Você vai ser o novo estagiário. Aqui está o seu crachá!'],
['🗺️','linear-gradient(#a9c3dd,#7c93ad)','Cada ponto laranja é um chamado. Ensine o robô, passo a passo.']];
const S=Object.assign({name:'Agente',av:'0',stars:0,hints:1,done:{},rate:{},snd:true},JSON.parse(localStorage.getItem('algo')||'{}'));
const avSrc=()=>'img/av'+(S.av==='1'?1:0)+'.png';
const save=()=>localStorage.setItem('algo',JSON.stringify(S));
let ctx;const beep=(f,d=.12,t='sine')=>{if(!S.snd)return;try{ctx=ctx||new AudioContext();const o=ctx.createOscillator(),g=ctx.createGain();o.type=t;o.frequency.value=f;g.gain.value=.08;o.connect(g);g.connect(ctx.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+d);o.stop(ctx.currentTime+d)}catch(e){}};
const jingle=()=>[523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,.2),i*120));
function go(id){$$('.screen').forEach(s=>s.classList.toggle('on',s.id===id));beep(440,.08)}
function hud(){$$('.who').forEach(e=>e.innerHTML='<img class="ci" src="'+avSrc()+'" alt=""> '+S.name.replace(/</g,'&lt;'));const t=Object.values(S.rate).reduce((a,b)=>a+b,0);S.stars=t;$$('.gStars,#hubStars').forEach(e=>e.textContent=t)}
/* menu + story */
$('#bPlay').onclick=()=>{story(0);go('story')};
$('#bSound').onclick=e=>{S.snd=!S.snd;e.target.textContent='Sons: '+(S.snd?'ligado':'desligado');beep(600);save()};
$('#bSound').textContent='Sons: '+(S.snd?'ligado':'desligado');
$('#bHow').onclick=()=>$('#how').classList.add('on');$('#bHowClose').onclick=()=>$('#how').classList.remove('on');
let si=0;function story(i){si=i;const[a,bg,t]=STORY[i];$('#sceneArt').style.backgroundImage='url(img/story'+(i+1)+'.jpg)';$('#sceneText').textContent=t;
$('#dots').innerHTML=STORY.map((_,k)=>'<i class="'+(k===i?'on':'')+'"></i>').join('');$('#bNext').textContent=i===STORY.length-1?'Começar!':'Avançar ›'}
$('#bNext').onclick=()=>{si<STORY.length-1?story(si+1):toChar()};$('#bSkip').onclick=toChar;
function toChar(){go('char');$('#nameIn').focus()}
$$('.avatar').forEach(b=>b.onclick=()=>{$$('.avatar').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');S.av=b.dataset.a;$('#badgeFace').src=avSrc();beep(520)});
$('#nameIn').oninput=e=>$('#badgeName').textContent=e.target.value.trim()||'Agente';
$('#bConfirm').onclick=()=>{S.name=$('#nameIn').value.trim()||'Agente';save();hub('Bem-vindo, '+S.name+'! Escolha um chamado e toque em "Atender".')};
$$('[data-home]').forEach(b=>b.onclick=()=>hub());
/* hub */
function hub(msg){hud();const n=Object.keys(S.done).length;
$('#calls').innerHTML=LEVELS.map(l=>{const r=S.rate[l.id]||0;return`<div class="call ${S.done[l.id]?'done':''}" style="--c:${l.color}"><div class="who"><img src="img/who${l.id+1}.png" alt=""></div><div class="pic"><img src="img/pic${l.id+1}.jpg" alt=""></div><div class="meta"><div><b>${l.name}</b><small>Chamado ${l.id+1} · ${l.place}</small></div>${S.done[l.id]?`<span class="st">${'★'.repeat(r)}<u>${'★'.repeat(3-r)}</u></span>`:`<button class="btn" data-l="${l.id}">Atender ›</button>`}</div></div>`}).join('');
$$('[data-l]').forEach(b=>b.onclick=()=>play(+b.dataset.l));
$('#bRestart').hidden=n<4;$('#progTxt').textContent=n+' de 4';$('#progBar').style.width=n*25+'%';
$('#hubMsg').textContent=msg||(n===0?'Toque em "Atender" para começar.':n<4?'Ótimo trabalho! Ainda faltam '+(4-n)+' chamados.':'Todos os chamados concluídos!');go('hub')}
/* level */
let L,slots,errs,hintsUsed;
function play(i){L=LEVELS[i];$('#lvFace img').src='img/guide.png';slots=[null,null,null,null];errs=0;
const lv=$('#level');lv.style.setProperty('--bg',L.bg);lv.style.setProperty('--img','url(img/level'+(i+1)+'.jpg)');lv.style.setProperty('--b1',L.b1);lv.style.setProperty('--b2',L.b2);
$('#goal').textContent=L.goal;$('#goal').style.background=L.color;$('#guideMsg').textContent=L.intro;$('#lvlTxt').textContent='Chamado '+(i+1)+' de 4';
$('#speech').classList.remove('on');hud();$('#hintN').textContent=S.hints;
const order=[...L.steps.keys()].sort(()=>Math.random()-.5);if(order.join()==='0,1,2,3')order.reverse();
$('#tray').innerHTML=order.map(k=>`<div class="card" draggable="true" data-k="${k}"><em>${L.steps[k][0]}</em><span>${L.steps[k][1]}</span></div>`).join('');
draw();go('level')}
function draw(){const placed=new Set(slots);
$('#board').innerHTML=slots.map((k,n)=>`<div class="slot ${k!==null?'has':''}" data-n="${n}">${k!==null?`<div class="card" draggable="true" data-k="${k}"><em>${L.steps[k][0]}</em><span>${L.steps[k][1]}</span></div>`:n+1}</div>`).join('');
$$('#tray .card').forEach(c=>c.classList.toggle('used',placed.has(+c.dataset.k)));bind()}
function bind(){$$('.card').forEach(c=>{c.ondragstart=e=>{e.dataTransfer.setData('k',c.dataset.k);beep(500,.05)};
c.onclick=()=>{const k=+c.dataset.k,at=slots.indexOf(k);if(at>-1){slots[at]=null}else{const e=slots.indexOf(null);if(e>-1)slots[e]=k}beep(at>-1?380:620,.07);draw()}});
$$('.slot').forEach(s=>{s.ondragover=e=>{e.preventDefault();s.classList.add('over')};s.ondragleave=()=>s.classList.remove('over');
s.ondrop=e=>{e.preventDefault();const k=+e.dataTransfer.getData('k'),old=slots.indexOf(k);if(old>-1)slots[old]=null;slots[+s.dataset.n]=k;beep(660,.08);draw()}})}
$('#bCheck').onclick=()=>{if(slots.includes(null)){say('Faltam passos! Preencha de 1 a 4 antes de verificar.');return}
let ok=0;$$('.slot').forEach((s,n)=>{const right=slots[n]===n;if(right)ok++;s.classList.add(right?'ok':'bad')});
if(ok===4){setTimeout(win,600);beep(784,.2)}else{errs++;beep(220,.3,'square');$('#lvFace img').src='img/guide-triste.png';setTimeout(()=>say(L.err),400)}};
function say(t){$('#speech p').textContent=t;$('#speech').classList.add('on')}
$('#bRetry').onclick=()=>{$('#lvFace img').src='img/guide.png';slots=[null,null,null,null];$('#speech').classList.remove('on');draw()};
$('#bHint').onclick=()=>{if(S.hints<1){say('Você não tem dicas. Conclua um chamado para ganhar mais!');return}
const n=slots.findIndex((k,i)=>k!==i);if(n<0)return;S.hints--;$('#hintN').textContent=S.hints;errs++;const old=slots.indexOf(n);if(old>-1)slots[old]=null;slots[n]=n;save();draw();
$('#lvFace img').src='img/guide-feliz.png';$('#guideMsg').textContent='Passo '+(n+1)+': "'+L.steps[n][1]+'". Dá para fazer o resto!';$('#speech').classList.remove('on')};
/* win */
function win(){$('#win .face img').src='img/guide-feliz.png';const r=errs===0?3:errs===1?2:1;S.rate[L.id]=Math.max(S.rate[L.id]||0,r);S.done[L.id]=true;S.hints++;save();hud();jingle();
$('#win').style.setProperty('--img','url(img/win'+(L.id+1)+'.jpg)');$('#winStars').textContent='⭐'.repeat(r);$('#winN').textContent=r;
$('#winMsg').textContent=r===3?'Perfeito! Sem nenhum erro!':'Nível concluído! Clique no botão para retornar à central.';$('#bBack .mini').style.backgroundImage='url('+avSrc()+')';go('win')}
$('#bBack').onclick=()=>{if(Object.keys(S.done).length===4&&!S.promoted){S.promoted=true;save();$('#promo').style.setProperty('--img','url(img/promo'+(S.av==='1'?1:0)+'.jpg)');hud();go('promo');jingle()}else hub()};
$('#bPromoNext').onclick=()=>{$('#finName').textContent=S.name;$('#finAg').src='img/agente-'+(S.av==='1'?'menino':'menina')+'.png';$('#finStars').textContent='⭐'.repeat(Math.round(S.stars/4));go('final')};
$('#bToHub').onclick=()=>hub();
function restart(){S.done={};S.rate={};S.hints=1;S.promoted=false;save();hub('Novos chamados chegando! Boa sorte, '+S.name+'!')}
$('#bAgain').onclick=restart;
$('#bRestart').onclick=()=>$('#again').classList.add('on');
$('#bNo').onclick=()=>$('#again').classList.remove('on');
$('#bYes').onclick=()=>{$('#again').classList.remove('on');restart()};
hud();
$('#menu').classList.add('on');
