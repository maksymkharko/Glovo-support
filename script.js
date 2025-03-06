const chatBody = document.getElementById('chat-body');
const chatOptions = document.getElementById('chat-options');
const problemText = document.getElementById('problem-text');

// Начальные проблемы
const problems = [
    "Машина доставки сломалась, где мой заказ?",
    "Клиент не отвечает на звонки, что делать?",
    "Заведение готовит заказ уже 2 часа!",
    "У меня нет наличных, как оплатить?"
];

// Категории поддержки (меняются каждый раз)
const supportCategories = [
    ["Техническая поддержка", "Проблемы с оплатой", "Вопросы по заказу", "Жалобы на курьера"],
    ["Проблемы с доставкой", "Вопросы по меню", "Технические неполадки", "Поддержка ресторанов"],
    ["Сбой в приложении", "Проблемы с курьером", "Оплата картой", "Возврат средств"]
];

// Троллинговые ответы бота
const trollResponses = [
    "Ой, кажется, вы выбрали неправильную категорию. Переключаем на бота...",
    "Серьезно? Это не та категория! Чат закрыт.",
    "Ща подключим консультанта... Ой, нет, опять не туда! Чат закрыт.",
    "Нихуя, ты опять выбрал не то! Пока!",
    "Мы почти решили вашу проблему, но нет, вы снова облажались. Чат закрыт."
];

// Случайная начальная проблема
let currentProblem = problems[Math.floor(Math.random() * problems.length)];
problemText.textContent = currentProblem;

let attempt = 0;

// Функция для добавления сообщения в чат
function addMessage(text, isBot = true) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(isBot ? 'bot' : 'user');
    message.textContent = text;
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Функция для генерации вариантов выбора
function generateOptions() {
    chatOptions.innerHTML = '';
    const categories = supportCategories[attempt % supportCategories.length];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = category;
        button.addEventListener('click', () => handleChoice(category));
        chatOptions.appendChild(button);
    });
}

// Обработка выбора игрока
function handleChoice(choice) {
    addMessage(choice, false); // Сообщение от игрока
    setTimeout(() => {
        const response = trollResponses[Math.floor(Math.random() * trollResponses.length)];
        addMessage(response);
        setTimeout(() => {
            addMessage("Чат закрыт. Попробуйте снова!");
            attempt++;
            setTimeout(startNewChat, 1000); // Начать новый чат через 1 секунду
        }, 1000);
    }, 500);
}

// Начало нового чата
function startNewChat() {
    chatBody.innerHTML = '';
    currentProblem = problems[Math.floor(Math.random() * problems.length)];
    problemText.textContent = currentProblem;
    addMessage("Здравствуйте! Выберите категорию поддержки:");
    generateOptions();
}

// Старт игры
startNewChat();
