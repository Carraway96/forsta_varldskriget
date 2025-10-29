const EVENTS = ["Kapprustning mellan stormakterna, särskilt mellan Tyskland och Storbritannien.", "Ärkehertig Franz Ferdinand mördas i Sarajevo.", "Österrike-Ungern ställer ett ultimatum till Serbien.", "Österrike-Ungern förklarar krig mot Serbien.", "”Svarta veckan” – krigsförklaringar avlöser varandra.", "Skyttegravskriget på västfronten börjar.", "Italien byter sida och går med i ententen.", "Tyskland börjar använda ubåtskrig mot handelsfartyg.", "USA går med i kriget på ententens sida.", "Ryska oktoberrevolutionen – bolsjevikerna tar makten. Ryssland och Tyskland förklarar fred.", "USA:s soldater anländer i stora mängder till Frankrike.", "Vapenvila undertecknas – kriget avslutas den 11 november.", "Versaillesfreden undertecknas.", "Nationernas Förbund bildas.", "Österrike-Ungern upplöses; nya stater som Polen, Tjeckoslovakien och Jugoslavien bildas."];

const TL_IMAGES = [["dreadnoughts.jpg", "Kapprustning mellan Tyskland och Storbritannien"], ["sarajevo.jpg", "Mordet på Franz Ferdinand i Sarajevo"], ["ultimatum_serbia.jpg", "Ultimatum till Serbien"], ["au_declares_war.jpg", "Ö-U förklarar krig mot Serbien"], ["black_week_headlines.jpg", "”Svarta veckan” – domino av krigsförklaringar"], ["ww1_trenches.jpg", "Skyttegravar på västfronten"], ["italy_1915.jpg", "Italien går med i ententen 1915"], ["u_boat.jpg", "Ubåtskrig mot handelsfartyg"], ["us_joins_1917.jpg", "USA går med i kriget 1917"], ["october_revolution.jpg", "Oktoberrevolutionen och Brest-Litovsk"], ["us_troops_france.jpg", "Amerikanska trupper i Frankrike"], ["armistice_11_11.jpg", "Vapenvila 11 november 1918"], ["versailles_signing.jpg", "Versaillesfreden 1919"], ["league_of_nations.jpg", "Nationernas Förbund bildas"], ["ah_dissolution_map.jpg", "Ö-U upplöses; nya stater bildas"]];
const ORDER = [...Array(EVENTS.length).keys()];
let pool = []; let placed = []; let selected = null;
const poolEl = document.getElementById('pool');
const tlEl = document.getElementById('timeline');
const tlHint = document.getElementById('tlhint');
const fb = document.getElementById('tlFeedback');
function reset(){
  pool = [...Array(EVENTS.length).keys()];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]];}
  placed = []; selected = null; render(); fb.style.display='none';
}
function render(){
  const img = document.getElementById('tlImage');
  const cap = document.getElementById('tlCap');
  poolEl.innerHTML = "";
  pool.forEach(idx => {
    const chip = document.createElement('button');
    chip.className = 'event-chip';
    chip.textContent = EVENTS[idx];
    if(selected === idx) chip.classList.add('selected');
    chip.onclick = ()=>{ selected = (selected===idx? null : idx); render(); const s = selected; if(s!==null){ img.style.display='block'; img.src='assets/images/'+TL_IMAGES[s][0]; cap.style.display='block'; cap.textContent=TL_IMAGES[s][1]; } };
    poolEl.appendChild(chip);
  });
  tlEl.innerHTML = "";
  if(placed.length===0){
    tlEl.appendChild(tlHint); tlHint.style.display='block';
  }else{
    tlHint.style.display='none';
    placed.forEach(idx => {
      const slot = document.createElement('div');
      slot.className = 'tl-slot';
      slot.textContent = EVENTS[idx];
      tlEl.appendChild(slot);
    });
  }
}
function place(side){
  if(selected==null) return;
  fb.style.display='none';
  if(placed.length===0){
    placed.push(selected);
    pool = pool.filter(i=>i!==selected);
    selected = null; render(); return;
  }
  const target = selected;
  const first = placed[0];
  const last = placed[placed.length-1];
  const okEarlier = ORDER[target] < ORDER[first];
  const okLater   = ORDER[target] > ORDER[last];
  let correct = false;
  if(side==='earlier' && okEarlier){ placed.unshift(target); correct = true; }
  if(side==='later'   && okLater){   placed.push(target);   correct = true; }
  if(correct){
    const lastIdx = side==='earlier'? placed[0] : placed[placed.length-1];
    img.style.display='block'; img.src='assets/images/'+TL_IMAGES[lastIdx][0]; cap.style.display='block'; cap.textContent=TL_IMAGES[lastIdx][1];
    pool = pool.filter(i=>i!==target); selected = null; render();
    fb.className='feedback ok'; fb.textContent='Rätt! Händelsen ligger tidigare/senare än de som redan placerats.'; fb.style.display='block';
  }else{
    fb.className='feedback bad'; fb.textContent='Fel plats. Den här händelsen ligger inte ännu tidigare/senare än tidslinjens ytterpunkter.'; fb.style.display='block';
  }
}
document.getElementById('placeEarlier').onclick = ()=>place('earlier');
document.getElementById('placeLater').onclick   = ()=>place('later');
document.getElementById('resetTl').onclick = reset;
reset();
