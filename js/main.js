(function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var sync = function () {
      toggle.setAttribute("aria-expanded", toggle.checked ? "true" : "false");
    };
    toggle.addEventListener("change", sync);
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.checked = false;
        sync();
      });
    });
  }

  var flower = document.querySelector(".hero-flower");
  if (
    flower &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    typeof flower.pauseAnimations === "function"
  ) {
    flower.pauseAnimations();
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var data = new FormData(form);
    var name = String(data.get("name") || "").trim();
    var organization = String(data.get("organization") || "").trim();
    var role = String(data.get("role") || "").trim();
    var sector = String(data.get("sector") || "").trim();
    var message = String(data.get("message") || "").trim();

    var lines = [
      "Name: " + name,
      "Organization: " + organization,
      "Role: " + (role || "Not given"),
      "Sector: " + sector,
      "",
      message
    ];

    var href =
      "mailto:info@aionium.eu?subject=" +
      encodeURIComponent("Aionium — " + organization) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    if (status) {
      status.textContent =
        "Opening your email application, addressed to info@aionium.eu.";
    }
    window.location.href = href;
  });
})();
