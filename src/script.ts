const textData = "Rapid Serial Visual Presentation, or RSVP, is a speed reading technique that displays words sequentially in a fixed position on the screen. By eliminating eye movements between words, RSVP allows for faster reading speeds. Research indicates that optimal comprehension occurs at rates between 250 and 500 words per minute, depending on the reader. This method highlights the fixation point, often the middle of the word, to guide attention. Benefits include increased reading efficiency and reduced eye strain. Many speed reading apps use RSVP to help users train their reading skills. The technique is particularly useful for skimming large amounts of text quickly. With practice, readers can achieve higher speeds while maintaining understanding.";

const words = textData.split(/\s+/).filter(w => w.length > 0);
let currentIndex = 0;
let intervalId: number | null = null;
let speed = 500; // ms
let sizeMultiplier = 3;
let letterSpacing = 0.6;

const display = document.getElementById('word-display') as HTMLElement;
const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
const sizeSlider = document.getElementById('size-slider') as HTMLInputElement;
const spacingSlider = document.getElementById('spacing-slider') as HTMLInputElement;
const startPauseBtn = document.getElementById('start-pause-btn') as HTMLButtonElement;
const speedValue = document.getElementById('speed-value') as HTMLSpanElement;
const sizeValue = document.getElementById('size-value') as HTMLSpanElement;
const spacingValue = document.getElementById('spacing-value') as HTMLSpanElement;
const fontSelect = document.getElementById('font-select') as HTMLSelectElement;

function displayWord(index: number) {
    if (index >= words.length) {
        stopReading();
        return;
    }
    const word = words[index]!;
    const middleIndex = Math.floor(word.length / 2);
    let html = '';
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const isMiddle = i === middleIndex;
        const style = isMiddle ? 'color: red;' : '';
        const offset = (i - middleIndex) * letterSpacing;
        const left = `calc(50% + ${offset}em)`;
        html += `<span class="char" style="left: ${left}; ${style}">${char}</span>`;
    }
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

function updateSpacing() {
    letterSpacing = parseFloat(spacingSlider.value);
    spacingValue.textContent = letterSpacing.toFixed(1);
}

function updateFont() {
    const selectedFont = fontSelect.value;
    document.documentElement.style.setProperty('--font-family', `'${selectedFont}', sans-serif`);
}

// Event listeners
speedSlider.addEventListener('input', updateSpeed);
sizeSlider.addEventListener('input', updateSize);
spacingSlider.addEventListener('input', updateSpacing);
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
updateSpacing();
updateFont();