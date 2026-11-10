// Скрипт страницы: выпадающие меню, переключение тем и языка.

// ПЕРЕКЛЮЧЕНИЕ ЦВЕТА
const themeToggle = document.getElementById('theme-toggle');
const themeMenu = document.getElementById('theme-menu');

// Клик по кнопке — показать/скрыть меню
if (themeToggle && themeMenu) {
  themeToggle.addEventListener('click', () => {
    themeMenu.classList.toggle('hidden');
  });

  // Клик вне меню — закрыть
  document.addEventListener('click', (e) => {
    if (!themeToggle.contains(e.target) && !themeMenu.contains(e.target)) {
      themeMenu.classList.add('hidden');
    }
  });
}

const themeButtons = document.querySelectorAll('button[data-theme]');

function applyTheme(theme) {
  const root = document.documentElement;

  // 1. Убираем старые классы тем и ставим новый
  [...root.classList].forEach(c => { if (c.startsWith('theme-')) root.classList.remove(c); });
  root.classList.add('theme-' + theme);

  // 2. Проверяем, есть ли вообще кнопки темы на этой странице
  if (typeof themeButtons !== 'undefined' && themeButtons.length > 0) {
    themeButtons.forEach(b => {
      const active = b.dataset.theme === theme;

      // Работаем с классами самой кнопки
      b.classList.toggle('border-(--brand)', active);
      b.classList.toggle('bg-(--bg-muted)', active);
      b.classList.toggle('border-(--border-color)', !active);

      // Безопасно ищем иконку галочки внутри кнопки
      const checkIcon = b.querySelector('.check-icon');
      if (checkIcon) {
        checkIcon.classList.toggle('hidden', !active);
      }
    });
  }
}

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch (e) { }
    if (themeMenu) themeMenu.classList.add('hidden');
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

  // 1. Перевод обычного текста
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // 2. Перевод плейсхолдеров (текст-подсказка внутри input)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });

  // 3. Отметка галочкой активного языка в меню
  document.querySelectorAll('button[data-lang]').forEach(b => {
    const check = b.querySelector('.check-lang');
    if (check) check.classList.toggle('hidden', b.dataset.lang !== lang);
  });
}

document.querySelectorAll('button[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    applyLang(lang);
    try { localStorage.setItem('lang', lang); } catch (e) { }
    if (langMenu) langMenu.classList.add('hidden');
  });
});

let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) { }
applyLang(savedLang || 'ru');

// АККОРДЕОНЫ (guide.html)
document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    var panel = document.getElementById(this.getAttribute('aria-controls'));
    var icon = this.querySelector('.accordion-icon');
    this.setAttribute('aria-expanded', String(!expanded));
    if (panel) panel.classList.toggle('hidden', expanded);
    if (icon) icon.classList.toggle('rotate-90', !expanded);
  });
});


