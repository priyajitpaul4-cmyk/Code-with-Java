/* ===========================================================
   CODE WITH JAVA — study-plan.js
   Loads data/study-plan.json, renders the 30-day plan with
   completion tracking, streak and drives the sidebar progress ring.
   =========================================================== */

(function () {
  "use strict";

  const list = document.getElementById("planList");
  if (!list) return;

  const showFullBtn = document.getElementById("showFullPlan");
  const PREVIEW_COUNT = 6;
  const DONE_KEY = "cwj-plan-done";
  const STREAK_KEY = "cwj-streak-data";

  let plan = [];
  let expanded = false;

  function getDone() {
    try { return JSON.parse(localStorage.getItem(DONE_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveDone(arr) { localStorage.setItem(DONE_KEY, JSON.stringify(arr)); }

  function getStreak() {
    try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, lastDate: null }; }
    catch (e) { return { count: 0, lastDate: null }; }
  }
  function bumpStreak() {
    const today = new Date().toDateString();
    const data = getStreak();
    if (data.lastDate === today) return data;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const next = { count: data.lastDate === yesterday ? data.count + 1 : 1, lastDate: today };
    localStorage.setItem(STREAK_KEY, JSON.stringify(next));
    return next;
  }

  function render() {
    const doneSet = new Set(getDone());
    const visible = expanded ? plan : plan.slice(0, PREVIEW_COUNT);
    list.innerHTML = visible
      .map((d) => {
        const isDone = doneSet.has(d.day);
        return `
        <div class="plan-day ${isDone ? "completed" : ""}" data-day="${d.day}" role="checkbox" aria-checked="${isDone}" tabindex="0">
          <span class="plan-day-num">D${d.day}</span>
          <span class="plan-checkbox">${isDone ? "✓" : ""}</span>
          <div>
            <div class="plan-day-title">${d.title}</div>
            <div class="plan-day-topics">${d.topics}</div>
          </div>
        </div>`;
      })
      .join("");

    showFullBtn.textContent = expanded ? "Show Less" : "Show Full Study Plan";

    list.querySelectorAll(".plan-day").forEach((el) => {
      const toggle = () => {
        const day = Number(el.dataset.day);
        const set = new Set(getDone());
        if (set.has(day)) {
          set.delete(day);
        } else {
          set.add(day);
          bumpStreak();
        }
        saveDone([...set]);
        render();
        updateSidebarProgress();
      };
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });
  }

  if (showFullBtn) {
    showFullBtn.addEventListener("click", () => {
      expanded = !expanded;
      render();
    });
  }

  function updateSidebarProgress() {
    const doneCount = getDone().length;
    const total = plan.length || 30;
    const pct = Math.round((doneCount / total) * 100);

    const ringFill = document.getElementById("progressRingFill");
    const ringText = document.getElementById("progressRingText");
    const daysStat = document.getElementById("statDaysCompleted");
    const modulesStat = document.getElementById("statModulesCompleted");
    const streakVal = document.getElementById("streakValue");
    const streakDesc = document.getElementById("streakDesc");

    if (ringFill) {
      const circumference = 2 * Math.PI * 40;
      const offset = circumference - (pct / 100) * circumference;
      ringFill.style.strokeDasharray = `${circumference}`;
      ringFill.style.strokeDashoffset = `${offset}`;
    }
    if (ringText) ringText.textContent = pct + "%";
    if (daysStat) daysStat.textContent = `${doneCount} / ${total}`;

    const modulesDone = window.getRoadmapCompletedCount ? window.getRoadmapCompletedCount() : 0;
    const modulesTotal = window.CWJ_ROADMAP_TOTAL || 27;
    if (modulesStat) modulesStat.textContent = `${modulesDone} / ${modulesTotal}`;

    const streak = getStreak();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const isActiveStreak = streak.lastDate === today || streak.lastDate === yesterday;
    const displayCount = isActiveStreak ? streak.count : 0;
    if (streakVal) streakVal.textContent = `${displayCount} Day${displayCount === 1 ? "" : "s"}`;
    if (streakDesc) {
      streakDesc.textContent = displayCount > 0 ? "Keep going! You're doing great." : "Complete a day to start your streak.";
    }
  }

  window.addEventListener("cwj:progress-changed", updateSidebarProgress);

  fetch("data/study-plan.json")
    .then((res) => res.json())
    .then((data) => {
      plan = data;
      render();
      updateSidebarProgress();
    })
    .catch(() => {
      list.innerHTML = `<p style="color:var(--text-muted);">Study plan could not be loaded.</p>`;
    });
})();
