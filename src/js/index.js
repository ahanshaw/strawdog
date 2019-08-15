import objectFitImages from 'object-fit-images';
import { megaMenu } from './global/megaMenu.js';
import { smoothScroll } from './global/smoothScroll.js';
import { mobileMenu } from './global/mobileMenu.js';

$(document).ready(function() {
    objectFitImages();
    megaMenu();
    smoothScroll();
    mobileMenu();
});

$( window ).resize(function() {
    megaMenu();
});
