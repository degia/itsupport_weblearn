/* ==========================================
   IT Support Academy - Full JavaScript
   with Auth, Roles & Learning Records
   ========================================== */

// ==========================================
// DATA
// ==========================================

const tierData = {
    0: {
        title: "Tier 0 — Self Service", color: "green", icon: "fa-book-open",
        description: "Tier 0 adalah level pertama dalam IT Support. Pengguna menyelesaikan masalah mereka sendiri tanpa bantuan staf IT melalui knowledge base, FAQ, dan automated tools.",
        skills: [
            { name: "Knowledge Base Management", level: 90 },
            { name: "FAQ & Documentation", level: 85 },
            { name: "Self-Service Portal", level: 80 },
            { name: "Chatbot & AI Assistant", level: 75 },
            { name: "Video Tutorial Creation", level: 60 }
        ],
        topics: [
            { title: "Apa itu Tier 0 Support?", content: "Tier 0 adalah lapisan pertama dalam model IT support multi-tier. Ini mencakup semua self-service resources yang memungkinkan pengguna menyelesaikan masalah tanpa bantuan langsung dari staf IT. Contohnya: FAQ, knowledge base, wiki internal, dan chatbot.", icon: "fa-circle-info" },
            { title: "Knowledge Base (KB)", content: "Knowledge Base adalah repositori terpusat yang berisi dokumentasi, solusi masalah umum, tutorial, dan panduan. Tools populer: Confluence, Notion, SharePoint, Zendesk Guide. KB yang baik harus mudah dicari, terstruktur, dan selalu update.", icon: "fa-database" },
            { title: "Self-Service Portal", content: "Portal self-service memungkinkan pengguna mengakses KB, submit tiket, check status, dan melakukan troubleshooting mandiri. Contoh: Service Portal di ServiceNow, Customer Portal di Zendesk.", icon: "fa-globe" },
            { title: "FAQ & Troubleshooting Guide", content: "FAQ berisi jawaban untuk pertanyaan yang paling sering ditanyakan. Troubleshooting guide memberikan langkah-langkah sistematis untuk mendiagnosa dan menyelesaikan masalah.", icon: "fa-list-check" },
            { title: "Chatbot & AI Assistant", content: "Chatbot AI dapat menangani pertanyaan dasar secara otomatis 24/7. Tools: Intercom, Drift, Freshchat, Dialogflow. Chatbot yang baik menggunakan NLP untuk memahami intent pengguna.", icon: "fa-robot" },
            { title: "Video Tutorial & E-Learning", content: "Video tutorial sangat efektif untuk mengajarkan prosedur teknis. Platform: LMS, YouTube internal, Vimeo. Tips: buat video singkat (2-5 menit), fokus pada satu topik per video.", icon: "fa-video" }
        ],
        tools: ["Confluence", "Notion", "Zendesk Guide", "ServiceNow Portal", "Intercom", "Drift"],
        careerTips: "Mulai dari sini! Pelajari cara membuat dokumentasi yang baik, memahami kebutuhan pengguna, dan membangun knowledge base.",
        xpReward: 10
    },
    1: {
        title: "Tier 1 — Help Desk / Frontline", color: "blue", icon: "fa-headset",
        description: "Tier 1 adalah frontline support yang menjadi titik kontak pertama pengguna. Mereka menangani pertanyaan dasar, reset password, troubleshooting awal, dan eskalasi.",
        skills: [
            { name: "Customer Service & Communication", level: 95 },
            { name: "Ticketing System", level: 90 },
            { name: "Password Reset & Account Management", level: 95 },
            { name: "Basic Troubleshooting", level: 85 },
            { name: "Remote Desktop Support", level: 70 }
        ],
        topics: [
            { title: "Peran Tier 1 Support", content: "Tier 1 adalah wajah dari departemen IT. Mereka menerima semua incoming request melalui phone, email, chat, atau portal. Tanggung jawab: mencatat tiket, troubleshooting dasar, resolve issue umum, dan eskalasi ke Tier 2.", icon: "fa-user-headset" },
            { title: "Ticketing System & ITSM", content: "Ticketing system adalah jantung dari IT support. Setiap request dicatat sebagai 'ticket' dengan kategori, prioritas, dan status. Tools: Jira Service Management, Zendesk, Freshservice, ServiceNow.", icon: "fa-ticket" },
            { title: "Password Reset & Account Management", content: "Ini adalah ~30% dari semua tiket Tier 1. Proses: verifikasi identitas → reset password → unlock account → set MFA. Tools: Active Directory, Azure AD, Okta.", icon: "fa-key" },
            { title: "Basic Hardware & Software Troubleshooting", content: "Troubleshooting dasar meliputi: printer tidak bisa print, software tidak bisa install, komputer lambat, monitor tidak menyala. Metodologi: identify → research → test → resolve → document.", icon: "fa-wrench" },
            { title: "Remote Support Tools", content: "Remote support memungkinkan teknisi membantu pengguna dari jarak jauh. Tools: TeamViewer, AnyDesk, Windows RDP, Chrome Remote Desktop, Splashtop.", icon: "fa-desktop" },
            { title: "Email & Office 365 Support", content: "Support untuk Microsoft 365/Google Workspace: setup email, configure signature, manage shared mailbox, troubleshoot Outlook, setup Teams/Slack.", icon: "fa-envelope" }
        ],
        tools: ["Jira Service Desk", "Zendesk", "Active Directory", "TeamViewer", "AnyDesk", "Office 365 Admin"],
        careerTips: "Fokus pada soft skills: komunikasi, empathy, dan problem-solving. Dapatkan sertifikasi CompTIA A+ atau ITIL Foundation.",
        xpReward: 15
    },
    2: {
        title: "Tier 2 — Technical Support", color: "purple", icon: "fa-cogs",
        description: "Tier 2 menangani masalah teknis yang lebih kompleks yang tidak bisa diselesaikan oleh Tier 1. Pengetahuan teknis lebih mendalam tentang sistem, jaringan, dan infrastruktur.",
        skills: [
            { name: "Network Troubleshooting", level: 85 },
            { name: "Server Administration", level: 80 },
            { name: "Active Directory & Group Policy", level: 85 },
            { name: "Virtualization (VMware/Hyper-V)", level: 75 },
            { name: "Scripting (PowerShell/Bash)", level: 70 }
        ],
        topics: [
            { title: "Network Troubleshooting", content: "Tier 2 harus memahami OSI Model, TCP/IP, DNS, DHCP, routing, dan switching. Tools: ping, traceroute, nslookup, Wireshark. Metodologi: physical layer → application layer.", icon: "fa-network-wired" },
            { title: "Server Administration (Windows/Linux)", content: "Windows Server: AD DS, DNS, DHCP, File Server, GPO. Linux: user management, package management, systemd, file permissions, cron jobs.", icon: "fa-server" },
            { title: "Active Directory Deep Dive", content: "AD adalah tulang punggung infrastruktur Windows. Master: OU design, GPO, security groups, AD replication, FSMO roles, disaster recovery. Tools: dcdiag, repadmin, event viewer.", icon: "fa-sitemap" },
            { title: "Virtualization & Cloud Basics", content: "Virtualization: VMware vSphere, Hyper-V, Proxmox. Konsep: hypervisor Type 1 vs Type 2, VM snapshot, vCPU, vRAM. Cloud basics: IaaS, PaaS, SaaS, AWS EC2, Azure VM.", icon: "fa-cloud" },
            { title: "Scripting & Automation", content: "PowerShell untuk Windows, Bash untuk Linux, Python untuk cross-platform. Mulai dari script sederhana dan tingkatkan kompleksitas secara bertahap.", icon: "fa-code" },
            { title: "Endpoint Management", content: "MDM: Intune, Jamf, Workspace ONE. Patch management: WSUS, SCCM, Automox. Imaging: MDT, WDS, Clonezilla.", icon: "fa-laptop" }
        ],
        tools: ["Wireshark", "PowerShell", "VMware", "Active Directory", "Intune", "SCCM"],
        careerTips: "Dapatkan sertifikasi Network+, Server+, atau MCSA/MCSE. Pelajari scripting dan automation.",
        xpReward: 20
    },
    3: {
        title: "Tier 3 — Expert / Engineer", color: "orange", icon: "fa-microchip",
        description: "Tier 3 adalah level expert yang menangani masalah paling kompleks, desain arsitektur sistem, dan memberikan guidance untuk Tier 1 & 2.",
        skills: [
            { name: "System Architecture Design", level: 90 },
            { name: "Advanced Security & Compliance", level: 85 },
            { name: "Cloud Infrastructure (AWS/Azure)", level: 85 },
            { name: "Disaster Recovery & BCP", level: 80 },
            { name: "Performance Tuning & Optimization", level: 85 }
        ],
        topics: [
            { title: "System Architecture & Design", content: "Tier 3 merancang infrastruktur IT: network topology, server architecture, storage solutions, HA, load balancing, clustering. Prinsip: redundancy, scalability, security-by-design.", icon: "fa-drafting-compass" },
            { title: "Advanced Security & Compliance", content: "Framework: NIST, ISO 27001, CIS Controls. Implementasi: SIEM, IDS/IPS, EDR, vulnerability management. Compliance: GDPR, HIPAA, PCI-DSS.", icon: "fa-shield-halved" },
            { title: "Cloud Infrastructure Engineering", content: "AWS: VPC, EC2, S3, RDS, Lambda. Azure: VNet, VM, Storage, SQL Database. GCP: VPC, Compute Engine. IaC dengan Terraform.", icon: "fa-cloud" },
            { title: "Disaster Recovery & BCP", content: "DR Plan: RPO, RTO, backup strategy (3-2-1 rule), replication, failover testing. Tools: Veeam, Zerto, Azure Site Recovery.", icon: "fa-life-ring" },
            { title: "Performance Tuning & Capacity Planning", content: "Monitoring: CPU, memory, disk I/O, network. Tools: Grafana, Prometheus, New Relic. Capacity planning: trend analysis, forecasting.", icon: "fa-tachometer-alt" },
            { title: "DevOps & CI/CD for IT", content: "CI/CD: Jenkins, GitLab CI, GitHub Actions. Containerization: Docker, Kubernetes. Config management: Ansible, Puppet, Chef.", icon: "fa-infinity" }
        ],
        tools: ["AWS", "Azure", "Terraform", "Kubernetes", "Splunk", "Ansible"],
        careerTips: "Target sertifikasi: AWS/Azure Solutions Architect, CISSP, CCNP, atau RHCE.",
        xpReward: 25
    },
    4: {
        title: "Tier 4 — Vendor / Developer", color: "red", icon: "fa-rocket",
        description: "Tier 4 adalah level tertinggi — vendor eksternal, OEM, atau software developer yang membuat dan memperbaiki produk itu sendiri.",
        skills: [
            { name: "Software Development & Debugging", level: 95 },
            { name: "Product Architecture", level: 90 },
            { name: "Vendor Management", level: 80 },
            { name: "Bug Tracking & Patch Development", level: 90 },
            { name: "Root Cause Analysis (RCA)", level: 95 }
        ],
        topics: [
            { title: "Vendor Relationship Management", content: "Mengelola hubungan vendor: SLA negotiation, escalation procedures, vendor performance evaluation, contract management. Vendor types: hardware, software, cloud.", icon: "fa-handshake" },
            { title: "Software Development Lifecycle", content: "SDLC: requirements → design → development → testing → deployment → maintenance. Methodologies: Agile, Scrum, Waterfall. Bug tracking: Jira, GitHub Issues.", icon: "fa-code" },
            { title: "Root Cause Analysis (RCA)", content: "RCA methods: 5 Whys, Fishbone Diagram, Fault Tree Analysis, FMEA. Output: corrective action plan, preventive measures, documentation.", icon: "fa-magnifying-glass" },
            { title: "Patch & Update Management", content: "Lifecycle: identify → evaluate → test → deploy → verify. Testing: dev → staging → production. Emergency vs scheduled patches. Tools: WSUS, SCCM.", icon: "fa-puzzle-piece" },
            { title: "Product-Level Debugging", content: "Debugging: log analysis, memory dumps, stack traces. Tools: GDB, WinDbg, profilers, APM tools. Reading code helps communicate with vendors.", icon: "fa-bug" },
            { title: "Knowledge Transfer & Documentation", content: "Documentasi fix dan workaround untuk Tier 1-3. KB articles, technical bulletins, release notes. Training sessions dan post-mortem reports.", icon: "fa-book" }
        ],
        tools: ["Jira", "Git", "WinDbg", "Splunk", "ServiceNow VR", "Vendor Portals"],
        careerTips: "Pelajari programming fundamentals, software architecture, dan vendor management. Sertifikasi: PMP, ITIL Expert.",
        xpReward: 30
    }
};

