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
const speedValue = document.getElementById('speed-value') as HTMLSpanElement;
const sizeValue = document.getElementById('size-value') as HTMLSpanElement;
const fontSelect = document.getElementById('font-select') as HTMLSelectElement;

function displayWord(index: number) {
    if (index >= words.length) {
        stopReading();
        return;
    }
    const word = words[index]!;
    const middleIndex = Math.floor(word.length / 2);
    let html = '<div class="word">';
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const isMiddle = i === middleIndex;
        const style = isMiddle ? 'color: red;' : '';
        const offset = (i - middleIndex) * 0.6; // approximate em per char
        const left = `calc(50% + ${offset}em)`;
        html += `<span class="char" style="left: ${left}; ${style}">${char}</span>`;
    }
    html += '</div>';
    display.innerHTML = html;
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
    speed = 2050 - parseInt(speedSlider.value);
    const wpm = Math.round(60000 / speed);
    speedValue.textContent = wpm.toString();
    if (intervalId) {
        pauseReading();
        startReading();
    }
}

function updateSize() {
    sizeMultiplier = parseFloat(sizeSlider.value);
    sizeValue.textContent = sizeMultiplier.toFixed(1);
    document.documentElement.style.setProperty('--font-size-display', `calc(${sizeMultiplier} * var(--font-size-base))`);
}

function updateFont() {
    const selectedFont = fontSelect.value;
    document.documentElement.style.setProperty('--font-family', `'${selectedFont}', sans-serif`);
}

// Event listeners
speedSlider.addEventListener('input', updateSpeed);
sizeSlider.addEventListener('input', updateSize);
fontSelect.addEventListener('change', updateFont);
startPauseBtn.addEventListener('click', () => {
    if (intervalId) {
        pauseReading();
    } else {
        startReading();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        if (intervalId) {
            pauseReading();
        } else {
            startReading();
        }
    } else if (event.code === 'ArrowUp') {
        event.preventDefault();
        const options = fontSelect.options;
        const current = fontSelect.selectedIndex;
        const prev = (current - 1 + options.length) % options.length;
        fontSelect.selectedIndex = prev;
        updateFont();
    } else if (event.code === 'ArrowDown') {
        event.preventDefault();
        const options = fontSelect.options;
        const current = fontSelect.selectedIndex;
        const next = (current + 1) % options.length;
        fontSelect.selectedIndex = next;
        updateFont();
    } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        const current = parseInt(speedSlider.value);
        const newVal = Math.max(50, current - 25);
        speedSlider.value = newVal.toString();
        updateSpeed();
    } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        const current = parseInt(speedSlider.value);
        const newVal = Math.min(2000, current + 25);
        speedSlider.value = newVal.toString();
        updateSpeed();
    }
});

// Initial setup
updateSpeed();
updateSize();
updateFont();