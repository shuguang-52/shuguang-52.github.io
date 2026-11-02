(() => {
  "use strict";

  const intro = document.querySelector("[data-home-intro]");
  const video = intro && intro.querySelector("[data-intro-video]");
  if (!intro || !video || typeof intro.showModal !== "function") return;

  const storageKey = "shuguang-home-intro-seen";
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  const connection = navigator.connection;
  if (window.location.hash || (reducedMotion && reducedMotion.matches) || (connection && connection.saveData)) return;
  try {
    if (window.sessionStorage.getItem(storageKey)) return;
  } catch (_) {
    // The introduction still works when storage is unavailable.
  }

  let finished = false;
  let timeout;
  const remember = () => {
    try { window.sessionStorage.setItem(storageKey, "1"); } catch (_) { /* Optional storage. */ }
  };
  const closeIntro = () => {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);
    video.pause();
    video.removeAttribute("src");
    video.load();
    if (intro.open) intro.close();
    document.documentElement.classList.remove("intro-playing");
    remember();
    const main = document.getElementById("main-content");
    if (main) main.focus({ preventScroll: true });
  };

  intro.querySelectorAll("[data-intro-close]").forEach((button) => button.addEventListener("click", closeIntro));
  intro.addEventListener("cancel", (event) => { event.preventDefault(); closeIntro(); });
  intro.addEventListener("close", closeIntro);
  video.addEventListener("ended", closeIntro);
  video.addEventListener("error", closeIntro);
  window.addEventListener("pagehide", closeIntro, { once: true });
  if (reducedMotion && reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", (event) => { if (event.matches) closeIntro(); });
  }

  try {
    intro.showModal();
    document.documentElement.classList.add("intro-playing");
    remember();
    video.muted = true;
    video.src = video.dataset.src;
    timeout = setTimeout(closeIntro, 10000);
    const playback = video.play();
    if (playback && playback.catch) playback.catch(closeIntro);
  } catch (_) {
    closeIntro();
  }
})();