const defaultQuizQuestions = [
    { tier: 0, question: "Apa yang dimaksud dengan Tier 0 dalam IT Support?", options: ["Support oleh teknisi senior", "Self-service oleh pengguna sendiri", "Support oleh vendor eksternal", "Support 24/7 oleh helpdesk"], correct: 1 },
    { tier: 0, question: "Manakah yang BUKAN contoh Tier 0 support?", options: ["FAQ di website perusahaan", "Chatbot AI untuk troubleshooting", "Teknisi datang ke meja pengguna", "Knowledge base internal"], correct: 2 },
    { tier: 1, question: "Berapa persen tiket IT yang biasanya berupa reset password?", options: ["5-10%", "15-20%", "25-35%", "50-60%"], correct: 2 },
    { tier: 1, question: "Apa fungsi utama ticketing system?", options: ["Mengganti teknisi IT", "Mencatat dan melacak semua request pengguna", "Memperbaiki komputer secara otomatis", "Menginstal software secara remote"], correct: 1 },
    { tier: 1, question: "Tool mana yang digunakan untuk remote support?", options: ["Microsoft Word", "TeamViewer", "Adobe Photoshop", "Excel"], correct: 1 },
    { tier: 2, question: "Layer mana yang PERTAMA dicek saat troubleshooting jaringan?", options: ["Application Layer", "Transport Layer", "Network Layer", "Physical Layer"], correct: 3 },
    { tier: 2, question: "Apa fungsi Group Policy Object (GPO) di Active Directory?", options: ["Menginstal antivirus", "Menerapkan konfigurasi dan keamanan ke komputer/user", "Membuat backup server", "Mengatur DHCP server"], correct: 1 },
    { tier: 2, question: "Tool mana yang digunakan untuk analisa network packet?", options: ["Microsoft Paint", "Wireshark", "Notepad", "Calculator"], correct: 1 },
    { tier: 3, question: "Apa arti RPO dalam Disaster Recovery?", options: ["Recovery Process Objective", "Recovery Point Objective", "Remote Performance Option", "Redundant Power Operation"], correct: 1 },
    { tier: 3, question: "Apa itu Infrastructure as Code (IaC)?", options: ["Menulis kode untuk aplikasi web", "Mengelola infrastruktur menggunakan file konfigurasi", "Membuat password yang kuat", "Menginstal server secara manual"], correct: 1 },
    { tier: 3, question: "Platform cloud mana yang dimiliki oleh Microsoft?", options: ["AWS", "Google Cloud", "Azure", "DigitalOcean"], correct: 2 },
    { tier: 4, question: "Apa itu RCA dalam konteks IT Support?", options: ["Remote Connection Access", "Root Cause Analysis", "Rapid Code Application", "Redundant Cloud Architecture"], correct: 1 },
    { tier: 4, question: "Siapa yang bertanggung jawab untuk membuat patch software?", options: ["Tier 1 Support", "Tier 2 Support", "Tier 3 Engineer", "Vendor/Developer (Tier 4)"], correct: 3 },
    { tier: 0, question: "Apa keuntungan utama dari self-service portal?", options: ["Mengurangi jumlah teknisi IT", "Pengguna bisa menyelesaikan masalah sendiri kapan saja", "Tidak perlu internet", "Mengganti semua sistem IT"], correct: 1 },
    { tier: 2, question: "Apa perbedaan hypervisor Type 1 dan Type 2?", options: ["Type 1 lebih murah", "Type 1 berjalan langsung di hardware, Type 2 berjalan di atas OS", "Type 2 lebih cepat", "Tidak ada perbedaan"], correct: 1 }
];

