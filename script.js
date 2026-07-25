const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, duration, type = 'sine') {
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
  } catch(e) {}
}

const defaultWords = {
  jidlo: [
    { text: "Pizza", pts: 1 }, { text: "Hamburger", pts: 1 }, { text: "Sushi", pts: 2 }, 
    { text: "Svíčková", pts: 1 }, { text: "Guláš", pts: 1 }, { text: "Palačinky", pts: 1 }, 
    { text: "Řízek", pts: 1 }, { text: "Zmrzlina", pts: 1 }, { text: "Tacos", pts: 1 }, 
    { text: "Špagety", pts: 1 }, { text: "Salát", pts: 1 }, { text: "Kebab", pts: 1 }, 
    { text: "Donut", pts: 1 }, { text: "Steak", pts: 1 }, { text: "Lasagne", pts: 1 }, 
    { text: "Bramborák", pts: 1 }, { text: "Vafle", pts: 1 }, { text: "Tortilla", pts: 1 }, 
    { text: "Párek v rohlíku", pts: 1 }, { text: "Hranolky", pts: 1 }, { text: "Knedlík", pts: 1 },
    { text: "Tlačenka", pts: 3 }, { text: "Kaviár", pts: 3 }, { text: "Kachna", pts: 1 }
  ],
  zvirata: [
    { text: "Lev", pts: 1 }, { text: "Slon", pts: 1 }, { text: "Žirafa", pts: 1 }, 
    { text: "Tučňák", pts: 1 }, { text: "Pes", pts: 1 }, { text: "Kočka", pts: 1 }, 
    { text: "Zebra", pts: 1 }, { text: "Klokan", pts: 1 }, { text: "Velryba", pts: 1 }, 
    { text: "Tygr", pts: 1 }, { text: "Panda", pts: 1 }, { text: "Krokodýl", pts: 1 }, 
    { text: "Vlk", pts: 1 }, { text: "Netopýr", pts: 1 }, { text: "Opice", pts: 1 }, 
    { text: "Kůň", pts: 1 }, { text: "Prase", pts: 1 }, { text: "Slepička", pts: 1 },
    { text: "Ptakopysk", pts: 3 }, { text: "Mravenečník", pts: 2 }, { text: "Chameleon", pts: 2 }
  ],
  celebrity: [
    { text: "Karel Gott", pts: 1 }, { text: "Jaromír Jágr", pts: 1 }, { text: "Elon Musk", pts: 1 }, 
    { text: "Cristiano Ronaldo", pts: 1 }, { text: "Donald Trump", pts: 1 }, { text: "Angelina Jolie", pts: 1 }, 
    { text: "Johnny Depp", pts: 1 }, { text: "Lionel Messi", pts: 1 }, { text: "Taylor Swift", pts: 1 }, 
    { text: "Leoš Mareš", pts: 1 }, { text: "Ewa Farna", pts: 1 }, { text: "Jiřina Bohdalová", pts: 1 }, 
    { text: "Albert Einstein", pts: 2 }, { text: "Arnold Schwarzenegger", pts: 2 }, { text: "Barack Obama", pts: 1 }
  ],
  filmy: [
    { text: "Titanic", pts: 1 }, { text: "Avatar", pts: 1 }, { text: "Shrek", pts: 1 }, 
    { text: "Harry Potter", pts: 1 }, { text: "Star Wars", pts: 1 }, { text: "Matrix", pts: 1 }, 
    { text: "Lví král", pts: 1 }, { text: "Joker", pts: 1 }, { text: "Terminátor", pts: 1 }, 
    { text: "Pelíšky", pts: 1 }, { text: "Sám doma", pts: 1 }, { text: "Spider-Man", pts: 1 }, 
    { text: "Pán prstenů", pts: 1 }, { text: "Forrest Gump", pts: 1 }, { text: "V Děčíně", pts: 3 }
  ],
  sportovci: [
    { text: "Usain Bolt", pts: 1 }, { text: "Michael Jordan", pts: 1 }, { text: "LeBron James", pts: 1 }, 
    { text: "Petr Čech", pts: 1 }, { text: "Ester Ledecká", pts: 1 }, { text: "Rafael Nadal", pts: 1 }, 
    { text: "Roger Federer", pts: 1 }, { text: "Lewis Hamilton", pts: 1 }, { text: "David Pastrňák", pts: 1 }
  ],
  povolani: [
    { text: "Učitel", pts: 1 }, { text: "Lékař", pts: 1 }, { text: "Hasič", pts: 1 }, 
    { text: "Policista", pts: 1 }, { text: "Programátor", pts: 1 }, { text: "Kuchař", pts: 1 }, 
    { text: "Astronaut", pts: 1 }, { text: "Pekař", pts: 1 }, { text: "Popelář", pts: 1 },
    { text: "Truhlář", pts: 2 }, { text: "Archeolog", pts: 2 }
  ],
  pohadky: [
    { text: "Popelka", pts: 1 }, { text: "Sněhurka", pts: 1 }, { text: "Mrazík", pts: 1 }, 
    { text: "Tři oříšky pro Popelku", pts: 1 }, { text: "Pohádka o krtkovi", pts: 1 }, 
    { text: "Princ a Večernice", pts: 2 }, { text: "Byl jednou jeden král", pts: 2 }
  ],
  mesta: [
    { text: "Praha", pts: 1 }, { text: "Brno", pts: 1 }, { text: "Paříž", pts: 1 }, 
    { text: "Londýn", pts: 1 }, { text: "New York", pts: 1 }, { text: "Tokio", pts: 1 }, 
    { text: "Řím", pts: 1 }, { text: "Ostrava", pts: 1 }, { text: "Plzeň", pts: 1 }, 
    { text: "Reykjavík", pts: 2 }, { text: "Sydney", pts: 1 }
  ],
  auta: [
    { text: "Škoda Octavia", pts: 1 }, { text: "Ferrari", pts: 1 }, { text: "Lamborghini", pts: 1 }, 
    { text: "Tesla", pts: 1 }, { text: "Porsche", pts: 1 }, { text: "Trabant", pts: 1 }, 
    { text: "Ford Mustang", pts: 1 }, { text: "BMW", pts: 1 }, { text: "Audi", pts: 1 }
  ],
  hudba: [
    { text: "Rock", pts: 1 }, { text: "Pop", pts: 1 }, { text: "Rap", pts: 1 }, 
    { text: "Kytara", pts: 1 }, { text: "Klavír", pts: 1 }, { text: "Bubny", pts: 1 }, 
    { text: "DJ", pts: 1 }, { text: "housle", pts: 1 }, { text: "Opera", pts: 1 }
  ],
  zahrajto: [
    { text: "Plavání", pts: 1 }, { text: "Stavění domu", pts: 1 }, { text: "Vaření", pts: 1 }, 
    { text: "Hraní fotbalu", pts: 1 }, { text: "Řízení auta", pts: 1 }, { text: "Malování obrazu", pts: 1 }, 
    { text: "Hraní na kytaru", pts: 1 }, { text: "Psaní na stroji", pts: 1 }, { text: "Úklid koštětem", pts: 1 }, 
    { text: "Čištění zubů", pts: 1 }, { text: "Cvičení jógy", pts: 2 }, { text: "Boxování", pts: 1 },
    { text: "Skákání přes švihadlo", pts: 1 }, { text: "Žehlení prádla", pts: 1 }, { text: "Fénování vlasů", pts: 1 }
  ],
  superhrdinove: [
    { text: "Batman", pts: 1 }, { text: "Superman", pts: 1 }, { text: "Spider-Man", pts: 1 }, 
    { text: "Iron Man", pts: 1 }, { text: "Thor", pts: 1 }, { text: "Hulk", pts: 1 }, 
    { text: "Captain America", pts: 1 }, { text: "Deadpool", pts: 1 }, { text: "Flash", pts: 1 }, 
    { text: "Doctor Strange", pts: 2 }
  ]
};

