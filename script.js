const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector("#menu").cloneNode(true);
popup.appendChild(menu);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}

// Закрытие попапа при клике на пункт меню
const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


document.addEventListener("click", function (e) {
  if (!popup.contains(e.target) && !hamb.contains(e.target)) {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
});


//ВОПРОСЫ
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const desc = item.querySelector('.accordion-item-desc');


        if (checkbox.checked) {
            desc.style.maxHeight = desc.scrollHeight + 'px';
        } else {
            desc.style.maxHeight = '0';
        }

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {

                desc.style.transition = 'max-height 0.6s ease, padding 0.4s ease';
                desc.style.maxHeight = desc.scrollHeight + 'px';
            } else {

                desc.style.transition = 'max-height 0.6s ease, padding 0.6s ease';
                desc.style.maxHeight = '0';
            }
        });


        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (checkbox.checked) {
                    desc.style.maxHeight = desc.scrollHeight + 'px';
                }
            }
        });

        observer.observe(desc);
    });
});

//скролл
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section, .skills-experience-container, .ac1, .contacts-section');
    const lastSection = document.querySelector('.contacts-section'); 
    const secondLastSection = document.querySelector('.ac1'); 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        section.classList.add('section-hidden'); 
        observer.observe(section); 
    });


    const lastObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lastSection.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    lastObserver.observe(secondLastSection); 
});


const allLang = ['en', 'ru'];
const buttons = document.querySelectorAll('.menu1 .translate');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let lang = button.id;
        if (!allLang.includes(lang)) return; // Проверяем корректность выбранного языка
        location.href = window.location.pathname + '#' + lang;
        changeLanguage(); // Меняем язык без перезагрузки страницы
    });
});

function changeLanguage() {
    let hash = window.location.hash.substr(1);
    if (!allLang.includes(hash)) {
        hash = 'en'; // Язык по умолчанию
        location.href = window.location.pathname + '#' + hash;
    }

    buttons.forEach(button => {
        button.classList.toggle('active', button.id === hash); // Устанавливаем активную кнопку
    });

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem && langArr[key][hash]) { // Проверяем наличие ключа и языка
            elem.innerHTML = langArr[key][hash];
        }
    }
}

// Инициализация языка при загрузке страницы
changeLanguage();
