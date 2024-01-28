
export function updateHeader(header, scrollPosition) {
    var currentScroll = window.scrollY;

    if (currentScroll > scrollPosition) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    scrollPosition = currentScroll;
}

export function handleClick(event) {
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

export function showSlide(slideNumber) {
    document.querySelectorAll('.slider-section1, .slider-section2, .slider-section3').forEach(slide => {
        slide.style.display = 'none';
    });

    const slideToShow = document.querySelector(`.slider-section${slideNumber}`);
    if (slideToShow) {
        slideToShow.style.display = 'flex';
    }
}

export function prevSlide(currentSlide) {
    currentSlide = (currentSlide === 1) ? 3 : currentSlide - 1;
    showSlide(currentSlide);
}

export function nextSlide(currentSlide) {
    currentSlide = (currentSlide === 3) ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

export function navigateToSlide(event, currentSlide) {
    event.preventDefault();

    const targetSlide = event.target.getAttribute('data-target');
    if (targetSlide) {
        currentSlide = parseInt(targetSlide.slice(-1));
        showSlide(currentSlide);
    }
}

