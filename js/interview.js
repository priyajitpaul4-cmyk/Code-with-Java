/* ===========================================================
   CODE WITH JAVA — interview.js
   Loads data/interview.json, renders an accordion of
   interview questions with category filter and search.
   =========================================================== */

(function () {
  "use strict";

  const list = document.getElementById("interviewList");
  if (!list) return;

  const searchInput = document.getElementById("interviewSearch");
  const categorySelect = document.getElementById("interviewCategory");

  let questions = [];
  let currentQuery = "";
  let currentCategory = "all";

  function populateCategories() {
    const cats = [...new Set(questions.map((q) => q.category))];
    categorySelect.innerHTML =
      `<option value="all">All Categories</option>` +
      cats.map((c) => `<option value="${c}">${c}</option>`).join("");
  }

  function render() {
    const filtered = questions.filter((q) => {
      const matchesCategory = currentCategory === "all" || q.category === currentCategory;
      const query = currentQuery.trim().toLowerCase();
      const matchesQuery = !query || q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    list.innerHTML = filtered
      .map(
        (q) => `
      <div class="qa-item" data-id="${q.id}">
        <button class="qa-question" aria-expanded="false">
          <span><span class="qa-cat">${q.category}</span>${q.question}</span>
          <span class="qa-chevron" aria-hidden="true">▾</span>
        </button>
        <div class="qa-answer">${q.answer}</div>
      </div>`
      )
      .join("");

    if (!filtered.length) {
      list.innerHTML = `<p style="color:var(--text-muted);">No questions match your search.</p>`;
    }

    list.querySelectorAll(".qa-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".qa-item");
        const isOpen = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentQuery = searchInput.value;
      render();
    });
  }
  if (categorySelect) {
    categorySelect.addEventListener("change", () => {
      currentCategory = categorySelect.value;
      render();
    });
  }

  fetch("data/interview.json")
    .then((res) => res.json())
    .then((data) => {
      questions = data;
      populateCategories();
      render();
    })
    .catch(() => {
      list.innerHTML = `<p style="color:var(--text-muted);">Interview questions could not be loaded.</p>`;
    });
})();
