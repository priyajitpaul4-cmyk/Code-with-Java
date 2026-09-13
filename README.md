# ☕ Code with Java

**Learn • Practice • Build • Grow**

A premium, dark-green-themed educational website for learning Java — from
your first `Hello, Java!` to Spring Boot. Built as a static site with plain
HTML, CSS and JavaScript, so it deploys straight to GitHub Pages with no
build step, backend, or database.

---
---

## 🌐 Live Demo

<p align="center">
  <a href="https://priyajitpaul4-cmyk.github.io/Code-with-Java/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Open%20Code%20with%20Java-Live%20Demo-0f5132?style=for-the-badge&logo=java&logoColor=white" alt="Open Code with Java Live Demo">
  </a>
</p>

<p align="center">
  <b>Learn • Practice • Build • Grow ☕</b>
</p>
## ✨ Features

- **50+ real Java programs** — each with source code, expected output, an
  explanation, and its own folder under `programs/`
- **Java Learning Roadmap** — 27 clickable steps from Basics to Advanced Java,
  with progress saved locally
- **Java Practice Zone** — 10 curated problems (Easy / Medium / Hard) with
  hints, full solutions, search, filtering, and a "solved" tracker
- **30-Day Java Study Plan** — a day-by-day path with checkboxes, a streak
  counter, and a live progress ring
- **Interview Questions** — 26 questions across 9 categories (Core Java, OOP,
  Collections, Exception Handling, Multithreading, Java 8+, JDBC, Spring,
  Spring Boot) with search and category filters
- **Java Magic Tricks & Fun Facts** — two rotating fact widgets in the sidebar
- **Dark / light mode** — a working toggle, saved in `localStorage`
- **5-language interface** — English, বাংলা, हिन्दी, Español and Français,
  powered by a real JSON translation dictionary (not a decorative dropdown)
- **Fully responsive** — a real mobile navigation menu, stacking cards, and no
  horizontal overflow on phones, tablets, laptops or desktops
- **Accessible** — semantic landmarks, visible focus states, ARIA labels,
  keyboard-operable roadmap/study-plan controls, and `prefers-reduced-motion`
  support

---

## 🛠️ Technology

- HTML5, CSS3, vanilla JavaScript (ES6+)
- JSON for all content data — no backend, no database, no build tools
- Works as a static site on **GitHub Pages**

---

## 📁 Project Structure

```
Code-with-Java/
├── index.html
├── README.md
├── LICENSE
├── assets/
│   ├── icons/favicon.svg
│   └── images/
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── script.js         # nav, theme toggle, reveal, roadmap, facts
│   ├── programs.js        # program grid, filter, search, modal
│   ├── study-plan.js      # 30-day plan, streak, progress ring
│   ├── practice.js        # practice problems, solved tracking
│   ├── interview.js       # interview Q&A accordion
│   └── language.js        # i18n loader/applier
├── data/
│   ├── programs.json
│   ├── study-plan.json
│   ├── practice.json
│   ├── interview.json
│   └── translations.json
├── programs/
│   └── 01-hello-world/ … 50-employee-payroll-with-streams/
│       ├── Main.java
│       └── README.md
├── practice/
│   └── problem-01.md … problem-10.md
└── docs/
    └── screenshots/
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new repository named `Code-with-Java` (or any name you like).
2. Push all the files in this project to the `main` branch.
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and the `/ (root)` folder.
5. Save — GitHub will publish the site at
   `https://<your-username>.github.io/Code-with-Java/`.

All asset paths in this project are relative (`./css/style.css`,
`./data/programs.json`, etc.), so it works correctly at any GitHub Pages
sub-path without extra configuration.

---

## 🔮 Future Improvements

- Add a code playground that runs small Java snippets in-browser
- Expand the practice zone with more problems per topic
- Add a certificate-of-completion generator tied to study-plan progress
- Add more languages to the translation dictionary

---

## 👤 Author

**Priyajit Paul** — creator of Code with Java. I love coding, building useful
projects, and helping others learn. Let's grow together!

---

© 2026 Code with Java — Keep coding, keep growing!


## Hero logo note
The hero uses Oracle's official Java Affinity logo as an unmodified image linked to https://dev.java, following the online-use terms published by Dev.java/Oracle. The asset is intentionally loaded from the official source rather than recreated or distorted.