const resourcesData = [
    { title: "Ticketing System", icon: "fa-ticket", color: "blue", desc: "Jira Service Desk, Zendesk, Freshservice, ServiceNow", tools: ["Jira", "Zendesk", "ServiceNow"] },
    { title: "Remote Access", icon: "fa-desktop", color: "green", desc: "TeamViewer, AnyDesk, RDP, VNC, Splashtop", tools: ["TeamViewer", "AnyDesk", "RDP"] },
    { title: "Network Tools", icon: "fa-network-wired", color: "purple", desc: "Wireshark, Ping, Traceroute, Nmap, PuTTY", tools: ["Wireshark", "Nmap", "PuTTY"] },
    { title: "Monitoring", icon: "fa-server", color: "orange", desc: "Nagios, PRTG, Zabbix, Datadog, Grafana", tools: ["Nagios", "Zabbix", "Grafana"] },
    { title: "Cloud Platform", icon: "fa-cloud", color: "cyan", desc: "AWS, Azure, Google Cloud, DigitalOcean", tools: ["AWS", "Azure", "GCP"] },
    { title: "Command Line", icon: "fa-terminal", color: "red", desc: "Bash, PowerShell, CMD, Terminal macOS", tools: ["Bash", "PowerShell", "CMD"] },
    { title: "Security Tools", icon: "fa-shield-halved", color: "yellow", desc: "Antivirus, Firewall, SIEM, Vulnerability Scanner", tools: ["Nessus", "Splunk", "CrowdStrike"] },
    { title: "Automation", icon: "fa-robot", color: "indigo", desc: "Ansible, Terraform, Python Scripts, PowerShell DSC", tools: ["Ansible", "Terraform", "Python"] }
];

// ==========================================
// STATE & DATABASE
// ==========================================

let state = {
    currentUser: null,
    currentTier: 0,
    quizTier: "all",
    quizQuestions: [],
    currentQuestion: 0,
    quizScore: 0,
    quizXP: 0,
    quizAnswered: false
};

// Database helpers
function getDB(key, defaultVal = null) {
    try {
        const data = localStorage.getItem(`itsa_${key}`);
        return data ? JSON.parse(data) : defaultVal;
    } catch { return defaultVal; }
}

function setDB(key, value) {
    localStorage.setItem(`itsa_${key}`, JSON.stringify(value));
}

function getUsers() { return getDB('users', []); }
function setUsers(users) { setDB('users', users); }

function getUserProgress(userId) { return getDB(`progress_${userId}`, { completedLessons: {}, totalXP: 0, quizHistory: [], systemLogs: [] }); }
function setUserProgress(userId, progress) { setDB(`progress_${userId}`, progress); }

function getQuizQuestions() { return getDB('quizQuestions', defaultQuizQuestions); }
function setQuizQuestions(questions) { setDB('quizQuestions', questions); }

function addSystemLog(userId, action, details = '') {
    const progress = getUserProgress(userId);
    if (!progress.systemLogs) progress.systemLogs = [];
    progress.systemLogs.unshift({
        timestamp: new Date().toISOString(),
        userId,
        action,
        details,
        userName: getUserName(userId)
    });
    // Keep only last 200 logs
    if (progress.systemLogs.length > 200) progress.systemLogs = progress.systemLogs.slice(0, 200);
    setUserProgress(userId, progress);
}

function getUserName(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown';
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

// ==========================================
// AUTHENTICATION
// ==========================================

function initAuth() {
    // Check existing session
    const session = getDB('session', null);
    if (session) {
        const users = getUsers();
        const user = users.find(u => u.id === session.userId);
        if (user) {
            state.currentUser = user;
            showMainApp();
            return;
        }
    }

    // Show auth overlay
    document.getElementById('auth-overlay').classList.remove('hidden');

    // Tab switching
    document.getElementById('auth-login-tab').addEventListener('click', () => {
        document.getElementById('auth-login-tab').className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-primary-600 text-white';
        document.getElementById('auth-register-tab').className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-gray-400 hover:text-white';
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
    });

    document.getElementById('auth-register-tab').addEventListener('click', () => {
        document.getElementById('auth-register-tab').className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-primary-600 text-white';
        document.getElementById('auth-login-tab').className = 'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-gray-400 hover:text-white';
        document.getElementById('register-form').classList.remove('hidden');
        document.getElementById('login-form').classList.add('hidden');
    });

    // Toggle password visibility
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                input.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });

    // Login form
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;
        handleLogin(email, password);
    });

    // Register form
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim().toLowerCase();
        const password = document.getElementById('register-password').value;
        const role = document.getElementById('register-role').value;
        handleRegister(name, email, password, role);
    });

    // Demo buttons
    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('login-email').value = btn.dataset.email;
            document.getElementById('login-password').value = btn.dataset.password;
        });
    });

    // Initialize default users if none exist
    initDefaultUsers();
}

function initDefaultUsers() {
    let users = getUsers();
    if (users.length === 0) {
        users = [
            { id: 'user_001', name: 'Demo User', email: 'user@demo.com', password: 'user123', role: 'user', createdAt: new Date().toISOString() },
            { id: 'admin_001', name: 'Admin Demo', email: 'admin@demo.com', password: 'admin123', role: 'admin', createdAt: new Date().toISOString() },
            { id: 'super_001', name: 'SuperAdmin Demo', email: 'superadmin@demo.com', password: 'super123', role: 'superadmin', createdAt: new Date().toISOString() }
        ];
        setUsers(users);

        // Initialize progress for default users
        users.forEach(user => {
            setUserProgress(user.id, { completedLessons: {}, totalXP: 0, quizHistory: [], systemLogs: [{ timestamp: new Date().toISOString(), userId: user.id, action: 'Account Created', details: 'Akun demo dibuat', userName: user.name }] });
        });
    }
}

function handleLogin(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        showAuthMessage('Email atau password salah!', 'error');
        return;
    }

    // Create session
    setDB('session', { userId: user.id, loginAt: new Date().toISOString() });
    state.currentUser = user;

    addSystemLog(user.id, 'Login', 'Berhasil masuk ke sistem');

    showAuthMessage('Login berhasil! Mengalihkan...', 'success');
    setTimeout(() => {
        showMainApp();
    }, 800);
}

