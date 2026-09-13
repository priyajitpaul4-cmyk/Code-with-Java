/* ===========================================================
   CODE WITH JAVA — language.js
   Loads data/translations.json and applies the selected
   language to every element with a data-i18n attribute.
   =========================================================== */

(function () {
  "use strict";

  const LANG_KEY = "cwj-lang";
  const selects = document.querySelectorAll(".lang-select");
  let dictionary = {};

  function applyLanguage(lang) {
    const dict = dictionary[lang] || dictionary.en;
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    selects.forEach((sel) => (sel.value = lang));
  }

  selects.forEach((sel) => {
    sel.addEventListener("change", () => {
      const lang = sel.value;
      localStorage.setItem(LANG_KEY, lang);
      applyLanguage(lang);
    });
  });

  fetch("data/translations.json")
    .then((res) => res.json())
    .then((data) => {
      dictionary = data;
      const saved = localStorage.getItem(LANG_KEY) || "en";
      applyLanguage(saved);
    })
    .catch(() => {
      /* Fail silently: site remains in English markup. */
    });
})();
