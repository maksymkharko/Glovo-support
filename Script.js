document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        brand: document.getElementById('car-brand'),
        model: document.getElementById('car-model'),
        number: document.getElementById('car-number'),
        vin: document.getElementById('vin'),
        oilChange: document.getElementById('oil-change'),
        mileage: document.getElementById('mileage'),
        insuranceLink: document.getElementById('insurance-link'),
        insuranceDate: document.getElementById('insurance-date'),
        serviceDate: document.getElementById('service-date'),
        insuranceTimer: document.getElementById('insurance-timer'),
        serviceTimer: document.getElementById('service-timer'),
        linkDisplay: document.getElementById('insurance-link-display')
    };

    // Загрузка данных из localStorage
    function loadData() {
        const savedData = JSON.parse(localStorage.getItem('carData')) || {};
        Object.keys(savedData).forEach(key => {
            if (elements[key]) elements[key].value = savedData[key];
        });
        updateLinkDisplay();
        startTimers();
    }

    // Сохранение данных в localStorage
    function saveData() {
        const data = {
            brand: elements.brand.value,
            model: elements.model.value,
            number: elements.number.value,
            vin: elements.vin.value,
            oilChange: elements.oilChange.value,
            mileage: elements.mileage.value,
            insuranceLink: elements.insuranceLink.value,
            insuranceDate: elements.insuranceDate.value,
            serviceDate: elements.serviceDate.value
        };
        localStorage.setItem('carData', JSON.stringify(data));
        updateLinkDisplay();
        alert('Данные успешно сохранены!');
    }

    // Обновление отображения ссылки на страховку
    function updateLinkDisplay() {
        if (elements.insuranceLink.value) {
            elements.linkDisplay.href = elements.insuranceLink.value;
            elements.linkDisplay.textContent = 'Ссылка на страховку';
        } else {
            elements.linkDisplay.href = '#';
            elements.linkDisplay.textContent = '';
        }
    }

    // Запуск таймеров
    function startTimers() {
        setInterval(() => {
            updateTimer('insurance', elements.insuranceDate.value, elements.insuranceTimer);
            updateTimer('service', elements.serviceDate.value, elements.serviceTimer);
        }, 1000);
    }

    // Обновление таймеров
    function updateTimer(type, dateString, displayElement) {
        if (!dateString) return;
        
        const endDate = new Date(dateString);
        const now = new Date();
        const diff = endDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            displayElement.textContent = `${days} дн. ${hours} ч.`;
        } else {
            displayElement.textContent = type === 'insurance' ? 'Страховка истекла!' : 'ТО просрочено!';
            displayElement.style.color = 'var(--error-color)';
        }
    }

    // Обработчики событий
    document.querySelector('.save-button').addEventListener('click', saveData);
    elements.insuranceLink.addEventListener('input', updateLinkDisplay);

    // Инициализация
    loadData();
});