function handleRegister(name, email, password, role) {
    const users = getUsers();

    if (users.find(u => u.email === email)) {
        showAuthMessage('Email sudah terdaftar!', 'error');
        return;
    }

    const userId = 'user_' + Date.now();
    const newUser = {
        id: userId,
        name,
        email,
        password,
        role,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    setUsers(users);

    // Initialize progress
    setUserProgress(userId, {
        completedLessons: {},
        totalXP: 0,
        quizHistory: [],
        systemLogs: [{ timestamp: new Date().toISOString(), userId, action: 'Account Created', details: 'Akun baru didaftarkan', userName: name }]
    });

    showAuthMessage('Registrasi berhasil! Silakan login.', 'success');
    setTimeout(() => {
        document.getElementById('auth-login-tab').click();
        document.getElementById('login-email').value = email;
        document.getElementById('login-password').value = password;
    }, 1000);
}

function handleLogout() {
    if (state.currentUser) {
        addSystemLog(state.currentUser.id, 'Logout', 'Keluar dari sistem');
    }
    state.currentUser = null;
    localStorage.removeItem('itsa_session');
    document.getElementById('auth-overlay').classList.remove('hidden');
    document.getElementById('main-app').classList.add('hidden');

    // Reset forms
    document.getElementById('login-form').reset();
    document.getElementById('register-form').reset();
    hideAuthMessage();
}

function showAuthMessage(msg, type) {
    const el = document.getElementById('auth-message');
    el.textContent = msg;
    el.className = `mt-4 text-center text-sm p-3 rounded-xl ${type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`;
    el.classList.remove('hidden');
}

function hideAuthMessage() {
    document.getElementById('auth-message').classList.add('hidden');
}

// ==========================================
// MAIN APP
// ==========================================

function showMainApp() {
    document.getElementById('auth-overlay').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');

    // Update user info
    updateUserUI();
    updateRoleBasedUI();

    // Initialize everything
    initApp();
}

function updateUserUI() {
    const user = state.currentUser;
    if (!user) return;

    const initials = getInitials(user.name);

    // Navbar
    document.getElementById('user-avatar').textContent = initials;
    document.getElementById('user-name-display').textContent = user.name.split(' ')[0];

    // Dropdown
    document.getElementById('dropdown-avatar').textContent = initials;
    document.getElementById('dropdown-name').textContent = user.name;
    document.getElementById('dropdown-email').textContent = user.email;

    // Role badge
    const roleBadge = document.getElementById('user-role-badge');
    const dropdownRoleBadge = document.getElementById('dropdown-role-badge');

    const roleConfig = {
        user: { icon: 'fa-user', label: 'User', class: 'role-badge-user' },
        admin: { icon: 'fa-user-shield', label: 'Admin', class: 'role-badge-admin' },
        superadmin: { icon: 'fa-crown', label: 'SuperAdmin', class: 'role-badge-superadmin' }
    };

    const config = roleConfig[user.role];
    roleBadge.className = `fas ${config.icon} text-xs`;
    dropdownRoleBadge.className = `mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-semibold ${config.class}`;
    dropdownRoleBadge.innerHTML = `<i class="fas ${config.icon}"></i> ${config.label}`;
}

function updateRoleBasedUI() {
    const role = state.currentUser.role;

    // Show/hide admin links
    const isAdmin = role === 'admin' || role === 'superadmin';
    const isSuperAdmin = role === 'superadmin';

    // Navbar links
    toggleElement('admin-nav-link', isAdmin);
    toggleElement('superadmin-nav-link', isSuperAdmin);
    toggleElement('admin-dropdown-link', isAdmin);
    toggleElement('superadmin-dropdown-link', isSuperAdmin);
    toggleElement('mobile-admin-link', isAdmin);
    toggleElement('mobile-superadmin-link', isSuperAdmin);
}

function toggleElement(id, show) {
    const el = document.getElementById(id);
    if (el) {
        if (show) el.classList.remove('hidden');
        else el.classList.add('hidden');
    }
}

// ==========================================
// APP INITIALIZATION
// ==========================================

function initApp() {
    initNavbar();
    initBackToTop();
    renderResources();
    renderTierContent(state.currentTier);
    initQuiz();
    updateProgressDisplay();
    initScrollAnimations();
    initUserMenu();
    initRecordTabs();

    // Admin panel
    if (state.currentUser.role === 'admin' || state.currentUser.role === 'superadmin') {
        renderAdminPanel();
    }
    if (state.currentUser.role === 'superadmin') {
        renderSuperAdminPanel();
    }

    // Reset progress button
    document.getElementById('reset-progress-btn').addEventListener('click', resetProgress);
}

// ==========================================
// NAVIGATION
// ==========================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileBtn.querySelector('i').className = mobileMenu.classList.contains('hidden') ? 'fas fa-bars text-gray-300' : 'fas fa-times text-gray-300';
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileBtn.querySelector('i').className = 'fas fa-bars text-gray-300';
        });
    });
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 500);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initUserMenu() {
    const btn = document.getElementById('user-menu-btn');
    const dropdown = document.getElementById('user-dropdown');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => dropdown.classList.remove('show'));

    // Logout buttons
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    document.getElementById('mobile-logout-btn').addEventListener('click', handleLogout);
}

// ==========================================
// TIER CONTENT
// ==========================================

function switchTier(tier) {
    state.currentTier = tier;
    document.querySelectorAll('.tier-tab').forEach(tab => {
        tab.classList.toggle('active', parseInt(tab.dataset.tier) === tier);
    });
    renderTierContent(tier);
}

