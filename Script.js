const reasons = [
    "Не могу найти клиента",
    "Не могу найти ресторан",
    "Заведение долго готовит заказ",
    "У меня недостаточно наличных",
    "Клиент не отвечает на звонки",
    "Проблема с оплатой заказа",
    "Заказ не соответствует описанию",
    "Курьер опоздал на 2 часа",
    "Я получил не свой заказ",
    "Проблемы с приложением",
    "Не могу войти в аккаунт",
    "Заказ отменён, но деньги не вернули",
    "Клиент отказался от заказа",
    "Ресторан закрыт",
    "Неправильный адрес доставки",
    "Заказ уже забрал другой курьер",
    "Проблемы с картой оплаты",
    "Заказ слишком большой для моей сумки",
    "Клиент не может найти меня",
    "Проблемы с навигацией"
];

const categories = [
    "Проблемы с доставкой",
    "Проблемы с заказом",
    "Финансовые вопросы",
    "Проблемы с клиентом",
    "Проблемы с рестораном",
    "Технические проблемы",
    "Проблемы с аккаунтом",
    "Другое"
];

const trollMessages = [
    "Секундочку, я уже обрабатываю ваш запрос, дорогой пользователь… Ой, нет, ты выбрал не ту категорию, ебаный ты пиздец, гнойный хуесос!",
    "Одну минутку, я подключаю к вам лучшего консультанта… Шучу, ты в жопе, потому что это не та категория, тупорылый пидорас и сын шлюхи!",
    "Пожалуйста, подождите, я стараюсь вам помочь… Ха, да нихуя, ты опять всё проебал, уёбище сутулое, хуй с ушами!",
    "Сейчас всё решим, я уже занимаюсь вашим вопросом… А нет, ты выбрал хуйню, гандон вонючий, пиздец тебе, а не помощь!",
    "Один момент, я проверяю ваш запрос… Ошибочка, мудила, ты влез не туда, пиздец тебе, ебаный клоун с хуем во рту!",
    "Подождите, пожалуйста, я ищу решение для вас… Шучу, ты выбрал не ту херню, пидор конченый, жопа вместо башки!",
    "Секундочку, я подключаю специалиста… Да нихуя, ты опять всё наебал, дегенерат сраный, хуйло безмозглое!",
    "Не волнуйтесь, я уже работаю над вашим вопросом… Ой, нет, ты выбрал полную хуйню, пиздец тебе, гнида ёбаная!",
    "Подождите чуть-чуть, я пытаюсь вам помочь… Ха-ха, да пошёл ты нахуй, это не та категория, урод ебучий, пиздоголовый!",
    "Один момент, я уточняю детали… Ага, щас, ты опять всё проебал, еблан тупой, хуй собачий, пиздец тебе!",
    "Сейчас всё уладим, я на вашей стороне… Шучу, ты в полной жопе, мудак сраный, гандон дырявый, пиздец тебе!",
    "Подождите, я передаю вас специалисту… Да нихуя, ты выбрал не туда, пидорас вонючий, хуй тебе в жопу, дебил!",
    "Секунду, я разбираюсь с вашим запросом… Ой, бля, ты опять всё наебал, ебаный ты пиздец, сутулая мразь!",
    "Не переживайте, я уже ищу ответ… Ха, да пошёл ты в пиздец, это не та категория, хуесос гнойный, уёбок криворукий!",
    "Пожалуйста, подождите, я стараюсь для вас… Шучу, ты выбрал хуйню полную, пидор ёбаный, пиздец тебе, гандон тупой!",
    "Сейчас всё выясним, я на связи… Да нихуя, ты опять в говне, мудила ссаная, хуй тебе в рыло, пиздец тебе!",
    "Один момент, я подключаю помощь… Ошибочка, ты выбрал не туда, еблан конченый, пиздец тебе, гнида сутулая!",
    "Подождите, я решаю вашу проблему… Ха-ха, да нихуя, ты в жопе, пидорас сраный, хуй тебе в глотку, урод!",
    "Секундочку, я проверяю варианты… Ага, щас, ты опять всё проебал, гандон вшивый, пиздец тебе, хуепутало!",
    "Не волнуйтесь, я уже занимаюсь вашим делом… Шучу, ты выбрал не ту херню, пиздец тебе, мудак ёбаный, пидор кривой!"
];

