# TASKBAG

## Overview

TASKBAG is Task Management app. it use localstorage to store data locally in the browser which helps you to keep it personalize and localized. It has been improvised to give best performance and with the best coding practices to reduce computation as much as possible.
https://taskbag.netlify.app/
## Technologies Used

List the technologies and libraries/frameworks used in your app development.

- React
- Zustand
- localStorage

## Development Journey

### Iteration 1: Prop Drilling

- **Description:** Initially used prop drilling for state management.

### Iteration 2: Context API

- **Description:** Moved to using Context API for better state management across components.

### Iteration 3: Zustand Integration

- **Description:** Integrated Zustand for state management.

## Optimization Techniques

### Reusing Components

- **Description:** Reused a single button for multiple uses with different event handlers.

### Persistent Storage

- **Description:** Used localStorage for persistent data storage in the browser.

### Sorting Optimization

- **Description:** Implemented useMemo to optimize sorting based on dependencies.

### Context API Usage

- **Description:** Created custom hooks to streamline useContext usage.

### Error Handling

- **Description:** Implemented error handling in ItemContextProvider to prevent misuse.