function renderTierContent(tier) {
    const data = tierData[tier];
    const container = document.getElementById('tier-content');
    const progress = getUserProgress(state.currentUser.id);
    const completedCount = getCompletedCount(tier);
    const totalCount = data.topics.length;
    const percent = Math.round((completedCount / totalCount) * 100);

    let html = `
        <div class="tier-card bg-dark-800/80 backdrop-blur-sm border border-${data.color}-500/20 rounded-3xl p-8 md:p-10">
            <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-${data.color}-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i class="fas ${data.icon} text-${data.color}-400 text-2xl"></i>
                </div>
                <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-${data.color}-400 mb-1">${data.title}</h3>
                    <p class="text-gray-400">${data.description}</p>
                </div>
                <div class="text-right flex-shrink-0">
                    <div class="text-3xl font-bold text-${data.color}-400">${percent}%</div>
                    <div class="text-sm text-gray-400">Selesai</div>
                </div>
            </div>
            <div class="w-full h-3 bg-dark-600 rounded-full mb-8">
                <div class="h-full bg-gradient-to-r from-${data.color}-500 to-${data.color}-400 rounded-full transition-all duration-1000" style="width: ${percent}%"></div>
            </div>
            <!-- Skills -->
            <div class="mb-8">
                <h4 class="text-lg font-bold mb-4 flex items-center gap-2"><i class="fas fa-chart-bar text-${data.color}-400"></i>Skills yang Dibutuhkan</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${data.skills.map(s => `
                        <div class="flex-1">
                            <div class="flex justify-between mb-1"><span class="text-sm font-medium">${s.name}</span><span class="text-sm text-gray-400">${s.level}%</span></div>
                            <div class="skill-bar-bg"><div class="skill-bar-fill bg-${data.color}-500" style="width: ${s.level}%"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <!-- Topics -->
            <div class="mb-8">
                <h4 class="text-lg font-bold mb-4 flex items-center gap-2"><i class="fas fa-book text-${data.color}-400"></i>Materi Pembelajaran</h4>
                <div class="space-y-3">
                    ${data.topics.map((topic, i) => {
                        const key = `tier${tier}_${i}`;
                        const done = progress.completedLessons[key] || false;
                        return `
                            <div class="accordion-item bg-dark-700/30 border border-white/5 rounded-xl overflow-hidden">
                                <div class="accordion-header flex items-center gap-3 p-4 cursor-pointer hover:bg-dark-600/30 transition-colors" onclick="toggleAccordion(this)">
                                    <div class="lesson-check ${done ? 'completed' : ''}" onclick="event.stopPropagation(); toggleLessonComplete('${key}', ${tier}, this)">
                                        ${done ? '<i class="fas fa-check"></i>' : ''}
                                    </div>
                                    <i class="fas ${topic.icon} text-${data.color}-400 w-6 text-center"></i>
                                    <span class="font-medium flex-1">${topic.title}</span>
                                    <i class="fas fa-chevron-down text-gray-500 transition-transform duration-300 accordion-arrow"></i>
                                </div>
                                <div class="accordion-content">
                                    <div class="px-4 pb-4 pl-14"><p class="text-gray-400 text-sm leading-relaxed">${topic.content}</p></div>
                                </div>
                            </div>`;
                    }).join('')}
                </div>
            </div>
            <!-- Tools -->
            <div class="mb-8">
                <h4 class="text-lg font-bold mb-4 flex items-center gap-2"><i class="fas fa-tools text-${data.color}-400"></i>Tools yang Digunakan</h4>
                <div class="flex flex-wrap gap-2">
                    ${data.tools.map(t => `<span class="px-4 py-2 bg-dark-600/50 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:border-${data.color}-500/30 transition-all"><i class="fas fa-wrench mr-1.5 text-xs"></i>${t}</span>`).join('')}
                </div>
            </div>
            <!-- Career Tips -->
            <div class="bg-gradient-to-r from-${data.color}-500/10 to-transparent border border-${data.color}-500/20 rounded-xl p-5">
                <h4 class="font-bold text-${data.color}-400 mb-2 flex items-center gap-2"><i class="fas fa-lightbulb"></i>Career Tips</h4>
                <p class="text-gray-300 text-sm">${data.careerTips}</p>
                <div class="mt-3 flex items-center gap-2 text-sm"><i class="fas fa-star text-yellow-400"></i><span class="text-yellow-400 font-semibold">+${data.xpReward} XP</span><span class="text-gray-500">per materi selesai</span></div>
            </div>
        </div>`;

    container.innerHTML = html;

    setTimeout(() => {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = w, 100);
        });
    }, 200);
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.accordion-arrow');
    const isOpen = content.classList.contains('open');
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.accordion-arrow').forEach(a => a.style.transform = 'rotate(0deg)');
    if (!isOpen) { content.classList.add('open'); arrow.style.transform = 'rotate(180deg)'; }
}

function toggleLessonComplete(lessonKey, tier, element) {
    const progress = getUserProgress(state.currentUser.id);
    const xp = tierData[tier].xpReward;

    if (progress.completedLessons[lessonKey]) {
        delete progress.completedLessons[lessonKey];
        element.classList.remove('completed');
        element.innerHTML = '';
        progress.totalXP = Math.max(0, progress.totalXP - xp);
        addSystemLog(state.currentUser.id, 'Lesson Unchecked', `Materi Tier ${tier} dibatalkan`);
    } else {
        progress.completedLessons[lessonKey] = { completedAt: new Date().toISOString() };
        element.classList.add('completed');
        element.innerHTML = '<i class="fas fa-check"></i>';
        progress.totalXP += xp;
        addSystemLog(state.currentUser.id, 'Lesson Completed', `Menyelesaikan materi Tier ${tier} (+${xp} XP)`);
        showXPToast(xp);
    }

    setUserProgress(state.currentUser.id, progress);
    updateProgressDisplay();

    const header = element.closest('.tier-card');
    if (header) {
        const cc = getCompletedCount(tier);
        const tc = tierData[tier].topics.length;
        const p = Math.round((cc / tc) * 100);
        const pt = header.querySelector('.text-3xl.font-bold');
        const pb = header.querySelector('.h-3 > div');
        if (pt) pt.textContent = `${p}%`;
        if (pb) pb.style.width = `${p}%`;
    }
}

function getCompletedCount(tier) {
    const progress = getUserProgress(state.currentUser.id);
    let count = 0;
    for (let i = 0; i < tierData[tier].topics.length; i++) {
        if (progress.completedLessons[`tier${tier}_${i}`]) count++;
    }
    return count;
}

function showXPToast(xp) {
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.innerHTML = `<i class="fas fa-star text-yellow-400"></i><span class="font-semibold text-yellow-400">+${xp} XP</span><span class="text-gray-400 text-sm">Materi selesai!</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ==========================================
// QUIZ
// ==========================================

function initQuiz() {
    document.querySelectorAll('.quiz-tier-select').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.quiz-tier-select').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.quizTier = btn.dataset.tier;
        });
    });
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('retry-quiz-btn').addEventListener('click', startQuiz);
}

function startQuiz() {
    let questions = getQuizQuestions();
    if (state.quizTier !== 'all') questions = questions.filter(q => q.tier === parseInt(state.quizTier));
    questions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);

    state.quizQuestions = questions;
    state.currentQuestion = 0;
    state.quizScore = 0;
    state.quizXP = 0;
    state.quizAnswered = false;

    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('total-q').textContent = questions.length;
    renderQuestion();
}

function renderQuestion() {
    const q = state.quizQuestions[state.currentQuestion];
    state.quizAnswered = false;

    document.getElementById('current-q').textContent = state.currentQuestion + 1;
    document.getElementById('quiz-xp').textContent = state.quizXP;
    document.getElementById('quiz-progress').style.width = `${(state.currentQuestion / state.quizQuestions.length) * 100}%`;

    const tierColors = { 0: 'green', 1: 'blue', 2: 'purple', 3: 'orange', 4: 'red' };
    const badge = document.getElementById('question-tier-badge');
    badge.textContent = `Tier ${q.tier}`;
    badge.className = `inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-${tierColors[q.tier]}-500/20 text-${tierColors[q.tier]}-400`;

    document.getElementById('question-text').textContent = q.question;

    const letters = ['A', 'B', 'C', 'D'];
    document.getElementById('options-container').innerHTML = q.options.map((opt, i) => `
        <div class="quiz-option" onclick="selectAnswer(${i})">
            <div class="quiz-option-letter">${letters[i]}</div><span>${opt}</span>
        </div>`).join('');
}

function selectAnswer(index) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    const q = state.quizQuestions[state.currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(o => o.classList.add('disabled'));
    options[q.correct].classList.add('correct');

    if (index === q.correct) {
        options[index].classList.add('correct');
        state.quizScore++;
        state.quizXP += 10;
    } else {
        options[index].classList.add('wrong');
    }

    document.getElementById('quiz-xp').textContent = state.quizXP;

    setTimeout(() => {
        state.currentQuestion++;
        if (state.currentQuestion < state.quizQuestions.length) {
            renderQuestion();
        } else {
            showQuizResult();
        }
    }, 1500);
}