let allWords = { ...defaultWords };
let customCategories = {};
let currentGameWords = [];
let usedWords = [];
let score = 0;
let timer;
let timeLeft;
let isGameActive = false;
let canAction = true;
let currentMode = 'mobile';
let currentCategory = 'jidlo';
let currentWordObj = null;

let tempCustomWords = [];

const wordDisplay = document.getElementById('word-display');
const multiplierDisplay = document.getElementById('word-multiplier');
const timerDisplay = document.getElementById('game-timer');
const categoriesContainer = document.getElementById('categories-container');
const quitGameBtn = document.getElementById('quit-game-btn');
const gameScreen = document.getElementById('screen-game');

const categoryDisplayNames = {
  jidlo: "Jídlo",
  zvirata: "Zvířata",
  celebrity: "Celebrity",
  filmy: "Filmy",
  sportovci: "Sportovci",
  povolani: "Povolání",
  pohadky: "Pohádky",
  mesta: "Města",
  auta: "Auta",
  hudba: "Hudba",
  zahrajto: "Zahraj to",
  superhrdinove: "Superhrdinové"
};

function loadCustomCategories() {
  const saved = localStorage.getItem('lukybends_custom');
  if (saved) {
    try {
      customCategories = JSON.parse(saved);
      allWords = { ...defaultWords, ...customCategories };
    } catch(e) {}
  }
  renderCategoriesUI();
}

