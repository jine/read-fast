# Read Fast

A simple speed reading application built with TypeScript and Bun. This tool uses Rapid Serial Visual Presentation (RSVP) to display text one word at a time, with the middle character of each word highlighted in red to serve as an optimal recognition point for faster reading.

## Features

- Displays the first word from a text source
- Highlights the middle character in red for better focus
- Uses a dyslexia-friendly font (Open Dyslexic)
- Clean black background with white text for reduced eye strain

## Getting Started

1. Install dependencies: `bun install`
2. Serve the application: Use a static server or open index.html directly in your browser
3. The app will load and display the first word from data.json

## Project Structure

- `index.html`: Main HTML file
- `reset.css`: CSS reset styles
- `stylesheet.css`: Main styles
- `data.json`: JSON file containing the text data
- `src/script.ts`: TypeScript script for loading and displaying text
- `script.js`: Compiled JavaScript file

## Technologies

- TypeScript
- Bun (for building and package management)
- HTML5
- CSS3
- Open Dyslexic font from Google Fonts