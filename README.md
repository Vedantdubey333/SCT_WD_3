# Quiz Game Application

A bright, interactive multiple-choice quiz game web app.

## Features

- **Multiple Question Types**: Single choice, multi-select, and fill-in-the-blank.
- **Live Scoring**: See your score at the end of the quiz.
- **Restart Option**: Take the quiz again.
- **Modern UI**: Vibrant background with geometric shapes, glass panel effect for the quiz box.
- **Responsive Design**: Works on mobile and desktop.

## Demo

![Quiz Game Screenshot](https://cdn-icons-png.flaticon.com/512/1108/1108531.png)

## Usage

1. Clone/download this repository.
2. Ensure the following files are present:
   - `index.html`
   - `style.css`
   - `script.js`

3. Open `index.html` in your browser.

## Customizing Questions

All quiz questions are defined in `script.js`:

```javascript
const quizQuestions = [
  {
    question: "Which of these is a JavaScript framework?",
    type: "single",
    options: [
      "React",
      "Laravel",
      "Django",
      "Flask"
    ],
    answer: [0]
  },
  {
    question: "Select all prime numbers below:",
    type: "multi",
    options: [
      "2", "3", "4", "5"
    ],
    answer: [0, 1, 3]
  },
  {
    question: "Fill in the blank: CSS stands for ____ Style Sheets.",
    type: "text",
    answer: ["Cascading"]
  }
];
```
- **Single choice**: `type: "single"` with `options` and `answer` (array of correct option index).
- **Multi-select**: `type: "multi"` with multiple correct indices in `answer`.
- **Fill in the blank**: `type: "text"` with the correct answer as string.

You can add or edit these questions as needed.

## Design Highlights

- Bright, gradient background.
- Floating colored shapes for a playful look.
- Glass-morphism quiz panel.
- Vibrant accent colors for options and buttons.


