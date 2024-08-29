const langArr = {
    "aboutme" :  {
        "ru": "ОБО МНЕ",
        "en": "ABOUT ME",
    }, 
    "name": {
        "ru": "Татьяна Макарук",
        "en": "Tatiana Makaruk",
    }, 
    "aboutme1": {
        "ru": " Я занимаюсь дизайном на профессиональном уровне уже <span class=\"bold-text\">более 7 лет.</span> Начинала, как дизайнер интерьеров и получила высшее образование, по специальности <span class=\"bold-text\">Архитектор.</span> Однако позже я поняла, что моя <span class=\"bold-text\">настоящая страсть</span> — это графический дизайн",
        "en": "I've been professionally involved in design for over <span class=\"bold-text\">7 years.</span> I started as an interior designer and also earned a degree in <span class=\"bold-text\">Architecture.</span> However, I later realized that my <span class=\"bold-text\">true passion</span> lies in graphic design",
    }, 
    "aboutme2": {
        "ru": "За эти годы я создала множество проектов и получила большое количество положительных отзывов. <span class=\"bold-text\">Дизайн — это моя жизнь.</span> Я постоянно учусь, совершенствую навыки и насмотренность, . Для меня важно прислушиваться к клиенту и создавать не только креативный, но и эффективный дизайн. Моя ключевая черта в работе — <span class=\"bold-text\">высокий уровень ответственности.</span>",
        "en": " Over the years, I've created numerous projects and have received only positive feedback. <span class=\"bold-text\">Designing is my life.</span> I constantly learn, develop my visual sense, and perfect my skills. It's important for me to listen to the client and create not only creative but also effective designs. My key quality in work is a <span class=\"bold-text\">high level of responsibility</span>",
    }, 
    "portfolio": {
        "ru": "ПОРТФОЛИО",
        "en": "PORTFOLIO",
    }, 
    "contacts": {
        "ru": "КОНТАКТЫ",
        "en": "CONTACTS",
    }, 
    "info1": {
        "ru": "Опыт работы - 7 лет",
        "en": "Work experience - 7 years",
    },
    "info2": {
        "ru": " Возраст - 26 лет",
        "en": "26 years old",
    },
    "info3": {
        "ru": "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Местоположение: Любляна, Словения",
        "en": " Based in Ljubljana, Slovenia",
    },
    "job1": {
        "ru": " ГРАФИЧЕСКИЙ ДИЗАЙН",
        "en": "GRAPHIC DESIGN&nbsp;",
    },
    "job2": {
        "ru": "БРЕНДИНГ",
        "en": "&nbsp;BRANDING&nbsp;",
    },
    "skills": {
        "ru": "НАВЫКИ",
        "en": "SKILLS",
    },
    "skills1": {
        "ru": "<span class=\"bold-text1\">Adobe Creative Suite</span> (Photoshop, Illustrator, InDesign): Продвинутые навыки работы с основными инструментами для создания графики, иллюстраций и макетов.",
        "en": "<span class=\"bold-text1\">Adobe Creative Suite (Photoshop, Illustrator, InDesign):</span> Advanced skills in using key tools for creating graphics, illustrations, and layouts.",
    },
    "skills2": {
        "ru": "<span class=\"bold-text1\">Типографика:</span> Умение работать со шрифтами, понимание принципов типографики и их применение в дизайне.",
        "en": "<span class=\"bold-text1\">Typography:</span> Ability to work with fonts, understanding the principles of typography and applying them in design.",
    },
    "skills3": {
        "ru": "<span class=\"bold-text1\">Брендинг и айдентика:</span> Способность создавать логотипы, фирменный стиль и другие элементы визуального брендинга",
        "en": "<span class=\"bold-text1\">Branding and Identity:</span> Ability to create logos, corporate identity, and other elements of visual branding.",
    },
    "skills4": {
        "ru": "<span class=\"bold-text1\">Подготовка к печати:</span> Знание основ предпечатной подготовки, создание макетов для печати (брошюры, визитки, постеры)",
        "en": "<span class=\"bold-text1\">Print Production:</span> Knowledge of prepress basics, creating layouts for print (brochures, business cards, posters).",
    },
    "skills5": {
        "ru": " Работа с приложениями для создания <span class=\"bold-text1\">контента для социальных сетей:</span> Опыт создания видео и простых анимаций",
        "en": "Working with Applications for <span class=\"bold-text1\">Creating Social Media Content:</span> Experience in creating videos and simple animations.",
    },
    "skills6": {
        "ru": "Владение программами:<span class=\"bold-text1\"> 3ds Max и Archicad.</span> Опыт создания 3D-визуализаций.",
        "en": "<span class=\"bold-text1\">Proficiency in Software: 3ds Max and Archicad.</span> Experience in creating 3D visualizations.",
    },
    "skills7": {
        "ru": " Базовые знания <span class=\"bold-text1\">After Effects и Figma</span>",
        "en": "<span class=\"bold-text1\">Basic Knowledge of After Effects and Figma.</span>",
    },
    "skills8": {
        "ru": "<span class=\"bold-text1\">Проектное мышление:</span> Умение управлять проектами, понимать цели клиента и превращать их в эффективные дизайнерские решения",
        "en": "<span class=\"bold-text1\">Project Thinking:</span> Ability to manage projects, understand client goals, and transform them into effective design solutions.",
    },
    "skills9": {
        "ru": "<span class=\"bold-text1\">Сильные навыки работы с ИИ:</span> Midjourney и ChatGPT",
        "en": "<span class=\"bold-text1\">Strong Skills in Working with AI:</span> Midjourney and ChatGPT.",
    },
    "experience": {
        "ru": "ОПЫТ РАБОТЫ",
        "en": "EXPERIENCE",
    },
    "experience1": {
        "ru": " Разработала <span class=\"bold-text1\">более 30 логотипов</span> для различных компаний, которые успешно используются до сих пор.",
        "en": "<span class=\"bold-text1\">Developed over 30 logos</span> for various companies, which are still successfully in use today.",
    },
    "experience2": {
        "ru": "Сотрудничала <span class=\"bold-text1\">более чем с 5 компаниями по всему миру</span> в качестве графического дизайнера и специалиста по SMM:",
        "en": "Collaborated with more than 5 companies all over the world as a <span class=\"bold-text1\">Graphic Designer and SMM specialist:",
    },
    "experience3": {
        "ru": "ресторан «Liman» (Кони-Айленд, Нью-Йорк)",
        "en": "«Liman» restaurant (Coney Island, New York)",
    },
    "experience4": {
        "ru": "сеть ресторанов «La Vida» (Молдова)",
        "en": "«La Vida» restaurant chain (Moldova)",
    },
    "experience5": {
        "ru": "центр красоты «Marisabel» (Москва)",
        "en": "«Marisabel» beauty center (Moscow)",
    },
    "experience6": {
        "ru": "туристическое агентство «Poehali S Nami» (Румыния/Молдова)",
        "en": "«Poehali S Nami» travel agency (Romania/Moldova)",
    },
    "experience7": {
        "ru": "«Trading Group», международная компания по экспорту зерна (базируется в Молдове).",
        "en": "«Trading Group», an international grain export company (based in Moldova).",
    },
    "experience8": {
        "ru": " Для всех этих компаний я вела дизайн-сопровождение и разрабатывала комплексные графические пакеты, включающие меню, баннеры, флаеры, многостраничные прайс-листы, презентации и другие материалы для поддержки и продвижения их визуального образа.",
        "en": "For all these companies, I developed comprehensive <span class=\"bold-text1\">graphic packages</span>, including menus, banners, flyers, multi-page price lists, presentations, and other materials to support and promote their visual identity.",
    },
    "experience9": {
        "ru": "Кроме того, я создавала контент для социальных сетей и вела их инстаграм аккаунты на ежемесячной основе, включая организацию фотосессий и видеосъёмок",
        "en": "Additionally, I created content for social media and managed their monthly accounts, including producing photo and video shoots.",
    },
    "experience10": {
        "ru": "Разрабатывала брендбуки, фирменный стиль и дизайн упаковки в рамках коммерческих проектов.",
        "en": "Developed brand books, corporate identity, and packaging design as <span class=\"bold-text1\">commercial projects.</span>",
    },
    "accordion1": {
        "ru": "Дизайн ЛОГО",
        "en": "Logo design",
    },
    "accordion2": {
        "ru": "Брендбуки и Гайдлайны",
        "en": "Brandbooks & Guidelines",
    },
    "accordion3": {
        "ru": " Дизайн меню",
        "en": "Menus",
    },
    "accordion4": {
        "ru": "Типографика",
        "en": "Typography",
    },
    "accordion5": {
        "ru": "SMM",
        "en": "SMM",
    },
    "accordion6": {
        "ru": "3D Визуализации",
        "en": "3D Visualisation",
    },
    "cont": {
        "ru": "КОНТАКТЫ",
        "en": "CONTACTS",
    },
}