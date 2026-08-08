function setAnimatedMediaState(container, playing) {
  const video = container.querySelector("video");
  const button = container.querySelector("[data-animated-media-toggle]");
  const icon = container.querySelector("[data-animated-media-icon]");

  if (!video || !button || !icon) return;

  if (playing) {
    video.play().catch(() => {});
    button.setAttribute("aria-label", "Pause animation");
    icon.textContent = "❚❚";
  } else {
    video.pause();
    button.setAttribute("aria-label", "Play animation");
    icon.textContent = "▶";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-animated-media]").forEach((container) => {
    const button = container.querySelector("[data-animated-media-toggle]");
    const video = container.querySelector("video");

    if (!button || !video) return;

    if (reduceMotion) setAnimatedMediaState(container, false);

    button.addEventListener("click", () => {
      setAnimatedMediaState(container, video.paused);
    });
  });
});
