/* ===========================================================
   CODE WITH JAVA — script.js
   Core site behavior: navigation, theme toggle, scroll reveal,
   program detail modal, magic tricks & fun facts rotation.
   =========================================================== */

(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileNav.classList.remove("open"))
    );
  }

  /* ---------- Theme toggle (dark/light, persisted) ---------- */
  const THEME_KEY = "cwj-theme";
  const root = document.documentElement;
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  if (savedTheme === "light") root.setAttribute("data-theme", "light");

  function applyToggleState() {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.setAttribute("aria-pressed", root.getAttribute("data-theme") === "light" ? "true" : "false");
    });
  }
  applyToggleState();

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      if (isLight) {
        root.removeAttribute("data-theme");
        localStorage.setItem(THEME_KEY, "dark");
      } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem(THEME_KEY, "light");
      }
      applyToggleState();
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link[data-section]");
  function setActiveNav() {
    let currentId = sections[0] ? sections[0].id : "";
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      if (link.dataset.section === currentId) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();

  /* ---------- Scroll reveal (single, restrained) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Generic modal close handling ---------- */
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
    overlay.querySelectorAll("[data-close-modal]").forEach((btn) =>
      btn.addEventListener("click", () => overlay.classList.remove("open"))
    );
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach((o) => o.classList.remove("open"));
    }
  });

  /* ---------- Java Magic Tricks / Did You Know ---------- */
  const magicTricks = [
    "Java was originally called Oak, named after an oak tree outside James Gosling's office.",
    "Java was released publicly by Sun Microsystems in 1995.",
    "Java programs are compiled to bytecode and run inside the Java Virtual Machine (JVM).",
    "Java uses automatic garbage collection, so developers rarely manage memory by hand.",
    "Java supports multithreading as a core language feature, not an add-on library.",
    "The Java mascot, Duke, was designed before Java even had its final name.",
    "Java's slogan 'Write Once, Run Anywhere' refers to bytecode portability across platforms.",
    "The String class is immutable in Java, which makes strings safe to share across threads.",
    "Java's Collections Framework unifies lists, sets and maps under a common set of interfaces.",
    "The + operator is overloaded for String in Java, letting you concatenate text with numbers directly."
  ];

  const funFacts = [
    "Java is used by over 9 million developers worldwide, according to Oracle estimates.",
    "Android app development historically relied on Java before Kotlin became popular.",
    "Minecraft's original version was written entirely in Java.",
    "Java's official logo, the steaming coffee cup, is a nod to its coffee-inspired name.",
    "James Gosling led the original team that created Java at Sun Microsystems.",
    "Java 8 introduced Lambda expressions, a major shift toward functional-style programming.",
    "The JVM specification allows other languages like Kotlin and Scala to also run on it.",
    "Java's checked exceptions are a language feature not shared by most other major languages.",
    "NASA has used Java in various mission-critical software systems over the years.",
    "Java remains one of the top languages for enterprise backend systems worldwide."
  ];

  function setupFactRotator(buttonId, textId, facts) {
    const btn = document.getElementById(buttonId);
    const textEl = document.getElementById(textId);
    if (!btn || !textEl) return;
    let index = Math.floor(Math.random() * facts.length);
    textEl.textContent = facts[index];
    btn.addEventListener("click", () => {
      let next = Math.floor(Math.random() * facts.length);
      if (facts.length > 1) {
        while (next === index) next = Math.floor(Math.random() * facts.length);
      }
      index = next;
      textEl.textContent = facts[index];
    });
  }
  setupFactRotator("magicTrickBtn", "magicTrickText", magicTricks);
  setupFactRotator("funFactBtn", "funFactText", funFacts);

  /* ---------- Premium Java Hero workspace ---------- */
  const heroRunBtn = document.getElementById("javaHeroRunBtn");
  const heroOutput = document.getElementById("javaHeroOutput");
  if (heroRunBtn && heroOutput) {
    heroRunBtn.addEventListener("click", () => {
      const isOpen = !heroOutput.hidden;
      if (isOpen) {
        heroOutput.hidden = true;
        heroRunBtn.setAttribute("aria-expanded", "false");
        return;
      }
      heroOutput.hidden = false;
      heroRunBtn.setAttribute("aria-expanded", "true");
    });
  }

  const heroTypingText = document.getElementById("javaHeroTypingText");
  if (heroTypingText) {
    const heroLines = ["Code. Compile. Create.", "Learn. Practice. Build.", "Java. JVM. Beyond."];
    let heroLineIndex = 0;
    let heroCharIndex = 0;
    let heroDeleting = false;

    const typeHeroLine = () => {
      const current = heroLines[heroLineIndex];
      if (!heroDeleting) {
        heroTypingText.textContent = current.slice(0, ++heroCharIndex);
        if (heroCharIndex >= current.length) {
          heroDeleting = true;
          setTimeout(typeHeroLine, 1500);
          return;
        }
      } else {
        heroTypingText.textContent = current.slice(0, --heroCharIndex);
        if (heroCharIndex <= 0) {
          heroDeleting = false;
          heroLineIndex = (heroLineIndex + 1) % heroLines.length;
        }
      }
      setTimeout(typeHeroLine, heroDeleting ? 38 : 72);
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(typeHeroLine, 500);
    }
  }

  /* ---------- Roadmap: mark modules complete (persisted) ---------- */
  const ROADMAP_KEY = "cwj-roadmap-done";
  function getRoadmapDone() {
    try { return JSON.parse(localStorage.getItem(ROADMAP_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveRoadmapDone(arr) {
    localStorage.setItem(ROADMAP_KEY, JSON.stringify(arr));
  }
  const roadmapSteps = document.querySelectorAll(".roadmap-step");
  const doneSet = new Set(getRoadmapDone());
  roadmapSteps.forEach((step) => {
    const id = Number(step.dataset.step);
    if (doneSet.has(id)) step.classList.add("done");
    step.addEventListener("click", () => {
      if (doneSet.has(id)) {
        doneSet.delete(id);
        step.classList.remove("done");
      } else {
        doneSet.add(id);
        step.classList.add("done");
      }
      saveRoadmapDone([...doneSet]);
      window.dispatchEvent(new CustomEvent("cwj:progress-changed"));
    });
  });
  window.CWJ_ROADMAP_TOTAL = roadmapSteps.length;
  window.getRoadmapCompletedCount = () => getRoadmapDone().length;
})();
