const bookmarkOptions = document.querySelectorAll('.bookmark__option');
const showOptions = {
    simple: ['Bookmark in one click', `Organize your bookmarks however you like. Our simple drag-and-drop interface 
      gives you complete control over how you manage your favourite sites.`],
    speedy: ['Intelligent search', `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`],
    easy: ['Share your bookmarks', `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`]
}
const title = document.getElementById('title');
const text = document.getElementById('text');
function optionChose(e) {
    const option = e.currentTarget;
    const idOption = option.id;
    console.log(idOption);
    const [titleOption, textOption] = showOptions[idOption];
    console.log(titleOption, textOption);
    bookmarkOptions.forEach(option => option.classList.remove('bookmark__option--active'));
    option.classList.add('bookmark__option--active');
    title.textContent = titleOption;
    text.textContent = textOption;
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