// ТАЙМЕР ЗАЗЕМЛЕНИЯ (guide.html, карточка 5, аккордеон 3)
(function () {
  var startBtn = document.getElementById('grounding-start');
  var resetBtn = document.getElementById('grounding-reset');
  if (!startBtn || !resetBtn) return;

  var activeStepEl = document.getElementById('grounding-active-step');
  var completeEl = document.getElementById('grounding-complete');
  var stepNumberEl = document.getElementById('grounding-step-number');
  var stepTitleEl = document.getElementById('grounding-step-title');
  var stepDescEl = document.getElementById('grounding-step-desc');
  var timerEl = document.getElementById('grounding-timer');
  var stepLabelEl = document.getElementById('grounding-step-label');
  var progressEl = document.getElementById('grounding-progress');
  var stepBoxes = document.querySelectorAll('.grounding-step');
  var startIconEl = document.getElementById('grounding-start-icon');
  var startLabelEl = document.getElementById('grounding-start-label');

  // Иконки (play / pause)
  var ICON_PLAY = '<polygon points="6 3 20 12 6 21 6 3"></polygon>';
  var ICON_PAUSE = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';

  // Классы кнопки: «Начать» — залитая брендовая, «Пауза» — контурная как «Сброс»
  var BTN_START_CLASSES = ['bg-(--brand)', 'hover:opacity-90', 'text-white'];
  var BTN_PAUSE_CLASSES = [
    'border', 'border-(--border-color)',
    'bg-transparent', 'hover:bg-(--bg-muted)',
    'text-(--text-primary)'
  ];

  // Ключи шагов — текст берётся из translations по этим ключам
  var steps = [
    { num: 5, key: 'step1' },
    { num: 4, key: 'step2' },
    { num: 3, key: 'step3' },
    { num: 2, key: 'step4' },
    { num: 1, key: 'step5' }
  ];

  var currentStep = 0;
  var timeLeft = 30;
  var intervalId = null;
  var isRunning = false;
  var isComplete = false;

  // Получить перевод по ключу для текущего языка
  function t(key) {
    var lang = 'ru';
    try {
      lang = localStorage.getItem('lang') || document.documentElement.lang || 'ru';
    } catch (e) {
      lang = document.documentElement.lang || 'ru';
    }
    if (typeof translations !== 'undefined' && translations[key] && translations[key][lang]) {
      return translations[key][lang];
    }
    if (typeof translations !== 'undefined' && translations[key] && translations[key]['ru']) {
      return translations[key]['ru'];
    }
    return '';
  }

  // «Шаг {n} из 5» с подстановкой номера
  function tStepLabel(n) {
    return (t('guide.ch5.timer.stepLabel') || 'Шаг {n} из 5').replace('{n}', n);
  }

  function setStartButton() {
    startLabelEl.textContent = t('guide.ch5.timer.start') || 'Начать';
    startIconEl.innerHTML = ICON_PLAY;
    startBtn.classList.remove(...BTN_PAUSE_CLASSES);
    startBtn.classList.add(...BTN_START_CLASSES);
  }

  function setPauseButton() {
    startLabelEl.textContent = t('guide.ch5.timer.pause') || 'Пауза';
    startIconEl.innerHTML = ICON_PAUSE;
    startBtn.classList.remove(...BTN_START_CLASSES);
    startBtn.classList.add(...BTN_PAUSE_CLASSES);
  }

  function render() {
    if (isComplete) return;

    var step = steps[currentStep];
    stepNumberEl.textContent = step.num;
    stepTitleEl.textContent = t('guide.ch5.timer.' + step.key + '.title');
    stepDescEl.textContent = t('guide.ch5.timer.' + step.key + '.desc');
    stepLabelEl.textContent = tStepLabel(currentStep + 1);
    timerEl.textContent = '0:' + String(timeLeft).padStart(2, '0');
    progressEl.style.width = ((currentStep + (30 - timeLeft) / 30) / 5 * 100) + '%';

    stepBoxes.forEach(function (box, i) {
      var isActive = i === currentStep;
      var isDone = i < currentStep;
      var isPending = !isActive && !isDone;

      box.classList.remove(
        'bg-blue-600', 'bg-green-600', 'bg-green-100', 'bg-gray-100', 'dark:bg-gray-800',
        'text-white', 'text-green-700', 'text-gray-600', 'dark:text-gray-400',
        'scale-110', 'shadow-md', 'shadow-sm'
      );

      if (isActive) {
        box.classList.add('bg-blue-600', 'text-white', 'scale-110', 'shadow-md');
      } else if (isDone) {
        box.classList.add('bg-green-100', 'text-green-700', 'shadow-sm');
      } else {
        box.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-400');
      }
    });
  }

  function showComplete() {
    isComplete = true;
    isRunning = false;
    setStartButton();
    activeStepEl.classList.add('hidden');
    completeEl.classList.remove('hidden');
    progressEl.style.width = '100%';

    stepBoxes.forEach(function (box) {
      box.classList.remove(
        'bg-blue-600', 'bg-green-600', 'bg-gray-100', 'dark:bg-gray-800',
        'text-white', 'text-gray-600', 'dark:text-gray-400',
        'scale-110', 'shadow-md', 'shadow-sm'
      );
      box.classList.add('bg-green-100', 'text-green-700');
    });
  }

  function hideComplete() {
    isComplete = false;
    activeStepEl.classList.remove('hidden');
    completeEl.classList.add('hidden');
  }

  function tick() {
    timeLeft--;
    if (timeLeft <= 0) {
      if (currentStep < steps.length - 1) {
        currentStep++;
        timeLeft = 30;
      } else {
        stop();
        showComplete();
        return;
      }
    }
    render();
  }

  function start() {
    if (isRunning) return;
    isRunning = true;
    setPauseButton();
    intervalId = setInterval(tick, 1000);
  }

  function stop() {
    isRunning = false;
    setStartButton();
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function reset() {
    stop();
    hideComplete();
    currentStep = 0;
    timeLeft = 30;
    render();
  }

  startBtn.addEventListener('click', function () {
    if (isComplete) return;
    if (isRunning) {
      stop();
    } else {
      start();
    }
  });

  resetBtn.addEventListener('click', reset);

  // При смене языка перерисовываем таймер
  var langObserver = new MutationObserver(function () {
    if (!isComplete) render();
    else setStartButton();
  });
  langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  setStartButton();
  render();
})();

// === ТЕСТЫ МОДУЛЕЙ (СПИСКОМ) ===
(function () {
  const body = document.body;
  const moduleId = body.getAttribute('data-module-id');
  const container = document.getElementById('quiz-list');
  if (!moduleId || !container) return;

  const MODULE_CONFIG = {
    '1': { prefix: 'module1', correct: [1, 2, 1, 1, 1] },
    '2': { prefix: 'module2', correct: [1, 1, 1, 1, 1] },
    '3': { prefix: 'module3', correct: [1, 1, 1, 0, 1] },
    '4': { prefix: 'module4', correct: [1, 1, 1, 0, 1] },
    '5': { prefix: 'module5', correct: [0, 2, 1, 1, 1] },
    '6': { prefix: 'module6', correct: [1, 1, 1, 1, 1] }
  };

  const config = MODULE_CONFIG[moduleId];
  if (!config) return;

  const TOTAL = 5;
  let answers = new Array(TOTAL).fill(null);
  let isSubmitted = false;

  const submitBtn = document.getElementById('submit-quiz');
  if (!submitBtn) return;
  const retryBtn = document.getElementById('retry-btn');
  const resultScreenEl = document.getElementById('result-screen');
  const resultBadge = document.getElementById('result-badge');
  const resultAlert = document.getElementById('result-alert');
  const bottomControls = document.getElementById('bottom-controls');

  function t(key) {
    const lang = localStorage.getItem('lang') || 'ru';
    if (typeof translations !== 'undefined' && translations[key]) {
      return translations[key][lang] || translations[key]['ru'] || key;
    }
    return key;
  }

  // Функция для проверки, можно ли активировать кнопку
  function updateButtonState() {
    if (!submitBtn || isSubmitted) return;
    if (answers.includes(null)) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
      submitBtn.classList.remove('hover:opacity-90');
    } else {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      submitBtn.classList.add('hover:opacity-90');
    }
  }

  function render() {
    let html = '';
    const letters = ['A', 'B', 'C', 'D'];

    for (let q = 1; q <= TOTAL; q++) {
      const qPrefix = `${config.prefix}.q${q}`;
      const correctIndex = config.correct[q - 1];
      const selected = answers[q - 1];

      let cardClass = 'bg-[var(--bg-card)] text-[var(--text-primary)] flex flex-col gap-6 rounded-xl border-2 border-(--border-color) py-6 shadow-sm';
      let headerIcon = '';

      if (isSubmitted) {
        if (selected === correctIndex) {
          // Если ответ верный — вся карточка зеленая
          cardClass = 'text-[var(--text-primary)] flex flex-col gap-6 rounded-xl border-2 border-green-500 bg-green-50/50 dark:bg-green-950/20 py-6 shadow-sm';
          headerIcon = `<div class="shrink-0 text-green-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>`;
        } else {
          // Если ответ неверный — вся карточка красная
          cardClass = 'text-[var(--text-primary)] flex flex-col gap-6 rounded-xl border-2 border-red-500 bg-red-50/50 dark:bg-red-950/20 py-6 shadow-sm';
          headerIcon = `<div class="shrink-0 text-red-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div>`;
        }
      }
      // 

      let optionsHtml = '';
      for (let i = 0; i < 4; i++) {
        const letter = letters[i];
        const optKey = `${qPrefix}.${letter.toLowerCase()}`;

        let stateClass = 'border-(--border-color) bg-[var(--bg-card)] hover:border-[var(--brand)]/50';
        let circleClass = 'flex h-6 w-6 items-center justify-center rounded-full border-2 shrink-0 border-[var(--text-muted)]';
        let circleContent = '';

        if (isSubmitted) {
          if (i === correctIndex) {
            stateClass = 'border-green-500 bg-green-50 dark:bg-green-950/20';
            circleClass = 'flex h-6 w-6 items-center justify-center rounded-full border-2 shrink-0 border-green-600 bg-green-600 text-white text-xs font-bold';
            circleContent = '✓';
          } else if (i === selected) {
            stateClass = 'border-red-500 bg-red-50 dark:bg-red-950/20';
            circleClass = 'flex h-6 w-6 items-center justify-center rounded-full border-2 shrink-0 border-red-600 bg-red-600 text-white text-xs font-bold';
            circleContent = '✕';
          } else {
            stateClass = 'border-(--border-color) bg-[var(--bg-card)] opacity-60';
            circleClass = 'flex h-6 w-6 items-center justify-center rounded-full border-2 shrink-0 border-[var(--text-muted)]';
          }
        } else if (i === selected) {
          stateClass = 'border-[var(--brand)] bg-[var(--brand)]/5';
          circleClass = 'flex h-6 w-6 items-center justify-center rounded-full border-2 shrink-0 border-[var(--brand)] bg-[var(--brand)] text-white text-xs font-bold';
          circleContent = '✓';
        }

        optionsHtml += `
          <button type="button" data-q="${q - 1}" data-opt="${i}" class="quiz-option w-full text-left p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${stateClass}" ${isSubmitted ? 'disabled' : ''}>
            <div class="${circleClass}">
              ${circleContent}
            </div>
            <span class="flex-1 text-sm md:text-base">${t(optKey)}</span>
          </button>
        `;
      }

      let explanationHtml = '';
      if (isSubmitted) {
        explanationHtml = `
          <div class="mt-4 p-4 rounded-lg bg-(--bg-muted) border border-(--border-color)">
            <p class="text-sm font-medium mb-1">${t('module.quiz.explanation_label')}</p>
            <p class="text-sm text-(--text-muted) leading-relaxed">${t(`${qPrefix}.explanation`)}</p>
          </div>
        `;
      }

      html += `
        <div class="${cardClass}">
          <div class="px-6">
            <div class="flex items-start gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-(--bg-muted) text-(--brand) font-semibold shrink-0">${q}</div>
              <div class="font-semibold text-lg flex-1">${t(`${qPrefix}.question`)}</div>
              ${headerIcon}
            </div>
          </div>
          <div class="px-6 space-y-3">
            ${optionsHtml}
            ${explanationHtml}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (isSubmitted) return;
        const qIndex = parseInt(btn.dataset.q, 10);
        const optIndex = parseInt(btn.dataset.opt, 10);
        answers[qIndex] = optIndex;
        render();
      });
    });

    // ОБНОВЛЕНИЕ ПРОГРЕСС-БАРА
    const answeredCount = answers.filter(a => a !== null).length;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    if (progressBar) {
      const percent = (answeredCount / TOTAL) * 100;
      progressBar.style.transform = `translateX(-${100 - percent}%)`;
    }

    if (progressText) {
      progressText.textContent = `${answeredCount} / ${TOTAL}`;
    }

    updateButtonState();
  }

  // Обработчик кнопки "Завершить тест"
  submitBtn.addEventListener('click', () => {
    if (isSubmitted || answers.includes(null)) return;

    isSubmitted = true;

    let score = 0;
    answers.forEach((ans, i) => {
      if (ans === config.correct[i]) score++;
    });

    // Сохраняем прогресс для модуля
    if (score > 0) {
      localStorage.setItem(`module_${moduleId}_passed`, 'true');
      // Сохраняем результат: сколько правильных из скольких
      localStorage.setItem(`module_${moduleId}_score`, `${score}/${TOTAL}`);
    }

    render(); // Перерисовываем, чтобы показать правильные/неправильные

    // ПРИНУДИТЕЛЬНО СКРЫВАЕМ КНОПКУ (чтобы точно исчезла)
    submitBtn.style.display = 'none';

    // Скрываем прогресс-бар
    const progressWrapper = document.getElementById('progress-wrapper');
    if (progressWrapper) progressWrapper.classList.add('hidden');

    if (resultScreenEl && resultBadge) {
      const percent = Math.round((score / TOTAL) * 100);
      resultBadge.textContent = `${score} / ${TOTAL} (${percent}%)`;

      if (score === TOTAL) {
        resultBadge.classList.add('bg-green-600', 'dark:bg-green-600');
        resultBadge.classList.remove('bg-red-500', 'dark:bg-red-600');
        if (resultAlert) {
          resultAlert.classList.add('hidden');
          resultAlert.classList.remove('flex'); // <-- Убираем flex
        }
      } else {
        resultBadge.classList.add('bg-red-500', 'dark:bg-red-600');
        resultBadge.classList.remove('bg-green-600', 'dark:bg-green-600');
        if (resultAlert) {
          resultAlert.classList.remove('hidden');
          resultAlert.classList.add('flex'); // <-- Добавляем flex
        }
      }

      resultScreenEl.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (bottomControls) {
      bottomControls.classList.remove('hidden');
      bottomControls.classList.add('flex'); // <-- Показываем flex
    }
  });

  // Обработчик кнопки "Пройти заново"
  retryBtn.addEventListener('click', () => {
    isSubmitted = false;
    answers = new Array(TOTAL).fill(null);

    if (resultScreenEl) resultScreenEl.classList.add('hidden');
    if (resultAlert) {
      resultAlert.classList.add('hidden');
      resultAlert.classList.remove('flex'); // <-- Сбрасываем flex
    }
    if (bottomControls) {
      bottomControls.classList.add('hidden');
      bottomControls.classList.remove('flex'); // <-- Убираем flex
    }

    // ВОЗВРАЩАЕМ КНОПКУ
    submitBtn.style.display = '';

    // Показываем прогресс-бар обратно (и сбрасываем его)
    const progressWrapper = document.getElementById('progress-wrapper');
    if (progressWrapper) progressWrapper.classList.remove('hidden');

    // Сбрасываем ее в неактивное состояние (серое)
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    submitBtn.classList.remove('hover:opacity-90');

    if (resultBadge) {
      resultBadge.textContent = `0 / ${TOTAL} (0%)`;
      resultBadge.classList.remove('bg-green-600', 'bg-red-500', 'dark:bg-green-600', 'dark:bg-red-600');
    }

    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Первый запуск
  render();

})();

// === ПРОВЕРКА ПРОЙДЕННЫХ МОДУЛЕЙ НА СТРАНИЦЕ СПИСКА ===
(function () {
  // Проверяем, есть ли на странице хотя бы одна карточка модуля
  if (!document.getElementById('module-1-card')) return;

  // Безопасная функция перевода (чтобы не было ошибок)
  function localT(key, fallback) {
    try {
      const lang = localStorage.getItem('lang') || 'ru';
      if (typeof translations !== 'undefined' && translations[key] && translations[key][lang]) {
        return translations[key][lang];
      }
    } catch (e) { }
    return fallback;
  }

  for (let i = 1; i <= 6; i++) {
    const isPassed = localStorage.getItem(`module_${i}_passed`);
    const card = document.getElementById(`module-${i}-card`);

    if (card && isPassed === 'true') {
      // 1. Красим карточку в зеленый
      card.classList.add('border-green-500', 'bg-green-50/50', 'dark:bg-green-950/20');
      card.classList.remove('border-[var(--border-color)]', 'bg-[var(--bg-card)]');

      // 2. Меняем кнопку на "Пересдать тест"
      const btn = card.querySelector('a');
      if (btn) {
        const retakeText = localT('modules.retake_btn', 'Пересдать тест');
        btn.textContent = retakeText;
        btn.setAttribute('data-i18n', 'modules.retake_btn');
      }

      // 3. Добавляем бейдж "Завершено" справа от заголовка
      const titleContainer = card.querySelector('.flex.items-center.gap-3');
      if (titleContainer && !titleContainer.querySelector('.badge-passed')) {
        const titleText = titleContainer.querySelector('.font-semibold');
        if (titleText) {
          titleText.classList.add('flex-1');
        }

        const badge = document.createElement('span');
        badge.className = 'badge-passed inline-flex items-center justify-center rounded-md bg-green-600 text-white text-xs font-medium px-2.5 py-1 gap-1.5 ml-2 shrink-0';

        const badgeText = localT('modules.passed_badge', 'Завершено');

        badge.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              <span data-i18n="modules.passed_badge">${badgeText}</span>
          `;
        titleContainer.appendChild(badge);
      }
    }
  }
})();

