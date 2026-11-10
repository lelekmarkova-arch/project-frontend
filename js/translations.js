// Словарь переводов. Ключи соответствуют атрибутам data-i18n в разметке.

const translations = {

  // INDEX

  "lang.current": { ru: "Русский", en: "English" },
  "btn.login": { ru: "Войти", en: "Log in" },
  "hero.title": { ru: "Управление стрессом: учёба, работа и личная жизнь", en: "Manage Stress While Balancing Study, Work and Personal Life" },
  "hero.subtitle": { ru: "Антистрессовое руководство для студентов и молодых специалистов", en: "An Anti-Stress Guide for Students and Young Professionals" },
  "hero.desc": { ru: "Добро пожаловать в это всеобъемлющее руководство по управлению стрессом при совмещении множества обязанностей. Этот курс поможет вам развить устойчивость и навыки эмоциональной саморегуляции для успеха в требовательной академической и профессиональной среде.", en: "Welcome to this comprehensive guide on managing stress while juggling multiple responsibilities. This course will help you develop resilience and emotional self-regulation skills to thrive in demanding academic and professional environments." },
  "btn.read": { ru: "Читать руководство", en: "Read the Guide" },
  "btn.tests": { ru: "Пройти интерактивные тесты", en: "Take Interactive Quizzes" },
  "cards.title": { ru: "Добро пожаловать в ваше путешествие по управлению стрессом", en: "Welcome to Your Stress Management Journey" },
  "card1.title": { ru: "Образовательное руководство", en: "Educational Guide" },
  "card1.desc": { ru: "Всеобъемлющий образовательный контент, охватывающий 10 ключевых тем управления стрессом, от понимания стресса до построения долгосрочной устойчивости.", en: "Comprehensive educational content covering 10 key topics in stress management, from understanding stress to building long-term resilience." },
  "card1.btn": { ru: "Начать обучение", en: "Start Learning" },
  "card2.title": { ru: "Интерактивные модули", en: "Interactive Modules" },
  "card2.desc": { ru: "6 интерактивных модулей тестирования для проверки ваших знаний и закрепления обучения с немедленной обратной связью и объяснениями.", en: "6 interactive quiz modules to test your knowledge and reinforce learning with immediate feedback and explanations." },
  "card2.btn": { ru: "Начать модуль", en: "Start Module" },
  "card3.title": { ru: "Мой прогресс", en: "My Progress" },
  "card3.desc": { ru: "Отслеживайте свой путь обучения, просматривайте завершённые модули и отслеживайте свои результаты тестов для измерения прогресса.", en: "Track your learning journey, view completed modules, and monitor your quiz scores to measure your progress." },
  "card3.btn": { ru: "Ваш прогресс", en: "Your Progress" },
  "card4.title": { ru: "Аналитика и Инсайты", en: "Analytics & Insights" },
  "card4.desc": { ru: "Визуализируйте свои паттерны стресса с течением времени, получайте персонализированные рекомендации ИИ и отслеживайте настроение с помощью интерактивного календаря.", en: "Visualize your stress patterns over time, get personalized AI recommendations, and track your mood with an interactive calendar." },
  "card4.btn": { ru: "Просмотр аналитики", en: "View Analytics" },
  "card5.title": { ru: "Журнал практики", en: "Practice Log" },
  "card5.desc": { ru: "Записывайте свои сессии практики релаксации и отслеживайте уровень стресса до и после, чтобы видеть свой прогресс со временем.", en: "Record your relaxation practice sessions and track stress levels before and after to see your progress over time." },
  "card5.btn": { ru: "Записать практику", en: "Log Practice" },
  "card6.title": { ru: "Дневник размышлений", en: "Reflection Journal" },
  "card6.desc": { ru: "Записывайте свои мысли и чувства о каждом модуле, чтобы осмыслить то, что вы узнали, и отслеживать свой эмоциональный путь.", en: "Write down your thoughts and feelings about each module to process what you've learned and track your emotional journey." },
  "card6.btn": { ru: "Мой дневник", en: "My Journal" },
  "card7.title": { ru: "Мои сертификаты", en: "My Certificates" },
  "card7.desc": { ru: "Просматривайте и скачивайте все свои сертификаты о прохождении курса с различными шаблонами и стилями.", en: "View and download all your course completion certificates with different templates and styles." },
  "card7.btn": { ru: "Просмотреть сертификаты", en: "View Certificates" },
  "card8.title": { ru: "Мой профиль", en: "My Profile" },
  "card8.desc": { ru: "Управляйте своим профилем, настраивайте аватар и просматривайте свои достижения и статистику.", en: "Manage your profile, customize your avatar, and view your achievements and statistics." },
  "card8.btn": { ru: "Просмотр профиля", en: "View Profile" },
  "footer.text": { ru: "Академический проект для психологического самообразования и управления стрессом", en: "Academic project for psychological self-education and stress management" },
  "footer.copy": { ru: "© 2025 Ekaterina Jelanova Все права защищены", en: "© 2025 Ekaterina Jelanova All rights reserved" },
  "theme.title": { ru: "Выбор темы", en: "Choose Theme" },
  "theme.subtitle": { ru: "Настройте внешний вид приложения", en: "Customize the look and feel of the app" },
  "theme.light.name": { ru: "Светлая", en: "Light" },
  "theme.light.desc": { ru: "Чистая и профессиональная светлая тема", en: "Clean and professional light theme" },
  "theme.dark.name": { ru: "Тёмная", en: "Dark" },
  "theme.dark.desc": { ru: "Легко для глаз во время вечерних занятий", en: "Easy on the eyes during evening study sessions" },
  "theme.blue.name": { ru: "Спокойный синий", en: "Calm Blue" },
  "theme.blue.desc": { ru: "Успокаивающие цвета океана для релаксации", en: "Soothing ocean-inspired colors for relaxation" },
  "theme.sunset.name": { ru: "Тёплый закат", en: "Warm Sunset" },
  "theme.sunset.desc": { ru: "Теплые оранжевые и фиолетовые тона для комфорта", en: "Warm oranges and purples for comfort" },
  "theme.green.name": { ru: "Лесная зелень", en: "Forest Green" },
  "theme.green.desc": { ru: "Вдохновленные природой успокаивающие земляные тона", en: "Nature-inspired calming earth tones" },
  "theme.contrast.name": { ru: "Высокий контраст", en: "High Contrast" },
  "theme.contrast.desc": { ru: "Максимальная читаемость для доступности", en: "Maximum readability for accessibility" },

  //GUIDE

  "nav.home": { ru: "Главная", en: "Home" },
  "nav.modules": { ru: "Интерактивные модули", en: "Interactive Modules" },
  "guide.header.title": { ru: "Образовательное руководство", en: "Educational Guide" },
  "guide.title": { ru: "Образовательное руководство", en: "Educational Guide" },
  "guide.subtitle": {
    ru: "Прочитайте это всеобъемлющее руководство, чтобы понять основы управления стрессом. Каждый раздел основывается на предыдущем, чтобы дать вам полную основу.",
    en: "Read through this comprehensive guide to understand the fundamentals of stress management. Each section builds on the previous one to give you a complete foundation."
  },
  "guide.toc.title": { ru: "Содержание", en: "Table of Contents" },
  "guide.ch1.title": { ru: "1. Понимание стресса: что это такое и как он влияет на вас", en: "1. Understanding Stress: What It Is and How It Affects You" },
  "guide.ch2.title": { ru: "2. Определение ваших личных стрессоров", en: "2. Identifying Your Personal Stressors" },
  "guide.ch3.title": { ru: "3. Когнитивная реструктуризация: изменение ваших моделей мышления", en: "3. Cognitive Restructuring: Changing Your Thought Patterns" },
  "guide.ch4.title": { ru: "4. Стратегии управления временем и приоритизации", en: "4. Time Management and Prioritization Strategies" },
  "guide.ch5.title": { ru: "5. Техники релаксации и осознанности", en: "5. Relaxation Techniques and Mindfulness" },
  "guide.ch6.title": { ru: "6. Роль физической активности и сна", en: "6. The Role of Physical Activity and Sleep" },
  "guide.ch7.title": { ru: "7. Построение и использование социальной поддержки", en: "7. Building and Utilizing Social Support" },
  "guide.ch8.title": { ru: "8. Питание и здоровые привычки образа жизни", en: "8. Nutrition and Healthy Lifestyle Habits" },
  "guide.ch9.title": { ru: "9. Установление границ и достижение баланса", en: "9. Setting Boundaries and Achieving Balance" },
  "guide.ch10.title": { ru: "10. Построение долгосрочной устойчивости и роста", en: "10. Building Long-Term Resilience and Growth" },
  "guide.ch1.heading": { ru: "1. Понимание стресса: что это такое и как он влияет на вас", en: "1. Understanding Stress: What It Is and How It Affects You" },
  "guide.ch1.text": {
    ru: "Стресс — это естественная физиологическая и психологическая реакция на сложные или угрожающие ситуации. Когда вы сталкиваетесь с требованиями, превышающими вашу предполагаемую способность справиться, ваше тело активирует реакцию «бей или беги», выделяя гормоны, такие как кортизол и адреналин. Хотя острый стресс может улучшить производительность и концентрацию, хронический стресс от длительного академического давления, рабочих дедлайнов и личных обязанностей может привести к серьёзным последствиям для здоровья, включая тревогу, депрессию, ослабление иммунной функции и сердечно-сосудистые проблемы. Понимание того, что стресс не является по своей сути негативным — а скорее ваши отношения с ним — это первый шаг к эффективному управлению.",
    en: "Stress is a natural physiological and psychological response to challenging or threatening situations. When you face demands that exceed your perceived ability to cope, your body activates the 'fight-or-flight' response, releasing hormones like cortisol and adrenaline. While acute stress can enhance performance and focus, chronic stress from prolonged academic pressures, work deadlines, and personal responsibilities can lead to serious health consequences including anxiety, depression, weakened immune function, and cardiovascular problems. Understanding that stress is not inherently negative—but rather your relationship with it—is the first step toward effective management."
  },
  "guide.ch1.acc1": { ru: "Физические симптомы стресса", en: "Physical Symptoms of Stress" },
  "guide.ch1.acc2": { ru: "Эмоциональные и когнитивные эффекты", en: "Emotional and Cognitive Effects" },
  "guide.ch2.heading": { ru: "2. Определение ваших личных стрессоров", en: "2. Identifying Your Personal Stressors" },
  "guide.ch2.text": {
    ru: "Разные люди испытывают стресс от разных источников. Для студентов и молодых специалистов распространённые стрессоры включают академические дедлайны, финансовое давление, социальные ожидания, неопределённость карьеры, проблемы в отношениях и постоянную необходимость балансировать множество ролей. Проведение личного аудита стресса — отслеживание того, когда вы чувствуете наибольший стресс и что вызывает эти чувства — обеспечивает важное самосознание. Ведите дневник стресса в течение одной недели, отмечая ситуации, повышающие ваш уровень стресса, ваши физические и эмоциональные реакции и стратегии преодоления, которые вы естественно используете. Эти данные становятся основой для разработки целевых техник управления стрессом.",
    en: "Different people experience stress from different sources. For students and young professionals, common stressors include academic deadlines, financial pressures, social expectations, career uncertainty, relationship challenges, and the constant need to balance multiple roles. Conducting a personal stress audit—tracking when you feel most stressed and what triggers these feelings—provides crucial self-awareness. Keep a stress journal for one week, noting situations that elevate your stress levels, your physical and emotional responses, and the coping strategies you naturally employ. This data becomes the foundation for developing targeted stress management techniques."
  },
  "guide.ch2.acc1": { ru: "Академические стрессоры", en: "Academic Stressors" },
  "guide.ch2.acc2": { ru: "Проблемы баланса работы и личной жизни", en: "Work-Life Balance Challenges" },
  "guide.ch3.heading": { ru: "3. Когнитивная реструктуризация: изменение ваших моделей мышления", en: "3. Cognitive Restructuring: Changing Your Thought Patterns" },
  "guide.ch3.text": {
    ru: "Ваша интерпретация событий часто вызывает больше стресса, чем сами события. Когнитивная реструктуризация, основная техника из когнитивно-поведенческой терапии (КПТ), включает выявление и оспаривание негативных моделей мышления, которые усиливают стресс. Распространённые когнитивные искажения включают катастрофизацию (предположение, что произойдёт худшее), мышление «всё или ничего» (видение ситуаций в чёрно-белом цвете), чрезмерное обобщение (извлечение широких выводов из отдельных событий) и персонализацию (принятие чрезмерной ответственности за вещи вне вашего контроля). Распознавая эти паттерны, вы можете сознательно заменить их более сбалансированными, реалистичными мыслями. Например, вместо «Я провалил этот экзамен, поэтому я полный неудачник», переформулируйте на «Этот экзамен прошёл не очень хорошо, но это одна оценка среди многих, и я могу извлечь уроки из этого опыта».",
    en: "Your interpretation of events often causes more stress than the events themselves. Cognitive restructuring, a core technique from Cognitive Behavioral Therapy (CBT), involves identifying and challenging negative thought patterns that amplify stress. Common cognitive distortions include catastrophizing (assuming the worst will happen), all-or-nothing thinking (seeing situations in black and white), overgeneralization (drawing broad conclusions from single events), and personalization (taking excessive responsibility for things outside your control). By recognizing these patterns, you can consciously replace them with more balanced, realistic thoughts. For example, instead of 'I failed this exam, so I'm a complete failure,' reframe to 'This exam didn't go well, but it's one assessment among many, and I can learn from this experience.'"
  },
  "guide.ch3.acc1": { ru: "Модель ABC", en: "The ABC Model" },
  "guide.ch3.acc2": { ru: "Мышление, основанное на доказательствах", en: "Evidence-Based Thinking" },
  "guide.ch4.heading": { ru: "4. Стратегии управления временем и приоритизации", en: "4. Time Management and Prioritization Strategies" },
  "guide.ch4.text": {
    ru: "Эффективное управление временем снижает стресс, создавая структуру и предотвращая кризисы в последнюю минуту. Матрица Эйзенхауэра помогает расставить приоритеты задач по срочности и важности: сосредоточьтесь на важных, но не срочных задачах (учёба, развитие навыков, построение отношений), а не постоянно реагируйте на срочные дела. Блокировка времени — выделение определённых периодов времени для конкретных действий — предотвращает многозадачность и улучшает концентрацию. Техника Помодоро (25 минут сосредоточенной работы, за которыми следуют 5-минутные перерывы) повышает производительность, предотвращая выгорание. Важно планировать перерывы и досуговые мероприятия с той же приверженностью, что и рабочие задачи. Помните закон Паркинсона: работа расширяется, чтобы заполнить доступное время, поэтому устанавливайте реалистичные дедлайны и придерживайтесь их.",
    en: "Effective time management reduces stress by creating structure and preventing last-minute crises. The Eisenhower Matrix helps prioritize tasks by urgency and importance: focus on important-but-not-urgent tasks (studying, skill development, relationship building) rather than constantly reacting to urgent matters. Time blocking—dedicating specific time periods to specific activities—prevents multitasking and improves focus. The Pomodoro Technique (25 minutes of focused work followed by 5-minute breaks) enhances productivity while preventing burnout. Crucially, schedule breaks and leisure activities with the same commitment as work tasks. Remember Parkinson's Law: work expands to fill available time, so set realistic deadlines and stick to them."
  },
  "guide.ch4.acc1": { ru: "Сила слова «нет»", en: "The Power of 'No'" },
  "guide.ch4.acc2": { ru: "Планирование гибкости", en: "Planning for Flexibility" },
  "guide.ch5.heading": { ru: "5. Техники релаксации и осознанности", en: "5. Relaxation Techniques and Mindfulness" },
  "guide.ch5.text": {
    ru: "Физические техники релаксации напрямую противодействуют стрессовой реакции, активируя парасимпатическую нервную систему. Упражнения глубокого дыхания, особенно диафрагмальное дыхание (глубокое дыхание в живот, а не в грудь), снижают частоту сердечных сокращений и кровяное давление в течение нескольких минут. Прогрессивная мышечная релаксация — систематическое напряжение и расслабление групп мышц — снижает физическое напряжение. Медитация осознанности, которая включает безоценочное осознание опыта настоящего момента, научно доказано снижает стресс, улучшает эмоциональную регуляцию и улучшает когнитивную функцию. Даже краткая ежедневная практика (5-10 минут) даёт значительные преимущества. Осознанность не требует устранения мыслей, а скорее наблюдения за ними, не увлекаясь ими, как наблюдение за облаками, проходящими в небе.",
    en: "Physical relaxation techniques directly counteract the stress response by activating the parasympathetic nervous system. Deep breathing exercises, particularly diaphragmatic breathing (breathing deeply into your belly rather than chest), lower heart rate and blood pressure within minutes. Progressive muscle relaxation—systematically tensing and releasing muscle groups—reduces physical tension. Mindfulness meditation, which involves non-judgmental awareness of present-moment experience, has been scientifically proven to reduce stress, improve emotional regulation, and enhance cognitive function. Even brief daily practice (5-10 minutes) yields significant benefits. Mindfulness doesn't require eliminating thoughts but rather observing them without getting caught up in them, like watching clouds pass in the sky."
  },
  "guide.ch5.acc1": { ru: "Дыхание для расслабления (техника с объятием и короткими вдохами)", en: "Relaxation Breathing with Self-Hug" },
  "guide.ch5.acc2": { ru: "Последовательное напряжение и расслабление мышц (прогрессивная релаксация)", en: "Sequential Muscle Tension and Relaxation (Progressive Relaxation)" },
  "guide.ch5.acc3": { ru: "Техника заземления «5–4–3–2–1»", en: "Grounding Technique '5-4-3-2-1'" },
  "guide.ch5.acc4": { ru: "Техника «Безопасное место»", en: "Safe Place Technique" },
  "guide.ch6.heading": { ru: "6. Роль физической активности и сна", en: "6. The Role of Physical Activity and Sleep" },
  "guide.ch6.text": {
    ru: "Регулярная физическая активность — один из самых эффективных инструментов управления стрессом. Упражнения высвобождают эндорфины (естественные стимуляторы настроения), снижают гормоны стресса, улучшают качество сна и обеспечивают здоровый выход для напряжения. Вам не нужны интенсивные тренировки — даже 20-30 минут умеренной активности, такой как ходьба, езда на велосипеде или танцы, дают значительные преимущества. Ключ — это последовательность, а не интенсивность. Не менее важен сон, которым часто жертвуют студенты и молодые специалисты. Недостаток сна ухудшает когнитивную функцию, эмоциональную регуляцию и устойчивость к стрессу. Стремитесь к 7-9 часам ночного сна, поддерживайте постоянный график сна, создайте расслабляющую процедуру перед сном и минимизируйте время перед экраном перед сном. Помните: жертвовать сном ради учёбы или работы контрпродуктивно, поскольку усталость снижает эффективность и увеличивает ошибки.",
    en: "Regular physical activity is one of the most effective stress management tools. Exercise releases endorphins (natural mood elevators), reduces stress hormones, improves sleep quality, and provides a healthy outlet for tension. You don't need intense workouts—even 20-30 minutes of moderate activity like walking, cycling, or dancing yields significant benefits. The key is consistency rather than intensity. Equally important is sleep, which is often sacrificed by students and young professionals. Sleep deprivation impairs cognitive function, emotional regulation, and stress resilience. Aim for 7-9 hours nightly, maintain a consistent sleep schedule, create a relaxing bedtime routine, and minimize screen time before bed. Remember: sacrificing sleep to study or work is counterproductive, as fatigue reduces efficiency and increases errors."
  },
  "guide.ch6.acc1": { ru: "Перерывы на движение", en: "Movement Breaks" },
  "guide.ch6.acc2": { ru: "Принципы гигиены сна", en: "Sleep Hygiene Principles" },
  "guide.ch7.heading": { ru: "7. Построение и использование социальной поддержки", en: "7. Building and Utilizing Social Support" },
  "guide.ch7.text": {
    ru: "Прочные социальные связи — мощный буфер против стресса. Исследования последовательно показывают, что люди с надёжными сетями социальной поддержки испытывают меньше стресса и быстрее восстанавливаются после проблем. Однако качество важнее количества — несколько глубоких, подлинных отношений обеспечивают больше поддержки, чем многочисленные поверхностные связи. Выделяйте время для значимых взаимодействий с друзьями, семьёй и наставниками. Не стесняйтесь делиться своими трудностями; уязвимость укрепляет отношения и часто показывает, что другие сталкиваются с подобными проблемами. Присоединяйтесь к учебным группам, клубам или сообществам, соответствующим вашим интересам. Профессиональная поддержка через консультирование или терапию — это не признак слабости, а проактивный шаг к психическому здоровью. Многие университеты предлагают бесплатные консультационные услуги специально для студентов.",
    en: "Strong social connections are a powerful buffer against stress. Research consistently shows that people with robust social support networks experience less stress and recover more quickly from challenges. However, quality matters more than quantity—a few deep, authentic relationships provide more support than numerous superficial connections. Make time for meaningful interactions with friends, family, and mentors. Don't hesitate to share your struggles; vulnerability strengthens relationships and often reveals that others face similar challenges. Join study groups, clubs, or communities aligned with your interests. Professional support through counseling or therapy is not a sign of weakness but a proactive step toward mental health. Many universities offer free counseling services specifically for students."
  },
  "guide.ch7.acc1": { ru: "Эффективная коммуникация", en: "Effective Communication" },
  "guide.ch7.acc2": { ru: "Взаимная поддержка", en: "Reciprocal Support" },
  "guide.ch8.heading": { ru: "8. Питание и здоровые привычки образа жизни", en: "8. Nutrition and Healthy Lifestyle Habits" },
  "guide.ch8.text": {
    ru: "То, что вы едите, значительно влияет на ваш уровень стресса и психическое здоровье. Диета с высоким содержанием обработанных продуктов, сахара и кофеина может усугубить стресс и тревогу, в то время как цельные продукты, богатые питательными веществами, поддерживают функцию мозга и эмоциональную стабильность. Сложные углеводы (цельные зёрна, овощи) обеспечивают стабильную энергию и повышают производство серотонина. Омега-3 жирные кислоты (содержащиеся в рыбе, грецких орехах, семенах льна) поддерживают здоровье мозга и уменьшают воспаление. Адекватная гидратация необходима — даже лёгкое обезвоживание ухудшает когнитивную функцию и настроение. Ограничьте потребление кофеина, особенно во второй половине дня, поскольку он может увеличить тревогу и нарушить сон. Избегайте использования алкоголя или веществ для преодоления стресса, поскольку они создают дополнительные проблемы и предотвращают развитие здоровых механизмов преодоления. Регулярное время приёма пищи стабилизирует уровень сахара в крови и предотвращает энергетические спады, которые усиливают стресс.",
    en: "What you eat significantly impacts your stress levels and mental health. A diet high in processed foods, sugar, and caffeine can exacerbate stress and anxiety, while whole foods rich in nutrients support brain function and emotional stability. Complex carbohydrates (whole grains, vegetables) provide steady energy and boost serotonin production. Omega-3 fatty acids (found in fish, walnuts, flaxseeds) support brain health and reduce inflammation. Adequate hydration is essential—even mild dehydration impairs cognitive function and mood. Limit caffeine intake, especially in the afternoon, as it can increase anxiety and disrupt sleep. Avoid using alcohol or substances to cope with stress, as these create additional problems and prevent development of healthy coping mechanisms. Regular meal timing stabilizes blood sugar and prevents energy crashes that amplify stress."
  },
  "guide.ch8.acc1": { ru: "Продукты, снижающие стресс", en: "Stress-Reducing Foods" },
  "guide.ch8.acc2": { ru: "Осознанное питание", en: "Mindful Eating" },
  "guide.ch9.heading": { ru: "9. Установление границ и достижение баланса", en: "9. Setting Boundaries and Achieving Balance" },
  "guide.ch9.text": {
    ru: "Здоровые границы защищают ваше время, энергию и благополучие. Многие студенты и молодые специалисты борются с установлением границ из-за страха разочаровать других или упустить возможности. Однако без границ вы становитесь подавленными и неспособными хорошо работать в любой области. Установите чёткие границы между работой и личной жизнью: назначьте конкретное время для учёбы/работы и личного времени и соблюдайте эти разделения. Создайте физические границы, когда это возможно — учитесь в специально отведённых местах, а не в постели. Установите коммуникационные границы: вам не нужно немедленно отвечать на сообщения; установите часы «офлайн». Научитесь распознавать и уважать свои пределы: продолжение работы через истощение не демонстрирует преданность, а скорее приводит к выгоранию и снижению производительности. Баланс не означает равное время для всего, а скорее соответствующее внимание ко всем важным жизненным областям — академическим, рабочим, отношениям, здоровью и личным интересам.",
    en: "Healthy boundaries protect your time, energy, and well-being. Many students and young professionals struggle with boundary-setting due to fear of disappointing others or missing opportunities. However, without boundaries, you become overwhelmed and unable to perform well in any area. Establish clear work-life boundaries: designate specific times for study/work and personal time, and honor these divisions. Create physical boundaries when possible—study in designated spaces rather than in bed. Set communication boundaries: you don't need to respond to messages immediately; establish 'offline' hours. Learn to recognize and respect your limits: pushing through exhaustion doesn't demonstrate dedication but rather leads to burnout and decreased performance. Balance doesn't mean equal time for everything but rather appropriate attention to all important life domains—academics, work, relationships, health, and personal interests."
  },
  "guide.ch9.acc1": { ru: "Цифровые границы", en: "Digital Boundaries" },
  "guide.ch9.acc2": { ru: "Грациозный отказ", en: "Saying No Gracefully" },
  "guide.ch10.heading": { ru: "10. Построение долгосрочной устойчивости и роста", en: "10. Building Long-Term Resilience and Growth" },
  "guide.ch10.text": {
    ru: "Устойчивость — способность адаптироваться и восстанавливаться после невзгод — это не врождённая черта, а набор навыков, которые можно развить. Построение устойчивости требует культивирования мышления роста: рассмотрение проблем как возможностей для обучения, а не угроз. Размышляйте о прошлых трудностях, которые вы преодолели; это укрепляет уверенность в вашей способности справляться с будущими проблемами. Развивайте самосострадание: относитесь к себе с той же добротой, которую вы бы предложили другу, столкнувшемуся с трудностями. Самокритика усиливает стресс, в то время как самосострадание способствует устойчивости и мотивации. Сохраняйте перспективу: большинство стрессоров, которые кажутся подавляющими в данный момент, становятся незначительными со временем. Спросите себя: «Будет ли это иметь значение через пять лет?» Создайте смысл и цель за пределами непосредственных целей: свяжите свои ежедневные усилия с более крупными ценностями и долгосрочными стремлениями. Это чувство цели обеспечивает мотивацию в трудные периоды. Наконец, рассматривайте управление стрессом не как устранение всего стресса, а как развитие способности эффективно справляться со стрессом, сохраняя благополучие и производительность.",
    en: "Resilience—the ability to adapt and recover from adversity—is not an innate trait but a set of skills that can be developed. Building resilience requires cultivating a growth mindset: viewing challenges as opportunities for learning rather than threats. Reflect on past difficulties you've overcome; this builds confidence in your ability to handle future challenges. Develop self-compassion: treat yourself with the same kindness you'd offer a friend facing difficulties. Self-criticism amplifies stress, while self-compassion promotes resilience and motivation. Maintain perspective: most stressors that feel overwhelming in the moment become insignificant over time. Ask yourself, 'Will this matter in five years?' Create meaning and purpose beyond immediate goals: connect your daily efforts to larger values and long-term aspirations. This sense of purpose provides motivation during difficult periods. Finally, view stress management not as eliminating all stress but as developing the capacity to navigate stress effectively while maintaining well-being and performance."
  },
  "guide.ch10.acc1": { ru: "Посттравматический рост", en: "Post-Traumatic Growth" },
  "guide.ch10.acc2": { ru: "Непрерывное обучение и адаптация", en: "Continuous Learning and Adaptation" },
  "guide.cta.title": { ru: "Готовы проверить свои знания?", en: "Ready to Test Your Knowledge?" },
  "guide.cta.text": {
    ru: "Теперь, когда вы прочитали руководство, проверьте своё понимание с помощью наших интерактивных модулей тестирования.",
    en: "Now that you've read the guide, test your understanding with our interactive quiz modules."
  },
  "guide.cta.button": { ru: "Пройти интерактивные тесты", en: "Take Interactive Quizzes" },
  "footer.text": { ru: "Академический проект для психологического самообразования и управления стрессом", en: "An academic project for psychological self-education and stress management" },
  "footer.copy": { ru: "© 2025 Ekaterina Jelanova Все права защищены", en: "© 2025 Ekaterina Jelanova All Rights Reserved" },

  // ТЕКСТЫ АККОРДЕОНОВ

  // Карточка 1
  "guide.ch1.acc1.text": {
    ru: "Общие физические проявления включают головные боли, мышечное напряжение, усталость, проблемы с пищеварением, учащённое сердцебиение и нарушения сна. Распознавание этих ранних предупреждающих признаков позволяет вам вмешаться до того, как стресс станет подавляющим.",
    en: "Common physical manifestations include headaches, muscle tension, fatigue, digestive issues, rapid heartbeat, and sleep disturbances. Recognizing these early warning signs allows you to intervene before stress becomes overwhelming."
  },
  "guide.ch1.acc2.text": {
    ru: "Стресс влияет на ваше психическое состояние через раздражительность, тревогу, трудности с концентрацией, навязчивые мысли и чувство подавленности. Эти когнитивные изменения могут ухудшить принятие решений и академическую успеваемость, создавая порочный круг.",
    en: "Stress affects your mental state through irritability, anxiety, difficulty concentrating, racing thoughts, and feelings of being overwhelmed. These cognitive changes can impair decision-making and academic performance, creating a vicious cycle."
  },

  // Карточка 2
  "guide.ch2.acc1.text": {
    ru: "Давление экзаменов, дедлайны заданий, страх неудачи, конкуренция со сверстниками и синдром самозванца особенно распространены в академической среде. Понимание того, какие конкретные аспекты вашей учёбы вызывают наибольший стресс, помогает вам разработать целевые стратегии преодоления.",
    en: "Exam pressure, assignment deadlines, fear of failure, competition with peers, and imposter syndrome are particularly prevalent in academic settings. Understanding which specific aspects of your studies cause the most stress helps you develop targeted coping strategies."
  },
  "guide.ch2.acc2.text": {
    ru: "Совмещение работы на неполный рабочий день, стажировок или начальных карьерных позиций наряду с учёбой создаёт уникальное давление. Нехватка времени, конфликтующие требования и неспособность полностью участвовать в любой области способствуют хроническому стрессу и выгоранию.",
    en: "Juggling part-time work, internships, or early career positions alongside studies creates unique pressures. Time scarcity, conflicting demands, and the inability to fully engage in either domain contribute to chronic stress and burnout."
  },

  // Карточка 3
  "guide.ch3.acc1.text": {
    ru: "Используйте модель ABC для анализа стрессовых ситуаций: A (Активирующее событие), B (Убеждения о событии), C (Последствия/эмоциональная реакция). Изучая и изменяя B, вы можете изменить C. Этот систематический подход помогает вам понять, что ваши убеждения, а не внешние события, в первую очередь определяют ваши эмоциональные реакции.",
    en: "Use the ABC model to analyze stressful situations: A (Activating event), B (Beliefs about the event), C (Consequences/emotional response). By examining and modifying B, you can change C. This systematic approach helps you understand that your beliefs, not external events, primarily determine your emotional responses."
  },
  "guide.ch3.acc2.text": {
    ru: "Когда возникают негативные мысли, спросите себя: «Какие доказательства поддерживают эту мысль? Какие доказательства противоречат ей? Что бы я сказал другу в этой ситуации?» Этот подход, основанный на доказательствах, создаёт психологическую дистанцию и способствует более объективному, менее эмоционально реактивному мышлению.",
    en: "When negative thoughts arise, ask yourself: 'What evidence supports this thought? What evidence contradicts it? What would I tell a friend in this situation?' This evidence-based approach creates psychological distance and promotes more objective, less emotionally reactive thinking."
  },

  // Карточка 4
  "guide.ch4.acc1.text": {
    ru: "Научиться отклонять обязательства, которые не соответствуют вашим приоритетам, необходимо для управления стрессом. Каждое «да» чему-то неважному — это «нет» тому, что имеет значение. Практикуйте вежливое, но твёрдое установление границ: «Я ценю возможность, но мне нужно сосредоточиться на моих текущих обязательствах».",
    en: "Learning to decline commitments that don't align with your priorities is essential for stress management. Every 'yes' to something unimportant is a 'no' to something that matters. Practice polite but firm boundary-setting: 'I appreciate the opportunity, but I need to focus on my current commitments.'"
  },
  "guide.ch4.acc2.text": {
    ru: "Жёсткие графики создают стресс, когда происходят неизбежные сбои. Создавайте буферное время между действиями, планируйте на 70-80% вашего доступного времени (не 100%) и ведите «гибкий список» задач, которые можно выполнить, когда появляется неожиданное свободное время или когда вам нужен перерыв от требовательной работы.",
    en: "Rigid schedules create stress when inevitable disruptions occur. Build buffer time between activities, plan for 70-80% of your available time (not 100%), and maintain a 'flex list' of tasks that can be done when unexpected free time appears or when you need a break from demanding work."
  },

  // Карточка 5
  "guide.ch5.acc1.text": {
    ru: "Эта техника помогает быстро снизить внутреннее напряжение и активировать парасимпатическую нервную систему. Пошаговый алгоритм: (1) Обхватите себя руками, положив ладони на лопатки. (2) Поверните голову влево, не опуская рук. (3) Сделайте 4 коротких вдоха подряд через нос. (4) Поверните голову прямо, руки удерживайте в том же положении. (5) Сделайте ещё 4 коротких вдоха. (6) Поверните голову направо. (7) Выполните 4 коротких вдоха. (8) Затем опустите руки и сделайте медленный длинный выдох через рот. (9) Повторяйте цикл до тех пор, пока не почувствуете расслабление.",
    en: "This technique helps quickly reduce internal tension and activate the parasympathetic nervous system. Step-by-step: (1) Hug yourself by placing your palms on your shoulder blades. (2) Turn your head to the left without lowering your arms. (3) Take 4 short breaths in a row through your nose. (4) Turn your head straight, keeping your arms in the same position. (5) Take 4 more short breaths. (6) Turn your head to the right. (7) Take 4 short breaths. (8) Then lower your arms and take a slow, long exhale through your mouth. (9) Repeat the cycle until you feel relaxed."
  },
  "guide.ch5.acc2.text": {
    ru: "Эта техника помогает сбросить мышечные зажимы и снизить тревожность. Пошаговый алгоритм: (1) Найдите удобное положение сидя или лёжа. (2) Напрягайте группы мышц по очереди сверху вниз: лицо и лоб, челюсть и шею, плечи, руки и кисти, грудь и живот, ягодицы, бёдра, голени, стопы. (3) Каждую зону напрягайте на 5–7 секунд, затем полностью расслабляйте на 10–15 секунд. (4) Сосредотачивайтесь на ощущении «перехода» от напряжения к расслаблению. (5) Продолжайте, пока не пройдёте всё тело.",
    en: "This technique helps release muscle tension and reduce anxiety. Step-by-step: (1) Find a comfortable sitting or lying position. (2) Tense muscle groups in sequence from top to bottom: face and forehead, jaw and neck, shoulders, arms and hands, chest and abdomen, buttocks, thighs, calves, feet. (3) Tense each area for 5-7 seconds, then completely relax for 10-15 seconds. (4) Focus on the sensation of 'transition' from tension to relaxation. (5) Continue until you have gone through the entire body."
  },
  "guide.ch5.acc3.text": {
    ru: "Используется для быстрого выхода из тревоги, паники, диссоциации или эмоционального перегруза. Пошаговый алгоритм: (1) Назовите 5 предметов, которые вы видите вокруг себя. (2) Отметьте 4 ощущения в теле (тепло/холод, давление, опора, одежда на коже и т. д.). (3) Услышьте 3 звука близкие или далёкие. (4) Определите 2 запаха реальные или вспомните их. (5) Отметьте 1 вкус реальный или мысленный (например: вода, чай, мятный вкус). Эта техника возвращает внимание в «здесь и сейчас» и снижает уровень тревоги в течение 1-2 минут.",
    en: "Used for quick relief from anxiety, panic, dissociation, or emotional overload. Step-by-step: (1) Name 5 objects you see around you. (2) Notice 4 sensations in your body (warmth/cold, pressure, support, clothing on skin, etc.). (3) Hear 3 sounds—near or far. (4) Identify 2 smells—real or remembered. (5) Notice 1 taste—real or imagined (e.g., water, tea, mint flavor). This technique returns attention to the 'here and now' and reduces anxiety levels within 1-2 minutes."
  },
  "guide.ch5.acc4.text": {
    ru: "Этот метод формирует внутреннюю опору и создаёт состояние спокойствия и защищённости. Пошаговый алгоритм: (1) Закройте глаза и сделайте медленный вдох. (2) Представьте место, где вы чувствуете себя максимально спокойно и комфортно (пляж, лес, комната, любимый уголок). (3) Осмотрите пространство: какие цвета, формы, детали вы видите? (4) Прислушайтесь к окружающим звукам: ветер, вода, голоса природы. (5) Отметьте ощущения в теле: тепло, лёгкость, расслабленность. (6) Добавьте тактильные детали: мягкость воздуха, тепло солнца, гладкость поверхности. (7) На вдохе «впитывайте» ощущение безопасности, на выдохе расслабляйтесь ещё глубже. (8) Запомните это состояние как ресурс, к которому можно возвращаться в любой момент.",
    en: "This method creates inner support and a state of calm and safety. Step-by-step: (1) Close your eyes and take a slow breath. (2) Imagine a place where you feel maximally calm and comfortable (beach, forest, room, favorite corner). (3) Examine the space: what colors, shapes, details do you see? (4) Listen to the surrounding sounds: wind, water, voices of nature. (5) Notice sensations in your body: warmth, lightness, relaxation. (6) Add tactile details: softness of air, warmth of sun, smoothness of surfaces. (7) On the inhale, 'absorb' the feeling of safety; on the exhale, relax even deeper. (8) Remember this state as a resource you can return to at any moment."
  },

  // Карточка 6
  "guide.ch6.acc1.text": {
    ru: "Включайте краткие перерывы на движение каждый час во время учёбы или работы. Встаньте, потянитесь, походите или сделайте простые упражнения. Эти микроперерывы предотвращают физическую скованность, улучшают кровообращение и освежают умственную концентрацию, делая ваше время учёбы более продуктивным.",
    en: "Incorporate brief movement breaks every hour during study or work sessions. Stand up, stretch, walk around, or do simple exercises. These micro-breaks prevent physical stiffness, improve circulation, and refresh mental focus, making your study time more productive."
  },
  "guide.ch6.acc2.text": {
    ru: "Создайте оптимальную среду для сна: прохладная температура (15-19°C), полная темнота, минимальный шум. Избегайте кофеина после 14:00, ограничьте алкоголь (который нарушает качество сна) и установите процедуру расслабления. Если вы не можете заснуть через 20 минут, встаньте и займитесь тихой деятельностью, пока не почувствуете сонливость.",
    en: "Create an optimal sleep environment: cool temperature (60-67°F/15-19°C), complete darkness, minimal noise. Avoid caffeine after 2 PM, limit alcohol (which disrupts sleep quality), and establish a wind-down routine. If you can't sleep after 20 minutes, get up and do a quiet activity until drowsy."
  },

  // Карточка 7
  "guide.ch7.acc1.text": {
    ru: "Когда вы ищете поддержку, будьте конкретны в том, что вам нужно: эмоциональная валидация, практический совет или просто кто-то, кто выслушает. Используйте «я»-утверждения для выражения чувств без обвинений: «Я чувствую себя подавленным, когда дедлайны накапливаются», а не «Вы не понимаете мой стресс». Чёткая коммуникация помогает другим оказывать соответствующую поддержку.",
    en: "When seeking support, be specific about what you need: emotional validation, practical advice, or simply someone to listen. Use 'I' statements to express feelings without blame: 'I feel overwhelmed when deadlines pile up' rather than 'You don't understand my stress.' Clear communication helps others provide appropriate support."
  },
  "guide.ch7.acc2.text": {
    ru: "Отношения процветают на взаимной поддержке. Будьте доступны для других, когда им нужна помощь, активно слушайте и проявляйте искренний интерес к их жизни. Поддержка других не только укрепляет отношения, но также обеспечивает перспективу на ваши собственные проблемы и создаёт чувство цели за пределами личных забот.",
    en: "Relationships thrive on mutual support. Be available to others when they need help, listen actively, and show genuine interest in their lives. Supporting others not only strengthens relationships but also provides perspective on your own challenges and creates a sense of purpose beyond personal concerns."
  },

  // Карточка 8
  "guide.ch8.acc1.text": {
    ru: "Включайте продукты, поддерживающие управление стрессом: листовую зелень (богатую магнием), ягоды (антиоксиданты), орехи и семена (здоровые жиры и минералы), ферментированные продукты (здоровье кишечника влияет на психическое здоровье) и травяные чаи, такие как ромашка или зелёный чай. Эти продукты обеспечивают питательные вещества, которые поддерживают производство нейротрансмиттеров и регуляцию гормонов стресса.",
    en: "Incorporate foods that support stress management: leafy greens (rich in magnesium), berries (antioxidants), nuts and seeds (healthy fats and minerals), fermented foods (gut health affects mental health), and herbal teas like chamomile or green tea. These foods provide nutrients that support neurotransmitter production and stress hormone regulation."
  },
  "guide.ch8.acc2.text": {
    ru: "Практикуйте питание без отвлекающих факторов — уберите устройства, сядьте и обратите внимание на вкус, текстуру и аромат вашей еды. Осознанное питание улучшает пищеварение, увеличивает удовлетворение, предотвращает переедание и обеспечивает краткий медитативный перерыв в вашем дне. Это превращает необходимую деятельность в практику снижения стресса.",
    en: "Practice eating without distractions—put away devices, sit down, and pay attention to your food's taste, texture, and aroma. Mindful eating improves digestion, increases satisfaction, prevents overeating, and provides a brief meditation-like break in your day. It transforms a necessary activity into a stress-reducing practice."
  },

  // Карточка 9
  "guide.ch9.acc1.text": {
    ru: "Постоянная связь создаёт хронический стресс. Внедрите цифровые границы: отключите несущественные уведомления, используйте режимы «Не беспокоить» во время сосредоточенной работы или отдыха, назначьте время без телефона (особенно перед сном) и рассмотрите еженедельный период «цифровой детоксикации». Эти границы уменьшают информационную перегрузку и создают ментальное пространство.",
    en: "Constant connectivity creates chronic stress. Implement digital boundaries: turn off non-essential notifications, use 'Do Not Disturb' modes during focused work or rest, designate phone-free times (especially before bed), and consider a weekly 'digital detox' period. These boundaries reduce information overload and create mental space."
  },
  "guide.ch9.acc2.text": {
    ru: "Разработайте сценарии для отклонения запросов: «Я ценю, что вы подумали обо мне, но у меня сейчас нет возможности» или «Это звучит интересно, но мне нужно сосредоточиться на моих текущих приоритетах». Вы не обязаны давать подробные объяснения. Вежливое, твёрдое «нет» лучше, чем обиженное «да», которое приводит к чрезмерным обязательствам и стрессу.",
    en: "Develop scripts for declining requests: 'I appreciate you thinking of me, but I don't have the capacity right now,' or 'That sounds interesting, but I need to focus on my current priorities.' You don't owe detailed explanations. A polite, firm 'no' is better than a resentful 'yes' that leads to overcommitment and stress."
  },

  // Карточка 10
  "guide.ch10.acc1.text": {
    ru: "Исследования показывают, что люди могут выйти из трудных переживаний с увеличенной силой, более глубокими отношениями, большей благодарностью за жизнь и улучшенными личными способностями. Это не означает искать трудности, а скорее признавать, что проблемы, хотя и болезненные, могут катализировать позитивное личное развитие при подходе с соответствующей поддержкой и мышлением.",
    en: "Research shows that people can emerge from difficult experiences with increased strength, deeper relationships, greater appreciation for life, and enhanced personal capabilities. This doesn't mean seeking out hardship, but rather recognizing that challenges, while painful, can catalyze positive personal development when approached with appropriate support and mindset."
  },
  "guide.ch10.acc2.text": {
    ru: "Регулярно оценивайте, какие стратегии управления стрессом работают лучше всего для вас, поскольку потребности меняются со временем и в разных жизненных фазах. Экспериментируйте с новыми техниками, сохраняйте то, что работает, и отбрасывайте то, что не работает. Рассматривайте управление стрессом как постоянную практику, а не как проблему, которую нужно «решить» один раз и забыть. Этот адаптивный подход строит прочную устойчивость.",
    en: "Regularly assess what stress management strategies work best for you, as needs change over time and across different life phases. Experiment with new techniques, keep what works, and discard what doesn't. Treat stress management as an ongoing practice rather than a problem to be 'solved' once and forgotten. This adaptive approach builds lasting resilience."
  },
  "guide.ch5.timer.start": { ru: "Начать", en: "Start" },
  "guide.ch5.timer.pause": { ru: "Пауза", en: "Pause" },
  "guide.ch5.timer.stepLabel": { ru: "Шаг {n} из 5", en: "Step {n} of 5" },

  "guide.ch5.timer.step1.title": { ru: "5 предметов, которые вы видите", en: "5 Things You See" },
  "guide.ch5.timer.step1.desc": { ru: "Назовите 5 предметов, которые вы видите вокруг себя", en: "Name 5 objects you see around you" },
  "guide.ch5.timer.step2.title": { ru: "4 ощущения в теле", en: "4 Things You Feel" },
  "guide.ch5.timer.step2.desc": { ru: "Отметьте 4 ощущения в теле", en: "Notice 4 sensations in your body" },
  "guide.ch5.timer.step3.title": { ru: "3 звука вокруг", en: "3 Things You Hear" },
  "guide.ch5.timer.step3.desc": { ru: "Услышьте 3 звука — близкие или далёкие", en: "Hear 3 sounds—near or far" },
  "guide.ch5.timer.step4.title": { ru: "2 запаха", en: "2 Things You Smell" },
  "guide.ch5.timer.step4.desc": { ru: "Определите 2 запаха — реальные или вспомните их", en: "Identify 2 smells—real or remembered" },
  "guide.ch5.timer.step5.title": { ru: "1 вкус", en: "1 Thing You Taste" },
  "guide.ch5.timer.step5.desc": { ru: "Отметьте 1 вкус — реальный или мысленный", en: "Notice 1 taste—real or imagined" },
  "guide.ch5.timer.title": { ru: "Таймер техники заземления", en: "Grounding Exercise Timer" },
  "guide.ch5.timer.subtitle": { ru: "Следуйте пошаговым инструкциям для практики техники 5-4-3-2-1", en: "Follow the guided steps to practice the 5-4-3-2-1 technique" },
  "guide.ch5.timer.completeTitle": { ru: "Упражнение завершено!", en: "Exercise complete!" },
  "guide.ch5.timer.completeDesc": { ru: "Отличная работа! Вы завершили упражнение по заземлению.", en: "Great job! You've completed the grounding exercise." },
  "guide.ch5.timer.reset": { ru: "Сброс", en: "Reset" },
  "guide.ch5.timer.stepsLabel": { ru: "Шаги упражнения:", en: "Exercise steps:" },
  "guide.ch5.timer.step1": { ru: "видите", en: "See" },
  "guide.ch5.timer.step2": { ru: "теле", en: "Feel" },
  "guide.ch5.timer.step3": { ru: "звука", en: "Hear" },
  "guide.ch5.timer.step4": { ru: "запаха", en: "Smell" },
  "guide.ch5.timer.step5": { ru: "вкус", en: "Taste" },

  // MODULES

  "nav.home": { ru: "Главная", en: "Home" },
  "modules.header_title": { ru: "Интерактивные модули", en: "Interactive Modules" },
  "modules.my_progress": { ru: "Мой прогресс", en: "My Progress" },
  "modules.page_title": { ru: "Интерактивные модули", en: "Interactive Modules" },
  "modules.page_desc": {
    ru: "Проверьте своё понимание с помощью этих интерактивных модулей тестирования. Каждый модуль содержит вопросы с множественным выбором с немедленной обратной связью и объяснениями.",
    en: "Test your understanding with these interactive quiz modules. Each module contains multiple-choice questions with immediate feedback and explanations."
  },
  "modules.questions_count": { ru: "5 вопросов", en: "5 questions" },
  "modules.start_btn": { ru: "Начать модуль", en: "Start Module" },
  "modules.m1.title": { ru: "Понимание основ стресса", en: "Understanding Stress Fundamentals" },
  "modules.m1.desc": {
    ru: "Проверьте свои знания о том, что такое стресс, как он влияет на тело и разум, и разницу между острым и хроническим стрессом.",
    en: "Test your knowledge about what stress is, how it affects the body and mind, and the difference between acute and chronic stress."
  },
  "modules.m2.title": { ru: "Определение личных стрессоров", en: "Identifying Personal Stressors" },
  "modules.m2.desc": {
    ru: "Оцените своё понимание того, как определять и отслеживать ваши личные триггеры стресса и паттерны.",
    en: "Assess your understanding of how to identify and track your personal stress triggers and patterns."
  },
  "modules.m3.title": { ru: "Техники когнитивной реструктуризации", en: "Cognitive Restructuring Techniques" },
  "modules.m3.desc": {
    ru: "Оцените свои знания о том, как определять и изменять негативные модели мышления, которые усиливают стресс.",
    en: "Evaluate your knowledge of how to identify and change negative thought patterns that amplify stress."
  },
  "modules.m4.title": { ru: "Управление временем и приоритизация", en: "Time Management and Prioritization" },
  "modules.m4.desc": {
    ru: "Проверьте своё понимание эффективных стратегий управления временем и техник приоритизации.",
    en: "Test your understanding of effective time management strategies and prioritization techniques."
  },
  "modules.m5.title": { ru: "Релаксация и физическое благополучие", en: "Relaxation and Physical Wellness" },
  "modules.m5.desc": {
    ru: "Оцените свои знания о техниках релаксации, физической активности и роли сна в управлении стрессом.",
    en: "Assess your knowledge of relaxation techniques, physical activity, and sleep's role in stress management."
  },
  "modules.m6.title": { ru: "Социальная поддержка и долгосрочная устойчивость", en: "Social Support and Long-Term Resilience" },
  "modules.m6.desc": {
    ru: "Проверьте своё понимание построения сетей социальной поддержки и развития долгосрочной устойчивости.",
    en: "Test your understanding of building social support networks and developing long-term resilience."
  },
  "modules.how_it_works.title": { ru: "Как это работает", en: "How it works" },
  "modules.how_it_works.p1": {
    ru: "Каждый модуль содержит 5 вопросов, основанных на образовательном руководстве",
    en: "Each module contains 5 questions based on the educational guide"
  },
  "modules.how_it_works.p2": {
    ru: "Выберите свои ответы и отправьте, чтобы увидеть свой результат и подробные объяснения",
    en: "Select your answers and submit to see your score and detailed explanations"
  },
  "modules.how_it_works.p3": {
    ru: "Вы можете пересдавать любой модуль столько раз, сколько захотите, чтобы улучшить своё понимание",
    en: "You can retake any module as many times as you want to improve your understanding"
  },
  "modules.how_it_works.p4": {
    ru: "Ваш прогресс автоматически сохраняется и отслеживается",
    en: "Your progress is automatically saved and tracked"
  },
  "modules.retake_btn": { ru: "Пересдать тест", en: "Retake Quiz" },
  "modules.passed_badge": { ru: "Завершено", en: "Completed" },
  "footer.desc": {
    ru: "Академический проект для психологического самообразования и управления стрессом",
    en: "An academic project for psychological self-education and stress management"
  },
  "footer.rights": { ru: "Все права защищены", en: "All rights reserved" },


  // Модуль 1
  "module.quiz.explanation_label": { ru: "Объяснение:", en: "Explanation:" },
  "module.quiz.review_alert": { ru: "Просмотрите объяснения и попробуйте снова", en: "Review the explanations and try again" },
  "module.quiz.explanation_label": { ru: "Объяснение:", en: "Explanation:" },
  "nav.back_to_modules": { ru: "Назад к модулям", en: "Back to modules" },
  "nav.home": { ru: "Главная", en: "Home" },
  "module.quiz.progress": { ru: "Прогресс", en: "Progress" },
  "module.quiz.finish": { ru: "Отправить тест", en: "Submit Quiz" },
  "module.quiz.result_title": { ru: "Модуль завершён!", en: "Module completed!" },
  "module.quiz.result_desc": { ru: "Ваш результат:", en: "Your score:" },
  "module.quiz.retry": { ru: "Пересдать тест", en: "Retake Quiz" },
  "module.quiz.back_to_modules": { ru: "Назад к модулям", en: "Back to Modules" },

  "modules.m1.title": { ru: "Понимание основ стресса", en: "Understanding Stress Fundamentals" },
  "modules.m1.desc": { ru: "Проверьте свои знания о том, что такое стресс, как он влияет на тело и разум, и разницу между острым и хроническим стрессом.", en: "Test your knowledge about what stress is, how it affects the body and mind, and the difference between acute and chronic stress." },

  "module1.q1.question": { ru: "Какая основная физиологическая реакция активируется, когда вы сталкиваетесь со стрессовой ситуацией?", en: "What is the primary physiological response activated when you encounter a stressful situation?" },
  "module1.q1.a": { ru: "Пищеварительная реакция", en: "Digestive response" },
  "module1.q1.b": { ru: "Реакция «бей или беги»", en: "Fight-or-flight response" },
  "module1.q1.c": { ru: "Реакция сна", en: "Sleep response" },
  "module1.q1.d": { ru: "Иммунная реакция", en: "Immune response" },
  "module1.q1.explanation": { ru: "Реакция «бей или беги» — это автоматическая физиологическая реакция организма на воспринимаемые угрозы, высвобождающая гормоны стресса, такие как кортизол и адреналин, чтобы подготовить вас либо к противостоянию, либо к бегству от опасности.", en: "The fight-or-flight response is the body's automatic physiological reaction to perceived threats, releasing stress hormones like cortisol and adrenaline to prepare you to either confront or escape the danger." },

  "module1.q2.question": { ru: "Что из следующего является распространённым физическим симптомом хронического стресса?", en: "Which of the following is a common physical symptom of chronic stress?" },
  "module1.q2.a": { ru: "Улучшенное пищеварение", en: "Improved digestion" },
  "module1.q2.b": { ru: "Улучшенная иммунная функция", en: "Enhanced immune function" },
  "module1.q2.c": { ru: "Постоянные головные боли и мышечное напряжение", en: "Persistent headaches and muscle tension" },
  "module1.q2.d": { ru: "Повышенные уровни энергии", en: "Increased energy levels" },
  "module1.q2.explanation": { ru: "Хронический стресс обычно проявляется как постоянные головные боли, мышечное напряжение, усталость и проблемы с пищеварением. Эти физические симптомы являются результатом длительной активации системы стрессовой реакции.", en: "Хронический стресс обычно проявляется как постоянные головные боли, мышечное напряжение, усталость и проблемы с пищеварением. Эти физические симптомы являются результатом длительной активации системы стрессовой реакции." },

  "module1.q3.question": { ru: "В чём ключевая разница между острым и хроническим стрессом?", en: "What is the key difference between acute and chronic stress?" },
  "module1.q3.a": { ru: "Острый стресс всегда вреден, хронический стресс полезен", en: "Acute stress is always harmful, chronic stress is beneficial" },
  "module1.q3.b": { ru: "Острый стресс краткосрочный и может улучшить производительность, в то время как хронический стресс длительный и вредный", en: "Acute stress is short-term and can enhance performance, while chronic stress is prolonged and harmful" },
  "module1.q3.c": { ru: "Между ними нет разницы", en: "There is no difference between them" },
  "module1.q3.d": { ru: "Хронический стресс влияет только на физическое здоровье, а не на психическое", en: "Chronic stress only affects physical health, not mental health" },
  "module1.q3.explanation": { ru: "Острый стресс — это краткосрочная реакция, которая на самом деле может улучшить концентрацию и производительность. Хронический стресс, однако, сохраняется со временем и приводит к серьёзным физическим и психическим проблемам со здоровьем, включая тревогу, депрессию и ослабленный иммунитет.", en: "Acute stress is a short-term response that can actually enhance focus and performance. Chronic stress, however, persists over time and leads to serious physical and mental health problems including anxiety, depression, and weakened immunity." },

  "module1.q4.question": { ru: "Какой гормон в основном выделяется во время стрессовой реакции?", en: "Which hormone is primarily released during the stress response?" },
  "module1.q4.a": { ru: "Инсулин", en: "Insulin" },
  "module1.q4.b": { ru: "Кортизол", en: "Cortisol" },
  "module1.q4.c": { ru: "Мелатонин", en: "Melatonin" },
  "module1.q4.d": { ru: "Эстроген", en: "Estrogen" },
  "module1.q4.explanation": { ru: "Кортизол — это основной гормон стресса, выделяемый надпочечниками. Хотя он полезен в коротких всплесках, хронически повышенные уровни кортизола могут ухудшить иммунную функцию, нарушить сон и способствовать различным проблемам со здоровьем.", en: "Cortisol is the primary stress hormone released by the adrenal glands. While helpful in short bursts, chronically elevated cortisol levels can impair immune function, disrupt sleep, and contribute to various health problems." },

  "module1.q5.question": { ru: "Согласно руководству, каков первый шаг к эффективному управлению стрессом?", en: "According to the guide, what is the first step toward effective stress management?" },
  "module1.q5.a": { ru: "Устранение всех источников стресса из вашей жизни", en: "Eliminating all sources of stress from your life" },
  "module1.q5.b": { ru: "Понимание того, что стресс не является по своей сути негативным, а скорее важны ваши отношения с ним", en: "Understanding that stress is not inherently negative, but rather your relationship with it matters" },
  "module1.q5.c": { ru: "Приём лекарств для снижения гормонов стресса", en: "Taking medication to reduce stress hormones" },
  "module1.q5.d": { ru: "Игнорирование симптомов стресса, пока они не исчезнут", en: "Ignoring stress symptoms until they go away" },
  "module1.q5.explanation": { ru: "Руководство подчёркивает, что сам стресс не является проблемой — это естественная реакция. Ключ в понимании ваших отношений со стрессом и развитии здоровых способов управления им, а не в попытке полностью его устранить (что невозможно).", en: "The guide emphasizes that stress itself is not the problem—it's a natural response. The key is understanding your relationship with stress and developing healthy ways to manage it, rather than trying to eliminate it entirely (which is impossible)." },

  //Модуль 2
  "modules.m2.title": {
    ru: "Определение личных стрессоров",
    en: "Identifying Personal Stressors"
  },
  "modules.m2.desc": {
    ru: "Оцените своё понимание того, как определять и отслеживать ваши личные триггеры стресса и паттерны.",
    en: "Assess your understanding of how to identify and track your personal stress triggers and patterns."
  },

  "module2.q1.question": { ru: "Какова цель ведения дневника стресса?", en: "What is the purpose of keeping a stress journal?" },
  "module2.q1.a": { ru: "Чтобы жаловаться на проблемы", en: "To complain about problems" },
  "module2.q1.b": { ru: "Чтобы отслеживать, когда вы чувствуете стресс, определять триггеры и понимать ваши реакции", en: "To track when you feel stressed, identify triggers, and understand your responses" },
  "module2.q1.c": { ru: "Чтобы документировать каждую негативную мысль", en: "To document every negative thought" },
  "module2.q1.d": { ru: "Чтобы делиться своими проблемами в социальных сетях", en: "To share your problems on social media" },
  "module2.q1.explanation": { ru: "Дневник стресса помогает вам развить самосознание, отслеживая паттерны в ваших стрессовых реакциях. Отмечая ситуации, которые вызывают стресс, ваши физические и эмоциональные реакции и ваши стратегии преодоления, вы получаете ценные идеи для разработки целевых техник управления стрессом.", en: "A stress journal helps you develop self-awareness by tracking patterns in your stress responses. By noting situations that trigger stress, your physical and emotional reactions, and your coping strategies, you gain valuable insights for developing targeted stress management techniques." },

  "module2.q2.question": { ru: "Что из следующего является распространённым академическим стрессором для студентов?", en: "Which of the following is a common academic stressor for students?" },
  "module2.q2.a": { ru: "Наличие слишком много свободного времени", en: "Having too much free time" },
  "module2.q2.b": { ru: "Давление экзаменов и страх неудачи", en: "Exam pressure and fear of failure" },
  "module2.q2.c": { ru: "Чрезмерный сон", en: "Excessive sleep" },
  "module2.q2.d": { ru: "Отсутствие заданий", en: "Lack of assignments" },
  "module2.q2.explanation": { ru: "Давление экзаменов, дедлайны заданий, страх неудачи, конкуренция со сверстниками и синдром самозванца являются особенно распространёнными академическими стрессорами. Распознавание этих конкретных триггеров позволяет вам разработать целевые стратегии преодоления.", en: "Exam pressure, assignment deadlines, fear of failure, competition with peers, and imposter syndrome are particularly prevalent academic stressors. Recognizing these specific triggers allows you to develop targeted coping strategies." },

  "module2.q3.question": { ru: "Какая проблема уникальна для студентов, совмещающих работу и учёбу?", en: "What challenge is unique to students balancing work and study?" },
  "module2.q3.a": { ru: "Наличие неограниченного времени для досуга", en: "Having unlimited time for leisure" },
  "module2.q3.b": { ru: "Нехватка времени и конфликтующие требования от множества ролей", en: "Time scarcity and conflicting demands from multiple roles" },
  "module2.q3.c": { ru: "Слишком большая финансовая безопасность", en: "Too much financial security" },
  "module2.q3.d": { ru: "Отсутствие обязанностей", en: "Lack of responsibilities" },
  "module2.q3.explanation": { ru: "Совмещение работы на неполный рабочий день, стажировок или начальных карьерных позиций наряду с учёбой создаёт уникальное давление. Нехватка времени, конфликтующие требования и неспособность полностью участвовать в любой области способствуют хроническому стрессу и потенциальному выгоранию.", en: "Juggling part-time work, internships, or early career positions alongside studies creates unique pressures. Time scarcity, conflicting demands, and the inability to fully engage in either domain contribute to chronic stress and potential burnout." },

  "module2.q4.question": { ru: "Почему важно определять ваши личные стрессоры, а не просто общий стресс?", en: "Why is it important to identify your personal stressors rather than just general stress?" },
  "module2.q4.a": { ru: "Все испытывают стресс одинаково", en: "Everyone experiences stress the same way" },
  "module2.q4.b": { ru: "Разные люди испытывают стресс от разных вещей, поэтому персонализированные стратегии более эффективны", en: "Different people are stressed by different things, so personalized strategies are more effective" },
  "module2.q4.c": { ru: "Это не важно; общие советы работают для всех", en: "It's not important; generic advice works for everyone" },
  "module2.q4.d": { ru: "Определение стрессоров усугубляет стресс", en: "Identifying stressors makes stress worse" },
  "module2.q4.explanation": { ru: "Разные люди испытывают стресс от разных источников. То, что стрессует одного человека, может не влиять на другого. Определение ваших конкретных триггеров позволяет вам разработать целевые, персонализированные стратегии управления стрессом, которые гораздо более эффективны, чем общие подходы.", en: "Different people experience stress from different sources. What stresses one person might not affect another. Identifying your specific triggers allows you to develop targeted, personalized stress management strategies that are much more effective than generic approaches." },

  "module2.q5.question": { ru: "Что вы должны отслеживать в своём дневнике стресса, помимо стрессовых ситуаций?", en: "What should you track in your stress journal besides the stressful situations?" },
  "module2.q5.a": { ru: "Только дату и время", en: "Only the date and time" },
  "module2.q5.b": { ru: "Ваши физические и эмоциональные реакции и стратегии преодоления, которые вы использовали", en: "Your physical and emotional responses, and the coping strategies you used" },
  "module2.q5.c": { ru: "Что другие люди сделали неправильно", en: "What other people did wrong" },
  "module2.q5.d": { ru: "Только ваш ежедневный график", en: "Your daily schedule only" },
  "module2.q5.explanation": { ru: "Эффективный дневник стресса отслеживает не только триггерные ситуации, но также ваши физические симптомы (головные боли, напряжение), эмоциональные реакции (тревога, раздражительность) и стратегии преодоления, которые вы естественно используете. Эти всеобъемлющие данные выявляют паттерны и помогают вам понять, что работает, а что нет.", en: "An effective stress journal tracks not just the triggering situations, but also your physical symptoms (headaches, tension), emotional responses (anxiety, irritability), and the coping strategies you naturally employ. This comprehensive data reveals patterns and helps you understand what works and what doesn't." },

  //Модуль 3

  "modules.m3.title": {
    ru: "Техники когнитивной реструктуризации",
    en: "Cognitive Restructuring Techniques"
  },
  "modules.m3.desc": {
    ru: "Оцените свои знания о том, как определять и изменять негативные модели мышления, которые усиливают стресс.",
    en: "Evaluate your knowledge of how to identify and change negative thought patterns that amplify stress."
  },
  "module3.q1.question": { ru: "Что такое когнитивная реструктуризация?", en: "What is cognitive restructuring?" },
  "module3.q1.a": { ru: "Хирургическая процедура для мозга", en: "A surgical procedure for the brain" },
  "module3.q1.b": { ru: "Техника для выявления и оспаривания негативных моделей мышления", en: "A technique for identifying and challenging negative thought patterns" },
  "module3.q1.c": { ru: "Способ подавить все негативные мысли", en: "A way to suppress all negative thoughts" },
  "module3.q1.d": { ru: "Метод избегания размышлений о проблемах", en: "A method to avoid thinking about problems" },
  "module3.q1.explanation": { ru: "Когнитивная реструктуризация — это основная техника КПТ, которая включает выявление негативных или искажённых моделей мышления и сознательную замену их более сбалансированными, реалистичными мыслями. Это об изменении вашей интерпретации событий, а не о подавлении мыслей.", en: "Cognitive restructuring is a core CBT technique that involves identifying negative or distorted thought patterns and consciously replacing them with more balanced, realistic thoughts. It's about changing your interpretation of events, not suppressing thoughts." },

  "module3.q2.question": { ru: "Что из следующего является примером катастрофизации?", en: "Which of the following is an example of catastrophizing?" },
  "module3.q2.a": { ru: "«Этот экзамен прошёл не очень хорошо, но я могу извлечь из него уроки»", en: "'This exam didn't go well, but I can learn from it'" },
  "module3.q2.b": { ru: "«Я провалил один тест, поэтому я определённо провалю весь курс и разрушу свою карьеру»", en: "'I failed one test, so I'll definitely fail the entire course and ruin my career'" },
  "module3.q2.c": { ru: "«Мне нужно учиться более эффективно для следующего экзамена»", en: "'I failed one test, so I'll definitely fail the entire course and ruin my career'" },
  "module3.q2.d": { ru: "«Это сложно, но я преодолевал трудности раньше»", en: "'This is challenging, but I've overcome difficulties before'" },
  "module3.q2.explanation": { ru: "Катастрофизация включает предположение, что произойдёт худший возможный исход. Пример «Я провалил один тест, поэтому я определённо провалю весь курс и разрушу свою карьеру» прыгает от одной неудачи к крайнему, маловероятному выводу, ненужно усиливая стресс.", en: "Catastrophizing involves assuming the worst possible outcome will happen. The example 'I failed one test, so I'll definitely fail the entire course and ruin my career' jumps from one setback to an extreme, unlikely conclusion, amplifying stress unnecessarily." },

  "module3.q3.question": { ru: "Что представляет «B» в модели ABC когнитивной реструктуризации?", en: "What does the 'B' represent in the ABC model of cognitive restructuring?" },
  "module3.q3.a": { ru: "Поведение", en: "Behavior" },
  "module3.q3.b": { ru: "Убеждения о событии", en: "Beliefs about the event" },
  "module3.q3.c": { ru: "Активность мозга", en: "Brain activity" },
  "module3.q3.d": { ru: "Биологическая реакция", en: "Biological response" },
  "module3.q3.explanation": { ru: "В модели ABC A — это Активирующее событие, B — это ваши Убеждения об этом событии, а C — это Последствия (ваша эмоциональная реакция). Изучая и изменяя ваши убеждения (B), вы можете изменить вашу эмоциональную реакцию (C).", en: "In the ABC model, A is the Activating event, B is your Beliefs about that event, and C is the Consequences (your emotional response). By examining and modifying your beliefs (B), you can change your emotional response (C)." },

  "module3.q4.question": { ru: "Что такое мышление «всё или ничего»?", en: "What is 'all-or-nothing thinking'?" },
  "module3.q4.a": { ru: "Видение ситуаций в крайностях без промежуточного варианта", en: "Seeing situations in extremes with no middle ground" },
  "module3.q4.b": { ru: "Принятие осторожных, сбалансированных решений", en: "Making careful, balanced decisions" },
  "module3.q4.c": { ru: "Рассмотрение множества перспектив", en: "Considering multiple perspectives" },
  "module3.q4.d": { ru: "Быть гибким в вашем мышлении", en: "Being flexible in your thinking" },
  "module3.q4.explanation": { ru: "Мышление «всё или ничего» (также называемое чёрно-белым мышлением) — это когнитивное искажение, при котором вы видите ситуации в крайностях: идеально или ужасно, успех или неудача, без промежуточного варианта. Это усиливает стресс, устраняя нюансы и частичные успехи.", en: "All-or-nothing thinking (also called black-and-white thinking) is a cognitive distortion where you see situations in extremes: perfect or terrible, success or failure, with no middle ground. This amplifies stress by eliminating nuance and partial successes." },

  "module3.q5.question": { ru: "Согласно мышлению, основанному на доказательствах, что вы должны спросить, когда возникает негативная мысль?", en: "According to evidence-based thinking, what should you ask when a negative thought arises?" },
  "module3.q5.a": { ru: "«Почему это всегда происходит со мной?»", en: "'Why does this always happen to me?'" },
  "module3.q5.b": { ru: "«Какие доказательства поддерживают и противоречат этой мысли?»", en: "'What evidence supports and contradicts this thought?'" },
  "module3.q5.c": { ru: "«Кого я могу обвинить в этом?»", en: "'Who can I blame for this?'" },
  "module3.q5.d": { ru: "«Как я могу избежать размышлений об этом?»", en: "'How can I avoid thinking about this?'" },
  "module3.q5.explanation": { ru: "Мышление, основанное на доказательствах, включает объективное изучение ваших мыслей, задавая вопросы: «Какие доказательства поддерживают эту мысль? Какие доказательства противоречат ей? Что бы я сказал другу в этой ситуации?» Это создаёт психологическую дистанцию и способствует более сбалансированному мышлению.", en: "Evidence-based thinking involves examining your thoughts objectively by asking: 'What evidence supports this thought? What evidence contradicts it? What would I tell a friend in this situation?' This creates psychological distance and promotes more balanced thinking." },

  // Модуль 4

  "modules.m4.title": {
    ru: "Управление временем и приоритизация",
    en: "Time Management and Prioritization"
  },
  "modules.m4.desc": {
    ru: "Проверьте своё понимание эффективных стратегий управления временем и техник приоритизации.",
    en: "Test your understanding of effective time management strategies and prioritization techniques."
  },

  "module4.q1.question": { ru: "Для чего используется матрица Эйзенхауэра?", en: "What is the Eisenhower Matrix used for?" },
  "module4.q1.a": { ru: "Расчёт результатов экзаменов", en: "Calculating exam scores" },
  "module4.q1.b": { ru: "Приоритизация задач по срочности и важности", en: "Prioritizing tasks by urgency and importance" },
  "module4.q1.c": { ru: "Планирование социальных мероприятий", en: "Scheduling social activities" },
  "module4.q1.d": { ru: "Организация физического рабочего пространства", en: "Organizing physical workspace" },
  "module4.q1.explanation": { ru: "Матрица Эйзенхауэра помогает расставить приоритеты задач, категоризируя их по срочности и важности. Она поощряет сосредоточение на важных, но не срочных задачах (таких как учёба и развитие навыков), а не постоянное реагирование на срочные дела.", en: "The Eisenhower Matrix helps prioritize tasks by categorizing them based on urgency and importance. It encourages focusing on important-but-not-urgent tasks (like studying and skill development) rather than constantly reacting to urgent matters." },

  "module4.q2.question": { ru: "Что такое техника Помодоро?", en: "What is the Pomodoro Technique?" },
  "module4.q2.a": { ru: "Метод приготовления пищи", en: "A cooking method" },
  "module4.q2.b": { ru: "25 минут сосредоточенной работы, за которыми следуют 5-минутные перерывы", en: "25 minutes of focused work followed by 5-minute breaks" },
  "module4.q2.c": { ru: "Непрерывная работа без перерывов", en: "Working continuously without breaks" },
  "module4.q2.d": { ru: "Длинные перерывы каждый час", en: "Taking long breaks every hour" },
  "module4.q2.explanation": { ru: "Техника Помодоро включает работу в сосредоточенных 25-минутных интервалах, за которыми следуют 5-минутные перерывы. Этот паттерн повышает производительность, предотвращая выгорание, поддерживая концентрацию во время рабочих периодов и позволяя регулярный умственный отдых.", en: "The Pomodoro Technique involves working in focused 25-minute intervals followed by 5-minute breaks. This pattern enhances productivity while preventing burnout by maintaining focus during work periods and allowing regular mental rest." },

  "module4.q3.question": { ru: "Согласно руководству, на какой процент вашего доступного времени вы должны планировать?", en: "According to the guide, what percentage of your available time should you plan for?" },
  "module4.q3.a": { ru: "100%, чтобы максимизировать производительность", en: "100% to maximize productivity" },
  "module4.q3.b": { ru: "70-80%, чтобы обеспечить гибкость", en: "70-80% to allow for flexibility" },
  "module4.q3.c": { ru: "50%, чтобы иметь много свободного времени", en: "50% to have plenty of free time" },
  "module4.q3.d": { ru: "30%, чтобы избежать переработки", en: "30% to avoid overworking" },
  "module4.q3.explanation": { ru: "Планирование на 70-80% вашего доступного времени (не 100%) создаёт гибкость для неизбежных сбоев и предотвращает стресс, который возникает от жёстких графиков. Этот буфер позволяет вам справляться с неожиданными событиями, не нарушая весь ваш план.", en: "Planning for 70-80% of your available time (not 100%) builds in flexibility for inevitable disruptions and prevents the stress that comes from rigid schedules. This buffer allows you to handle unexpected events without derailing your entire plan." },

  "module4.q4.question": { ru: "Что такое закон Паркинсона?", en: "What is Parkinson's Law?" },
  "module4.q4.a": { ru: "Работа расширяется, чтобы заполнить доступное время", en: "Work expands to fill the available time" },
  "module4.q4.b": { ru: "Больше времени всегда приводит к лучшим результатам", en: "More time always leads to better results" },
  "module4.q4.c": { ru: "Дедлайны всегда должны быть продлены", en: "Deadlines should always be extended" },
  "module4.q4.d": { ru: "Управление временем не нужно", en: "Time management is unnecessary" },
  "module4.q4.explanation": { ru: "Закон Паркинсона гласит, что работа расширяется, чтобы заполнить время, доступное для её завершения. Это означает, что если вы даёте себе слишком много времени для задачи, вы, вероятно, используете всё это время, даже если задача может быть выполнена быстрее. Установление реалистичных дедлайнов помогает поддерживать эффективность.", en: "Parkinson's Law states that work expands to fill the time available for its completion. This means if you give yourself too much time for a task, you'll likely use all of it, even if the task could be completed more quickly. Setting realistic deadlines helps maintain efficiency." },

  "module4.q5.question": { ru: "Почему научиться говорить «нет» важно для управления стрессом?", en: "Why is learning to say 'no important for stress management?" },
  "module4.q5.a": { ru: "Чтобы избежать всех социальных взаимодействий", en: "To avoid all social interactions" },
  "module4.q5.b": { ru: "Каждое «да» чему-то неважному — это «нет» тому, что имеет значение", en: "Every 'yes' to something unimportant is a 'no' to something that matters" },
  "module4.q5.c": { ru: "Чтобы казаться более важным", en: "To appear more important" },
  "module4.q5.d": { ru: "Это не важно; вы должны принимать все возможности", en: "It's not important; you should accept all opportunities" },
  "module4.q5.explanation": { ru: "Научиться отклонять обязательства, которые не соответствуют вашим приоритетам, необходимо, потому что каждое «да» чему-то неважному — это «нет» тому, что действительно имеет значение. Говоря нет, вы защищаете своё время и энергию для ваших настоящих приоритетов.", en: "Learning to decline commitments that don't align with your priorities is essential because every 'yes' to something unimportant is a 'no' to something that truly matters. Saying no protects your time and energy for your real priorities." },

  //Модуль 5 

  "modules.m5.title": {
    ru: "Релаксация и физическое благополучие",
    en: "Relaxation and Physical Wellness"
  },
  "modules.m5.desc": {
    ru: "Оцените свои знания о техниках релаксации, физической активности и роли сна в управлении стрессом.",
    en: "Assess your knowledge of relaxation techniques, physical activity, and sleep's role in stress management."
  },

  "module5.q1.question": { ru: "Что такое техника дыхания 4-7-8?", en: "What is the 4-7-8 breathing technique?" },
  "module5.q1.a": { ru: "Вдохните на 4 секунды, задержите на 7, выдохните на 8", en: "Breathe in for 4 seconds, hold for 7, exhale for 8" },
  "module5.q1.b": { ru: "Дышите 4 раза в минуту в течение 7 минут, затем отдохните 8", en: "Breathe 4 times per minute for 7 minutes, then rest for 8" },
  "module5.q1.c": { ru: "Задержите дыхание на 4+7+8 секунд", en: "Hold your breath for 4+7+8 seconds" },
  "module5.q1.d": { ru: "Сделайте 4 глубоких вдоха, 7 нормальных вдохов, затем 8 поверхностных вдохов", en: "Take 4 deep breaths, 7 normal breaths, then 8 shallow breaths" },
  "module5.q1.explanation": { ru: "Техника дыхания 4-7-8 включает вдох через нос на 4 счёта, задержку на 7 счётов и выдох через рот на 8 счётов. Этот паттерн активирует реакцию релаксации и может быть выполнен где угодно, что делает его особенно полезным перед стрессовыми событиями.", en: "The 4-7-8 breathing technique involves breathing in through your nose for 4 counts, holding for 7 counts, and exhaling through your mouth for 8 counts. This pattern activates the relaxation response and can be done anywhere, making it particularly useful before stressful events." },

  "module5.q2.question": { ru: "Сколько сна должны стремиться получать студенты и молодые специалисты каждую ночь?", en: "How much sleep should students and young professionals aim for each night?" },
  "module5.q2.a": { ru: "4-5 часов", en: "4-5 hours" },
  "module5.q2.b": { ru: "5-6 часов", en: "5-6 hours" },
  "module5.q2.c": { ru: "7-9 часов", en: "7-9 hours" },
  "module5.q2.d": { ru: "10-12 часов", en: "10-12 hours" },
  "module5.q2.explanation": { ru: "Руководство рекомендует 7-9 часов сна ночью. Недостаток сна ухудшает когнитивную функцию, эмоциональную регуляцию и устойчивость к стрессу. Жертвовать сном ради учёбы или работы контрпродуктивно, поскольку усталость снижает эффективность и увеличивает ошибки.", en: "The guide recommends 7-9 hours of sleep nightly. Sleep deprivation impairs cognitive function, emotional regulation, and stress resilience. Sacrificing sleep to study or work is counterproductive, as fatigue reduces efficiency and increases errors." },

  "module5.q3.question": { ru: "Что такое прогрессивная мышечная релаксация?", en: "What is progressive muscle relaxation?" },
  "module5.q3.a": { ru: "Постепенное увеличение интенсивности упражнений", en: "Gradually increasing exercise intensity" },
  "module5.q3.b": { ru: "Систематическое напряжение и расслабление групп мышц", en: "Systematically tensing and releasing muscle groups" },
  "module5.q3.c": { ru: "Растяжка перед тренировками", en: "Stretching before workouts" },
  "module5.q3.d": { ru: "Наращивание мышечной массы со временем", en: "Building muscle mass over time" },
  "module5.q3.explanation": { ru: "Прогрессивная мышечная релаксация включает систематическое напряжение и затем расслабление различных групп мышц по всему телу. Эта техника снижает физическое напряжение, помогает вам определить, где вы держите стресс в теле, и активирует парасимпатическую нервную систему.", en: "Progressive muscle relaxation involves systematically tensing and then releasing different muscle groups throughout your body. This technique reduces physical tension, helps you identify where you hold stress in your body, and activates the parasympathetic nervous system." },

  "module5.q4.question": { ru: "Согласно руководству, какой тип физической активности наиболее эффективен для управления стрессом?", en: "According to the guide, what type of physical activity is most effective for stress management?" },
  "module5.q4.a": { ru: "Только интенсивные, высокоударные тренировки", en: "Only intense, high-impact workouts" },
  "module5.q4.b": { ru: "Последовательная умеренная активность, такая как ходьба или езда на велосипеде", en: "Consistent moderate activity like walking or cycling" },
  "module5.q4.c": { ru: "Только соревновательные виды спорта", en: "Competitive sports only" },
  "module5.q4.d": { ru: "Физическая активность не влияет на стресс", en: "Physical activity doesn't affect stress" },
  "module5.q4.explanation": { ru: "Руководство подчёркивает, что последовательность важнее интенсивности. Даже 20-30 минут умеренной активности, такой как ходьба, езда на велосипеде или танцы, дают значительные преимущества в снижении стресса. Вам не нужны интенсивные тренировки — регулярные, умеренные упражнения наиболее устойчивы и эффективны.", en: "The guide emphasizes that consistency matters more than intensity. Even 20-30 minutes of moderate activity like walking, cycling, or dancing yields significant stress-reduction benefits. You don't need intense workouts—regular, moderate exercise is most sustainable and effective." },

  "module5.q5.question": { ru: "Что такое медитация осознанности?", en: "What is mindfulness meditation?" },
  "module5.q5.a": { ru: "Устранение всех мыслей из вашего разума", en: "Eliminating all thoughts from your mind" },
  "module5.q5.b": { ru: "Безоценочное осознание опыта настоящего момента", en: "Non-judgmental awareness of present-moment experience" },
  "module5.q5.c": { ru: "Думать только позитивные мысли", en: "Thinking only positive thoughts" },
  "module5.q5.d": { ru: "Анализ прошлых переживаний", en: "Analyzing past experiences" },
  "module5.q5.explanation": { ru: "Медитация осознанности включает безоценочное осознание опыта настоящего момента. Она не требует устранения мыслей, а скорее наблюдения за ними, не увлекаясь ими, как наблюдение за облаками. Даже краткая ежедневная практика (5-10 минут) снижает стресс и улучшает эмоциональную регуляцию.", en: "Mindfulness meditation involves non-judgmental awareness of present-moment experience. It doesn't require eliminating thoughts but rather observing them without getting caught up in them, like watching clouds pass. Even brief daily practice (5-10 minutes) reduces stress and improves emotional regulation." },

  //Модуль 6

  "modules.m6.title": {
    ru: "Социальная поддержка и долгосрочная устойчивость",
    en: "Social Support and Long-Term Resilience"
  },
  "modules.m6.desc": {
    ru: "Проверьте своё понимание построения сетей социальной поддержки и развития долгосрочной устойчивости.",
    en: "Test your understanding of building social support networks and developing long-term resilience."
  },

  "module6.q1.question": { ru: "Почему социальная поддержка важна для управления стрессом?", en: "Why is social support important for stress management?" },
  "module6.q1.a": { ru: "Это не важно; вы должны справляться со стрессом в одиночку", en: "It's not important; you should handle stress alone" },
  "module6.q1.b": { ru: "Прочные социальные связи защищают от стресса и помогают восстановлению", en: "Strong social connections buffer against stress and aid recovery" },
  "module6.q1.c": { ru: "Только чтобы иметь людей, которым можно пожаловаться", en: "Only to have people to complain to" },
  "module6.q1.d": { ru: "Социальная поддержка увеличивает стресс", en: "Social support increases stress" },
  "module6.q1.explanation": { ru: "Исследования последовательно показывают, что люди с надёжными сетями социальной поддержки испытывают меньше стресса и быстрее восстанавливаются после проблем. Качество важнее количества — несколько глубоких, подлинных отношений обеспечивают больше поддержки, чем многочисленные поверхностные связи.", en: "Research consistently shows that people with robust social support networks experience less stress and recover more quickly from challenges. Quality matters more than quantity—a few deep, authentic relationships provide more support than numerous superficial connections." },

  "module6.q2.question": { ru: "Что такое устойчивость?", en: "What is resilience?" },
  "module6.q2.a": { ru: "Никогда не испытывать стресс или трудности", en: "Never experiencing stress or difficulties" },
  "module6.q2.b": { ru: "Способность адаптироваться и восстанавливаться после невзгод", en: "The ability to adapt and recover from adversity" },
  "module6.q2.c": { ru: "Избегание всех сложных ситуаций", en: "Avoiding all challenging situations" },
  "module6.q2.d": { ru: "Быть бесчувственным", en: "Being emotionless" },
  "module6.q2.explanation": { ru: "Устойчивость — это способность адаптироваться и восстанавливаться после невзгод. Это не врождённая черта, а набор навыков, которые можно развить через практики, такие как культивирование мышления роста, развитие самосострадания и сохранение перспективы на проблемы.", en: "Resilience is the ability to adapt and recover from adversity. It's not an innate trait but a set of skills that can be developed through practices like cultivating a growth mindset, developing self-compassion, and maintaining perspective on challenges." },

  "module6.q3.question": { ru: "Что означает «взаимная поддержка» в отношениях?", en: "What does 'reciprocal support' mean in relationships?" },
  "module6.q3.a": { ru: "Только получение поддержки от других", en: "Only receiving support from others" },
  "module6.q3.b": { ru: "Взаимная поддержка, где вы и даёте, и получаете помощь", en: "Mutual support where you both give and receive help" },
  "module6.q3.c": { ru: "Ведение счёта, кто больше помогает", en: "Keeping score of who helps more" },
  "module6.q3.d": { ru: "Поддержка других без принятия помощи самому", en: "Supporting others without accepting help yourself" },
  "module6.q3.explanation": { ru: "Взаимная поддержка означает, что отношения процветают на взаимной поддержке — и давая, и получая. Быть доступным для других, когда им нужна помощь, активно слушать и проявлять искренний интерес укрепляет отношения и обеспечивает перспективу на ваши собственные проблемы.", en: "Reciprocal support means relationships thrive on mutual support—both giving and receiving. Being available to others when they need help, listening actively, and showing genuine interest strengthens relationships and provides perspective on your own challenges." },

  "module6.q4.question": { ru: "Что такое мышление роста в контексте управления стрессом?", en: "What is a growth mindset in the context of stress management?" },
  "module6.q4.a": { ru: "Вера в то, что ваши способности фиксированы и неизменны", en: "Believing your abilities are fixed and unchangeable" },
  "module6.q4.b": { ru: "Рассмотрение проблем как возможностей для обучения, а не угроз", en: "Viewing challenges as opportunities for learning rather than threats" },
  "module6.q4.c": { ru: "Избегание всех сложных ситуаций", en: "Avoiding all difficult situations" },
  "module6.q4.d": { ru: "Сосредоточение только на ваших слабостях", en: "Focusing only on your weaknesses" },
  "module6.q4.explanation": { ru: "Мышление роста включает рассмотрение проблем как возможностей для обучения и развития, а не как угроз. Эта перспектива строит устойчивость, переформулируя трудности как шансы для роста, а не как доказательство неадекватности.", en: "A growth mindset involves viewing challenges as opportunities for learning and development rather than threats. This perspective builds resilience by reframing difficulties as chances to grow, rather than as evidence of inadequacy." },

  "module6.q5.question": { ru: "Согласно руководству, как вы должны рассматривать управление стрессом?", en: "According to the guide, how should you view stress management?" },
  "module6.q5.a": { ru: "Как устранение всего стресса из вашей жизни", en: "As eliminating all stress from your life" },
  "module6.q5.b": { ru: "Как развитие способности эффективно справляться со стрессом, сохраняя благополучие", en: "As developing the capacity to navigate stress effectively while maintaining well-being" },
  "module6.q5.c": { ru: "Как одноразовую проблему, которую нужно решить и забыть", en: "As a one-time problem to solve and forget" },
  "module6.q5.d": { ru: "Как что-то, что нужно только слабым людям", en: "As something only weak people need" },
  "module6.q5.explanation": { ru: "Руководство подчёркивает рассмотрение управления стрессом не как устранение всего стресса (что невозможно), а как развитие способности эффективно справляться со стрессом, сохраняя благополучие и производительность. Это постоянная практика построения навыков и устойчивости.", en: "The guide emphasizes viewing stress management not as eliminating all stress (which is impossible) but as developing the capacity to navigate stress effectively while maintaining well-being and performance. It's an ongoing practice of building skills and resilience." },

  // ==========================================
  // СТРАНИЦА "МОЙ ПРОГРЕСС" (progress.html)
  // ==========================================
  "progress.header.title": {
    "ru": "Мой прогресс",
    "en": "My Progress"
  },
  "progress.pageTitle": {
    "ru": "Ваш прогресс",
    "en": "Your Progress"
  },
  "progress.pageSubtitle": {
    "ru": "Отслеживайте свой путь обучения и посмотрите, как далеко вы продвинулись",
    "en": "Track your learning journey and see how far you've come"
  },

  // --- Карточка 1: Модули завершены ---
  "progress.modulesCompletedTitle": {
    "ru": "Модули завершены",
    "en": "Modules Completed"
  },

  // --- Карточка 2: Средний результат ---
  "progress.averageTitle": {
    "ru": "Средний результат",
    "en": "Average Score"
  },
  "progress.averageSubtitle": {
    "ru": "На основе {n} попыток тестирования",
    "en": "Based on {n} quiz attempts"
  },
  "progress.averageSubtitleEmpty": {
    "ru": "Пройдите тест, чтобы увидеть свой результат",
    "en": "Take the Quiz to see your result"
  },

  // --- Список модулей (JS) ---
  "progress.modulesProgressTitle": {
    "ru": "Прогресс по модулям",
    "en": "Module Progress"
  },
  "progress.questionsCount": {
    "ru": "5 вопросов",
    "en": "5 questions"
  },
  "progress.statusDone": {
    "ru": "Завершено",
    "en": "Completed"
  },
  "progress.statusNotStarted": {
    "ru": "Не начато",
    "en": "Not started"
  },
  "progress.start": {
    "ru": "Начать",
    "en": "Started"
  },
  "progress.repeat": {
    "ru": "Просмотр",
    "en": "Review"
  },

  // --- Блок "Продолжайте!" ---
  "progress.keepGoingTitle": {
    "ru": "Продолжайте!",
    "en": "Continue!"
  },
  "progress.keepGoingText": {
    "ru": "Вы завершили {n} из {total} модулей. Продолжайте учиться, чтобы овладеть управлением стрессом!",
    "en": "You have completed {n} out of {total} modules. Keep learning to master stress management!"
  },
  "progress.allDoneText": {
    "ru": "Поздравляем! Вы завершили весь курс.",
    "en": "Congratulations! You have completed the entire course."
  },
  "progress.continueBtn": {
    "ru": "Продолжить обучение",
    "en": "Continue learning"
  },

  // --- Блок "Поздравляем!" (100%) ---
  "progress.congratsTitle": {
    "ru": "Поздравляем!",
    "en": "Congratulations!"
  },
  "progress.congratsText": {
    "ru": "Вы завершили все модули! Теперь у вас есть прочная основа в техниках управления стрессом. Не забывайте регулярно практиковать эти навыки.",
    "en": "You've completed all modules! You now have a solid foundation in stress management techniques. Remember to practice these skills regularly."
  },
  "progress.viewGuideBtn": {
    "ru": "Просмотреть руководство",
    "en": "Review Guide"
  },
  "progress.retakeBtn": {
    "ru": "Пересдать модули",
    "en": "Retake Modules"
  },

  // --- Блок "Сертификат" ---
  "progress.certTitle": {
    "ru": "Получите свой сертификат",
    "en": "Get Your Certificate"
  },
  "progress.certText": {
    "ru": "Скачайте сертификат о прохождении курса, чтобы отметить своё достижение!",
    "en": "Download your certificate of completion to celebrate your achievement!"
  },
  "progress.certNameLabel": {
    "ru": "Полное имя",
    "en": "Full name"
  },
  "progress.certNamePlaceholder": {
    "ru": "Введите ваше полное имя",
    "en": "Enter your full name"
  },
  "progress.certTemplateLabel": {
    "ru": "Шаблон сертификата",
    "en": "Certificate Template"
  },

  // --- Кнопки сертификата ---
  "progress.certTemplateProf": {
    "ru": "Профессиональный",
    "en": "Professional"
  },
  "progress.certTemplateAcad": {
    "ru": "Академический",
    "en": "Academic"
  },
  "progress.certTemplateMod": {
    "ru": "Современный",
    "en": "Modern"
  },
  "progress.certDownloadBtn": {
    "ru": "Скачать сертификат",
    "en": "Download Certificate"
  },
  "progress.certEmailBtn": {
    "ru": "Отправить на email",
    "en": "Send to Email"
  },
  // --- СТРАНИЦА АНАЛИТИКИ (analytics.html) ---
  "btn.back": { "ru": "Назад", "en": "Back" },

  "analytics.title": { "ru": "Аналитика и Инсайты", "en": "Analytics & Insights" },
  "analytics.subtitle": { "ru": "Визуализируйте свои паттерны стресса и получайте персонализированные рекомендации", "en": "Visualize your stress patterns and get personalized recommendations" },

  "metrics.avgStress": { "ru": "Средний стресс", "en": "Avg Stress" },
  "metrics.avgMood": { "ru": "Среднее настроение", "en": "Avg Mood" },
  "metrics.practices": { "ru": "Практик выполнено", "en": "Practice Sessions" },
  "metrics.avgReduction": { "ru": "Среднее снижение", "en": "Avg Reduction" },

  "charts.stressTitle": { "ru": "Динамика стресса (30 дней)", "en": "Stress Trends (30 days)" },
  "charts.stressSubtitle": { "ru": "Отслеживайте изменения уровня стресса с течением времени", "en": "Track how your stress levels change over time" },
  "charts.moodTitle": { "ru": "Динамика настроения (30 дней)", "en": "Mood Trends (30 days)" },
  "charts.moodSubtitle": { "ru": "Визуализируйте изменения вашего настроения", "en": "Visualize your mood changes" },

  "recs.title": { "ru": "Персонализированные рекомендации", "en": "Personalized Recommendations" },
  "recs.subtitle": { "ru": "На основе ваших паттернов стресса и прогресса", "en": "Based on your stress patterns and progress" },

  "recs.item1.title": { "ru": "Начните первую практику", "en": "Start Your First Practice Session" },
  "recs.item1.desc": { "ru": "Вы завершили 6 модулей, но еще не пробовали практические занятия. Посвятите 5 минут сегодня дыхательному упражнению, чтобы применить полученные знания.", "en": "You have completed 6 modules but haven't tried a practice session yet. Dedicate 5 minutes today to a guided breathing exercise to apply what you have learned." },

  "recs.item2.title": { "ru": "Продолжите обучение", "en": "Continue Your Learning Journey" },
  "recs.item2.desc": { "ru": "Вы прошли более половины модулей! Завершите следующий доступный модуль, чтобы освоить больше инструментов для снижения стресса.", "en": "You are over halfway through the modules! Complete the next available module to build more stress-reduction tools." },
  "recs.item2.btn": { "ru": "Перейти", "en": "Go" },

  "recs.item3.title": { "ru": "Отслеживайте ежедневное настроение", "en": "Track Your Daily Mood" },
  "recs.item3.desc": { "ru": "Начните записывать свое ежедневное настроение, чтобы со временем выявить конкретные триггеры и закономерности стресса.", "en": "Start tracking your daily mood to better understand your stress triggers and monitor your emotional patterns over time." },

  "bottom.moodCalendar.title": { "ru": "Календарь настроения", "en": "Mood Calendar" },
  "bottom.moodCalendar.desc": { "ru": "Отслеживайте ежедневное настроение и уровень стресса", "en": "Track daily mood and stress levels" },

  "bottom.practiceJournal.title": { "ru": "Журнал практики", "en": "Practice Log" },
  "bottom.practiceJournal.desc": { "ru": "Записывайте свои практические сессии", "en": "Log your practice sessions" },

  "bottom.reflectionDiary.title": { "ru": "Дневник размышлений", "en": "Journal" },
  "bottom.reflectionDiary.desc": { "ru": "Записывайте свои мысли и рефлексии", "en": "Write your thoughts and reflections" },
 
  // --- СТРАНИЦА ЖУРНАЛА ПРАКТИКИ (practice-journal.html) ---

  // Навигация и заголовки
  "practice.title": { "ru": "Журнал практики", "en": "Practice Log" },
  "practice.subtitle": { "ru": "Отслеживайте свои сессии релаксации и прогресс", "en": "Track your relaxation sessions and progress" },
  
  // Блок "Недельная цель" (Просмотр)
  "practice.goal.title": { "ru": "Недельная цель", "en": "Practice Log" },
  "practice.goal.edit": { "ru": "Изменить цель", "en": "Edit Goal" },
  "practice.goal.sessions": { "ru": "сессий на этой неделе", "en": "sessions this week" },
  "practice.goal.progress": { "ru": "прогресс на этой неделе", "en": "this week's progress" },

  // Блок "Недельная цель" (Редактирование)
  "practice.goal.editLabel": { "ru": "Целевое количество сессий в неделю", "en": "Target sessions per week" },
  "practice.goal.cancel": { "ru": "Отмена", "en": "Cancel" },
  "practice.goal.save": { "ru": "Сохранить цель", "en": "Save goal" },

  // Блок "Статистика" (появляется после первой записи)
  "practice.stats.title": { "ru": "Статистика", "en": "Statistics" },
  "practice.stats.total": { "ru": "Всего сессий", "en": "Total Sessions" },
  "practice.stats.avgDrop": { "ru": "Средн. снижение стресса", "en": "Avg. Stress Reduction" },
  "practice.stats.avgBefore": { "ru": "Средн. уровень до", "en": "Avg. Level Before" },
  "practice.stats.avgAfter": { "ru": "Средн. уровень после", "en": "Avg. Level After" },

  // Форма "Записать новую сессию"
  "practice.form.title": { "ru": "Записать новую сессию", "en": "Log New Session" },
  "practice.form.technique": { "ru": "Техника", "en": "Technique" },
  "practice.form.selectTechnique": { "ru": "Выберите технику", "en": "Select a technique" },
  "practice.form.tech1": { "ru": "Дыхание для расслабления", "en": "Breathing for relaxation" },
  "practice.form.tech2": { "ru": "Прогрессивная мышечная релаксация", "en": "Progressive muscle relaxation" },
  "practice.form.tech3": { "ru": "Техника заземления «5–4–3–2–1»", "en": "Grounding technique «5-4-3-2-1»" },
  "practice.form.tech4": { "ru": "Техника «Безопасное место»", "en": "Safe Place technique" },
  "practice.form.stressBefore": { "ru": "Уровень стресса до практики", "en": "Stress level before practice" },
  "practice.form.stressAfter": { "ru": "Уровень стресса после практики", "en": "Stress level after practice" },
  "practice.form.notes": { "ru": "Заметки (необязательно)", "en": "Notes (optional)" },
  "practice.form.notesPlaceholder": { "ru": "Как вы себя чувствовали? Что помогло?", "en": "How did you feel? What helped?" },
  "practice.form.submit": { "ru": "Сохранить запись", "en": "Save entry" },

  // Блок "История практики"
  "practice.history.title": { "ru": "История практики", "en": "Practice History" },
  "practice.history.empty": { "ru": "У вас пока нет записей. Начните отслеживать свою практику!", "en": "You have no entries yet. Start tracking your practice!" },
 "practice.history.reduction": { "ru": "Снижение", "en": "Reduction" },
  "practice.history.before": { "ru": "До:", "en": "Before:" },
  "practice.history.after": { "ru": "После:", "en": "After:" },
}
