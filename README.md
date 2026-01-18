# Read Fast

A modern speed reading application built with TypeScript and Bun. This tool uses Rapid Serial Visual Presentation (RSVP) to display text one word at a time, with the middle character highlighted in red for optimal focus. Features adjustable speed, font size, letter spacing, font selection, and multilingual support.

## What is RSVP?

Rapid Serial Visual Presentation, or RSVP, is a speed reading technique that displays words sequentially in a fixed position on the screen. By eliminating eye movements between words, RSVP allows for faster reading speeds. Research indicates that optimal comprehension occurs at rates between 250 and 500 words per minute, depending on the reader. This method highlights the fixation point, often the middle of the word, to guide attention. Benefits include increased reading efficiency and reduced eye strain. Many speed reading apps use RSVP to help users train their reading skills. The technique is particularly useful for skimming large amounts of text quickly. With practice, readers can achieve higher speeds while maintaining understanding.

## Features

- **RSVP Speed Reading**: Displays words one by one with middle character highlighted
- **Adjustable Speed**: 50-2000ms intervals (displayed as WPM, inverted scale)
- **Font Size Control**: 1-10x multiplier
- **Letter Spacing**: 0.1-1.0em adjustable spacing
- **Font Selection**: 20 Google Fonts including dyslexia-friendly options
- **Multilingual Support**: English, Finnish, Swedish with translated content
- **Keyboard Controls**:
  - Space: Start/Pause
  - Up/Down Arrows: Switch fonts
  - Left/Right Arrows: Adjust speed
- **Glassmorphism UI**: Modern gradient controls with backdrop blur
- **Responsive Design**: Clean, accessible interface

## Getting Started

1. Install dependencies: `bun install`
2. Build the app: `bun run build`
3. Serve the application: `bunx serve public` or open public/index.html directly
4. Use controls to adjust settings and start reading

## Project Structure

- `public/index.html`: Main HTML file with controls
- `public/reset.css`: CSS reset styles
- `public/stylesheet.css`: Main styles with glassmorphism
- `src/script.ts`: TypeScript script with RSVP logic and translations
- `public/script.js`: Compiled JavaScript bundle

## Technologies

- TypeScript
- Bun (build tool and package manager)
- HTML5 & CSS3 with modern features (backdrop-filter, CSS variables)
- Google Fonts for typography