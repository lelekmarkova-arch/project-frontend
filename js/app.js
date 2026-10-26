// Скрипт страницы: выпадающие меню, переключение тем и языка.

// ПЕРЕКЛЮЧЕНИЕ ЦВЕТА
const themeToggle = document.getElementById('theme-toggle');
const themeMenu = document.getElementById('theme-menu');

// Клик по кнопке — показать/скрыть меню
themeToggle.addEventListener('click', () => {
  themeMenu.classList.toggle('hidden');
});

// Клик вне меню — закрыть
document.addEventListener('click', (e) => {
  if (!themeToggle.contains(e.target) && !themeMenu.contains(e.target)) {
    themeMenu.classList.add('hidden');
  }
});

const themeButtons = document.querySelectorAll('[data-theme]');

function applyTheme(theme) {
  const root = document.documentElement;
  [...root.classList].forEach(c => { if (c.startsWith('theme-')) root.classList.remove(c); });
  root.classList.add('theme-' + theme);
  themeButtons.forEach(b => {
    const active = b.dataset.theme === theme;
    b.classList.toggle('border-(--brand)', active);
    b.classList.toggle('bg-(--bg-muted)', active);
    b.classList.toggle('border-(--border-color)', !active);
    b.querySelector('.check-icon').classList.toggle('hidden', !active);
  });
}

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch (e) { }
    themeMenu.classList.add('hidden');
  });
});

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) { }
applyTheme(savedTheme || 'light');

// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');

// Открытие/закрытие меню языка
if (langToggle && langMenu) {
  langToggle.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
  });
  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add('hidden');
    }
  });
}

// Функция применения перевода (словарь translations берётся из js/translations.js)
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.querySelector('.check-lang').classList.toggle('hidden', b.dataset.lang !== lang);
  });
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    applyLang(lang);
    try { localStorage.setItem('lang', lang); } catch (e) { }
    langMenu.classList.add('hidden');
  });
});

let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) { }
applyLang(savedLang || 'ru');