const fakeHelpMessages = [
    "Секунду, я уже решаю вашу проблему...",
    "Пожалуйста, подождите, я передаю вас специалисту...",
    "Сейчас я вам помогу, один момент...",
    "Всё понятно, я уже работаю над вашим запросом...",
    "Один момент, я ищу решение вашей проблемы...",
    "Пожалуйста, подождите, я уточняю детали..."
];

const closeMessages = [
    "Чат закрывается… Пошёл нахуй, пидорас вонючий!",
    "До свидания, ебаный ты пиздец, гандон сутулый!",
    "Чат закрыт. Пиздец тебе, хуйло тупорылое, вали отсюда!",
    "Всё, пиздец, чат закрыт, мудак сраный, пидор конченый!",
    "Чат закрыт. Иди в жопу, гнида ёбаная, хуй тебе в рыло!",
    "Чат закрыт. Пшёл нахуй, уёбище криворукое, пиздец тебе!",
    "Чат закрыт. Вали в пиздец, хуесос гнойный, мразь сутулая!",
    "Чат закрыт. Пошёл в очко, пидорас тупой, хуй тебе в глотку!",
    "Чат закрыт. Пиздец тебе, гандон вшивый, урод ебучий!",
    "Чат закрыт. Иди нахуй, мудила ссаная, пиздец тебе, дебил!",
    "Чат закрыт. В пиздец тебе дорога, хуйло вонючее, пидор!",
    "Чат закрыт. Пшёл вон, еблан конченый, хуй тебе в жопу!",
    "Чат закрыт. Пиздец тебе, гнида кривая, вали отсюда, мразь!",
    "Чат закрыт. Пошёл нахуй, пидорас сраный, хуй тебе в рыло!",
    "Чат закрыт. В жопу тебе, уёбище тупое, пиздец тебе, гандон!",
    "Чат закрыт. Пиздец тебе, хуесос сутулый, вали в очко, мудак!"
];

let currentStep = 0;
let chatBox = document.getElementById('chat-box');
let optionsDiv = document.getElementById('options');
let reasonText = document.getElementById('reason-text');
let newChatButton = document.getElementById('new-chat-button');

function getRandomReason() {
    return reasons[Math.floor(Math.random() * reasons.length)];
}

function getRandomCategories() {
    let shuffled = categories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function addMessage(message, isUser = false) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showOptions() {
    optionsDiv.innerHTML = '';
    let categories = getRandomCategories();
    categories.forEach(category => {
        let button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = category;
        button.onclick = () => selectOption(category);
        optionsDiv.appendChild(button);
    });
}

function selectOption(selectedCategory) {
    addMessage(selectedCategory, true);
    if (Math.random() < 0.3) {
        // Иногда чат "притворяется" человеком
        let fakeHelpMessage = fakeHelpMessages[Math.floor(Math.random() * fakeHelpMessages.length)];
        addMessage(fakeHelpMessage);
        setTimeout(() => {
            let trollMessage = trollMessages[Math.floor(Math.random() * trollMessages.length)];
            addMessage(trollMessage);
            setTimeout(() => {
                let closeMessage = closeMessages[Math.floor(Math.random() * closeMessages.length)];
                addMessage(closeMessage);
                disableOptions(); // Отключаем кнопки после закрытия чата
            }, 3000); // Задержка перед закрытием чата
        }, 3000); // Задержка перед троллингом
    } else {
        // Обычный троллинг
        let trollMessage = trollMessages[Math.floor(Math.random() * trollMessages.length)];
        addMessage(trollMessage);
        setTimeout(() => {
            let closeMessage = closeMessages[Math.floor(Math.random() * closeMessages.length)];
            addMessage(closeMessage);
            disableOptions(); // Отключаем кнопки после закрытия чата
        }, 3000); // Задержка перед закрытием чата
    }
}

function disableOptions() {
    optionsDiv.innerHTML = ''; // Убираем кнопки выбора
    newChatButton.style.display = 'block'; // Показываем кнопку "Начать новый чат"
}

function resetGame() {
    currentStep = 0;
    chatBox.innerHTML = '';
    optionsDiv.innerHTML = '';
    reasonText.textContent = getRandomReason();
    addMessage("Добрый день! Чем мы можем вам помочь?");
    showOptions();
    newChatButton.style.display = 'none'; // Скрываем кнопку "Начать новый чат"
}

newChatButton.addEventListener('click', resetGame);

function init() {
    reasonText.textContent = getRandomReason();
    addMessage("Добрый день! Чем мы можем вам помочь?");
    showOptions();
    newChatButton.style.display = 'none'; // Скрываем кнопку "Начать новый чат" в начале
}

init();