function saveCustomCategoriesToStorage() {
  localStorage.setItem('lukybends_custom', JSON.stringify(customCategories));
  allWords = { ...defaultWords, ...customCategories };
  renderCategoriesUI();
}

function renderCategoriesUI() {
  categoriesContainer.innerHTML = '';
  
  const icons = {
    jidlo: 'pizza-slice', zvirata: 'paw', celebrity: 'star', filmy: 'film',
    sportovci: 'person-running', povolani: 'briefcase', pohadky: 'book-open',
    mesta: 'city', auta: 'car', hudba: 'music', zahrajto: 'masks-theater',
    superhrdinove: 'shield-halved'
  };

  Object.keys(defaultWords).forEach(catKey => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${currentCategory === catKey ? 'active' : ''}`;
    btn.dataset.cat = catKey;
    const displayName = categoryDisplayNames[catKey] || capitalize(catKey);
    btn.innerHTML = `<i class="fa-solid fa-${icons[catKey] || 'folder'}"></i> ${displayName}`;
    btn.addEventListener('click', () => selectCategory(catKey));
    categoriesContainer.appendChild(btn);
  });

  Object.keys(customCategories).forEach(catKey => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${currentCategory === catKey ? 'active' : ''}`;
    btn.dataset.cat = catKey;
    btn.innerHTML = `<i class="fa-solid fa-user-pen"></i> ${catKey} <span class="cat-delete-btn" data-del="${catKey}"><i class="fa-solid fa-xmark"></i></span>`;
    
    btn.addEventListener('click', (e) => {
      if (e.target.closest('.cat-delete-btn')) {
        deleteCustomCategory(catKey);
        e.stopPropagation();
        return;
      }
      selectCategory(catKey);
    });
    categoriesContainer.appendChild(btn);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function selectCategory(catKey) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const target = document.querySelector(`[data-cat="${catKey}"]`);
  if (target) target.classList.add('active');
  currentCategory = catKey;
}

function deleteCustomCategory(catKey) {
  if (confirm(`Opravdu chceš smazat kategorii "${catKey}"?`)) {
    delete customCategories[catKey];
    if (currentCategory === catKey) currentCategory = 'jidlo';
    saveCustomCategoriesToStorage();
  }
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
  });
});

document.getElementById('rules-open-btn').addEventListener('click', () => document.getElementById('modal-rules').classList.add('active'));
document.getElementById('rules-close-btn').addEventListener('click', () => document.getElementById('modal-rules').classList.remove('active'));

const modalCustom = document.getElementById('modal-custom');
document.getElementById('open-custom-modal').addEventListener('click', () => {
  tempCustomWords = [];
  document.getElementById('custom-cat-name').value = '';
  document.getElementById('custom-word-text').value = '';
  updatePreviewList();
  modalCustom.classList.add('active');
});

document.getElementById('close-custom-modal').addEventListener('click', () => modalCustom.classList.remove('active'));

document.getElementById('add-word-btn').addEventListener('click', () => {
  const textInput = document.getElementById('custom-word-text');
  const ptsInput = document.getElementById('custom-word-pts');
  const wordVal = textInput.value.trim();
  const ptsVal = parseInt(ptsInput.value);

  if (wordVal) {
    tempCustomWords.push({ text: wordVal, pts: ptsVal });
    textInput.value = '';
    textInput.focus();
    updatePreviewList();
  }
});

function updatePreviewList() {
  const previewContainer = document.getElementById('custom-words-preview');
  if (tempCustomWords.length === 0) {
    previewContainer.innerHTML = `<p class="empty-preview">Zatím žádná slova...</p>`;
    return;
  }
  previewContainer.innerHTML = tempCustomWords.map((w, idx) => `
    <div class="preview-item">
      <span>${w.text}</span>
      <span style="color: #fbbf24;">${w.pts} bod${w.pts > 1 ? 'y' : ''}</span>
    </div>
  `).join('');
}

document.getElementById('save-custom-cat').addEventListener('click', () => {
  const nameInput = document.getElementById('custom-cat-name');
  const catName = nameInput.value.trim();

  if (!catName) {
    alert("Zadej název kategorie!");
    return;
  }
  if (tempCustomWords.length === 0) {
    alert("Přidej alespoň jedno slovo!");
    return;
  }

  customCategories[catName] = [...tempCustomWords];
  saveCustomCategoriesToStorage();
  selectCategory(catName);
  modalCustom.classList.remove('active');
});

document.getElementById('start-btn').addEventListener('click', () => {
  startCountdown();
});

