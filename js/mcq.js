const ILLUSTRATIONS = {"0": ["nationalism_poster.jpg", "Nationalism – affisch/propaganda"], "1": ["entente_flags.jpg", "Trippelententen: Storbritannien, Frankrike, Ryssland"], "2": ["austro_hungary_flag.jpg", "Österrike-Ungern – centralmakterna"], "3": ["dreadnoughts.jpg", "Kapprustning – slagskepp"], "4": ["sarajevo.jpg", "Skotten i Sarajevo 1914"], "5": ["gavrilo_princip.jpg", "Gavrilo Princip"], "6": ["black_week_headlines.jpg", "”Svarta veckan” – tidningsrubriker 1914"], "7": ["ww1_trenches.jpg", "Skyttegravar och kulsprutor"], "8": ["western_front_map.jpg", "Västfronten – karta"], "9": ["machine_gun.jpg", "Kulspruta"], "10": ["mustard_gas.jpg", "Senapsgas"], "11": ["italy_1915.jpg", "Italien byter sida 1915"], "12": ["schlieffen_plan_map.jpg", "Schlieffenplanen – karta"], "13": ["u_boat.jpg", "Ubåtskrig"], "14": ["versailles_signing.jpg", "Versaillesfreden 1919"], "15": ["casualties_chart.jpg", "Förluster – fler än 9 miljoner soldater"], "16": ["reparations.jpg", "Krigsskadestånd"], "17": ["new_states_map.jpg", "Nya stater efter kriget"], "18": ["league_of_nations.jpg", "Nationernas Förbund"], "19": ["spanish_flu_ward.jpg", "Spanska sjukan"], "20": ["spanish_press.jpg", "Spansk press rapporterar öppet"], "21": ["bolsheviks_1917.jpg", "Bolsjevikerna 1917"], "22": ["peace_bread_land.jpg", "”Fred, bröd och jord”"], "23": ["tsar_nicholas.jpg", "Tsar Nikolaj II"], "24": ["women_suffrage.jpg", "Kvinnlig rösträtt efter kriget"]};
const QUESTIONS = [{"q": "Vad betyder nationalism?", "options": ["Önskan om kolonier", "Idén om att varje folk ska ha ett eget land", "Motstånd mot militär upprustning", "Ett avtal mellan stormakter"], "answer": 1, "explain": "Nationalism = idén om att ett folk/nation bör ha en egen stat. I Europa bidrog den till rivalitet och konflikter."}, {"q": "Vilka länder ingick i Trippelententen?", "options": ["Tyskland, Italien, Österrike-Ungern", "Storbritannien, Ryssland, Frankrike", "USA, Frankrike, Italien", "Ryssland, USA, Tyskland"], "answer": 1, "explain": "Trippelententen = Storbritannien, Frankrike och Ryssland; motblock till Trippelalliansen."}, {"q": "Vilket land tillhörde trippelalliansen (centralmakterna)?", "options": ["Storbritannien", "Frankrike", "Österrike-Ungern", "Ryssland"], "answer": 2, "explain": "Centralmakterna: Tyskland, Österrike‑Ungern (senare Osmanska riket och Bulgarien)."}, {"q": "Vad var kapprustning?", "options": ["Ett ekonomiskt krig", "Tävlingslöpning mellan soldater", "Länder som tävlade om att bygga starka arméer och flottor", "Ett avtal om att minska vapen"], "answer": 2, "explain": "Stormakter ökade militärutgifter och vapenproduktion – framförallt Tyskland/Storbritannien till sjöss."}, {"q": "Vad var utlösande orsak till första världskriget?", "options": ["Tysklands anfall på Polen", "Skotten i Sarajevo", "Stormningen av Bastiljen", "Amerikanska inbördeskriget"], "answer": 1, "explain": "Attentatet i Sarajevo (1914) på ärkehertig Franz Ferdinand satte alliansmaskineriet i rullning."}, {"q": "Vem mördade Franz Ferdinand?", "options": ["Lenin", "En brittisk soldat", "Gavrilo Princip", "Winston Churchill"], "answer": 2, "explain": "Gavrilo Princip, medlem i serbiska/nationalistiska kretsar kopplade till Svarta handen."}, {"q": "Vad kallades veckan när många länder förklarade krig 1914?", "options": ["Blodiga veckan", "Svarta veckan", "Järnveckan", "Krigsveckan"], "answer": 1, "explain": "”Svarta veckan” syftar på slutet av juli/början av augusti 1914 då krigsförklaringar avlöste varandra."}, {"q": "Varför skapades skyttegravar på västfronten?", "options": ["För att lagra ammunition", "För att skydda sig mot kulsprutor och artilleri", "För att gömma förråd", "För att hindra gas från att spridas"], "answer": 1, "explain": "Kulsprutor/artilleri gjorde öppna fält självmordsfarliga → skyttegravar gav skydd."}, {"q": "Hur lång var ungefär västfronten?", "options": ["5 km", "50 km", "500 km", "5000 km"], "answer": 2, "explain": "Västfronten sträckte sig från Nordsjön till Schweiz – flera hundra kilometer."}, {"q": "Vilket vapen gjorde kriget stillastående på västfronten?", "options": ["Stridsvagnar", "Gasbomber", "Kulsprutan", "Flygplan"], "answer": 2, "explain": "Kulsprutan gynnade försvararen och låste fronten trots massiva anfall."}, {"q": "Vilken gas användes ofta och gjorde soldater blinda?", "options": ["Syre", "Senapsgas", "Kolmonoxid", "Tårgas"], "answer": 1, "explain": "Senapsgas skadade hud och ögon; gasmasker blev nödvändiga."}, {"q": "Vilket land bytte sida och gick över till ententen 1915?", "options": ["Turkiet", "Italien", "USA", "Japan"], "answer": 1, "explain": "Italien lämnade tidigare avtal och anslöt till ententen 1915."}, {"q": "Vad heter den tyska planen att snabbt besegra Frankrike?", "options": ["Schlieffenplanen", "Blitzkrieg", "Molotovplanen", "Bismarckplanen"], "answer": 0, "explain": "Schlieffenplanen: snabb offensiv genom Belgien för att slå Frankrike innan Ryssland hann mobilisera."}, {"q": "Varför gick USA med i kriget 1917?", "options": ["På grund av ubåtskrig", "Attack på Pearl Harbor", "För att hjälpa Ryssland", "För att få kolonier"], "answer": 0, "explain": "Oinskränkt ubåtskrig och Zimmermanntelegrammet bidrog starkt till USA:s inträde 1917."}, {"q": "Vad hette freden efter kriget?", "options": ["Wienfreden", "Versaillesfreden", "Parisfreden", "Genèvefreden"], "answer": 1, "explain": "Versaillesfreden 1919 reglerade freden med Tyskland; andra fördrag slöts med övriga centralmakter."}, {"q": "Hur många soldater dog totalt under första världskriget?", "options": ["900 000", "3 miljoner", "Över 9 miljoner", "100 miljoner"], "answer": 2, "explain": "Cirka 9–10 miljoner soldater dog; civila dödstal var också mycket höga."}, {"q": "Vad innebar krigsskadeståndet för Tyskland enligt Versaillesfreden?", "options": ["De slapp betala", "De skulle betala enorma summor", "De fick pengar av Frankrike", "De betalade bara med vapen"], "answer": 1, "explain": "Tyskland ålades stora skadestånd och territoriella förluster – en källa till missnöje."}, {"q": "Vilket nytt land bildades inte efter kriget?", "options": ["Jugoslavien", "Polen", "Tyskland", "Tjeckoslovakien"], "answer": 2, "explain": "Tyskland fanns redan; nya statsbildningar var t.ex. Polen, Tjeckoslovakien, Jugoslavien."}, {"q": "Vad hette organisationen som skulle skapa fred i världen?", "options": ["NF – Nationernas Förbund", "NATO", "EU", "FN"], "answer": 0, "explain": "Nationernas Förbund (League of Nations) grundades 1920 för att bevara freden."}, {"q": "Vilken sjukdom spreds i slutet av kriget och dödade miljontals?", "options": ["Digerdöden", "Covid‑19", "Spanska sjukan", "Kolera"], "answer": 2, "explain": "Influensapandemin 1918–1920 kallas ”Spanska sjukan” och krävde tiotals miljoner liv."}, {"q": "Varför kallades det Spanska sjukan?", "options": ["Den började i Spanien", "Spanien pratade öppet om den i pressen", "Den drabbade bara spanjorer", "Spanien skapade sjukdomen"], "answer": 1, "explain": "Neutral spansk press rapporterade öppet, vilket gav intryck av att Spanien drabbats särskilt."}, {"q": "Vilken grupp tog makten i Ryssland 1917?", "options": ["Nazisterna", "Bolsjevikerna", "Nationalisterna", "Fascisterna"], "answer": 1, "explain": "Bolsjevikerna under Lenin tog makten i oktoberrevolutionen 1917."}, {"q": "Vad lovade bolsjevikerna folket?", "options": ["Fred, bröd och jord", "Mer krig", "Ett nytt tsarvälde", "Demokrati"], "answer": 0, "explain": "Parollen ”Fred, bröd och jord” lockade krigströtta och fattiga."}, {"q": "Vad hette Rysslands ledare som störtades 1917?", "options": ["Marx", "Tsar Nikolaj II", "Stalin", "Trotskij"], "answer": 1, "explain": "Tsar Nikolaj II abdikerade 1917; senare mördades tsarfamiljen."}, {"q": "Vad var ett viktigt resultat av första världskriget?", "options": ["Tyskland blev rikast", "Kvinnor fick rösträtt i många länder", "Napoleon tog makten", "USA isolerade sig"], "answer": 1, "explain": "Efter kriget infördes rösträtt för kvinnor i flera länder, t.ex. Storbritannien (1918/1928) och USA (1920)."}];

