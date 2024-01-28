import './css/styles.css'
import {
    handleClick, updateHeader, startSlideInterval, prevSlide,
    nextSlide,
    navigateToSlide
} from './functions/domFunctions';


document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var menu = document.querySelector('.menu-items');
    var questions = document.querySelectorAll('.question-header');
    var currentSlide = 1;
    var slideInterval;

    window.addEventListener('scroll', () => updateHeader(header, scrollPosition));

    document.getElementById('prev').addEventListener('click', () => prevSlide(currentSlide, slideInterval));
    document.getElementById('next').addEventListener('click', () => nextSlide(currentSlide, slideInterval));

    document.querySelectorAll('.btn-link').forEach(btn => {
        btn.addEventListener('click', (event) => navigateToSlide(event, currentSlide, slideInterval));
    });


    menu.addEventListener('click', (event) => {

        if (event.target.matches('.menu-item-link')) {
            const menuLinks = document.querySelectorAll('.menu-item-link')
            menuLinks.forEach(link => {
                link.classList.remove('active')
                event.target.classList.add('active')
                console.log(link);
            })
        }
    })


    questions.forEach(question => {
        question.addEventListener('click', handleClick);
    });

    startSlideInterval(currentSlide, slideInterval)
})