function showQuizResult() {
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    const total = state.quizQuestions.length;
    const correct = state.quizScore;
    const wrong = total - correct;
    const pct = Math.round((correct / total) * 100);

    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = wrong;
    document.getElementById('result-xp').textContent = state.quizXP;
    document.getElementById('result-message').textContent = `Kamu menjawab benar ${correct} dari ${total} pertanyaan (${pct}%)`;

    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');

    if (pct >= 80) {
        resultIcon.className = 'w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500';
        resultIcon.innerHTML = '<i class="fas fa-trophy text-white text-4xl"></i>';
        resultTitle.textContent = 'Luar Biasa! 🎉';
        showConfetti();
    } else if (pct >= 60) {
        resultIcon.className = 'w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500';
        resultIcon.innerHTML = '<i class="fas fa-thumbs-up text-white text-4xl"></i>';
        resultTitle.textContent = 'Bagus! 👍';
    } else if (pct >= 40) {
        resultIcon.className = 'w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-500';
        resultIcon.innerHTML = '<i class="fas fa-book text-white text-4xl"></i>';
        resultTitle.textContent = 'Terus Belajar! 📚';
    } else {
        resultIcon.className = 'w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500';
        resultIcon.innerHTML = '<i class="fas fa-redo text-white text-4xl"></i>';
        resultTitle.textContent = 'Coba Lagi! 💪';
    }

    // Save quiz result
    const progress = getUserProgress(state.currentUser.id);
    if (!progress.quizHistory) progress.quizHistory = [];
    progress.quizHistory.unshift({
        date: new Date().toISOString(),
        score: correct,
        total,
        xp: state.quizXP,
        percentage: pct,
        tierFilter: state.quizTier
    });
    progress.totalXP += state.quizXP;
    setUserProgress(state.currentUser.id, progress);

    addSystemLog(state.currentUser.id, 'Quiz Completed', `Skor: ${correct}/${total} (${pct}%) | +${state.quizXP} XP`);

    updateProgressDisplay();
}

function showConfetti() {
    const colors = ['#22c55e', '#3b82f6', '#a855f7', '#f97316', '#ef4444', '#eab308', '#06b6d4'];
    for (let i = 0; i < 50; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDuration = (Math.random() * 2 + 2) + 's';
        c.style.animationDelay = Math.random() * 1 + 's';
        c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        c.style.width = (Math.random() * 8 + 4) + 'px';
        c.style.height = (Math.random() * 8 + 4) + 'px';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }
}

// ==========================================
// RESOURCES
// ==========================================

function renderResources() {
    const grid = document.getElementById('resource-grid');
    grid.innerHTML = resourcesData.map(r => `
        <div class="resource-card group bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-${r.color}-500/30 transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-${r.color}-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-${r.color}-500/20 transition-colors">
                <i class="fas ${r.icon} text-${r.color}-400 text-2xl"></i>
            </div>
            <h3 class="text-lg font-bold mb-2">${r.title}</h3>
            <p class="text-gray-400 text-sm mb-4">${r.desc}</p>
            <div class="flex flex-wrap gap-1.5">
                ${r.tools.map(t => `<span class="px-2 py-0.5 bg-dark-700/50 text-xs text-gray-300 rounded">${t}</span>`).join('')}
            </div>
        </div>`).join('');
}

// ==========================================
// PROGRESS
// ==========================================

function updateProgressDisplay() {
    if (!state.currentUser) return;
    const progress = getUserProgress(state.currentUser.id);

    document.getElementById('total-xp').textContent = `${progress.totalXP} XP`;
    document.getElementById('total-xp-bottom').textContent = `${progress.totalXP} XP`;

    let totalProgress = 0;
    for (let tier = 0; tier <= 4; tier++) {
        const cc = getCompletedCount(tier);
        const tc = tierData[tier].topics.length;
        const pct = Math.round((cc / tc) * 100);
        document.getElementById(`progress-tier${tier}`).textContent = `${pct}%`;
        document.getElementById(`bar-tier${tier}`).style.width = `${pct}%`;
        totalProgress += pct;
    }

    const overall = Math.round(totalProgress / 5);
    document.getElementById('overall-percent').textContent = `${overall}%`;

    const circle = document.getElementById('overall-circle');
    const circumference = 326.73;
    circle.style.strokeDashoffset = circumference - (circumference * overall / 100);

    const completed = Object.keys(progress.completedLessons).length;
    document.getElementById('completed-lessons').textContent = `${completed} Materi Selesai`;
}

function resetProgress() {
    if (confirm('Yakin ingin mereset semua progress?')) {
        const progress = getUserProgress(state.currentUser.id);
        progress.completedLessons = {};
        progress.totalXP = 0;
        progress.quizHistory = [];
        setUserProgress(state.currentUser.id, progress);
        updateProgressDisplay();
        renderTierContent(state.currentTier);
        addSystemLog(state.currentUser.id, 'Progress Reset', 'Semua progress direset');
        showXPToast(0);
    }
}

// ==========================================
// LEARNING RECORD
// ==========================================

function initRecordTabs() {
    document.querySelectorAll('.record-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.record-tab').forEach(t => {
                t.classList.remove('active');
                t.className = 'record-tab px-6 py-4 text-sm font-semibold text-gray-400 hover:text-white';
            });
            tab.classList.add('active');
            tab.className = 'record-tab active px-6 py-4 text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400';

            document.querySelectorAll('.record-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(`record-${tab.dataset.record}`).classList.remove('hidden');
        });
    });
    renderLearningRecord();
}

function renderLearningRecord() {
    renderLessonsRecord();
    renderQuizzesRecord();
    renderCertificatesRecord();
}

function renderLessonsRecord() {
    const progress = getUserProgress(state.currentUser.id);
    const container = document.getElementById('record-lessons-list');
    const completed = progress.completedLessons || {};
    const entries = Object.entries(completed).sort((a, b) => {
        const dateA = typeof a[1] === 'object' ? a[1].completedAt : new Date().toISOString();
        const dateB = typeof b[1] === 'object' ? b[1].completedAt : new Date().toISOString();
        return new Date(dateB) - new Date(dateA);
    });

    if (entries.length === 0) {
        container.innerHTML = `<div class="text-center py-12"><i class="fas fa-book text-gray-600 text-4xl mb-4"></i><p class="text-gray-500">Belum ada materi yang diselesaikan</p></div>`;
        return;
    }

    container.innerHTML = entries.map(([key, value]) => {
        const parts = key.split('_');
        const tier = parseInt(parts[0].replace('tier', ''));
        const idx = parseInt(parts[1]);
        const topic = tierData[tier]?.topics[idx];
        if (!topic) return '';
        const date = typeof value === 'object' && value.completedAt ? new Date(value.completedAt) : new Date();
        return `
            <div class="record-row flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl hover:bg-dark-700/50 transition-all">
                <div class="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-green-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm">${topic.title}</div>
                    <div class="text-xs text-gray-500">Tier ${tier} • ${date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                </div>
                <span class="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-lg flex-shrink-0">+${tierData[tier].xpReward} XP</span>
            </div>`;
    }).join('');
}

function renderQuizzesRecord() {
    const progress = getUserProgress(state.currentUser.id);
    const container = document.getElementById('record-quizzes-list');
    const history = progress.quizHistory || [];

    if (history.length === 0) {
        container.innerHTML = `<div class="text-center py-12"><i class="fas fa-question-circle text-gray-600 text-4xl mb-4"></i><p class="text-gray-500">Belum ada kuis yang dikerjakan</p></div>`;
        return;
    }

    container.innerHTML = history.map((q, i) => {
        const date = new Date(q.date);
        const tierLabel = q.tierFilter === 'all' ? 'Semua Tier' : `Tier ${q.tierFilter}`;
        const color = q.percentage >= 80 ? 'green' : q.percentage >= 60 ? 'blue' : q.percentage >= 40 ? 'orange' : 'red';
        const icon = q.percentage >= 80 ? 'fa-trophy' : q.percentage >= 60 ? 'fa-thumbs-up' : 'fa-redo';
        return `
            <div class="record-row flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl hover:bg-dark-700/50 transition-all">
                <div class="w-10 h-10 bg-${color}-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas ${icon} text-${color}-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm">Kuis ${tierLabel}</div>
                    <div class="text-xs text-gray-500">${date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                </div>
                <div class="text-right flex-shrink-0">
                    <div class="text-sm font-semibold text-${color}-400">${q.score}/${q.total} (${q.percentage}%)</div>
                    <div class="text-xs text-yellow-400">+${q.xp} XP</div>
                </div>
            </div>`;
    }).join('');
}

