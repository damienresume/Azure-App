// Tiny script for a safe, visual "issue banner" demo.
(() => {
  const btn = document.getElementById("toggleBtn");
  const banner = document.getElementById("banner");
  const statusText = document.getElementById("statusText");

  if (!btn || !banner || !statusText) return;

  let bad = false;
  btn.addEventListener("click", () => {
    bad = !bad;
    banner.classList.toggle("bad", bad);
    statusText.textContent = bad ? "Simulated Issue (Demo)" : "This is Damien and everything is working ..OK";
  });
})();
