// src/script.ts
async function loadAndDisplayWord() {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    const text = data.data;
    const words = text.split(/\s+/);
    if (words.length === 0)
      return;
    const firstWord = words[0];
    const middleIndex = Math.floor(firstWord.length / 2);
    const before = firstWord.slice(0, middleIndex);
    const middle = firstWord[middleIndex];
    const after = firstWord.slice(middleIndex + 1);
    const display = document.getElementById("word-display");
    display.innerHTML = `${before}<span style="color: red;">${middle}</span>${after}`;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
loadAndDisplayWord();