function renderCertificatesRecord() {
    const progress = getUserProgress(state.currentUser.id);
    const container = document.getElementById('record-certificates-list');
    const certificates = [];

    // Check each tier completion
    for (let tier = 0; tier <= 4; tier++) {
        const cc = getCompletedCount(tier);
        const tc = tierData[tier].topics.length;
        if (cc === tc) {
            certificates.push({
                tier,
                title: tierData[tier].title,
                color: tierData[tier].color,
                icon: tierData[tier].icon,
                completedAt: 'Selesai'
            });
        }
    }

    if (certificates.length === 0) {
        container.innerHTML = `<div class="text-center py-12"><i class="fas fa-certificate text-gray-600 text-4xl mb-4"></i><p class="text-gray-500">Selesaikan semua materi di satu tier untuk mendapatkan sertifikat</p></div>`;
        return;
    }

    container.innerHTML = certificates.map(cert => `
        <div class="record-row flex items-center gap-4 p-6 bg-gradient-to-r from-${cert.color}-500/10 to-transparent border border-${cert.color}-500/20 rounded-xl">
            <div class="w-16 h-16 bg-${cert.color}-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i class="fas fa-award text-${cert.color}-400 text-3xl"></i>
            </div>
            <div class="flex-1">
                <div class="font-bold text-lg text-${cert.color}-400">${cert.title}</div>
                <div class="text-sm text-gray-400">Sertifikat Penyelesaian</div>
            </div>
            <span class="px-4 py-2 bg-${cert.color}-500/10 text-${cert.color}-400 text-sm font-semibold rounded-xl flex-shrink-0"><i class="fas fa-check mr-1"></i>Selesai</span>
        </div>`).join('');
}

// ==========================================
// ADMIN PANEL
// ==========================================

function renderAdminPanel() {
    renderAdminStats();
    renderAdminUsersTable();
    renderAdminQuizList();

    // Add question form
    document.getElementById('add-question-btn').addEventListener('click', () => openModal('modal-add-question'));
    document.getElementById('add-question-form').addEventListener('submit', handleAddQuestion);
}

function renderAdminStats() {
    const users = getUsers();
    let totalLessons = 0, totalQuizzes = 0, totalXP = 0;
    users.forEach(u => {
        const p = getUserProgress(u.id);
        totalLessons += Object.keys(p.completedLessons || {}).length;
        totalQuizzes += (p.quizHistory || []).length;
        totalXP += p.totalXP || 0;
    });

    const stats = [
        { icon: 'fa-users', color: 'blue', label: 'Total Pengguna', value: users.length },
        { icon: 'fa-book', color: 'green', label: 'Materi Selesai', value: totalLessons },
        { icon: 'fa-question-circle', color: 'purple', label: 'Kuis Dikerjakan', value: totalQuizzes },
        { icon: 'fa-star', color: 'yellow', label: 'Total XP', value: totalXP }
    ];

    document.getElementById('admin-stats').innerHTML = stats.map(s => `
        <div class="bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-${s.color}-500/10 rounded-xl flex items-center justify-center">
                    <i class="fas ${s.icon} text-${s.color}-400 text-xl"></i>
                </div>
                <div>
                    <div class="text-2xl font-bold">${s.value}</div>
                    <div class="text-sm text-gray-400">${s.label}</div>
                </div>
            </div>
        </div>`).join('');
}

function renderAdminUsersTable() {
    const users = getUsers();
    const tbody = document.getElementById('admin-users-table');

    tbody.innerHTML = users.map(u => {
        const p = getUserProgress(u.id);
        const completed = Object.keys(p.completedLessons || {}).length;
        const quizzes = (p.quizHistory || []).length;
        let totalTopics = 0;
        for (let t = 0; t <= 4; t++) totalTopics += tierData[t].topics.length;
        const pct = Math.round((completed / totalTopics) * 100);
        const roleClass = u.role === 'admin' ? 'role-badge-admin' : u.role === 'superadmin' ? 'role-badge-superadmin' : 'role-badge-user';
        const roleIcon = u.role === 'admin' ? 'fa-user-shield' : u.role === 'superadmin' ? 'fa-crown' : 'fa-user';

        return `
            <tr class="record-row hover:bg-dark-700/30 transition-all">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-xs font-bold">${getInitials(u.name)}</div>
                        <span class="font-medium text-sm">${u.name}</span>
                    </div>
                </td>
                <td class="px-6 py-4"><span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${roleClass}"><i class="fas ${roleIcon}"></i> ${u.role}</span></td>
                <td class="px-6 py-4 text-center font-semibold text-yellow-400">${p.totalXP || 0}</td>
                <td class="px-6 py-4 text-center">${completed}</td>
                <td class="px-6 py-4 text-center">${quizzes}</td>
                <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center gap-2">
                        <div class="w-20 h-1.5 bg-dark-600 rounded-full"><div class="h-full bg-indigo-400 rounded-full" style="width: ${pct}%"></div></div>
                        <span class="text-xs text-gray-400">${pct}%</span>
                    </div>
                </td>
            </tr>`;
    }).join('');
}

function renderAdminQuizList() {
    const questions = getQuizQuestions();
    const container = document.getElementById('admin-quiz-list');

    container.innerHTML = questions.map((q, i) => {
        const tierColors = { 0: 'green', 1: 'blue', 2: 'purple', 3: 'orange', 4: 'red' };
        return `
            <div class="p-4 flex items-center justify-between hover:bg-dark-700/30 transition-all">
                <div class="flex items-center gap-4">
                    <span class="px-2 py-1 bg-${tierColors[q.tier]}-500/20 text-${tierColors[q.tier]}-400 text-xs font-semibold rounded-lg">Tier ${q.tier}</span>
                    <span class="text-sm">${q.question}</span>
                </div>
                <button onclick="deleteQuestion(${i})" class="px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg text-xs hover:bg-red-500/20 transition-all"><i class="fas fa-trash"></i></button>
            </div>`;
    }).join('');
}

function handleAddQuestion(e) {
    e.preventDefault();
    const questions = getQuizQuestions();
    questions.push({
        tier: parseInt(document.getElementById('new-q-tier').value),
        question: document.getElementById('new-q-text').value,
        options: [
            document.getElementById('new-q-a').value,
            document.getElementById('new-q-b').value,
            document.getElementById('new-q-c').value,
            document.getElementById('new-q-d').value
        ],
        correct: parseInt(document.getElementById('new-q-correct').value)
    });
    setQuizQuestions(questions);
    closeModal('modal-add-question');
    renderAdminQuizList();
    e.target.reset();
    addSystemLog(state.currentUser.id, 'Question Added', 'Soal kuis baru ditambahkan');
}

function deleteQuestion(index) {
    if (!confirm('Hapus soal ini?')) return;
    const questions = getQuizQuestions();
    questions.splice(index, 1);
    setQuizQuestions(questions);
    renderAdminQuizList();
    addSystemLog(state.currentUser.id, 'Question Deleted', 'Soal kuis dihapus');
}

