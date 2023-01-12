const quoteDiv = document.getElementById('quoteDiv');
const quote = document.getElementById('quote');
const button = document.querySelector('button');
const randomQuotes = [
    'Work hard in silence',
    `If you try to catch two rabbits, you'll catch none`,
    'Pray and have Patience',
    'If you want to try, go all the way, else dont even bother',
    'see you <3',
    'dummy',
    'dummy2'
]
let index = 0;
let maxLength = 6;
button.addEventListener('click', () => {
    quote.innerHTML = randomQuotes[index];
    index++;
    if (index === maxLength) {
        location.reload();
    }
})