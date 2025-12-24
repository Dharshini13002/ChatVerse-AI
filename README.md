# ChatVerse AI

A fun chat app with season-themed AI characters. Frontend in HTML/CSS/JS, backend in Java Spring Boot.

## Project Structure
```
ChatVerse-AI/
├── frontend/          # Web UI
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── assets/icons/
│   └── README.md
├── backend/           # Java API
│   ├── src/main/java/com/chatverse/
│   │   ├── Main.java
│   │   ├── ChatController.java
│   │   ├── ChatService.java
│   │   └── Character.java
│   ├── data/
│   │   ├── characters.json
│   │   └── chats.txt
│   ├── pom.xml
│   └── README.md
├── docs/              # Documentation
└── README.md          # This file
```

## Characters
- **Sakura**: Cherry blossom theme, gentle and poetic.
- **Sparky**: Thunder theme, energetic and witty.
- **Frost**: Winter theme, cool and precise.
- **Sol**: Summer theme, warm and encouraging.
- **Harvest**: Autumn theme, grounded and nostalgic.

## Quick Start
1. **Install JDK 11+ and Maven** (if not already).
2. **Backend**: In Eclipse, import the `backend` folder as Maven project, then run `Main.java` as Spring Boot App (starts on http://localhost:8080).
3. **Frontend**: Open terminal in `frontend` folder: `python -m http.server 3000`, then open `http://localhost:3000/index.html` in browser.
4. Select a character, type messages, and chat — replies come from backend!

## Hosting
- **Frontend on Vercel**: Connect your GitHub repo to Vercel, set root directory to `frontend`, deploy. The site will be live with fallback chat (backend not hosted).
- **Full App**: Backend needs a server (e.g., Heroku for Java), frontend as above or static host.

## Live Demo
Frontend hosted at: [Your Vercel URL after deployment]