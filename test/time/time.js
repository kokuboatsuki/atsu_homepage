function addClockElements() {
    const numbersContainer = document.querySelector('.numbers');
    const ticksContainer = document.querySelector('.ticks');

    // 数字の追加
    for (let i = 1; i <= 12; i++) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = i;
        numberElement.style.transform = `rotate(${30 * i}deg)`;
        numbersContainer.appendChild(numberElement);
    }

    // 目盛りの追加
    for (let i = 1; i <= 60; i++) {
        const tickElement = document.createElement('div');
        tickElement.classList.add('tick');
        tickElement.style.transform = `rotate(${6 * i}deg)`;
        if (i % 5 === 0) {
            tickElement.classList.add('tick-mark');
        }
        ticksContainer.appendChild(tickElement);
    }
}

addClockElements();
