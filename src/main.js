import './scss/index.scss'
// import './js/events'
//Блоки
import createBuildsContainer from './js/builds'
import createFastSearchContainer from './js/fast_search';

const initCarousel = () => {
    const carousel = $(".slick-slider");
	carousel.slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        adaptiveHeight: true
    });
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