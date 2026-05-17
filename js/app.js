/* ========================================
   IT SUPPORT ACADEMY — app.js
   ======================================== */

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
