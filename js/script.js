const bookmarkOptions = document.querySelectorAll('.bookmark__option');
function optionChose(e) {
    const option = e.currentTarget;
    bookmarkOptions.forEach(option => option.classList.remove('bookmark__option--active'));
    option.classList.add('bookmark__option--active');
}
bookmarkOptions.forEach(option => option.addEventListener('click', optionChose));

const bookmarkQuestions = document.querySelectorAll('.bookmark__question');

function showAnswer(e) {
    e.preventDefault();
    const contentQuestion = e.currentTarget;
    const arrow = contentQuestion.querySelector('.bookmark__question-arrow');
    contentQuestion.classList.toggle('bookmark__question--active');
    if (contentQuestion.classList.contains('bookmark__question--active')) {
        arrow.classList.add('bookmark__question-arrow--active');
    } else {
         arrow.classList.remove('bookmark__question-arrow--active'); 
    }

}

bookmarkQuestions.forEach(question => question.addEventListener('click', showAnswer));

const contentInput = document.querySelector('.bookmark__form-input');
const btnSubmit = document.querySelector('.bookmark__form-contact');
const form = document.getElementById('form');
function sendEmail(e) {
    let allCorrect = true;
    e.preventDefault();
    const emailValue = document.getElementById('email').value.trim();
    console.log(emailValue);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue); 
    if (!isValidEmail) {
        allCorrect = false;
        contentInput.classList.add('bookmark__form-input--error');
        btnSubmit.classList.add('bookmark__form-contact--error');
    } else {
        contentInput.classList.remove('bookmark__form-input--error');
        btnSubmit.classList.remove('bookmark__form-contact--error');
        form.reset();
        // Here the fetch
    }
    console.log('All is correct!', allCorrect);
}





form.addEventListener('submit', sendEmail);