// Utils
import isTouchDevice from './utils/isTouchDevice';
import getScrollBarWidth from './utils/getScrollBarWidth';

// Slider
// import Swiper, { Pagination } from 'swiper';

// Modals
// import '@fancyapps/fancybox';

// Formatter
// import Cleave from 'cleave.js';
// import "cleave.js/dist/addons/cleave-phone.ru";

import header from "./layouts/header";
// import sidebar from "./layouts/sidebar";
// import modal from "./base/modal";
// import file from "./base/file";
// import news from "./modules/news";

// configure Swiper to use modules

// Demo only
document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href^="/"]');
    if (a) {
        e.preventDefault();
        alert('Переход на страницу "' + a.textContent + '"');
    }
});
// / Demo only

document.addEventListener('DOMContentLoaded', function(loadEvent) {
    // Define helpers
    const html = document.querySelector('html');
    html.classList.remove('no-js');
    html.classList.add('js');
    if (isTouchDevice()) {
        html.classList.add('touch');
    }

    document.documentElement.style.setProperty('--scrollbar-width', getScrollBarWidth() + 'px');

    header('.site-header');

    // document.querySelectorAll('.input-file').forEach(file => file(file));

    // init Swiper
    // const swiper = new Swiper('.swiper', {
    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    // });
});
