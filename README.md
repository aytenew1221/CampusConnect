# 🎓 CampusConnect

CampusConnect is a React-based student community portal designed for students in **Addis Ababa, Ethiopia**. It helps students discover campus clubs, events, and useful student resources.

## ✨ Features

- 🏠 Home page with featured events and popular clubs
- 👥 Club listing with search and category filtering
- 📋 Dynamic club details
- 📅 Upcoming events and event details
- 📚 Student resources
- ℹ️ About page
- 🔍 Search and filtering
- ❤️ Favorite clubs using Context API
- 🌙 Theme toggle
- 🔄 Loading and error states
- 🚦 React Router with dynamic routes
- ❌ 404 Not Found page
- 📱 Responsive design for desktop, tablet, and mobile

## 🛠️ Technologies

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- CSS
- Local JSON data

## 🚀 Installation

```bash
npm install
npm install react-router-dom
npm run dev
```

Open the application at the URL shown in the terminal.

## 📂 Main Routes

```text
/              Home
/clubs         Clubs
/clubs/:id     Club Details
/events        Events
/events/:id    Event Details
/resources     Student Resources
/about         About
/*             404 Not Found
```

## 📁 Data

The application loads data from:

```text
public/data/clubs.json
public/data/events.json
public/data/resources.json
```

## 🎯 Learning Objectives

This project demonstrates React fundamentals including **components, props, state, events, forms, conditional rendering, lists, `useEffect`, data fetching, Context API, and React Router**.

## 🇪🇹 Context

CampusConnect uses sample student clubs, events, and resources inspired by the **Addis Ababa, Ethiopia** campus community.

## 📄 License

Copywrite ownner @Aytenew, 2026.
