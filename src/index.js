import './css/styles.css'

var menu = document.querySelector('.menu-items');


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

var questions = document.querySelectorAll('.question-header');

questions.forEach(question => {
    question.addEventListener('click', handleClick);
});

function handleClick(event) {
    const questionHeader = event.currentTarget;
    const answers = document.querySelectorAll('.answer-open, .answer-close');
    console.log(answers);
    answers.forEach(answer => {
        const isOpen = answer.classList.contains('answer-open');
        answer.classList.remove('answer-open', 'answer-close');
        answer.classList.add('answer-close');
        if (!isOpen && answer.closest('.question') === questionHeader.parentElement) {
            answer.classList.remove('answer-close');
            answer.classList.add('answer-open');
        }
    });
};