# CS 561 SpeedScore Labs Repository

![Course](https://img.shields.io/badge/Course-CS%20561-1f6feb)
![Stack](https://img.shields.io/badge/Stack-HTML%2FCSS%2FJavaScript-f59e0b)
![Testing](https://img.shields.io/badge/Testing-Playwright-2ea44f)

This repository contains a sequence of CS 561 Software Engineering Methods lab deliverables built around SpeedScore, a single-page web application for speedgolf. The labs progress from front-end feature implementation and team Git workflows to issue management, testing, formal inspections, and modern code review.

## Table of Contents

- [What This Project Does](#what-this-project-does)
- [Why This Project Is Useful](#why-this-project-is-useful)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage Examples](#usage-examples)
- [Where to Get Help](#where-to-get-help)
- [Maintainers and Contributors](#maintainers-and-contributors)
- [Contributing](#contributing)

## What This Project Does

The repository tracks course work across five labs:

- `lab-2`: starter classroom repository content.
- `lab-3`: collaborative implementation of SpeedScore UI behavior and styling with feature branches and integration activity.
- `lab-4`: issue-driven development and project management with expanded Playwright-based accessibility, keyboard, and visual tests.
- `lab-5a`: formal inspection artifacts for five code blocks.
- `lab-5b`: modern code-review-focused SpeedScore iteration, including an executable app and npm scripts.
- `Paper Submissions`: written reports, checklists, and supporting PDFs for course submissions.

## Why This Project Is Useful

This codebase is useful for developers and students who want a practical example of:

- Team-based Git workflows (feature branches, merges, rebases, cherry-picks)
- Translating user stories into tracked implementation work
- Browser-based UI testing with Playwright
- Accessibility and keyboard-navigation test coverage patterns
- Structured inspection and review practices across multiple deliverables

## Project Structure

```text
.
├── lab-2/
├── lab-3/
│   ├── index.html
│   ├── scripts/
│   └── styles/
├── lab-4/
│   ├── index.html
│   ├── scripts/
│   ├── styles/
│   ├── tests/
│   ├── package.json
│   └── playwright.config.js
├── lab-5a/
│   ├── code_blocks/
│   ├── pre_inspection/
│   └── inspection/
├── lab-5b/
│   ├── index.html
│   ├── scripts/
│   ├── styles/
│   ├── tests/
│   ├── package.json
│   └── CODEOWNERS
└── Paper Submissions/
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (required for labs with Playwright/npm)
- A modern desktop browser

### Clone and Enter the Repository

```bash
git clone <your-classroom-repository-url>
cd Spring-2026-CS561-Software-Engineering_Methods
```

### Lab-Specific Setup

#### Lab 3 (static web app)

```bash
cd lab-3
```

Open `index.html` in a browser (or use a local static server / VS Code Live Server).

#### Lab 4 (Playwright test suite)

```bash
cd lab-4
npm install
npx playwright install
```

Then serve the folder on `http://localhost:5500` (the configured Playwright `baseURL`) and run:

```bash
npx playwright test
```

#### Lab 5b (scripted start + tests)

```bash
cd lab-5b
npm install
```

Run the app:

```bash
npm start
```

Run tests (as defined in `package.json`):

```bash
npm test
```

## Usage Examples

### Example: Start Lab 5b and validate test flow

```bash
cd lab-5b
npm install
npm start
```

In a separate terminal:

```bash
cd lab-5b
npm test
```

### Example: Run Lab 4 accessibility and interaction tests

```bash
cd lab-4
npm install
npx playwright install
npx playwright test
```

## Where to Get Help

Use these in-repo resources first:

- Lab overviews: [lab-2/README.md](lab-2/README.md), [lab-3/README.md](lab-3/README.md), [lab-4/README.md](lab-4/README.md), [lab-5a/README.md](lab-5a/README.md), [lab-5b/README.md](lab-5b/README.md)
- Project-management context: [lab-4/meeting_summary.md](lab-4/meeting_summary.md)
- Lab 5a inspection artifacts: [lab-5a/inspection](lab-5a/inspection), [lab-5a/pre_inspection](lab-5a/pre_inspection)
- Course submission docs: [Paper Submissions](Paper%20Submissions)
- Review ownership rules: [lab-5b/CODEOWNERS](lab-5b/CODEOWNERS)

If you are collaborating in GitHub Classroom, open an issue in your team repository and include:

- Lab folder and file path involved
- Reproduction steps
- Expected vs actual behavior
- Screenshots or terminal output when relevant

## Maintainers and Contributors

Primary team contributors documented across lab deliverables:

- Alex Bruzda
- Savannah Tanner
- Adrien Protzel
- Chris Somnitz
- Kyle Noble

Code ownership for Lab 5b source review:

- `*.js` and `*.html` are owned by `@CS561-OSU/staff` in [lab-5b/CODEOWNERS](lab-5b/CODEOWNERS).

## Contributing

This repository follows coursework-style team collaboration. To contribute effectively:

1. Create a feature branch from `main`.
2. Keep changes scoped to a specific lab requirement.
3. Run relevant checks/tests for that lab before opening a PR.
4. Open a pull request with a clear summary and testing notes.
5. Request review from the appropriate teammate or code owner.

For examples of branch-based workflow artifacts, see [lab-3/branch-readme.md](lab-3/branch-readme.md) and related feature readmes in [lab-3](lab-3).

## Attribution

SpeedScore materials in this repository are associated with course content based on Full Stack Web Development from the Ground Up (Chris Hundhausen, Morgan Kaufmann), as referenced in lab package metadata.