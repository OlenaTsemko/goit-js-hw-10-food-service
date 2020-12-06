import './styles.css';
import menuGallery from './templates/menu-gallery.hbs';
import menu from './menu.json';
import themeToggle from './theme-toggle';

const GalleryRef = document.querySelector('.js-menu');

const markup = menuGallery(menu);

GalleryRef.insertAdjacentHTML('beforeend', markup);


themeToggle();