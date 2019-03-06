import './scss/index.scss'
// import './js/events'
//Блоки
import createBuildsContainer from './js/builds'

const init = () => {
    createBuildsContainer('rent')
    createBuildsContainer('sell')
}
document.addEventListener('DOMContentLoaded', () =>{
    init()
});