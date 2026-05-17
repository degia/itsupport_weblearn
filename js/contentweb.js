// ======== WEB PAGE MORE ========

const webmore = {
  example: {
    title: "EDU TECH", 
    url: "https://edute.netlify.app/",
    description: "Website contoh resmi IANA untuk pengujian & demo.",
    badge: "Demo",
    category: "testing"
  },
  wiki: {
    title: "Wikipedia Mobile",
    url: "https://www.appart.agency/",
    description: "Ensiklopedia bebas versi mobile (mendukung iframe).",
    badge: "Live",
    category: "reference"
  },
  mdn: {
    title: "MDN Web Docs",
    url: "https://davistalabs.netlify.app/",
    description: "Dokumentasi web resmi & terpercaya oleh Mozilla.",
    badge: "Live",
    category: "development"
  },
  jsfiddle: {
    title: "JSFiddle",
    url: "https://jsfiddle.net/",
    description: "Online playground untuk HTML, CSS & JavaScript.",
    badge: "Tool",
    category: "development"
  },
  hackernews: {
      title: "Hacker News",
      url: "https://motion.zajno.com/",
      description: "Portal berita teknologi, startup & developer.",
      badge: "Live",
      category: "news"
  },
  magicjohns: {
      title: "Hacker News",
      url: "https://www.magicjohns.com/",
      description: "Portal berita teknologi, startup & developer.",
      badge: "Live",
      category: "news"
  }
};

// 🛠️ Fungsi Render Card
function renderCards() {
  const containerwebmore = document.getElementById('card-containerwebmore');
  if (!containerwebmore) return;
  containerwebmore.innerHTML = '';
  Object.entries(webmore).forEach(([key, site]) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
      <div class="card-header">
          <h3>${site.title}</h3>
          <span class="badge">${site.badge}</span>
      </div>
      <div class="iframe-box">
          <iframe 
              src="${site.url}" 
              title="${site.title} Preview" 
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          ></iframe>
          <div class="iframe-blocked" style="opacity: 0; transition: opacity 0.3s;">
              ⚠️ Preview diblokir oleh website target.<br>
              <a href="${site.url}" target="_blank" rel="noopener" style="margin-top:8px; color:#4f46e5;">Buka di tab baru →</a>
          </div>
      </div>
      <div class="iframe-overlay">
        
      </div>
      <div class="card-footer">
        ${site.description}
        <a href="${site.url}" target="_blank" rel="noopener" style="margin-top:8px; color:#4f46e5;">Visit →</a>
      </div>
      `;
      // Deteksi jika iframe gagal/gagal memuat (fallback sederhana)
      const iframe = card.querySelector('iframe');
      const fallback = card.querySelector('.iframe-blocked');
      
      iframe.addEventListener('error', () => {
          fallback.style.opacity = '1';
      });
      // Beberapa browser tidak trigger 'error' pada iframe cross-origin.
      // Fallback ini bisa diaktifkan manual jika diperlukan.
      containerwebmore.appendChild(card);
  });
}

// Jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', renderCards);