function startCountdown() {
  document.getElementById('screen-start').classList.remove('active');
  document.getElementById('screen-countdown').classList.add('active');
  
  // Automatické přepnutí do režimu celé obrazovky a na šířku (landscape)
  try {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {});
    }
  } catch(e) {}

  let count = 5;
  const countEl = document.getElementById('countdown-number');
  countEl.textContent = count;
  
  const interval = setInterval(() => {
    count--;
    playTone(400, 0.1);
    if (count > 0) {
      countEl.textContent = count;
    } else {
      clearInterval(interval);
      playTone(800, 0.3);
      startGame();
    }
  }, 1000);
}

function startGame() {
  document.getElementById('screen-countdown').classList.remove('active');
  gameScreen.classList.add('active');
  score = 0;
  usedWords = [];
  
  const timeSetting = parseInt(document.getElementById('game-time').value);
  timeLeft = timeSetting;
  
  if (timeSetting === 0) {
    timerDisplay.textContent = "∞";
    quitGameBtn.classList.remove('hidden');
  } else {
    timerDisplay.textContent = timeLeft;
    quitGameBtn.classList.add('hidden');
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) endGame();
    }, 1000);
  }

  const hintMobile = document.getElementById('hint-mobile');
  if (hintMobile) {
    hintMobile.classList.remove('hidden');
    hintMobile.innerHTML = '<span style="color: #34d399;">👈 Levá strana = SPRÁVNĚ</span> | <span style="color: #f87171;">Pravá strana = ŠPATNĚ 👉</span>';
  }
  
  document.getElementById('hint-pc').classList.toggle('hidden', currentMode !== 'pc');

  reloadWordsPool();
  isGameActive = true;
  nextWord();
}

quitGameBtn.addEventListener('click', () => {
  if (isGameActive) {
    endGame();
  }
});

function reloadWordsPool() {
  const source = allWords[currentCategory] || defaultWords.jidlo;
  currentGameWords = [...source].sort(() => Math.random() - 0.5);
}

function nextWord() {
  if (currentGameWords.length === 0) {
    reloadWordsPool();
  }
  wordDisplay.classList.remove('correct-word', 'pass-word');
  currentWordObj = currentGameWords.pop();
  
  wordDisplay.textContent = currentWordObj.text;
  
  if (currentWordObj.pts > 1) {
    multiplierDisplay.textContent = `⭐ ${currentWordObj.pts}× BOD`;
  } else {
    multiplierDisplay.textContent = "";
  }
}

function handleAction(type) {
  if (!isGameActive || !canAction) return;
  canAction = false;
  
  if (type === 'ok') {
    score += currentWordObj.pts;
    playTone(1000, 0.2, 'square');
    wordDisplay.classList.add('correct-word');
    usedWords.push({ word: currentWordObj.text, pts: currentWordObj.pts, status: 'ok' });
  } else {
    playTone(200, 0.2, 'sawtooth');
    wordDisplay.classList.add('pass-word');
    usedWords.push({ word: currentWordObj.text, pts: currentWordObj.pts, status: 'pass' });
  }

  setTimeout(() => {
    nextWord();
    canAction = true;
  }, 700);
}

// Dotykové ovládání: Levá strana = Správně, Pravá strana = Špatně
gameScreen.addEventListener('click', (e) => {
  if (!isGameActive || !canAction) return;
  
  if (e.target.closest('#quit-game-btn')) return;
  
  const screenWidth = window.innerWidth;
  const clickX = e.clientX;
  
  if (clickX < screenWidth / 2) {
    handleAction('ok'); // Levá strana -> Správně
  } else {
    handleAction('pass'); // Pravá strana -> Špatně
  }
});

window.addEventListener('keydown', (e) => {
  if (!isGameActive) return;
  if (e.key === "ArrowLeft") handleAction('ok');
  if (e.key === "ArrowRight") handleAction('pass');
  if (currentMode === 'pc') {
    if (e.key === "ArrowDown") handleAction('ok');
    if (e.key === "ArrowUp") handleAction('pass');
  }
});

function endGame() {
  isGameActive = false;
  clearInterval(timer);
  quitGameBtn.classList.add('hidden');
  gameScreen.classList.remove('active');
  document.getElementById('screen-results').classList.add('active');
  
  document.getElementById('final-score').textContent = score;
  const listEl = document.getElementById('results-list');
  listEl.innerHTML = usedWords.map(w => `
    <div class="res-item ${w.status}">
      <span>${w.word}</span>
      <span>${w.status === 'ok' ? '+' + w.pts : '×'}</span>
    </div>
  `).join('');
}

document.getElementById('restart-btn').addEventListener('click', () => {
  document.getElementById('screen-results').classList.remove('active');
  document.getElementById('screen-start').classList.add('active');
});

loadCustomCategories();
