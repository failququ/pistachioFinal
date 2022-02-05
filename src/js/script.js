
    $('.works__slider').slick(
        {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/works/arrow-prev.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/works/arrow-next.png"></button>',
            responsive: [
                {
                breakpoint: 1600,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    prevArrow: '<button type="button" class="slick-prev"><img src="img/works/arrow-prev.png"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="img/works/arrow-next.png"></button>',
                }
            }
            ]
        }
    );



document.addEventListener('DOMContentLoaded', function () {

    // TABS
    const landingTab = document.querySelector('#landing');
    const marketTab = document.querySelector('#market');
    const corporateTab = document.querySelector('#corporate');
    const designTab = document.querySelector('#design');
    const changingContent = document.querySelector('.descr-content')



function tabChanger(element, text, price ) {
    element.innerHTML = `
    <div class="text animate__animated animate__fadeInLeft wow">${text}</div>
    <div class="price animate__animated animate__fadeInLeft wow">${price}</div>
    `
}


    landingTab.addEventListener('click', () => tabChanger(changingContent,
        'Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории.',
        'от 15000 рублей'));

    marketTab.addEventListener('click', () => tabChanger(changingContent,
        'Разработка сайта интернет-магазина — первый шаг к высоким продажам и узнаваемости вашего бренда за короткие сроки.',
        'от 30000 рублей'));

    corporateTab.addEventListener('click', () => tabChanger(changingContent,
        'Корпоративный сайт - это качественная и полноценная презентация компании в Интернете. Мы разработаем привлекательный digital-портрет вашей компании',
        'от 45000 рублей'));

    designTab.addEventListener('click', () => tabChanger(changingContent,
        'Дизайн, который продаёт. Оформление продающего сайта. Создание бренда и уникального логотипа для вашего бизнеса. Подбор цвета, графики, анимации.',
        'от 10000 рублей'));


    // FORM

    const feedback = document.querySelector('#feedback'),
        morph = document.querySelector('.morphable');

    feedback.addEventListener('click', addAtribute);

    function addAtribute(e) {
        if (e.target.value === 'Viber' || e.target.value === 'Telegram' || e.target.value === 'WhatsApp') {
            morph.setAttribute('type', 'tel');
            morph.setAttribute('placeholder', 'Ваш телефонный номер');
            morph.setAttribute('name', 'phone');
        } else if (e.target.value === 'Email') {
            morph.setAttribute('type', 'email');
            morph.setAttribute('placeholder', 'Ваша электронная почта');
            morph.setAttribute('name', 'email');
        }
    }

    // BUTTON SHADOW

    const btns = document.querySelectorAll('.changableBtn');
    
    btns.forEach((btn) => {
        btn.onmouseover = () => {
            btn.style.cssText = 'transform: scale(0.95)'
            btn.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.25)';
        }
    
        btn.onmouseout = () => {
            btn.style.cssText = 'transform: scale(1)'
            btn.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.25)';
        }
    })



    // //SERVER REQUEST
    // const forms = document.querySelector('form');

    // function postData() {
    //     forms.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const formData = new FormData(forms);
    //         const obj = {};
    //         formData.forEach(function (value, key) {
    //             obj[key] = value;
    //         });

    //         const json = JSON.stringify(obj);

    //         fetch('http://localhost:3000/requests', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: json
    //         });

    //     });
    // }


    // postData();

    // //MODAL

    // const modalBtn = document.querySelector('.btn_min');
    // const modalClose = document.querySelector('.modal__close');
    // const modalOverlay = document.querySelector('.modal__overlay');


    // btn.addEventListener('click', () => {
    //     modal.classList.remove('hide');
    //     modal.classList.add('show');
    //     document.querySelector('.modal__overlay').style.display = 'block';
    // });

    // modalBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     document.querySelector('.modal__overlay').style.display = 'none';
    // });

    // modalClose.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     document.querySelector('.modal__overlay').style.display = 'none';
    // });

    // modalOverlay.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     document.querySelector('.modal__overlay').style.display = 'none';
    // });
});