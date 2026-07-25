(() => {
  const body = document.body;
  const menuButton = document.querySelector(".menu-button");
  const scrim = document.querySelector(".nav-scrim");
  const search = document.querySelector("#site-search");
  const sections = [...document.querySelectorAll("[data-searchable]")];
  const noResults = document.querySelector("#no-results");

  const setMenu = (open) => {
    body.classList.toggle("nav-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  };
  menuButton.addEventListener("click", () => setMenu(!body.classList.contains("nav-open")));
  scrim.addEventListener("click", () => setMenu(false));
  document.querySelectorAll(".sidebar a, .top-menu a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  document.querySelectorAll(".section-toggle").forEach((button) => button.addEventListener("click", () => {
    const content = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    content.hidden = expanded;
  }));

  const filter = () => {
    const term = search.value.trim().toLowerCase();
    let found = 0;
    sections.forEach((section) => {
      const match = !term || section.textContent.toLowerCase().includes(term);
      section.hidden = !match;
      if (match) {
        found += 1;
        const button = section.querySelector(".section-toggle");
        const content = section.querySelector(".section-content");
        if (term && button) {
          button.setAttribute("aria-expanded", "true");
          content.hidden = false;
        }
      }
    });
    noResults.hidden = found > 0;
  };
  search.addEventListener("input", filter);
  document.querySelector("[data-clear-search]").addEventListener("click", () => { search.value = ""; filter(); search.focus(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
    if (event.key === "Escape") { setMenu(false); if (search.value) { search.value = ""; filter(); } }
  });
})();
