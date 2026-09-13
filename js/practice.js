/* ===========================================================
   CODE WITH JAVA — practice.js
   Loads data/practice.json, renders practice problem cards
   with difficulty filter, search and localStorage solved state.
   =========================================================== */

(function () {
  "use strict";

  const grid = document.getElementById("practiceGrid");
  if (!grid) return;

  const pills = document.querySelectorAll("#practiceFilters .pill");
  const searchInput = document.getElementById("practiceSearch");
  const modalOverlay = document.getElementById("practiceModal");
  const modalBody = document.getElementById("practiceModalBody");
  const SOLVED_KEY = "cwj-practice-solved";

  let problems = [];
  let currentFilter = "all";
  let currentQuery = "";

  function getSolved() {
    try { return JSON.parse(localStorage.getItem(SOLVED_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveSolved(arr) { localStorage.setItem(SOLVED_KEY, JSON.stringify(arr)); }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function render() {
    const solvedSet = new Set(getSolved());
    const filtered = problems.filter((p) => {
      const matchesFilter = currentFilter === "all" || p.difficulty.toLowerCase() === currentFilter;
      const q = currentQuery.trim().toLowerCase();
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.topic.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });

    grid.innerHTML = filtered
      .map((p) => {
        const isSolved = solvedSet.has(p.id);
        const diffClass = "diff-" + p.difficulty.toLowerCase();
        return `
        <article class="practice-card ${isSolved ? "solved" : ""}">
          <div class="practice-top">
            <span class="${diffClass}" style="font-weight:700; font-size:0.78rem;">${p.difficulty}</span>
            ${isSolved ? '<span class="solved-check">✓ Solved</span>' : ""}
          </div>
          <h4 style="font-size:0.95rem;">${p.title}</h4>
          <p style="color:var(--text-secondary); font-size:0.82rem;">${p.statement}</p>
          <div class="program-tags"><span class="tag">${p.topic}</span></div>
          <div class="program-actions">
            <button class="btn btn-outline btn-sm" data-hint="${p.id}">💡 Hint</button>
            <button class="btn btn-ghost btn-sm" data-solve="${p.id}">View Solution</button>
          </div>
          <label style="display:flex; align-items:center; gap:8px; font-size:0.78rem; color:var(--text-muted); margin-top:4px; cursor:pointer;">
            <input type="checkbox" data-toggle-solved="${p.id}" ${isSolved ? "checked" : ""}/> Mark as solved
          </label>
        </article>`;
      })
      .join("");

    if (!filtered.length) {
      grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">No problems match your filters yet.</p>`;
    }

    grid.querySelectorAll("[data-hint]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const p = problems.find((x) => x.id === Number(btn.dataset.hint));
        openModal("Hint: " + p.title, `<p style="color:var(--text-secondary);">${p.hint}</p>`);
      })
    );
    grid.querySelectorAll("[data-solve]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const p = problems.find((x) => x.id === Number(btn.dataset.solve));
        openModal(
          p.title,
          `<pre>${escapeHtml(p.solution)}</pre>
           <div class="modal-section-label">Expected Output</div>
           <pre>${escapeHtml(p.output)}</pre>`
        );
      })
    );
    grid.querySelectorAll("[data-toggle-solved]").forEach((cb) =>
      cb.addEventListener("change", () => {
        const id = Number(cb.dataset.toggleSolved);
        const set = new Set(getSolved());
        if (cb.checked) set.add(id); else set.delete(id);
        saveSolved([...set]);
        render();
      })
    );
  }

  function openModal(title, bodyHtml) {
    modalBody.innerHTML = `
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" data-close-modal aria-label="Close">✕</button>
      </div>
      ${bodyHtml}
    `;
    modalOverlay.classList.add("open");
    modalOverlay.querySelectorAll("[data-close-modal]").forEach((btn) =>
      btn.addEventListener("click", () => modalOverlay.classList.remove("open"))
    );
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentQuery = searchInput.value;
      render();
    });
  }

  fetch("data/practice.json")
    .then((res) => res.json())
    .then((data) => {
      problems = data;
      render();
    })
    .catch(() => {
      grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">Practice problems could not be loaded.</p>`;
    });
})();
