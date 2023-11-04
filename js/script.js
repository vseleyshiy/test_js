let questions = [
    {
        question: 'Какой язык программирования вы изучаете?',
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: 'JavaScript'
    },
    {
        question: "Что такое HTML?",
        options: ["Гипертекстовый язык разметки", "Язык программирования",
            "База данных", "Графический редактор"],
        correctAnswer: "Гипертекстовый язык разметки"
    },
    {
        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "Система управления базами данных", "Фреймворк"],
        correctAnswer: "Каскадные таблицы стилей"
    },

];

let currentQuestion = 0;
let correctAnswers = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion()
    } else {
        displayResult();
    }
};

function displayQuestion() {
    let questionElement = document.getElementById('question');
    questionElement.textContent = 'Вопрос ' + (currentQuestion + 1) + ':' + questions[currentQuestion].question;
    let optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';
    let shuffledOptions = shuffleArray(questions[currentQuestion].options);
    for (let i = 0; i < shuffledOptions.length; i++) {
        let option = shuffledOptions[i];
        optionsElement.innerHTML += `<button onclick="nextQuestion('${option}')">${option}</button>`
    };
}

function displayResult() {
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById('options');
    let resultElement = document.getElementById('result');

    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';

    resultElement.textContent = 'Правильных ответов:' + correctAnswers + 'из' + questions.length;
    resultElement.style.display = 'block';
};

displayQuestion();