let order = [...Array(QUESTIONS.length).keys()];
let i = 0; let streak = 0; let best = 0;
const qno = document.getElementById('qno');
const qcount = document.getElementById('qcount');
const qtext = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const feedback = document.getElementById('feedback');
const streakEl = document.getElementById('streak');
const bestEl = document.getElementById('best');
const resetBtn = document.getElementById('reset');
qcount.textContent = order.length;
function render(){
  const hero = document.getElementById('mcqHero');
  const cap = document.getElementById('mcqCaption');
  const item = QUESTIONS[order[i]];
  const ill = ILLUSTRATIONS[order[i]];
  if(ill){ hero.style.display='block'; hero.src = 'assets/images/' + ill[0]; cap.style.display='block'; cap.textContent = ill[1]; } else { hero.style.display='none'; cap.style.display='none'; }
  qno.textContent = (i+1);
  qtext.textContent = item.q;
  optionsEl.innerHTML = "";
  feedback.style.display = "none";
  item.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = String.fromCharCode(65+idx) + ") " + opt;
    btn.onclick = () => select(idx);
    optionsEl.appendChild(btn);
  });
}
function select(idx){
  const item = QUESTIONS[order[i]];
  const ill = ILLUSTRATIONS[order[i]];
  if(ill){ hero.style.display='block'; hero.src = 'assets/images/' + ill[0]; cap.style.display='block'; cap.textContent = ill[1]; } else { hero.style.display='none'; cap.style.display='none'; }
  const buttons = [...document.querySelectorAll('.option')];
  buttons.forEach(b => b.disabled = true);
  const correct = idx === item.answer;
  const chosenBtn = buttons[idx];
  chosenBtn.classList.add(correct ? 'correct' : 'wrong');
  buttons[item.answer].classList.add('correct');
  if(correct){
    streak += 1;
    if(streak > best) best = streak;
    feedback.className = 'feedback ok';
    feedback.textContent = 'Rätt! ' + item.explain;
  }else{
    streak = 0;
    feedback.className = 'feedback bad';
    feedback.textContent = 'Fel. ' + item.explain;
  }
  streakEl.textContent = streak; bestEl.textContent = best;
  feedback.style.display = 'block';
  setTimeout(() => {
    if(i < order.length - 1){ i += 1; render(); }
    else{ qtext.textContent = 'Klart! Bra jobbat.'; optionsEl.innerHTML = ''; }
  }, 900);
}
resetBtn.onclick = () => { i=0; streak=0; order=[...Array(QUESTIONS.length).keys()]; render(); streakEl.textContent=0; bestEl.textContent=best; };
render();