/* ============================================================
   СТРАНИЦА "МОЙ ПРОГРЕСС"
   ============================================================ */
(function initProgressPage() {
  const progressList = document.getElementById('progress-list');
  if (!progressList) return; // Запускаемся только на progress.html

  const TOTAL_MODULES = 6;

  // --- Безопасная функция перевода (не зависит от других скриптов) ---
  function tProgress(key) {
    let lang = 'ru';
    try { lang = localStorage.getItem('lang') || 'ru'; } catch (e) { }

    if (typeof translations === 'undefined') return key;

    // Если словарь плоский (например, ключ "progress.start")
    if (translations[key] && translations[key][lang]) {
      return translations[key][lang];
    }
    // Если словарь вложенный (например, translations.progress.start)
    try {
      const parts = key.split('.');
      let val = translations;
      for (let p of parts) {
        val = val[p];
        if (!val) break;
      }
      if (val && val[lang]) return val[lang];
    } catch (e) { }

    return key; // если ничего не нашли
  }

  // ---------- Подсчёт прогресса ----------
  function getProgressData() {
    let passedCount = 0;
    const modules = [];

    for (let i = 1; i <= TOTAL_MODULES; i++) {
      const isPassed = localStorage.getItem(`module_${i}_passed`) === 'true';
      if (isPassed) passedCount++;
      modules.push({ index: i, passed: isPassed });
    }

    const percent = Math.round((passedCount / TOTAL_MODULES) * 100);
    return { modules, passedCount, percent };
  }

  // ---------- Средний результат по сохранённым попыткам ----------
  function getAverageScore() {
    let sum = 0, attempts = 0;
    for (let i = 1; i <= TOTAL_MODULES; i++) {
      const raw = localStorage.getItem(`module_${i}_score`);
      if (raw !== null) {
        // Разбираем строку вида "4/5"
        const parts = raw.split('/');
        if (parts.length === 2) {
          const score = Number(parts[0]);
          const total = Number(parts[1]);
          if (!Number.isNaN(score) && !Number.isNaN(total) && total > 0) {
            sum += (score / total) * 100; // Переводим в проценты
            attempts++;
          }
        }
      }
    }
    return {
      average: attempts ? Math.round(sum / attempts) : 0,
      attempts,
    };
  }

  // ---------- Отрисовка строки модуля ----------
  function renderModuleCard(module) {
    const { index, passed } = module;

    // Безопасно получаем название модуля
    let title = tProgress(`modules.m${index}.title`);
    if (title === `modules.m${index}.title`) title = `Модуль ${index}`; // fallback

    const row = document.createElement('div');
    row.className = 'module-row flex items-center gap-4 p-4 rounded-lg border transition-colors';
    row.style.backgroundColor = 'var(--bg-card)';
    row.style.borderColor = 'var(--border-color)';

    // --- Кружок с номером ---
    const num = document.createElement('div');
    num.className = 'flex h-10 w-10 items-center justify-center rounded-full font-bold flex-shrink-0';
    num.style.backgroundColor = 'color-mix(in srgb, var(--brand) 12%, transparent)';
    num.style.color = 'var(--brand)';
    num.textContent = String(index);

    // --- Центр: название + подпись ---
    const center = document.createElement('div');
    center.className = 'flex-1 min-w-0';

    const h3 = document.createElement('h3');
    h3.className = 'font-semibold truncate';
    h3.textContent = title;

    const sub = document.createElement('p');
    sub.className = 'text-sm opacity-70';
    const qCount = tProgress('progress.questionsCount');
    sub.textContent = (qCount === 'progress.questionsCount') ? '5 вопросов' : qCount;

    center.appendChild(h3);
    center.appendChild(sub);

    // --- Правая часть: бейдж + кнопка ---
    const right = document.createElement('div');
    right.className = 'flex items-center gap-3';

    const badge = document.createElement('span');
    badge.className = 'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap';
    badge.style.borderColor = 'transparent';

    if (passed) {
      badge.style.backgroundColor = 'color-mix(in srgb, #22c55e 15%, transparent)';
      badge.style.color = '#16a34a';

      // Читаем сохраненный счет (например, "4/5")
      const scoreStr = localStorage.getItem(`module_${index}_score`);
      const statusDone = tProgress('progress.statusDone');
      const doneText = statusDone === 'progress.statusDone' ? 'Завершено' : statusDone;

      badge.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
        </svg>
        <span>${doneText}</span>
        ${scoreStr ? `<span class="ml-1 opacity-80 border-l border-green-600/30 pl-2 font-bold">${scoreStr}</span>` : ''}
      `;
    } else {
      badge.style.backgroundColor = 'var(--bg-muted)';
      badge.style.color = 'var(--text-primary)';
      const statusNot = tProgress('progress.statusNotStarted');
      badge.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>${statusNot === 'progress.statusNotStarted' ? 'Не начато' : statusNot}</span>`;
    }

    const btn = document.createElement('a');
    btn.href = `./module-${index}.html`;
    btn.className = 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition h-8 rounded-md gap-1.5 px-3';
    btn.style.border = '1px solid var(--border-color)';
    btn.style.backgroundColor = 'transparent';
    btn.style.color = 'var(--text-primary)';

    if (passed) {
      const repeatTxt = tProgress('progress.repeat');
      btn.textContent = repeatTxt === 'progress.repeat' ? 'Просмотр' : repeatTxt;
    } else {
      const startTxt = tProgress('progress.start');
      btn.textContent = startTxt === 'progress.start' ? 'Начать' : startTxt;
    }

    right.appendChild(badge);
    right.appendChild(btn);

    row.appendChild(num);
    row.appendChild(center);
    row.appendChild(right);
    return row;
  }

  // ---------- Отрисовка страницы ----------
  function renderProgress() {
    const { modules, passedCount, percent } = getProgressData();

    // Карточка "Модули завершены"
    const countEl = document.getElementById('completed-count');
    const barEl = document.getElementById('completed-bar');
    const pctEl = document.getElementById('completed-percent');
    if (countEl) countEl.textContent = `${passedCount} / ${TOTAL_MODULES}`;
    if (barEl) barEl.style.width = `${percent}%`;
    if (pctEl) pctEl.textContent = `${percent}%`;

    // Карточка "Средний результат"
    const avgEl = document.getElementById('average-score');
    const avgSubEl = document.querySelector('[data-i18n="progress.averageSubtitle"]');

    if (avgEl) {
      const { average, attempts } = getAverageScore();
      if (attempts > 0) {
        avgEl.textContent = `${average}%`;
        if (avgSubEl) {
          const tmpl = tProgress('progress.averageSubtitle');
          avgSubEl.textContent = (tmpl === 'progress.averageSubtitle' ? 'На основе {n} попыток тестирования' : tmpl).replace('{n}', attempts);
        }
      } else {
        avgEl.textContent = '—';
        if (avgSubEl) {
          const emptyTxt = tProgress('progress.averageSubtitleEmpty');
          avgSubEl.textContent = emptyTxt === 'progress.averageSubtitleEmpty' ? 'Пройдите тест, чтобы увидеть свой результат' : emptyTxt;
        }
      }

      // Показ блоков при завершении курса
      const completionBlocks = document.getElementById('completion-blocks');
      if (completionBlocks) {
        if (passedCount === TOTAL_MODULES) {
          completionBlocks.classList.remove('hidden');
        } else {
          completionBlocks.classList.add('hidden');
        }
      }
    }

    // Список модулей
    progressList.innerHTML = '';
    modules.forEach((m) => progressList.appendChild(renderModuleCard(m)));

    // Обновление блока "Продолжайте!"
    const continueMsg = document.getElementById('continue-message');
    const keepGoingCard = document.getElementById('keep-going-card');

    if (continueMsg && keepGoingCard) {
      if (passedCount === TOTAL_MODULES) {
        // Если всё пройдено — скрываем блок
        keepGoingCard.classList.add('hidden');

        // Обновляем текст (на случай, если скроем не сразу)
        const doneTxt = tProgress('progress.allDoneText');
        continueMsg.textContent = doneTxt === 'progress.allDoneText'
          ? 'Поздравляем! Вы завершили весь курс.'
          : doneTxt;
      } else {
        // Если не всё пройдено — показываем блок
        keepGoingCard.classList.remove('hidden');

        // Подставляем текущие цифры
        const template = tProgress('progress.keepGoingText');
        const finalText = template === 'progress.keepGoingText'
          ? 'Вы завершили {n} из {total} модулей. Продолжайте учиться, чтобы овладеть управлением стрессом!'
          : template;

        continueMsg.textContent = finalText
          .replace('{n}', passedCount)
          .replace('{total}', TOTAL_MODULES);
      }
    }

    // Показ блоков при завершении курса (Поздравляем + Сертификат)
    const completionBlocks = document.getElementById('completion-blocks');
    if (completionBlocks) {
      if (passedCount === TOTAL_MODULES) {
        completionBlocks.classList.remove('hidden');
      } else {
        completionBlocks.classList.add('hidden');
      }
    }
  }

  // ---------- Запуск ----------
  renderProgress();

  // Перерисовка при смене языка
  window.addEventListener('langchange', renderProgress);
})();

