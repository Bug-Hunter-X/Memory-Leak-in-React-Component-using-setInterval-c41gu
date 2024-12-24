# React setInterval Memory Leak

This repository demonstrates a common bug in React components that utilize `setInterval` within the `useEffect` hook without proper cleanup.  The bug leads to a memory leak and unexpected behavior, especially when the component unmounts.

## The Bug

The `bug.js` file contains a React component that uses `setInterval` to update a counter every second. However, it fails to include a cleanup function within the `useEffect` hook's return statement to clear the interval when the component unmounts. This results in a memory leak and the interval continues to run even after the component is removed from the DOM.

## The Solution

The `bugSolution.js` file provides a corrected version of the component. The key change is the addition of a cleanup function that calls `clearInterval` to stop the interval when the component unmounts. This prevents memory leaks and ensures the component behaves as expected.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.  Observe the console, or your browser's memory usage.