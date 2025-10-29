const SET_ILLUSTRATIONS = [["nationalism_poster.jpg", "Nationalismen → Sarajevo → Allianser → WW1"], ["dreadnoughts.jpg", "Kapprustning och flottor"], ["colonial_map.jpg", "Imperialismen och rivalitet"], ["monarchs_1914.jpg", "Monarkiernas snabba beslut 1914"], ["verdun_somme.jpg", "Ställningskrigets följder"], ["october_revolution.jpg", "Ryska revolutionerna 1917"], ["lusitania.jpg", "Ubåtskrig och Lusitania"], ["armistice_11_11.jpg", "1918: Revolution, vapenvila, fred"], ["reparations.jpg", "Versailles och missnöje"], ["spanish_flu_ward.jpg", "Spanska sjukan och folkhälsa"]];
const SETS = [["Nationalismen växer i Europa", "Mordet på Franz Ferdinand i Sarajevo (1914)", "Krig mellan Österrike‑Ungern och Serbien sprider sig genom allianserna", "Första världskriget bryter ut och förändrar Europas karta"], ["Kapprustning och militär konkurrens mellan stormakterna", "Tyskland bygger upp en stark flotta som hotar Storbritannien", "Misstro och spänningar mellan länderna ökar", "Stormakterna dras in i ett globalt krig"], ["Imperialismen – kampen om kolonier", "Konflikter mellan europeiska länder i Afrika och Asien", "Rivalitet och misstro mellan stormakterna", "Allianser bildas och leder till ett världskrig när krisen bryter ut"], ["Brist på demokrati – kungar och kejsare styr utan folkets inflytande", "Snabba beslut om mobilisering och krigsförklaringar 1914", "Miljoner män skickas till fronten utan folkets vilja", "Massdöd, uppror och krav på politiska reformer i Europa"], ["Kriget blir stillastående på västfronten", "Miljoner soldater dör i slag som Verdun och Somme", "Krigströtthet och svält sprider sig bland civila", "Missnöje leder till revolutioner och nya regeringar"], ["Missnöje och fattigdom i Ryssland", "Februarirevolutionen och oktoberrevolutionen 1917", "Tsaren störtas, bolsjevikerna tar makten och drar sig ur kriget", "Sovjetunionen bildas och kommunismen sprids globalt"], ["Tysklands ubåtsattacker mot civila fartyg", "Sänkningen av Lusitania 1915", "USA går med i kriget 1917", "Tyskland förlorar och USA blir ny stormakt"], ["Krigets slutskede – utmattning och nederlag för centralmakterna", "Tysk revolution 1918, kejsaren abdikerar", "Vapenvila undertecknas 11 november 1918", "Versaillesfreden lägger grunden för nya konflikter"], ["Versaillesfreden – hårda villkor mot Tyskland", "Tyskland tvingas betala enorma skadestånd och förlorar territorier", "Ekonomisk kris och missnöje i Tyskland", "Nazismen växer fram och leder till andra världskriget"], ["Miljoner soldater och civila försvagas av krigets svält och stress", "Influensan sprids med trupper över hela världen", "Spanska sjukan dödar mellan 50–100 miljoner människor", "Länder börjar satsa på folkhälsa, vaccin och globalt samarbete"]];

let current = 0;
let selectedToken = null;
let tokens = [];
let slots = [null,null,null,null];
const tokensEl = document.getElementById('tokens');
const fb = document.getElementById('cFeedback');
function loadSet(){
  const img = document.getElementById('caIllo'); const cap=document.getElementById('caCap');
  slots = [null,null,null,null];
  current = Math.floor(Math.random()*SETS.length);
  img.style.display='block'; img.src='assets/images/'+SET_ILLUSTRATIONS[current][0]; cap.style.display='block'; cap.textContent=SET_ILLUSTRATIONS[current][1];
  tokens = SETS[current].map((t, i)=>({text:t, idx:i}));
  for(let i=tokens.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [tokens[i],tokens[j]]=[tokens[j],tokens[i]];}
  render(); fb.style.display='none';
}
function render(){
  tokensEl.innerHTML = "";
  tokens.forEach((t, i)=>{
    const b = document.createElement('button');
    b.className = 'token'; b.textContent = t.text;
    if(selectedToken===i) b.classList.add('selected');
    b.onclick = ()=>{ selectedToken = (selectedToken===i ? null : i); render(); };
    if(slots.includes(i)){ b.disabled = true; b.style.opacity=.6; }
    tokensEl.appendChild(b);
  });
  document.querySelectorAll('.slot').forEach(slot => {
    const n = parseInt(slot.dataset.slot);
    slot.classList.toggle('filled', slots[n]!==null);
    slot.textContent = slots[n]===null ? '' : tokens[slots[n]].text;
    slot.onclick = ()=>place(n);
  });
}
function place(n){
  if(selectedToken===null) return;
  const prev = slots[n];
  slots[n] = selectedToken;
  selectedToken = null;
  render();
  if(slots.every(s=>s!==null)){
    const orderIdx = slots.map(si => tokens[si].idx);
    const correct = orderIdx[0]===0 && orderIdx[1]===1 && orderIdx[2]===2 && orderIdx[3]===3;
    if(correct){ fb.className='feedback ok'; fb.style.display='block'; fb.textContent='Rätt! Kedjan är korrekt.'; }
    else{ fb.className='feedback bad'; fb.style.display='block'; fb.textContent='Inte helt rätt. Justera brickorna så att kedjan blir logisk.'; }
  }
}
document.getElementById('newSet').onclick = loadSet;
document.getElementById('clear').onclick = ()=>{ slots=[null,null,null,null]; selectedToken=null; render(); fb.style.display='none'; };
loadSet();