// === СЕРТИФИКАТ (ЛОГИКА UI) ===
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('cert-name');
  const downloadBtn = document.getElementById('download-cert');
  const tplBtns = document.querySelectorAll('.cert-tpl-btn');

  if (nameInput && downloadBtn) {
    // Активация кнопки скачивания
    nameInput.addEventListener('input', (e) => {
      downloadBtn.disabled = e.target.value.trim().length < 2;
    });

    // Переключение шаблонов
    tplBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // 1. Сбрасываем стили у ВСЕХ кнопок
        tplBtns.forEach(b => {
          b.classList.remove('bg-(--brand)', 'text-white', 'border-transparent');
          b.classList.add('border-(--border-color)', 'text-(--text-primary)', 'bg-transparent');
        });

        // 2. Делаем нажатую кнопку активной
        btn.classList.remove('border-(--border-color)', 'text-(--text-primary)', 'bg-transparent');
        btn.classList.add('bg-(--brand)', 'text-white', 'border-transparent');
      });
    });

    // Заглушка для скачивания
    downloadBtn.addEventListener('click', () => {
      alert(`Сертификат для ${nameInput.value} будет скачан в ближайшем будущем!`);
    });
  }
});

// Логика кнопки "Назад"
document.addEventListener('click', function (e) {
  const backBtn = e.target.closest('#backBtn');

  if (backBtn) {
    // Если есть история — назад, иначе на главную
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = 'index.html';
    }
  }
});

