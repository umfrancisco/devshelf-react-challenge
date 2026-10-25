# DevShelf — React & TypeScript Debugging Challenge

DevShelf is a frontend debugging challenge built with React, TypeScript, Vite, and CSS Modules. The application provides a dashboard for browsing developer projects, searching the project library, filtering results, managing favorites, and sorting projects.

The project contains intentionally introduced bugs designed to help developers practice debugging, problem-solving, state management, and working with existing React codebases.

## Features

- **Project Library:** Browse a collection of sample developer projects.
- **Search:** Find projects using a search field.
- **Category Filtering:** Filter projects by Frontend, Backend, or Full Stack.
- **Favorites:** Mark projects as favorites and filter the library to display them.
- **Sorting:** Organize projects by update date or star count.
- **Dynamic Results:** Display the number of projects matching the current filters.
- **Responsive Design:** Browse the application on desktop and mobile devices.
- **CSS Modules:** Keep component styles locally scoped.

> **Note:** Some features intentionally contain bugs. Identifying and fixing these issues is the primary objective of this project.

## Tech Stack

- **React 19.3.1** — Component-based user interfaces.
- **TypeScript 6.0.3** — Static typing and improved code maintainability.
- **Vite 8.3.4** — Development server and build tooling.
- **CSS Modules** — Scoped component styling.
- **Oxlint** — Organized source code suitable for further development.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js.

### Installation

Clone the repository:

```bash
git clone devshelf-react-challenge
```

Navigate to the project directory:

```bash
cd devshelf-react-challenge
```

Install the dependencies:

```bash
npm install
```

### Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

### Build for Production

To check the TypeScript project and create a production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Debugging Challenges

The application is intended to behave as a functional project library, but several features require debugging.

Your objective is to identify and fix the implementation issues while preserving the existing architecture and user interface.

### Tasks

- [ ] Fix search behavior so it matches project names and descriptions, ignoring case and surrounding whitespace.
- [x] Fix category filtering.
- [ ] Fix the favorites-only filter.
- [ ] Fix the favorite toggle functionality.
- [ ] Fix sorting so recently updated projects appear first.
- [ ] Fix sorting so projects with the most stars appear first.
- [ ] Ensure the clear-filters button resets all relevant filters.
- [ ] Verify that the displayed result count matches the rendered project cards.
- [ ] Confirm that the application builds successfully.

## Learning Objectives

This project provides practical experience with:

- Debugging React components and event handlers.
- Understanding React state and immutable updates.
- Using `useState` and `useEffect`.
- Working with array methods such as `filter`, `map`, `sort`, and `reduce`.
- Implementing search, filtering, and sorting logic.
- Using TypeScript types and strict type checking.
- Organizing React components and CSS Modules.
- Testing feature interactions and edge cases.
- Maintaining an existing codebase without unnecessary rewrites.

## License

This project is available under the [MIT License](https://opensource.org/license/mit).

---

Built with React and TypeScript as a hands-on frontend debugging exercise.