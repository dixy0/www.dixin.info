(function () {
  var pages = [
    ["index.html", "Home"], ["research.html", "Research"], ["publications.html", "Publications"],
    ["openscience.html", "Open science"], ["teaching.html", "Teaching"], ["service.html", "Service"]
  ];
  var cur = location.pathname.split("/").pop() || "index.html";
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  var nav = pages.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === cur ? ' aria-current="page"' : "") + ">" + p[1] + "</a>";
  }).join("");
  document.body.insertAdjacentHTML("afterbegin",
    '<a class="skip" href="#main">Skip to content</a>' +
    '<header class="site"><div class="wrap"><a class="brand" href="index.html">Xin Di</a>' +
    '<nav class="main" aria-label="Main">' + nav + "</nav>" +
    '<button class="theme" aria-label="Toggle dark mode" title="Toggle dark mode">◐</button></div></header>');
  document.body.insertAdjacentHTML("beforeend",
    '<footer class="site"><div class="wrap"><span>© ' + new Date().getFullYear() +
    ' Xin Di · Biomedical Engineering, NJIT</span>' +
    '<span><a href="mailto:xin.di@njit.edu">Email</a> · ' +
    '<a href="https://scholar.google.com/citations?user=wDjD46gAAAAJ&hl=en">Google Scholar</a> · ' +
    '<a href="https://github.com/dixy0">GitHub</a></span></div></footer>');
  document.querySelector(".theme").addEventListener("click", function () {
    var dark = document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
