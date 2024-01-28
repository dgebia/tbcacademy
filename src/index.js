import './css/styles.css'
import {
    handleClick, updateHeader, showSlide, prevSlide,
    nextSlide,
    navigateToSlide
} from './functions/domFunctions';


document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var menu = document.querySelector('.menu-items');
    var questions = document.querySelectorAll('.question-header');
    var currentSlide = 1;

    window.addEventListener('scroll', () => updateHeader(header, scrollPosition));

    document.getElementById('prev').addEventListener('click', () => prevSlide(currentSlide));
    document.getElementById('next').addEventListener('click', () => nextSlide(currentSlide));

    document.querySelectorAll('.btn-link').forEach(btn => {
        btn.addEventListener('click', (event) => navigateToSlide(event, currentSlide));
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

    setInterval(() => {
        currentSlide = (currentSlide === 3) ? 1 : currentSlide + 1;
        showSlide(currentSlide);
    }, 5000);
})






