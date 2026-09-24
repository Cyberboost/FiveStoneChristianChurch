const pages = [
  ["Home", "/"], ["About", "/about"], ["Online", "/online"],
  ["Giving", "/giving"], ["Community", "/community"], ["Leadership", "/leadership"]
];

const current = location.pathname.replace(/\.html$/, "") || "/";
const header = document.querySelector("[data-site-header]");
const footer = document.querySelector("[data-site-footer]");

if (header) {
  header.innerHTML = `
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand" href="/" aria-label="Five Stone Christian Church home">
          <img src="/assets/logo.png" alt="Five Stone Christian Church logo">
          <span>Five Stone Christian Church</span>
        </a>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
        <nav class="nav-links" id="main-nav" aria-label="Main navigation">
          ${pages.map(([label, href]) => `<a href="${href}" ${current === href ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a class="icon-link" href="https://www.facebook.com/FiveStoneCC" target="_blank" rel="noopener" aria-label="Five Stone on Facebook">f</a>
          <a class="icon-link" href="mailto:fivestonechristianchurch@gmail.com" aria-label="Email Five Stone">✉</a>
        </div>
      </div>
    </header>`;
  const button = header.querySelector(".menu-button");
  const nav = header.querySelector(".nav-links");
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div><h3>Five Stone Christian Church</h3><p>Growing in Christ, trusting Him, and making Him known through the Word of God.</p></div>
          <div><h3>Worship</h3><p>In person: 1st &amp; 3rd Sundays at 10:00 a.m.<br>Online: 2nd &amp; 4th Sundays at 10:00 a.m.</p></div>
          <div class="footer-links"><h3>Connect</h3><a href="tel:+17063664659">706-366-4659</a><a href="mailto:fivestonechristianchurch@gmail.com">Email the church</a><a href="https://www.facebook.com/FiveStoneCC" target="_blank" rel="noopener">Facebook</a></div>
        </div>
        <div class="copyright">© <span data-year></span> Five Stone Christian Church. All rights reserved. Site maintained by <a href="https://mycyberboost.tech" target="_blank" rel="noopener">CyberBoost</a>.</div>
      </div>
    </footer>`;
  footer.querySelector("[data-year]").textContent = new Date().getFullYear();
}
