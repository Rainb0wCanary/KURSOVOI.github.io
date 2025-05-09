function checkAnswers() {
    const questions = [
        {
            correctAnswer: "барнаул",
            options: ["Барнаул", "Москва", "Новосибирск", "Томск"]
        },
        {
            correctAnswer: "исип-401",
            options: ["ИСиП-401", "СЫР-22", "ФН-20", "ИТ-19"]
        },
        {
            correctAnswer: "информационные системы и программирование",
            options: ["Информационные системы и программирование", "Сыроделие", "Экономика и бухгалтерский учет", "Менеджмент"]
        },
        {
            correctAnswer: "иванов иван",
            options: ["Иванов Иван", "Петрова Мария", "Сидоров Алексей", "Козлов Петр"]
        },
        {
            correctAnswer: "мария",
            options: ["Алексей", "Мария", "Раиль", "Дмитрий"]
        },
        {
            correctAnswer: "веб-программирование",
            options: ["Веб-программирование", "Математика", "Информатика", "История"]
        },
        {
            correctAnswer: "основы html и css",
            options: ["Основы HTML и CSS", "JavaScript и DOM", "Серверные технологии", "Базы данных"]
        },
        {
            correctAnswer: "48",
            options: ["48", "42", "36", "24"]
        },
        {
            correctAnswer: "раиль",
            options: ["Раиль", "Иван", "Дмитрий", "Андрей"]
        },
        {
            correctAnswer: "путиловская",
            options: ["Путиловская", "Ленина", "Советская", "Строителей"]
        }
    ];
    
    let score = 0;
    let resultHTML = "";
    
    for (let i = 1; i <= questions.length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        const questionResult = document.getElementById(`question${i}-result`);
        
        if (selectedAnswer) {
            const answer = selectedAnswer.value.trim().toLowerCase();
            const isCorrect = answer.toLowerCase() === questions[i-1].correctAnswer;
            
            if (isCorrect) {
                score++;
                questionResult.textContent = "✓";
                questionResult.style.color = "green";
            } else {
                questionResult.textContent = "✗";
                questionResult.style.color = "red";
            }
        } else {
            questionResult.textContent = "✗";
            questionResult.style.color = "red";
        }
    }
    
    const resultElement = document.getElementById('result');
    const percentage = Math.round((score / questions.length) * 100);
    
    if (percentage >= 90) {
        resultElement.style.backgroundColor = "#d4edda";
        resultElement.style.color = "#155724";
        resultHTML = `Отличный результат! Вы набрали ${score} из ${questions.length} (${percentage}%)`;
    } else if (percentage >= 70) {
        resultElement.style.backgroundColor = "#fff3cd";
        resultElement.style.color = "#856404";
        resultHTML = `Хороший результат! Вы набрали ${score} из ${questions.length} (${percentage}%)`;
    } else {
        resultElement.style.backgroundColor = "#f8d7da";
        resultElement.style.color = "#721c24";
        resultHTML = `Попробуйте еще раз! Вы набрали ${score} из ${questions.length} (${percentage}%)`;
    }
    
    resultElement.innerHTML = resultHTML;
}

// Генерация вариантов ответов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            correctAnswer: "Барнаул",
            options: ["Барнаул", "Москва", "Новосибирск", "Томск"]
        },
        {
            correctAnswer: "ИСиП-401",
            options: ["ИСиП-401", "СЫР-22", "ФН-20", "ИТ-19"]
        },
        {
            correctAnswer: "Информационные системы и программирование",
            options: ["Информационные системы и программирование", "Сыроделие", "Экономика и бухгалтерский учет", "Менеджмент"]
        },
        {
            correctAnswer: "Иванов Иван",
            options: ["Иванов Иван", "Петрова Мария", "Сидоров Алексей", "Козлов Петр"]
        },
        {
            correctAnswer: "Мария",
            options: ["Алексей", "Мария", "Раиль", "Дмитрий"]
        },
        {
            correctAnswer: "Веб-программирование",
            options: ["Веб-программирование", "Математика", "Информатика", "История"]
        },
        {
            correctAnswer: "Основы HTML и CSS",
            options: ["Основы HTML и CSS", "JavaScript и DOM", "Серверные технологии", "Базы данных"]
        },
        {
            correctAnswer: "48",
            options: ["48", "42", "36", "24"]
        },
        {
            correctAnswer: "Раиль",
            options: ["Раиль", "Иван", "Дмитрий", "Андрей"]
        },
        {
            correctAnswer: "Путиловская",
            options: ["Путиловская", "Ленина", "Советская", "Строителей"]
        }
    ];
    
    // Перемешиваем варианты ответов для каждого вопроса
    for (let i = 0; i < questions.length; i++) {
        const optionsContainer = document.getElementById(`options${i+1}`);
        if (optionsContainer) {
            const shuffledOptions = [...questions[i].options].sort(() => Math.random() - 0.5);
            
            shuffledOptions.forEach((option, index) => {
                const optionHTML = `
                    <label class="quiz-option">
                        <input type="radio" name="q${i+1}" value="${option}">
                        ${option}
                    </label>
                `;
                optionsContainer.innerHTML += optionHTML;
            });
        }
    }
});