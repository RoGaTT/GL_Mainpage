import './scss/index.scss'
// import './js/events'
//Блоки
import createBuildsContainer from './js/builds'
import createFastSearchContainer from './js/fast_search';

const initCarousel = () => {
    // const carousel = $("#carousel");
	// carousel.owlCarousel();
}

const init = () => {
    createBuildsContainer('rent')
    createBuildsContainer('sell')
    createFastSearchContainer()
    initCarousel()
}
document.addEventListener('DOMContentLoaded', () =>{
    init()
});