import './scss/index.scss'
// import './js/events'
//Блоки
import createBuildsContainer from './js/builds'

const initCarousel = () => {
    // const carousel = $("#carousel");
	// carousel.owlCarousel();
}

const init = () => {
    createBuildsContainer('rent')
    createBuildsContainer('sell')
    initCarousel()
}
document.addEventListener('DOMContentLoaded', () =>{
    init()
});