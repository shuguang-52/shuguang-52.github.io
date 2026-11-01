(() => {
  "use strict";

  const header = document.querySelector("[data-profile-header]");
  const menuButton = document.querySelector("[data-nav-toggle]");
  const navigation = document.getElementById("primary-navigation");

  if (header && menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      header.removeAttribute("data-menu-open");
    };
    menuButton.addEventListener("click", () => {
      const opening = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(opening));
      header.toggleAttribute("data-menu-open", opening);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuButton.focus();
      }
    });
    header.setAttribute("data-nav-ready", "");
    menuButton.hidden = false;
  }

  const archive = document.querySelector("[data-publications]");
  if (archive) {
    const form = archive.querySelector("[data-publication-filters]");
    const search = archive.querySelector("#publication-search");
    const topic = archive.querySelector("#publication-topic");
    const year = archive.querySelector("#publication-year");
    const results = archive.querySelector("[data-publication-results]");
    const empty = archive.querySelector("[data-publication-empty]");
    const rows = Array.from(archive.querySelectorAll("[data-publication]"));
    const groups = Array.from(archive.querySelectorAll("[data-publication-year-group]"));
    const normalize = (text) => text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

    if (form && search && topic && year && results && empty) {
      const records = rows.map((row) => ({
        row,
        search: normalize(row.dataset.search || row.textContent),
        topics: (row.dataset.topics || "").split(/\s+/),
        year: row.dataset.year
      }));
      const applyFilters = () => {
        const terms = normalize(search.value).split(/\s+/).filter(Boolean);
        let visible = 0;
        records.forEach((record) => {
          const matches = terms.every((term) => record.search.includes(term))
            && (!topic.value || record.topics.includes(topic.value))
            && (!year.value || record.year === year.value);
          record.row.hidden = !matches;
          if (matches) visible += 1;
        });
        groups.forEach((group) => {
          group.hidden = !Array.from(group.querySelectorAll("[data-publication]")).some((row) => !row.hidden);
        });
        empty.hidden = visible !== 0;
        results.textContent = visible === rows.length
          ? rows.length + " publications"
          : visible + " of " + rows.length + " publications";
      };
      const resetFilters = () => {
        search.value = "";
        topic.selectedIndex = 0;
        year.selectedIndex = 0;
        applyFilters();
        search.focus();
      };
      form.addEventListener("submit", (event) => event.preventDefault());
      form.addEventListener("input", applyFilters);
      form.addEventListener("change", applyFilters);
      form.addEventListener("reset", (event) => {
        event.preventDefault();
        resetFilters();
      });
      const emptyReset = archive.querySelector("[data-reset-publications]");
      if (emptyReset) emptyReset.addEventListener("click", resetFilters);
      applyFilters();
      form.hidden = false;
    }
  }

  document.querySelectorAll("[data-copy-citation]").forEach((button) => {
    const citation = button.closest(".citation");
    const code = citation && citation.querySelector("code");
    const status = citation && citation.querySelector("[data-copy-status]");
    if (!code || !status) return;

    button.hidden = false;
    button.addEventListener("click", async () => {
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(code.textContent.trim());
        status.textContent = "Citation copied.";
      } catch (_) {
        status.textContent = "Copy unavailable. Select the citation below and copy it manually.";
      }
    });
  });
})();