// ==========================================
// SUPERADMIN PANEL
// ==========================================

function renderSuperAdminPanel() {
    renderSuperAdminStats();
    renderSuperAdminUsersTable();
    renderSystemLogs();

    document.getElementById('add-user-btn').addEventListener('click', () => openModal('modal-add-user'));
    document.getElementById('add-user-form').addEventListener('submit', handleAddUser);
    document.getElementById('edit-user-form').addEventListener('submit', handleEditUser);
}

function renderSuperAdminStats() {
    const users = getUsers();
    const roleCounts = { user: 0, admin: 0, superadmin: 0 };
    users.forEach(u => roleCounts[u.role] = (roleCounts[u.role] || 0) + 1);

    const stats = [
        { icon: 'fa-user', color: 'gray', label: 'User', value: roleCounts.user },
        { icon: 'fa-user-shield', color: 'blue', label: 'Admin', value: roleCounts.admin },
        { icon: 'fa-crown', color: 'red', label: 'SuperAdmin', value: roleCounts.superadmin },
        { icon: 'fa-users', color: 'green', label: 'Total', value: users.length }
    ];

    document.getElementById('superadmin-stats').innerHTML = stats.map(s => `
        <div class="bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-${s.color}-500/10 rounded-xl flex items-center justify-center"><i class="fas ${s.icon} text-${s.color}-400 text-xl"></i></div>
                <div><div class="text-2xl font-bold">${s.value}</div><div class="text-sm text-gray-400">${s.label}</div></div>
            </div>
        </div>`).join('');
}

function renderSuperAdminUsersTable() {
    const users = getUsers();
    const tbody = document.getElementById('superadmin-users-table');

    tbody.innerHTML = users.map(u => {
        const roleClass = u.role === 'admin' ? 'role-badge-admin' : u.role === 'superadmin' ? 'role-badge-superadmin' : 'role-badge-user';
        const roleIcon = u.role === 'admin' ? 'fa-user-shield' : u.role === 'superadmin' ? 'fa-crown' : 'fa-user';
        const date = new Date(u.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        const canEdit = u.id !== state.currentUser.id;

        return `
            <tr class="record-row hover:bg-dark-700/30 transition-all">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-xs font-bold">${getInitials(u.name)}</div>
                        <span class="font-medium text-sm">${u.name}</span>
                    </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-400">${u.email}</td>
                <td class="px-6 py-4 text-center"><span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${roleClass}"><i class="fas ${roleIcon}"></i> ${u.role}</span></td>
                <td class="px-6 py-4 text-center text-sm text-gray-400">${date}</td>
                <td class="px-6 py-4 text-center">
                    ${canEdit ? `
                        <button onclick="openEditUser('${u.id}')" class="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 rounded-lg text-xs hover:bg-yellow-500/20 transition-all mr-1"><i class="fas fa-edit"></i></button>
                        <button onclick="deleteUser('${u.id}')" class="px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg text-xs hover:bg-red-500/20 transition-all"><i class="fas fa-trash"></i></button>
                    ` : '<span class="text-xs text-gray-600">Cannot edit self</span>'}
                </td>
            </tr>`;
    }).join('');
}

function handleAddUser(e) {
    e.preventDefault();
    const users = getUsers();
    const email = document.getElementById('new-user-email').value.trim().toLowerCase();

    if (users.find(u => u.email === email)) {
        alert('Email sudah terdaftar!');
        return;
    }

    const newUser = {
        id: 'user_' + Date.now(),
        name: document.getElementById('new-user-name').value.trim(),
        email,
        password: document.getElementById('new-user-password').value,
        role: document.getElementById('new-user-role').value,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    setUsers(users);
    setUserProgress(newUser.id, { completedLessons: {}, totalXP: 0, quizHistory: [], systemLogs: [{ timestamp: new Date().toISOString(), userId: newUser.id, action: 'Account Created', details: 'Akun dibuat oleh SuperAdmin', userName: newUser.name }] });

    closeModal('modal-add-user');
    renderSuperAdminUsersTable();
    renderAdminUsersTable();
    renderSuperAdminStats();
    renderAdminStats();
    e.target.reset();
    addSystemLog(state.currentUser.id, 'User Created', `User baru: ${newUser.name} (${newUser.role})`);
}

function openEditUser(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-user-name-display').value = user.name;
    document.getElementById('edit-user-role').value = user.role;
    openModal('modal-edit-user');
}

function handleEditUser(e) {
    e.preventDefault();
    const userId = document.getElementById('edit-user-id').value;
    const newRole = document.getElementById('edit-user-role').value;
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const oldRole = user.role;
    user.role = newRole;
    setUsers(users);

    closeModal('modal-edit-user');
    renderSuperAdminUsersTable();
    renderAdminUsersTable();
    renderSuperAdminStats();
    renderAdminStats();
    addSystemLog(state.currentUser.id, 'Role Changed', `${user.name}: ${oldRole} → ${newRole}`);
}

function deleteUser(userId) {
    if (!confirm('Hapus pengguna ini? Semua progress akan hilang.')) return;
    let users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    users = users.filter(u => u.id !== userId);
    setUsers(users);
    localStorage.removeItem(`itsa_progress_${userId}`);

    renderSuperAdminUsersTable();
    renderAdminUsersTable();
    renderSuperAdminStats();
    renderAdminStats();
    addSystemLog(state.currentUser.id, 'User Deleted', `Pengguna dihapus: ${user.name}`);
}

function renderSystemLogs() {
    const users = getUsers();
    let allLogs = [];
    users.forEach(u => {
        const p = getUserProgress(u.id);
        if (p.systemLogs) allLogs = allLogs.concat(p.systemLogs);
    });

    allLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    allLogs = allLogs.slice(0, 50);

    const container = document.getElementById('system-logs');

    if (allLogs.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-8">Belum ada log aktivitas</p>';
        return;
    }

    container.innerHTML = allLogs.map(log => {
        const date = new Date(log.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        const iconMap = {
            'Login': 'fa-sign-in-alt text-green-400',
            'Logout': 'fa-sign-out-alt text-gray-400',
            'Lesson Completed': 'fa-check text-blue-400',
            'Lesson Unchecked': 'fa-undo text-orange-400',
            'Quiz Completed': 'fa-question-circle text-purple-400',
            'Progress Reset': 'fa-trash text-red-400',
            'Account Created': 'fa-user-plus text-cyan-400',
            'User Created': 'fa-user-plus text-cyan-400',
            'User Deleted': 'fa-user-minus text-red-400',
            'Role Changed': 'fa-edit text-yellow-400',
            'Question Added': 'fa-plus text-indigo-400',
            'Question Deleted': 'fa-minus text-orange-400'
        };
        const icon = iconMap[log.action] || 'fa-circle text-gray-400';

        return `
            <div class="flex items-start gap-3 p-3 bg-dark-700/30 rounded-xl">
                <div class="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas ${icon} text-sm"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-medium text-sm">${log.userName}</span>
                        <span class="text-xs text-gray-500">${log.action}</span>
                    </div>
                    ${log.details ? `<div class="text-xs text-gray-500 mt-0.5">${log.details}</div>` : ''}
                    <div class="text-xs text-gray-600 mt-1">${date}</div>
                </div>
            </div>`;
    }).join('');
}

// ==========================================
// MODAL HELPERS
// ==========================================

function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.roadmap-item').forEach(item => observer.observe(item));

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.resource-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        cardObserver.observe(card);
    });
}

// ==========================================
// INIT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initAuth();
});