# Read Fast

A simple speed reading application built with TypeScript and Bun. This tool uses Rapid Serial Visual Presentation (RSVP) to display text one word at a time, with the middle character of each word highlighted in red to serve as an optimal recognition point for faster reading.

## Features

- Rapid Serial Visual Presentation (RSVP) speed reading
- Adjustable reading speed (100-1000ms per word)
- Adjustable font size
- Start/pause controls
- Highlights the middle character in red for optimal focus
- Uses local Open Dyslexic font for dyslexia-friendly reading
- Clean black background with white text for reduced eye strain

## Getting Started

1. Download Open Dyslexic font files:
   - Go to https://opendyslexic.org/ or https://fonts.google.com/specimen/Open+Dyslexic
   - Download OpenDyslexic-Regular.woff2, OpenDyslexic-Regular.woff, OpenDyslexic-Bold.woff2, OpenDyslexic-Bold.woff
   - Place them in `public/fonts/`
2. Install dependencies: `bun install`
3. Build the app: `bun run build`
4. Serve the application: `bunx serve public` or open public/index.html directly
5. Adjust speed, font size, and start reading

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