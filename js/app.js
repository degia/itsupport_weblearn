/* ========================================
   IT SUPPORT ACADEMY — app.js
   ======================================== */

// ======== MODAL ========
function openModal(tier, index) {
  const mod = curriculum[tier][index];
  const overlay = document.getElementById('modal-overlay');

  document.getElementById('modal-tier-badge').textContent = `TIER ${tier}`;
  document.getElementById('modal-title').textContent = mod.title;
  document.getElementById('modal-category').textContent = `// ${mod.category}`;
  document.getElementById('modal-body').innerHTML = mod.content;

  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = mod.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

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



// ======== TERMINAL TYPEWRITER ========
const commands = [
  { cmd: "itsa --list-tiers", output: ["Found 5 tiers: T0, T1, T2, T3, T4", "Total modules: 30", "Status: Ready to learn →"] },
  { cmd: "itsa --tier 0 --desc", output: ["Tier 0: Self-Service Support", "Difficulty: Beginner", "Modules: 6"] },
  { cmd: "itsa check-requirements", output: ["✓ Curiosity: OK", "✓ Motivation: OK", "✓ Internet: OK", "All requirements met!"] },
  { cmd: "itsa --start-learning", output: ["Initializing curriculum...", "Loading Tier 0 modules...", "Welcome to IT Support Academy!"] },
];

let cmdIndex = 0;
let charIndex = 0;
let isTyping = true;
let outputLines = [];
let outputDelay = 0;

const typewriterEl = document.getElementById('typewriter');
const outputEl = document.getElementById('terminal-output');

function typeChar() {
  const current = commands[cmdIndex];
  if (charIndex < current.cmd.length) {
    typewriterEl.textContent += current.cmd[charIndex++];
    setTimeout(typeChar, 55 + Math.random() * 35);
  } else {
    setTimeout(showOutput, 400);
  }
}

function showOutput() {
  const current = commands[cmdIndex];
  let lineIndex = 0;

  function addLine() {
    if (lineIndex < current.output.length) {
      const p = document.createElement('p');
      p.className = 'terminal-output-line ' + (lineIndex === current.output.length - 1 ? 'success' : 'info');
      p.textContent = '  ' + current.output[lineIndex++];
      outputEl.appendChild(p);
      outputEl.scrollTop = outputEl.scrollHeight;
      setTimeout(addLine, 300);
    } else {
      setTimeout(clearAndNext, 2500);
    }
  }
  addLine();
}

function clearAndNext() {
  typewriterEl.textContent = '';
  charIndex = 0;
  outputEl.innerHTML = '';
  cmdIndex = (cmdIndex + 1) % commands.length;
  setTimeout(typeChar, 500);
}

setTimeout(typeChar, 1000);

// ======== SMOOTH SCROLL TIER NODES ========
document.querySelectorAll('.tier-node').forEach(node => {
  node.addEventListener('click', () => {
    const tier = node.getAttribute('data-tier');
    const section = document.getElementById(`tier${tier}`);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});

// ======== HEADER SHADOW ON SCROLL ========
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ======== INIT ========
renderModules();
