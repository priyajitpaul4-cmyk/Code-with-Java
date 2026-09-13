/* ===========================================================
   CODE WITH JAVA — programs.js
   Loads data/programs.json, renders cards, handles filter,
   search, show all/less, and the program detail modal.
   =========================================================== */

(function () {
  "use strict";

  const grid = document.getElementById("programsGrid");
  if (!grid) return;

  const toolbarPills = document.querySelectorAll("#programFilters .pill");
  const searchInput = document.getElementById("programSearch");
  const showAllBtn = document.getElementById("showAllPrograms");
  const modalOverlay = document.getElementById("programModal");
  const modalBody = document.getElementById("programModalBody");

  let allPrograms = [];
  let currentFilter = "all";
  let currentQuery = "";
  let expanded = false;
  const PREVIEW_COUNT = 6;

  function badgeClass(difficulty) {
    const d = difficulty.toLowerCase();
    if (d === "beginner") return "badge-beginner";
    if (d === "advanced") return "badge-advanced";
    return "badge-intermediate";
  }

  function iconFor(category) {
    const map = {
      Basics: "☕", Loops: "🔁", Games: "🎮", Utilities: "🧰", OOP: "🧩",
      Collections: "📚", "File Handling": "📁", Arrays: "🔢", Strings: "🔤",
      "Data Structures": "🧱", "Exception Handling": "⚠️", Multithreading: "🧵",
      JDBC: "🗄️", Streams: "🌊", Lambda: "λ", Generics: "🔧", Recursion: "🔄",
      "Java 8+": "✨"
    };
    return map[category] || "☕";
  }

  function render() {
    const filtered = allPrograms.filter((p) => {
      const matchesFilter = currentFilter === "all" || p.difficulty.toLowerCase() === currentFilter;
      const q = currentQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });

    const visible = expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);

    grid.innerHTML = visible
      .map(
        (p) => `
      <article class="program-card reveal in-view" data-id="${p.id}">
        <div class="program-card-top">
          <div class="program-icon" aria-hidden="true">${iconFor(p.category)}</div>
          <span class="badge ${badgeClass(p.difficulty)}">${p.difficulty}</span>
        </div>
        <h3 class="program-title">${p.id}. ${p.title}</h3>
        <p class="program-desc">${p.description}</p>
        <div class="program-tags">
          <span class="tag">Java</span>
          <span class="tag">${p.category}</span>
        </div>
        <div class="program-actions">
          <button class="btn btn-outline btn-sm" data-view="${p.id}">View Details</button>
          <button class="btn btn-ghost btn-sm" data-code="${p.id}">View Code</button>
        </div>
      </article>`
      )
      .join("");

    if (!filtered.length) {
      grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">No programs match your search. Try a different keyword or filter.</p>`;
    }

    showAllBtn.textContent = expanded ? "Show Less" : `Show All Programs (${filtered.length})`;
    showAllBtn.style.display = filtered.length > PREVIEW_COUNT ? "inline-flex" : "none";

    grid.querySelectorAll("[data-view]").forEach((btn) =>
      btn.addEventListener("click", () => openModal(Number(btn.dataset.view), false))
    );
    grid.querySelectorAll("[data-code]").forEach((btn) =>
      btn.addEventListener("click", () => openModal(Number(btn.dataset.code), true))
    );
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function openModal(id, focusCode) {
    const p = allPrograms.find((x) => x.id === id);
    if (!p) return;
    modalBody.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="badge ${badgeClass(p.difficulty)}">${p.difficulty}</span>
          <h3 style="margin-top:10px;">${p.id}. ${p.title}</h3>
        </div>
        <button class="modal-close" data-close-modal aria-label="Close">✕</button>
      </div>
      <p style="color:var(--text-secondary); font-size:0.9rem;">${p.description}</p>
      <div class="modal-section-label">Source Code (Main.java)</div>
      <pre id="modalCode">${escapeHtml(p.source)}</pre>
      <button class="btn btn-primary btn-sm copy-btn" id="copyCodeBtn">📋 Copy Code</button>
      <div class="modal-section-label">Expected Output</div>
      <pre>${escapeHtml(p.output)}</pre>
      <div class="modal-section-label">Explanation</div>
      <p style="color:var(--text-secondary); font-size:0.88rem;">${p.explanation}</p>
    `;
    modalOverlay.classList.add("open");
    modalOverlay.querySelectorAll("[data-close-modal]").forEach((btn) =>
      btn.addEventListener("click", () => modalOverlay.classList.remove("open"))
    );
    const copyBtn = document.getElementById("copyCodeBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(p.source);
          copyBtn.textContent = "✅ Copied!";
          setTimeout(() => (copyBtn.textContent = "📋 Copy Code"), 1600);
        } catch (e) {
          copyBtn.textContent = "Copy failed";
        }
      });
    }
    if (focusCode) {
      setTimeout(() => document.getElementById("modalCode")?.scrollIntoView({ block: "nearest" }), 50);
    }
  }

  toolbarPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      toolbarPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      expanded = false;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentQuery = searchInput.value;
      expanded = true;
      render();
    });
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      expanded = !expanded;
      render();
      if (!expanded) {
        document.getElementById("programs")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  fetch("data/programs.json")
    .then((res) => res.json())
    .then((data) => {
      allPrograms = data;
      render();
    })
    .catch(() => {
      grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">Programs could not be loaded. Please check your connection and refresh.</p>`;
    });
})();
