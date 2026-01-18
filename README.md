# Read Fast

A simple speed reading application built with TypeScript and Bun. This tool uses Rapid Serial Visual Presentation (RSVP) to display text one word at a time, with the middle character of each word highlighted in red to serve as an optimal recognition point for faster reading.

## What is RSVP?

Rapid Serial Visual Presentation, or RSVP, is a speed reading technique that displays words sequentially in a fixed position on the screen. By eliminating eye movements between words, RSVP allows for faster reading speeds. Research indicates that optimal comprehension occurs at rates between 250 and 500 words per minute, depending on the reader. This method highlights the fixation point, often the middle of the word, to guide attention. Benefits include increased reading efficiency and reduced eye strain. Many speed reading apps use RSVP to help users train their reading skills. The technique is particularly useful for skimming large amounts of text quickly. With practice, readers can achieve higher speeds while maintaining understanding.

## Features

- Rapid Serial Visual Presentation (RSVP) speed reading
- Adjustable reading speed (100-1000ms per word)
- Adjustable font size
- Start/pause controls
- Highlights the middle character in red for optimal focus
- Uses Arial font for easy, clean reading
- Clean black background with white text for reduced eye strain

## Getting Started

1. Install dependencies: `bun install`
2. Build the app: `bun run build`
3. Serve the application: `bunx serve public` or open public/index.html directly
4. Adjust speed, font size, and start reading

## Project Structure

- `public/index.html`: Main HTML file
- `public/reset.css`: CSS reset styles
- `public/stylesheet.css`: Main styles
- `src/script.ts`: TypeScript script with inlined text data
- `public/script.js`: Compiled JavaScript file

## Technologies

- TypeScript
- Bun (for building and package management)
- HTML5
- CSS3
- Open Dyslexic font from Google Fonts