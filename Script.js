// Load data from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    startTimers();
});

// Save data to localStorage on input change
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
        saveData();
        updateTimers();
    });
});

// Function to save data to localStorage
function saveData() {
    const data = {};
    document.querySelectorAll('input[data-key]').forEach(input => {
        data[input.dataset.key] = input.value;
    });
    localStorage.setItem('carData', JSON.stringify(data));
}

// Function to load data from localStorage
function loadData() {
    const data = JSON.parse(localStorage.getItem('carData')) || {};
    document.querySelectorAll('input[data-key]').forEach(input => {
        if (data[input.dataset.key]) {
            input.value = data[input.dataset.key];
        }
    });
}

// Function to calculate time difference and update timers
function updateTimers() {
    const insuranceEndDate = document.querySelector('input[data-key="insuranceEndDate"]').value;
    const serviceEndDate = document.querySelector('input[data-key="serviceEndDate"]').value;

    if (insuranceEndDate) {
        const timeLeft = calculateTimeLeft(insuranceEndDate);
        document.getElementById('insurance-time-left').textContent = timeLeft;
    } else {
        document.getElementById('insurance-time-left').textContent = 'N/A';
    }

    if (serviceEndDate) {
        const timeLeft = calculateTimeLeft(serviceEndDate);
        document.getElementById('service-time-left').textContent = timeLeft;
    } else {
        document.getElementById('service-time-left').textContent = 'N/A';
    }
}

// Function to calculate time left until a date
function calculateTimeLeft(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;

    if (diff <= 0) return 'Expired';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m`;
}

// Function to start timers and update every minute
function startTimers() {
    updateTimers();
    setInterval(updateTimers, 60000); // Update every minute
}