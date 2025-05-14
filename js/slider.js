let index = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval;
const slideTime = 5000; // 30 секунд между слайдами

function showSlide(newIndex = null) {
    // Если указан индекс, используем его, иначе переходим к следующему
    if (newIndex !== null) {
        index = newIndex;
    }
    
    // Скрываем все слайды и показываем текущий
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Обновляем активную кнопку
    const buttons = document.querySelectorAll('.slider-button');
    buttons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });
    
    // Если переключение было автоматическим, переходим к следующему индексу
    if (newIndex === null) {
        index = (index + 1) % slides.length;
    }
}

// Функция для сброса таймера
function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => showSlide(), slideTime);
}

// Функция для создания кнопок управления слайдером
function createSliderControls() {
    const sliderContainer = document.querySelector('.slider');
    
    // Создаем контейнер для кнопок
    const controls = document.createElement('div');
    controls.className = 'slider-controls';
    
    // Создаем кнопки для каждого слайда
    slides.forEach((_, i) => {
        const button = document.createElement('button');
        button.className = 'slider-button';
        if (i === 0) button.classList.add('active');
        
        button.addEventListener('click', () => {
            showSlide(i);
            resetTimer();
        });
        
        controls.appendChild(button);
    });
    
    // Добавляем кнопки на страницу
    sliderContainer.appendChild(controls);
    
    // Создаем стрелки для навигации
    const prevButton = document.createElement('button');
    prevButton.className = 'slider-arrow prev';
    prevButton.innerHTML = '&#10094;';
    prevButton.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
        resetTimer();
    });
    
    const nextButton = document.createElement('button');
    nextButton.className = 'slider-arrow next';
    nextButton.innerHTML = '&#10095;';
    nextButton.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
        resetTimer();
    });
    
    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(nextButton);
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Показываем первый слайд
    showSlide(0);
    
    // Создаем кнопки управления
    createSliderControls();
    
    // Запускаем автоматическое переключение каждые 30 секунд
    resetTimer();
});