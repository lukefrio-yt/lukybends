/**
 * LukyBends — Apple HIG Edition
 * Party game of charades & quick word guessing with zero external dependencies.
 */

// ==========================================
// 1. Inline SF-style SVG Icons
// ==========================================
const ICONS = {
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  volumeOn: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  volumeOff: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
  trash: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  // Category Icons
  pizza: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 1 20 7-7 14L2 1z"></path><circle cx="9" cy="8" r="1.5"></circle><circle cx="12" cy="13" r="1.5"></circle></svg>`,
  paw: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="4" cy="9" r="2"></circle><path d="M12 10c-3 0-5 3-5 6a4 4 0 0 0 8 0c0-3-2-6-3-6z"></path></svg>`,
  star: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  film: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`,
  sports: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
  briefcase: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  book: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  city: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  car: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="7" rx="2"></rect><path d="M5 11l2-5h10l2 5"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>`,
  music: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
  theater: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 15h8"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
  shield: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  custom: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
};

// ==========================================
// 2. Synthesized Web Audio API (Lazy)
// ==========================================
let audioCtx = null;
let soundEnabled = true;

function initAudioContext() {
  if (!audioCtx) {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (AudioClass) audioCtx = new AudioClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'tick') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.07); // A5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'pass') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.16);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.start(now);
      osc.stop(now + 0.16);
    } else if (type === 'start') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + 0.1);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'end') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659, now);
      osc.frequency.setValueAtTime(523, now + 0.12);
      osc.frequency.setValueAtTime(392, now + 0.24);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    }
  } catch (e) {}
}

// ==========================================
// 3. Theme & Sound Settings
// ==========================================
let currentTheme = 'light';

function initTheme() {
  const saved = localStorage.getItem('lukybendsTheme');
  if (saved === 'dark' || saved === 'light') {
    currentTheme = saved;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    currentTheme = 'dark';
  }
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  try { localStorage.setItem('lukybendsTheme', theme); } catch (e) {}
}

function initSound() {
  const saved = localStorage.getItem('lukybendsSound');
  if (saved !== null) {
    soundEnabled = saved === 'true';
  }
  applySoundUI();
}

function applySoundUI() {
  const btn = document.getElementById('sound-btn');
  if (btn) btn.innerHTML = soundEnabled ? ICONS.volumeOn : ICONS.volumeOff;
  try { localStorage.setItem('lukybendsSound', soundEnabled.toString()); } catch (e) {}
}

// ==========================================
// 4. Default Word Decks (Verified & Clean)
// ==========================================
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
    { text: "Pán prstenů", pts: 1 }, { text: "Forrest Gump", pts: 1 }
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
    { text: "DJ", pts: 1 }, { text: "Housle", pts: 1 }, { text: "Opera", pts: 1 }
  ],
  zahrajto: [
    { text: "Plavání", pts: 1 }, { text: "Stavění domu", pts: 1 }, { text: "Vaření", pts: 1 }, 
    { text: "Hraní fotbalu", pts: 1 }, { text: "Řízení auta", pts: 1 }, { text: "Malování obrazu", pts: 1 }, 
    { text: "Hraní na kytaru", pts: 1 }, { text: "Psaní na stroji", pts: 1 }, { text: "Úklid koštětem", pts: 1 }, 
    { text: "Čištění zubů", pts: 1 }, { text: "Cvičení jógy", pts: 2 }, { text: "Boxování", pts: 1 }, 
    { text: "Skákání přes švihadlo", pts: 1 }, { text: "Žehlení prádla", pts: 1 }
  ],
  superhrdinove: [
    { text: "Batman", pts: 1 }, { text: "Superman", pts: 1 }, { text: "Spider-Man", pts: 1 }, 
    { text: "Iron Man", pts: 1 }, { text: "Thor", pts: 1 }, { text: "Hulk", pts: 1 }, 
    { text: "Captain America", pts: 1 }, { text: "Deadpool", pts: 1 }, { text: "Flash", pts: 1 }, 
    { text: "Doctor Strange", pts: 2 }
  ]
};

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
  superhrdinove: "Hrdinové"
};

const categoryIcons = {
  jidlo: ICONS.pizza,
  zvirata: ICONS.paw,
  celebrity: ICONS.star,
  filmy: ICONS.film,
  sportovci: ICONS.sports,
  povolani: ICONS.briefcase,
  pohadky: ICONS.book,
  mesta: ICONS.city,
  auta: ICONS.car,
  hudba: ICONS.music,
  zahrajto: ICONS.theater,
  superhrdinove: ICONS.shield
};

// ==========================================
// 5. Game State
// ==========================================
let allWords = { ...defaultWords };
let customCategories = {};
let currentGameWords = [];
let usedWords = [];
let score = 0;
let timer = null;
let timeLeft = 60;
let isGameActive = false;
let canAction = true;
let currentMode = 'mobile';
let currentCategory = 'jidlo';
let currentWordObj = null;
let tempCustomWords = [];
let toastTimeout = null;

// ==========================================
// 6. DOM Elements
// ==========================================
const wordDisplay = document.getElementById('word-display');
const multiplierDisplay = document.getElementById('word-multiplier');
const timerDisplay = document.getElementById('game-timer');
const categoriesContainer = document.getElementById('categories-container');
const quitGameBtn = document.getElementById('quit-game-btn');
const gameScreen = document.getElementById('screen-game');
const feedbackOverlay = document.getElementById('feedback-overlay');
const toastEl = document.getElementById('toast');
const toastTextEl = document.getElementById('toast-text');
const topNav = document.getElementById('top-nav');

// Modals
const modalCustom = document.getElementById('modal-custom');
const modalRules = document.getElementById('modal-rules');
const customCatNameInput = document.getElementById('custom-cat-name');
const customWordTextInput = document.getElementById('custom-word-text');
const customWordPtsSelect = document.getElementById('custom-word-pts');
const customWordsPreview = document.getElementById('custom-words-preview');
const previewCountBadge = document.getElementById('preview-count');

// ==========================================
// 7. Toast & Helper Utilities
// ==========================================
function showToast(msg) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTextEl.textContent = msg;
  toastEl.classList.add('show');
  toastTimeout = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[m]);
}

// ==========================================
// 8. Custom Categories Management (Safe DOM)
// ==========================================
function loadCustomCategories() {
  const saved = localStorage.getItem('lukybends_custom');
  if (saved) {
    try {
      customCategories = JSON.parse(saved);
      if (typeof customCategories === 'object' && customCategories !== null) {
        allWords = { ...defaultWords, ...customCategories };
      }
    } catch (e) {
      customCategories = {};
    }
  }
  renderCategoriesUI();
}

function saveCustomCategoriesToStorage() {
  try {
    localStorage.setItem('lukybends_custom', JSON.stringify(customCategories));
  } catch (e) {}
  allWords = { ...defaultWords, ...customCategories };
  renderCategoriesUI();
}

function renderCategoriesUI() {
  categoriesContainer.innerHTML = '';

  // Render default categories
  Object.keys(defaultWords).forEach(catKey => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `cat-btn ${currentCategory === catKey ? 'active' : ''}`;
    btn.dataset.cat = catKey;

    const iconSpan = document.createElement('span');
    iconSpan.className = 'cat-icon';
    iconSpan.innerHTML = categoryIcons[catKey] || ICONS.star;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'cat-name-text';
    nameSpan.textContent = categoryDisplayNames[catKey] || catKey;

    btn.appendChild(iconSpan);
    btn.appendChild(nameSpan);

    btn.addEventListener('click', () => selectCategory(catKey));
    categoriesContainer.appendChild(btn);
  });

  // Render custom categories
  Object.keys(customCategories).forEach(catKey => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `cat-btn ${currentCategory === catKey ? 'active' : ''}`;
    btn.dataset.cat = catKey;

    const iconSpan = document.createElement('span');
    iconSpan.className = 'cat-icon';
    iconSpan.innerHTML = ICONS.custom;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'cat-name-text';
    nameSpan.textContent = catKey;

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'cat-delete-btn';
    delBtn.title = 'Smazat kategorii';
    delBtn.innerHTML = ICONS.trash;
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteCustomCategory(catKey);
    });

    btn.appendChild(iconSpan);
    btn.appendChild(nameSpan);
    btn.appendChild(delBtn);

    btn.addEventListener('click', () => selectCategory(catKey));
    categoriesContainer.appendChild(btn);
  });
}

function selectCategory(catKey) {
  playSound('tick');
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const target = document.querySelector(`[data-cat="${CSS.escape(catKey)}"]`);
  if (target) target.classList.add('active');
  currentCategory = catKey;
}

function deleteCustomCategory(catKey) {
  playSound('tick');
  delete customCategories[catKey];
  if (currentCategory === catKey) currentCategory = 'jidlo';
  saveCustomCategoriesToStorage();
  showToast(`Balíček "${catKey}" byl smazán`);
}

function updatePreviewList() {
  customWordsPreview.innerHTML = '';
  previewCountBadge.textContent = `${tempCustomWords.length} ${tempCustomWords.length === 1 ? 'slovo' : tempCustomWords.length >= 2 && tempCustomWords.length <= 4 ? 'slova' : 'slov'}`;

  if (tempCustomWords.length === 0) {
    customWordsPreview.innerHTML = `<p class="empty-preview">Zatím žádná přidaná slova...</p>`;
    return;
  }

  tempCustomWords.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'preview-item';

    const textSpan = document.createElement('span');
    textSpan.textContent = item.text;

    const ptsSpan = document.createElement('span');
    ptsSpan.className = 'preview-pts';
    ptsSpan.textContent = `${item.pts} bod${item.pts > 1 ? 'y' : ''}`;

    row.appendChild(textSpan);
    row.appendChild(ptsSpan);
    customWordsPreview.appendChild(row);
  });
}

// ==========================================
// 9. Modals & Settings Listeners
// ==========================================
document.getElementById('rules-open-btn').addEventListener('click', () => {
  playSound('tick');
  modalRules.classList.add('active');
});

const closeRules = () => {
  playSound('tick');
  modalRules.classList.remove('active');
};
document.getElementById('rules-close-btn').addEventListener('click', closeRules);
document.getElementById('rules-close-x').addEventListener('click', closeRules);
modalRules.addEventListener('click', (e) => {
  if (e.target === modalRules) closeRules();
});

document.getElementById('open-custom-modal').addEventListener('click', () => {
  playSound('tick');
  tempCustomWords = [];
  customCatNameInput.value = '';
  customWordTextInput.value = '';
  updatePreviewList();
  modalCustom.classList.add('active');
  customCatNameInput.focus();
});

const closeCustom = () => {
  playSound('tick');
  modalCustom.classList.remove('active');
};
document.getElementById('close-custom-modal').addEventListener('click', closeCustom);
document.getElementById('cancel-custom-cat').addEventListener('click', closeCustom);
modalCustom.addEventListener('click', (e) => {
  if (e.target === modalCustom) closeCustom();
});

document.getElementById('add-word-btn').addEventListener('click', addCustomWord);
customWordTextInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addCustomWord();
  }
});

function addCustomWord() {
  const wordVal = customWordTextInput.value.trim();
  const ptsVal = parseInt(customWordPtsSelect.value, 10) || 1;

  if (!wordVal) return;

  tempCustomWords.push({ text: wordVal, pts: ptsVal });
  customWordTextInput.value = '';
  customWordTextInput.focus();
  updatePreviewList();
  playSound('tick');
}

document.getElementById('save-custom-cat').addEventListener('click', () => {
  const catName = customCatNameInput.value.trim();

  if (!catName) {
    showToast('Zadej název balíčku!');
    customCatNameInput.focus();
    return;
  }
  if (tempCustomWords.length === 0) {
    showToast('Přidej alespoň jedno slovo!');
    customWordTextInput.focus();
    return;
  }

  customCategories[catName] = [...tempCustomWords];
  saveCustomCategoriesToStorage();
  selectCategory(catName);
  modalCustom.classList.remove('active');
  showToast(`Balíček "${catName}" byl uložen!`);
});

// Segmented control (Device mode)
document.querySelectorAll('.segment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('tick');
    document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
  });
});

// Top bar utility icons
document.getElementById('theme-btn').addEventListener('click', () => {
  playSound('tick');
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

document.getElementById('sound-btn').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  applySoundUI();
  playSound('tick');
  showToast(soundEnabled ? 'Zvuky zapnuty' : 'Zvuky ztlumeny');
});

// ==========================================
// 10. Countdown & Game Flow
// ==========================================
document.getElementById('start-btn').addEventListener('click', () => {
  startCountdown();
});

function startCountdown() {
  document.getElementById('screen-start').classList.remove('active');
  document.getElementById('screen-countdown').classList.add('active');
  topNav.classList.add('hidden');

  // Request fullscreen & landscape orientation if supported
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
  } catch (e) {}

  let count = 3;
  const countEl = document.getElementById('countdown-number');
  countEl.textContent = count;
  playSound('tick');

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countEl.textContent = count;
      playSound('tick');
    } else {
      clearInterval(interval);
      playSound('start');
      startGame();
    }
  }, 950);
}

function startGame() {
  document.getElementById('screen-countdown').classList.remove('active');
  gameScreen.classList.add('active');
  score = 0;
  usedWords = [];

  const timeSetting = parseInt(document.getElementById('game-time').value, 10);
  timeLeft = timeSetting;

  if (timeSetting === 0) {
    timerDisplay.textContent = '∞';
  } else {
    timerDisplay.textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

  // Adjust hints based on device mode
  const hintMobile = document.getElementById('hint-mobile');
  const hintPc = document.getElementById('hint-pc');

  if (currentMode === 'pc') {
    hintMobile.classList.add('hidden');
    hintPc.classList.remove('hidden');
  } else {
    hintMobile.classList.remove('hidden');
    hintPc.classList.add('hidden');
  }

  reloadWordsPool();
  isGameActive = true;
  canAction = true;
  nextWord();
}

quitGameBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isGameActive) {
    if (timer) clearInterval(timer);
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
    multiplierDisplay.textContent = `★ ${currentWordObj.pts}× BODY`;
  } else {
    multiplierDisplay.textContent = '';
  }
}

function handleAction(type) {
  if (!isGameActive || !canAction) return;
  canAction = false;

  if (type === 'ok') {
    score += currentWordObj.pts;
    playSound('correct');
    wordDisplay.classList.add('correct-word');
    flashOverlay('flash-ok');
    usedWords.push({ word: currentWordObj.text, pts: currentWordObj.pts, status: 'ok' });
  } else {
    playSound('pass');
    wordDisplay.classList.add('pass-word');
    flashOverlay('flash-pass');
    usedWords.push({ word: currentWordObj.text, pts: currentWordObj.pts, status: 'pass' });
  }

  setTimeout(() => {
    if (isGameActive) {
      nextWord();
      canAction = true;
    }
  }, 420);
}

function flashOverlay(cls) {
  feedbackOverlay.className = `feedback-overlay ${cls}`;
  setTimeout(() => {
    feedbackOverlay.className = 'feedback-overlay';
  }, 350);
}

// Touch / Click Handler: Left half = OK, Right half = PASS
gameScreen.addEventListener('click', (e) => {
  if (!isGameActive || !canAction) return;
  if (e.target.closest('#quit-game-btn')) return;

  const screenWidth = window.innerWidth;
  const clickX = e.clientX;

  if (clickX < screenWidth / 2) {
    handleAction('ok');
  } else {
    handleAction('pass');
  }
});

// Keyboard controls
window.addEventListener('keydown', (e) => {
  if (!isGameActive) return;

  if (e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.code === 'Space') {
    e.preventDefault();
    handleAction('ok');
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
    e.preventDefault();
    handleAction('pass');
  } else if (e.key === 'Escape') {
    if (timer) clearInterval(timer);
    endGame();
  }
});

// ==========================================
// 11. End Game & Results Screen
// ==========================================
function endGame() {
  isGameActive = false;
  if (timer) clearInterval(timer);
  playSound('end');

  gameScreen.classList.remove('active');
  document.getElementById('screen-results').classList.add('active');
  topNav.classList.remove('hidden');

  document.getElementById('final-score').textContent = score;

  const correctCount = usedWords.filter(w => w.status === 'ok').length;
  const summaryEl = document.getElementById('final-summary');
  summaryEl.textContent = `${correctCount} uhodnutých z ${usedWords.length} slov`;

  const listEl = document.getElementById('results-list');
  listEl.innerHTML = '';

  if (usedWords.length === 0) {
    listEl.innerHTML = '<p class="empty-preview">Nebylo odehráno žádné slovo.</p>';
  } else {
    usedWords.forEach(w => {
      const item = document.createElement('div');
      item.className = `res-item ${w.status}`;

      const nameSpan = document.createElement('span');
      nameSpan.textContent = w.word;

      const tagSpan = document.createElement('span');
      tagSpan.className = 'res-tag';
      tagSpan.textContent = w.status === 'ok' ? `+${w.pts}` : 'Přeskočeno';

      item.appendChild(nameSpan);
      item.appendChild(tagSpan);
      listEl.appendChild(item);
    });
  }
}

document.getElementById('restart-btn').addEventListener('click', () => {
  playSound('tick');
  document.getElementById('screen-results').classList.remove('active');
  document.getElementById('screen-start').classList.add('active');
});

// ==========================================
// 12. Initialization
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSound();
  loadCustomCategories();
});
