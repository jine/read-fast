const textData = "The clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week. The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way.";

const words = textData.split(/\s+/).filter(w => w.length > 0);
let currentIndex = 0;
let intervalId: number | null = null;
let speed = 500; // ms
let sizeMultiplier = 3;

const display = document.getElementById('word-display') as HTMLElement;
const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
const sizeSlider = document.getElementById('size-slider') as HTMLInputElement;
const startPauseBtn = document.getElementById('start-pause-btn') as HTMLButtonElement;

function displayWord(index: number) {
    if (index >= words.length) {
        stopReading();
        return;
    }
    const word = words[index]!;
    const middleIndex = Math.floor(word.length / 2);
    const before = word.slice(0, middleIndex);
    const middle = word[middleIndex] || '';
    const after = word.slice(middleIndex + 1);
    display.innerHTML = `${before}<span style="color: red;">${middle}</span>${after}`;
}

function startReading() {
    if (intervalId) return;
    displayWord(currentIndex);
    intervalId = setInterval(() => {
        currentIndex++;
        displayWord(currentIndex);
    }, speed);
    startPauseBtn.textContent = 'Pause';
}

function pauseReading() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    startPauseBtn.textContent = 'Start';
}

function stopReading() {
    pauseReading();
    currentIndex = 0;
    displayWord(0);
}

function updateSpeed() {
    speed = parseInt(speedSlider.value);
    if (intervalId) {
        pauseReading();
        startReading();
    }
}

function updateSize() {
    sizeMultiplier = parseFloat(sizeSlider.value);
    document.documentElement.style.setProperty('--font-size-display', `calc(${sizeMultiplier} * var(--font-size-base))`);
}

// Event listeners
speedSlider.addEventListener('input', updateSpeed);
sizeSlider.addEventListener('input', updateSize);
startPauseBtn.addEventListener('click', () => {
    if (intervalId) {
        pauseReading();
    } else {
        startReading();
    }
});

// Initial setup
updateSize();