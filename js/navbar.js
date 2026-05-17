
// ======== HAMBURGER MENU ========
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Close menu on nav link click
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ======== SCROLL ANIMATIONS ========
const tierSections = document.querySelectorAll('.tier-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

tierSections.forEach(s => observer.observe(s));

// ======== ACTIVE NAV LINK ========
const navLinks = document.querySelectorAll('.nav-link[data-tier]');
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const tier = entry.target.getAttribute('data-tier');
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[data-tier="${tier}"]`);
      if (active) active.classList.add('active');

      // Tier track nodes
      document.querySelectorAll('.tier-node').forEach(n => n.classList.remove('active'));
      const activeNode = document.querySelector(`.tier-node[data-tier="${tier}"]`);
      if (activeNode) activeNode.classList.add('active');
    }
  });
}, { threshold: 0.4 });

tierSections.forEach(s => scrollObserver.observe(s));

// ======== THEME TOGGLE ========
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('itsupport-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('itsupport-theme');
if (savedTheme) setTheme(savedTheme);

// ======== MEGA MENU ========
(function initMegaMenu() {
  const trigger    = document.getElementById('mega-trigger');
  const panel      = document.getElementById('mega-panel');
  const closeBtn   = document.getElementById('mega-close-btn');
  const searchInput = document.getElementById('mega-search-input');

  if (!trigger || !panel) return;

  // Inject backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'mega-backdrop';
  backdrop.id = 'mega-backdrop';
  document.body.appendChild(backdrop);

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    panel.classList.add('open');
    backdrop.classList.add('open');
    trigger.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput && searchInput.focus(), 300);
  }

  function closeMenu() {
    isOpen = false;
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    trigger.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
    showAllLinks();
  }

  function toggleMenu() {
    isOpen ? closeMenu() : openMenu();
  }

  trigger.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
  backdrop.addEventListener('click', closeMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Close on tier nav link click
  document.querySelectorAll('.nav-link[data-tier]').forEach(l => {
    l.addEventListener('click', () => { if (isOpen) closeMenu(); });
  });

  // Mega link click → close menu (placeholder navigation)
  panel.querySelectorAll('.mega-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') e.preventDefault();
      closeMenu();
    });
  });

  // Bottom bar links
  panel.querySelectorAll('.mega-bottom-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') e.preventDefault();
      closeMenu();
    });
  });

  // ---- Quick Search / Filter ----
  function showAllLinks() {
    panel.querySelectorAll('.mega-link').forEach(l => {
      l.style.display = '';
    });
    panel.querySelectorAll('.mega-col').forEach(col => {
      col.style.display = '';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { showAllLinks(); return; }

      panel.querySelectorAll('.mega-link').forEach(link => {
        const name = link.querySelector('.ml-name')?.textContent.toLowerCase() || '';
        const desc = link.querySelector('.ml-desc')?.textContent.toLowerCase() || '';
        const match = name.includes(q) || desc.includes(q);
        link.style.display = match ? '' : 'none';
      });

      // Hide cols that have no visible links
      panel.querySelectorAll('.mega-col').forEach(col => {
        const links = col.querySelectorAll('.mega-link');
        const hasVisible = Array.from(links).some(l => l.style.display !== 'none');
        col.style.display = (links.length === 0 || hasVisible) ? '' : 'none';
      });
    });
  }

  // Close if clicking inside panel on non-interactive area doesn't bubble to backdrop
  panel.addEventListener('click', (e) => e.stopPropagation());

})();