// ==========================================
// ОТРИСОВКА ГРАФИКОВ (Analytics)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  const stressCanvas = document.getElementById('stressChart');
  const moodCanvas = document.getElementById('moodChart');

  if (stressCanvas && moodCanvas && typeof Chart !== 'undefined') {

    // Общие настройки для осей (чтобы выглядело как на скрине)
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false } // Легенда не нужна
      },
      scales: {
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#9ca3af' // Цвет цифр (серый)
          },
          grid: {
            color: 'rgba(229, 231, 235, 0.5)' // Очень светлая сетка
          },
          border: { display: false } // Убираем жирную линию оси Y
        },
        x: {
          grid: { display: false }, // Убираем вертикальные линии
          border: { display: false } // Убираем жирную линию оси X
        }
      }
    };

    // --- График стресса (Пустой, как на референсе) ---
    new Chart(stressCanvas, {
      type: 'line',
      data: {
        labels: [], // Нет подписей снизу
        datasets: [{
          data: [], // Нет данных
          borderColor: '#ef4444', // Красный (на будущее, когда появятся данные)
          borderWidth: 2,
        }]
      },
      options: commonOptions
    });

    // --- График настроения (Пустой, как на референсе) ---
    new Chart(moodCanvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderColor: '#eab308', // Желтый
          borderWidth: 2,
        }]
      },
      options: commonOptions
    });
  }
});
// ==========================================
// ЛОГИКА СТРАНИЦЫ "ЖУРНАЛ ПРАКТИКИ"
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('practice-form');
  if (!form) return;

  // --- 1. Инициализация ползунков при загрузке ---
  const stressBefore = document.getElementById('stress-before');
  const stressAfter = document.getElementById('stress-after');

  setTimeout(() => {
    if (stressBefore) window.updateSliderColor(stressBefore);
    if (stressAfter) window.updateSliderColor(stressAfter);
  }, 50);

  // --- 2. Кастомный селект ---
  const selectBtn = document.getElementById('custom-select-btn');
  const selectOptions = document.getElementById('custom-select-options');
  const selectText = document.getElementById('custom-select-text');
  const hiddenInput = document.getElementById('technique');

  if (selectBtn && selectOptions) {
    selectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectOptions.classList.toggle('hidden');
    });

    selectOptions.querySelectorAll('div').forEach(option => {
      option.addEventListener('click', () => {
        selectText.textContent = option.textContent;
        selectText.classList.remove('text-(--text-secondary)');
        selectText.classList.add('text-theme-primary');
        hiddenInput.value = option.dataset.value;
        selectOptions.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!selectBtn.contains(e.target) && !selectOptions.contains(e.target)) {
        selectOptions.classList.add('hidden');
      }
    });
  }
  const btnEditGoal = document.getElementById('btn-edit-goal');
  const btnCancelGoal = document.getElementById('btn-cancel-goal');
  const btnSaveGoal = document.getElementById('btn-save-goal');
  const goalView = document.getElementById('goal-view');
  const goalEdit = document.getElementById('goal-edit');
  const goalSlider = document.getElementById('goal-slider');
  const goalSliderVal = document.getElementById('goal-slider-val');

  let currentGoal = parseInt(localStorage.getItem('practice_goal')) || 3;

  if (btnEditGoal && goalView && goalEdit) {
    btnEditGoal.addEventListener('click', () => {
      goalSlider.value = currentGoal;
      goalSliderVal.textContent = currentGoal;
      updateSliderColor(goalSlider);

      goalView.classList.add('hidden');
      goalEdit.classList.remove('hidden');
      btnEditGoal.classList.add('hidden');
    });

    btnCancelGoal.addEventListener('click', () => {
      goalView.classList.remove('hidden');
      goalEdit.classList.add('hidden');
      btnEditGoal.classList.remove('hidden');
    });

    btnSaveGoal.addEventListener('click', () => {
      currentGoal = parseInt(goalSlider.value);
      localStorage.setItem('practice_goal', currentGoal);

      goalView.classList.remove('hidden');
      goalEdit.classList.add('hidden');
      btnEditGoal.classList.remove('hidden');

      updateUI();
    });
  }

  // --- 2. Сохранение данных и работа с localStorage ---
  function getSessions() {
    try {
      return JSON.parse(localStorage.getItem('practice_sessions')) || [];
    } catch (e) {
      return [];
    }
  }

  function updateUI() {

    // Получаем текущий язык и функцию перевода
    const lang = localStorage.getItem('lang') || 'ru';
    const t = (key, fallback) => {
      if (typeof translations !== 'undefined' && translations[key] && translations[key][lang]) {
        return translations[key][lang];
      }
      return fallback || key;
    };

    const sessions = getSessions();
    const historyList = document.getElementById('history-list');
    const historyEmpty = document.getElementById('history-empty');

    // --- Обновляем прогресс-бар "Недельная цель" ---
    const sessionsCount = sessions.length;
    const goal = parseInt(localStorage.getItem('practice_goal')) || 3;

    const countEl = document.getElementById('sessions-count');
    const totalEl = document.getElementById('sessions-total');
    const barEl = document.getElementById('progress-bar');
    const pctEl = document.getElementById('progress-percent');

    if (countEl) countEl.textContent = sessionsCount;
    if (totalEl) totalEl.textContent = goal;

    const percent = Math.min(Math.round((sessionsCount / goal) * 100), 100);
    if (barEl) barEl.style.width = `${percent}%`;
    if (pctEl) pctEl.textContent = percent;

    // --- Обновляем историю ---
    if (sessions.length === 0) {
      if (historyEmpty) historyEmpty.classList.remove('hidden');
      if (historyList) historyList.classList.add('hidden');
    } else {
      if (historyEmpty) historyEmpty.classList.add('hidden');
      if (historyList) {
        historyList.classList.remove('hidden');
        historyList.innerHTML = '';

        // Рендерим карточки (новые сверху)
        [...sessions].reverse().forEach((session) => {
          const dateObj = new Date(session.date);

          // 1. Локализация даты (один раз)
          const locale = lang === 'en' ? 'en-US' : 'ru-RU';
          const dateStr = dateObj.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
          const timeStr = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
          const fullDate = lang === 'en' ? `${dateStr} at ${timeStr}` : `${dateStr} в ${timeStr}`;

          // 2. Перевод названия техники
          let techName = session.technique; // По умолчанию — сохраненный текст
          if (session.techniqueKey) {
            // Если есть ключ (например, 'practice.form.tech1'), ищем перевод
            techName = t(session.techniqueKey, session.technique);
          }

          // 3. Считаем снижение
          const diff = session.stressBefore - session.stressAfter;

          let diffColor = 'text-green-600';
          let diffPrefix = '-';
          if (diff < 0) {
            diffColor = 'text-red-600';
            diffPrefix = '+';
          } else if (diff === 0) {
            diffColor = 'text-gray-500';
            diffPrefix = '';
          }

          // 4. Создаем карточку (один раз)
          const div = document.createElement('div');
          div.className = 'border border-(--border-color) rounded-lg p-4 hover:bg-(--bg-muted) transition-colors';

          div.innerHTML = `
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="font-semibold text-lg text-theme-primary mb-1">${techName}</h3>
                <p class="text-sm text-(--text-secondary)">${fullDate}</p>
              </div>
              <div class="text-right">
                <div class="text-sm text-(--text-secondary)">${t('practice.history.reduction', 'Снижение')}</div>
                <div class="text-2xl font-bold ${diffColor}">${diffPrefix}${Math.abs(diff)}</div>
              </div>
            </div>
            
            <div class="flex gap-6 text-sm">
              <div>
                <span class="text-(--text-secondary)">${t('practice.history.before', 'До:')} </span>
                <span class="font-semibold text-theme-primary">${session.stressBefore}/10</span>
              </div>
              <div>
                <span class="text-(--text-secondary)">${t('practice.history.after', 'После:')} </span>
                <span class="font-semibold text-theme-primary">${session.stressAfter}/10</span>
              </div>
            </div>
            
            ${session.notes ? `<div class="mt-3 pt-3 border-t border-(--border-color)"><p class="text-sm text-(--text-secondary) italic">"${session.notes}"</p></div>` : ''}
          `;

          historyList.appendChild(div);
        });
      }
    }

    // --- Обновление блока статистики (НОВЫЙ БЛОК) ---
    const statsCard = document.getElementById('stats-card');

    if (statsCard) {
      if (sessions.length === 0) {
        // Если записей нет — скрываем
        statsCard.classList.add('hidden');
      } else {
        // Если есть — показываем
        statsCard.classList.remove('hidden');

        // Считаем общую сумму и средние значения
        let totalDrop = 0;
        let totalBefore = 0;
        let totalAfter = 0;

        sessions.forEach(s => {
          totalDrop += (s.stressBefore - s.stressAfter);
          totalBefore += s.stressBefore;
          totalAfter += s.stressAfter;
        });

        const count = sessions.length;

        // Выводим цифры (округляем до 1 знака после запятой)
        document.getElementById('stat-total').textContent = count;
        document.getElementById('stat-avg-drop').textContent = (totalDrop / count).toFixed(1);
        document.getElementById('stat-avg-before').textContent = (totalBefore / count).toFixed(1);
        document.getElementById('stat-avg-after').textContent = (totalAfter / count).toFixed(1);
      }
    }
  }

  // --- 3. Обработка отправки формы ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const techniqueSelect = document.getElementById('technique');
    const notesInput = document.getElementById('notes');
    const stressBefore = document.getElementById('stress-before');
    const stressAfter = document.getElementById('stress-after');

    if (!techniqueSelect.value) {
      alert("Пожалуйста, выберите технику.");
      return;
    }

    const newSession = {
      id: Date.now(),
      date: new Date().toISOString(),
      technique: document.getElementById('custom-select-text').textContent,
      techniqueKey: techniqueSelect.value, // <--- ДОБАВИТЬ ЭТУ СТРОКУ
      stressBefore: parseInt(stressBefore.value),
      stressAfter: parseInt(stressAfter.value),
      notes: notesInput.value.trim()
    };

    const sessions = getSessions();
    sessions.push(newSession);

    try {
      localStorage.setItem('practice_sessions', JSON.stringify(sessions));
      updateUI(); // Обновляем интерфейс
    } catch (err) {
      console.error("Ошибка сохранения", err);
    }

    // Очищаем форму
    form.reset();

    // Сбрасываем текст в селекте
    const selectText = document.getElementById('custom-select-text');
    selectText.textContent = 'Выберите технику';
    selectText.classList.add('text-(--text-secondary)');
    selectText.classList.remove('text-theme-primary');
    techniqueSelect.value = '';

    // Сбрасываем цифры ползунков на 5
    document.getElementById('stress-before-val').textContent = '5';
    document.getElementById('stress-after-val').textContent = '5';

    // ВАЖНО: Перекрашиваем ползунки после сброса
    if (stressBefore) window.updateSliderColor(stressBefore);
    if (stressAfter) window.updateSliderColor(stressAfter);
  });

  // Первичная отрисовка
  updateUI();
});

// Функция для закрашивания левой части ползунка
window.updateSliderColor = function (slider) {
  if (!slider) return;
  // Получаем цвета из темы
  const style = getComputedStyle(document.documentElement);
  const brandColor = style.getPropertyValue('--brand').trim() || '#1e3a8a';
  const mutedColor = '#e5e7eb'; // Светло-серый

  // Считаем процент (от 0 до 100)
  const val = Number(slider.value);
  const min = Number(slider.min);
  const max = Number(slider.max);
  const percent = ((val - min) / (max - min)) * 100;

  // Применяем градиент строго к треку
  slider.style.setProperty('--track-bg', `linear-gradient(to right, ${brandColor} 0%, ${brandColor} ${percent}%, ${mutedColor} ${percent}%, ${mutedColor} 100%)`);
};