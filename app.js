/* ========================================
   IT SUPPORT ACADEMY — app.js
   ======================================== */

// ======== CURRICULUM DATA ========
const curriculum = {
  0: [
    {
      icon: "🔍",
      title: "FAQ & Knowledge Base",
      category: "Self-Service Resources",
      preview: "Mengenal artikel FAQ, panduan pengguna, dan portal self-service yang memungkinkan pengguna menyelesaikan masalah umum secara mandiri.",
      tags: ["FAQ", "Knowledge Base", "Portal"],
      content: `
        <p>Tier 0 adalah fondasi dari sistem IT Support modern. Di sini, pengguna diberdayakan untuk menyelesaikan masalah sendiri tanpa harus menghubungi tim support.</p>
        <h3>Apa itu Self-Service Portal?</h3>
        <p>Self-service portal adalah platform digital yang menyediakan semua sumber daya yang dibutuhkan pengguna untuk menyelesaikan masalah teknis secara mandiri, termasuk artikel panduan, video tutorial, dan tool diagnostik otomatis.</p>
        <h3>Komponen Utama</h3>
        <ul>
          <li>Knowledge Base — Kumpulan artikel terstruktur berisi solusi masalah umum</li>
          <li>FAQ (Frequently Asked Questions) — Daftar pertanyaan dan jawaban yang sering diajukan</li>
          <li>User Manual — Panduan penggunaan perangkat dan software</li>
          <li>Video Tutorial — Panduan visual langkah demi langkah</li>
          <li>Chatbot / Virtual Agent — Asisten otomatis 24/7</li>
        </ul>
        <h3>Manfaat Tier 0</h3>
        <ul>
          <li>Mengurangi volume tiket masuk ke Tier 1</li>
          <li>Tersedia 24/7 tanpa memerlukan agen manusia</li>
          <li>Pengguna mendapat solusi lebih cepat</li>
          <li>Mengurangi biaya operasional support</li>
        </ul>
        <h3>Contoh Platform Self-Service</h3>
        <ul>
          <li>Confluence — Wiki internal perusahaan</li>
          <li>ServiceNow Service Portal</li>
          <li>Jira Service Management</li>
          <li>Zendesk Help Center</li>
        </ul>
      `
    },
    {
      icon: "🤖",
      title: "Chatbot & Virtual Agent",
      category: "Automated Support",
      preview: "Implementasi chatbot AI dan virtual agent untuk menangani pertanyaan umum, reset password, dan troubleshooting dasar secara otomatis.",
      tags: ["AI", "Chatbot", "Automation"],
      content: `
        <p>Virtual agent dan chatbot berbasis AI telah merevolusi dunia IT Support dengan kemampuan menangani ribuan pertanyaan secara simultan tanpa intervensi manusia.</p>
        <h3>Teknologi yang Digunakan</h3>
        <ul>
          <li>NLP (Natural Language Processing) untuk memahami pertanyaan pengguna</li>
          <li>Machine Learning untuk improvisasi respons dari waktu ke waktu</li>
          <li>Integration API ke sistem backend (LDAP, Active Directory)</li>
          <li>Sentiment Analysis untuk mendeteksi frustrasi pengguna</li>
        </ul>
        <h3>Tugas Umum Virtual Agent</h3>
        <ul>
          <li>Reset password dan unlock akun secara otomatis</li>
          <li>Menjawab pertanyaan tentang kebijakan IT</li>
          <li>Panduan instalasi software standar</li>
          <li>Status pemantauan layanan dan outage</li>
          <li>Pengisian formulir permintaan layanan dasar</li>
        </ul>
        <h3>Best Practices</h3>
        <ul>
          <li>Selalu sediakan opsi escalate ke agen manusia</li>
          <li>Training model secara berkala dengan data tiket terbaru</li>
          <li>Monitor conversation logs untuk identifikasi gap knowledge</li>
          <li>Desain conversation flow yang natural dan user-friendly</li>
        </ul>
      `
    },
    {
      icon: "📚",
      title: "Password Reset Mandiri",
      category: "Identity Management",
      preview: "Proses self-service password reset menggunakan SSPR (Self-Service Password Reset) tools seperti Azure AD SSPR dan sistem OTP.",
      tags: ["Password", "SSPR", "Identity"],
      content: `
        <p>Password reset adalah salah satu request paling umum di IT Support, mencapai 20-50% dari total tiket. Mengotomasi proses ini adalah langkah krusial dalam implementasi Tier 0.</p>
        <h3>Solusi SSPR (Self-Service Password Reset)</h3>
        <ul>
          <li>Azure AD Self-Service Password Reset — Solusi Microsoft untuk lingkungan cloud</li>
          <li>Okta Lifecycle Management — Platform identity enterprise</li>
          <li>ManageEngine ADSelfService Plus — Solusi on-premise dan hybrid</li>
          <li>SolarWinds Web Help Desk — Tool manajemen password terintegrasi</li>
        </ul>
        <h3>Metode Verifikasi Identitas</h3>
        <ul>
          <li>OTP via SMS atau Email</li>
          <li>Authenticator App (Microsoft/Google Authenticator)</li>
          <li>Security Questions (tidak direkomendasikan untuk lingkungan kritis)</li>
          <li>Manager Approval via email</li>
          <li>Biometric verification pada device tertentu</li>
        </ul>
        <h3>Flow Implementasi SSPR</h3>
        <pre>Pengguna → Portal SSPR → Verifikasi Identitas → 
OTP/Authenticator → Reset Password → 
Konfirmasi Email → Akses Kembali</pre>
        <h3>Password Policy Best Practices</h3>
        <ul>
          <li>Minimum 12 karakter, kombinasi huruf besar/kecil, angka, simbol</li>
          <li>Tidak menggunakan kata umum atau informasi personal</li>
          <li>Expiry policy: 90 hari untuk akun standar</li>
          <li>Multi-Factor Authentication wajib untuk akun privileged</li>
        </ul>
      `
    },
    {
      icon: "📋",
      title: "Service Catalog & Request Portal",
      category: "Request Management",
      preview: "Mengelola service catalog IT: daftar layanan yang tersedia beserta SLA, prosedur request, dan form pengajuan layanan standar.",
      tags: ["Service Catalog", "ITSM", "Request"],
      content: `
        <p>Service Catalog adalah daftar terstruktur semua layanan IT yang ditawarkan kepada pengguna, lengkap dengan deskripsi, SLA, dan cara pengajuannya.</p>
        <h3>Komponen Service Catalog</h3>
        <ul>
          <li>Service Item — Deskripsi layanan yang jelas dan mudah dipahami pengguna non-teknis</li>
          <li>SLA Information — Waktu penyelesaian yang dijanjikan per kategori</li>
          <li>Request Form — Formulir pengajuan yang terstandarisasi</li>
          <li>Approval Workflow — Proses persetujuan sesuai kebijakan perusahaan</li>
          <li>Cost Transparency — Informasi biaya (jika relevan)</li>
        </ul>
        <h3>Kategori Layanan Umum</h3>
        <ul>
          <li>Hardware Request — Laptop, monitor, peripheral baru</li>
          <li>Software Request — Instalasi atau lisensi software</li>
          <li>Access Request — Request akses sistem atau aplikasi</li>
          <li>Network Request — VPN setup, port opening, WiFi access</li>
          <li>Account Management — Onboarding/offboarding, perubahan role</li>
        </ul>
        <h3>Tools Service Catalog</h3>
        <ul>
          <li>ServiceNow IT Service Management</li>
          <li>Freshservice by Freshworks</li>
          <li>Jira Service Management (Atlassian)</li>
          <li>BMC Helix ITSM</li>
        </ul>
      `
    },
    {
      icon: "🎓",
      title: "User Training & Onboarding",
      category: "Education",
      preview: "Program pelatihan pengguna baru, onboarding IT, dan program literasi digital untuk meningkatkan kemampuan mandiri pengguna.",
      tags: ["Training", "Onboarding", "Education"],
      content: `
        <p>Investasi pada pelatihan pengguna adalah strategi terbaik untuk mengurangi volume tiket support jangka panjang. Pengguna yang terlatih mampu menyelesaikan masalah sendiri.</p>
        <h3>Komponen Program Onboarding IT</h3>
        <ul>
          <li>IT Orientation — Pengenalan kebijakan, tools, dan prosedur IT</li>
          <li>Security Awareness Training — Phishing, password hygiene, data classification</li>
          <li>Core Application Training — Email, collaboration tools (Teams/Slack), ERP dasar</li>
          <li>Device Setup Guide — Panduan konfigurasi laptop/workstation baru</li>
          <li>How-to Request IT Services — Cara menggunakan service portal</li>
        </ul>
        <h3>Media Pelatihan</h3>
        <ul>
          <li>Video on-demand (Loom, Panopto, SharePoint)</li>
          <li>Interactive walkthrough (WalkMe, Whatfix)</li>
          <li>Live webinar dan Q&A session</li>
          <li>Printed quick reference guide</li>
          <li>Gamified learning platform (Kahoot, Articulate)</li>
        </ul>
        <h3>Metrik Keberhasilan Training</h3>
        <ul>
          <li>Penurunan jumlah tiket repetitif pasca training</li>
          <li>Training completion rate ≥ 95%</li>
          <li>Post-training assessment score ≥ 80%</li>
          <li>Phishing simulation failure rate menurun setiap kuartal</li>
        </ul>
      `
    },
    {
      icon: "📊",
      title: "Status Page & Monitoring Dashboard",
      category: "Transparency",
      preview: "Membangun halaman status layanan publik yang memberikan transparansi kepada pengguna tentang kondisi sistem dan jadwal maintenance.",
      tags: ["Status Page", "Uptime", "Transparency"],
      content: `
        <p>Status page adalah halaman publik yang menampilkan kondisi real-time semua layanan IT, memungkinkan pengguna mengecek status sebelum menghubungi support.</p>
        <h3>Komponen Status Page yang Efektif</h3>
        <ul>
          <li>Real-time system status per layanan</li>
          <li>Incident history dan riwayat downtime</li>
          <li>Scheduled maintenance notice</li>
          <li>Subscription untuk notifikasi email/SMS</li>
          <li>Uptime metrics (99.9% SLA visibility)</li>
        </ul>
        <h3>Platform Status Page</h3>
        <ul>
          <li>Atlassian Statuspage — Platform enterprise terpopuler</li>
          <li>Freshstatus by Freshworks</li>
          <li>Cachet — Open source, self-hosted</li>
          <li>Instatus — Alternatif modern yang ringan</li>
        </ul>
        <h3>Dampak pada Volume Tiket</h3>
        <ul>
          <li>Mengurangi "is it down?" tickets hingga 60-70%</li>
          <li>Meningkatkan kepercayaan pengguna melalui transparansi</li>
          <li>Mempercepat komunikasi insiden skala besar</li>
          <li>Mengurangi beban inbound calls saat major incident</li>
        </ul>
      `
    }
  ],

  1: [
    {
      icon: "🎧",
      title: "Help Desk Fundamentals",
      category: "Front-Line Support",
      preview: "Dasar-dasar operasional Help Desk: cara menerima tiket, prioritisasi, SLA management, dan komunikasi efektif dengan pengguna.",
      tags: ["Help Desk", "Ticketing", "SLA"],
      content: `
        <p>Help Desk Tier 1 adalah lini pertama kontak langsung dengan pengguna. Sekitar 70-80% masalah seharusnya bisa diselesaikan di level ini.</p>
        <h3>Peran Agen Tier 1</h3>
        <ul>
          <li>Menerima dan mencatat semua inbound request (phone, email, chat, portal)</li>
          <li>Melakukan initial triage dan kategorisasi tiket</li>
          <li>Menyelesaikan masalah umum dengan knowledge base</li>
          <li>Melakukan escalation tepat waktu ke Tier 2</li>
          <li>Menjaga komunikasi dengan pengguna selama proses penyelesaian</li>
        </ul>
        <h3>Skill Wajib Agen Tier 1</h3>
        <ul>
          <li>Komunikasi verbal dan tulisan yang jelas</li>
          <li>Empati dan kesabaran dalam menghadapi pengguna frustrasi</li>
          <li>Basic troubleshooting Windows, Mac, dan aplikasi Office</li>
          <li>Penggunaan ticketing system (ServiceNow, Zendesk, Freshservice)</li>
          <li>Time management dan multitasking</li>
        </ul>
        <h3>SLA Tier 1 Standar</h3>
        <ul>
          <li>P1 Critical — Response: 15 menit, Resolusi: 4 jam</li>
          <li>P2 High — Response: 30 menit, Resolusi: 8 jam</li>
          <li>P3 Medium — Response: 2 jam, Resolusi: 2 hari kerja</li>
          <li>P4 Low — Response: 4 jam, Resolusi: 5 hari kerja</li>
        </ul>
      `
    },
    {
      icon: "🖥️",
      title: "Desktop & Endpoint Troubleshooting",
      category: "Hardware & Software",
      preview: "Panduan troubleshooting komputer Windows dan macOS: boot issues, BSOD, software crashes, peripheral problems, dan performance tuning.",
      tags: ["Windows", "macOS", "Troubleshooting"],
      content: `
        <p>Desktop support adalah kompetensi inti Tier 1. Memahami cara mendiagnosis dan memperbaiki masalah endpoint adalah keterampilan fundamental.</p>
        <h3>Windows Troubleshooting Essentials</h3>
        <ul>
          <li>Event Viewer — Membaca Windows Logs untuk identifikasi error</li>
          <li>Task Manager & Resource Monitor — Analisis CPU, RAM, disk usage</li>
          <li>Device Manager — Manajemen driver dan hardware issues</li>
          <li>System Configuration (msconfig) — Startup dan service management</li>
          <li>DISM & SFC — Repair corrupted system files</li>
        </ul>
        <h3>BSOD (Blue Screen of Death) Diagnosis</h3>
        <pre>1. Catat error code (contoh: IRQL_NOT_LESS_OR_EQUAL)
2. Buka Event Viewer > Windows Logs > System
3. Cari error di waktu yang bersamaan dengan crash
4. Analisis dengan WhoCrashed atau WinDbg
5. Identifikasi driver/file yang bermasalah</pre>
        <h3>macOS Troubleshooting</h3>
        <ul>
          <li>Activity Monitor — Setara Task Manager di macOS</li>
          <li>Console.app — System logs dan crash reports</li>
          <li>Disk Utility — First Aid untuk disk repair</li>
          <li>Safe Mode (hold Shift on startup) — Isolasi masalah software</li>
          <li>PRAM/NVRAM Reset — Solve display, sound, startup issues</li>
        </ul>
        <h3>Performance Optimization Steps</h3>
        <ul>
          <li>Disable startup programs yang tidak perlu</li>
          <li>Cek disk space — minimal 15% free untuk Windows</li>
          <li>Update driver GPU, network, chipset</li>
          <li>Scan malware dengan Windows Defender / Malwarebytes</li>
          <li>Defragment HDD (bukan SSD) secara terjadwal</li>
        </ul>
      `
    },
    {
      icon: "🌐",
      title: "Network Connectivity Basics",
      category: "Networking",
      preview: "Dasar troubleshooting koneksi jaringan: ping, traceroute, DNS issues, IP configuration, VPN, dan WiFi problems.",
      tags: ["Network", "TCP/IP", "DNS", "VPN"],
      content: `
        <p>Masalah konektivitas jaringan adalah salah satu request paling umum di Tier 1. Menguasai dasar diagnostik jaringan sangat krusial.</p>
        <h3>Diagnostic Tools Dasar</h3>
        <ul>
          <li><code>ping [IP/hostname]</code> — Test konektivitas dasar dan latency</li>
          <li><code>tracert / traceroute [host]</code> — Lacak rute paket ke tujuan</li>
          <li><code>ipconfig / ifconfig</code> — Lihat konfigurasi IP aktif</li>
          <li><code>nslookup [domain]</code> — Query DNS resolution</li>
          <li><code>netstat -an</code> — Lihat koneksi aktif dan port yang digunakan</li>
        </ul>
        <h3>Alur Troubleshooting Jaringan (OSI Layer)</h3>
        <pre>L1 Physical — Kabel terhubung? LED aktif?
L2 Data Link — Cek MAC, switch port status
L3 Network  — IP address valid? Default gateway OK?
L4 Transport — Port terbuka? Firewall blocking?
L7 Application — DNS resolve? Auth credentials?</pre>
        <h3>Masalah Umum & Solusi</h3>
        <ul>
          <li>IP Conflict — Lepas cable, ipconfig /release /renew</li>
          <li>DNS Failure — Ganti DNS ke 8.8.8.8 (Google) atau 1.1.1.1 (Cloudflare)</li>
          <li>No Gateway — Cek DHCP server, restart router/switch</li>
          <li>VPN Disconnected — Re-authenticate, cek split tunneling policy</li>
          <li>WiFi Slow — Cek channel congestion, interference, signal strength</li>
        </ul>
        <h3>VPN Troubleshooting</h3>
        <ul>
          <li>Verifikasi credentials VPN sudah benar</li>
          <li>Cek apakah VPN client perlu update</li>
          <li>Tes koneksi internet sebelum VPN (disconnect jika tidak ada internet)</li>
          <li>Cek apakah antivirus/firewall memblokir VPN tunnel</li>
          <li>Pastikan Split DNS dikonfigurasi dengan benar</li>
        </ul>
      `
    },
    {
      icon: "📧",
      title: "Email & Collaboration Tools",
      category: "Communication Tools",
      preview: "Support untuk Microsoft 365, Outlook, Teams, SharePoint, Google Workspace: konfigurasi, sinkronisasi, dan troubleshooting umum.",
      tags: ["M365", "Outlook", "Teams", "GWS"],
      content: `
        <p>Aplikasi kolaborasi adalah arteri utama produktivitas modern. Agen Tier 1 harus mahir menyelesaikan masalah M365 dan Google Workspace.</p>
        <h3>Microsoft Outlook Issues Umum</h3>
        <ul>
          <li>Tidak bisa kirim/terima email — Cek Offline Mode, Outbox stuck, mailbox quota</li>
          <li>Profile corrupt — Rebuild profile via Control Panel > Mail</li>
          <li>Auto-discover gagal — Cek DNS SRV record atau manual config</li>
          <li>Signature tidak muncul — Cek registry policy, re-create signature</li>
          <li>Calendar sync masalah — Repair OST file atau create new profile</li>
        </ul>
        <h3>Microsoft Teams Troubleshooting</h3>
        <ul>
          <li>Cache clear — Tutup Teams, hapus folder <code>%appdata%\Microsoft\Teams</code></li>
          <li>Audio/Video issues — Cek device permissions di OS settings</li>
          <li>Login loop — Clear credentials di Windows Credential Manager</li>
          <li>Slow performance — Disable GPU hardware acceleration</li>
          <li>Meeting recordings — Cek OneDrive/SharePoint storage quota</li>
        </ul>
        <h3>Google Workspace</h3>
        <ul>
          <li>Gmail tidak sync — Cek IMAP/POP settings, App Password jika 2FA aktif</li>
          <li>Google Drive sinkronisasi gagal — Restart Drive for Desktop, cek disk space</li>
          <li>Meet audio masalah — Cek browser permissions, test dengan test.webrtc.org</li>
          <li>Google Chat notifications — Cek Do Not Disturb settings dan notification policy</li>
        </ul>
        <h3>Eskalasi ke Tier 2</h3>
        <ul>
          <li>Exchange Server issues (mailbox database, DAG)</li>
          <li>M365 tenant-level configuration</li>
          <li>Email routing dan mail flow rules</li>
          <li>Compliance dan eDiscovery requests</li>
        </ul>
      `
    },
    {
      icon: "🔐",
      title: "Account & Access Management",
      category: "Identity & Access",
      preview: "Manajemen akun pengguna di Active Directory, Azure AD, dan sistem IAM: create, modify, disable, unlock, dan permission management dasar.",
      tags: ["Active Directory", "IAM", "Azure AD"],
      content: `
        <p>Account management adalah tanggung jawab inti Tier 1, mulai dari onboarding pengguna baru hingga offboarding karyawan yang resign.</p>
        <h3>Active Directory (On-Premise)</h3>
        <ul>
          <li>Create User — <code>New-ADUser</code> di PowerShell atau ADUC GUI</li>
          <li>Reset Password — ADUC > Right-click user > Reset Password</li>
          <li>Unlock Account — <code>Unlock-ADAccount -Identity username</code></li>
          <li>Group Membership — Add/Remove dari Security Group sesuai role</li>
          <li>Disable Account — Saat offboarding, disable sebelum delete (30 hari)</li>
        </ul>
        <h3>Azure AD / Entra ID</h3>
        <ul>
          <li>Microsoft Entra Admin Center — GUI untuk manajemen user cloud</li>
          <li>License Assignment — Assign M365 license ke user baru</li>
          <li>MFA Management — Setup atau reset MFA method pengguna</li>
          <li>Conditional Access — Troubleshoot sign-in issues akibat CA policy</li>
          <li>Guest Account — Manage external user access</li>
        </ul>
        <h3>PowerShell Quick Commands</h3>
        <pre># Check account status
Get-ADUser -Identity "username" -Properties *

# Unlock account
Unlock-ADAccount -Identity "username"

# Reset password
Set-ADAccountPassword -Identity "username" 
  -Reset -NewPassword (ConvertTo-SecureString 
  "NewPass@123" -AsPlainText -Force)</pre>
        <h3>Prinsip Least Privilege</h3>
        <ul>
          <li>Berikan akses minimum yang dibutuhkan untuk menjalankan tugas</li>
          <li>Review akses secara berkala (quarterly access review)</li>
          <li>Segera cabut akses saat pengguna pindah divisi atau resign</li>
          <li>Gunakan Role-Based Access Control (RBAC)</li>
        </ul>
      `
    },
    {
      icon: "🖨️",
      title: "Printer & Peripheral Support",
      category: "Hardware Support",
      preview: "Troubleshooting printer, scanner, dan peripheral: driver issues, network printing, toner/paper jam, dan konfigurasi print server.",
      tags: ["Printer", "Peripheral", "Driver"],
      content: `
        <p>Masalah printer mungkin terkesan sepele, tetapi dapat menghentikan produktivitas kantor. Kemampuan menyelesaikan masalah printer cepat sangat dihargai.</p>
        <h3>Langkah Troubleshooting Printer Standar</h3>
        <ul>
          <li>Cek physical — Kabel power, USB/network, toner, paper</li>
          <li>Clear print queue — Services > Print Spooler > Restart</li>
          <li>Reinstall driver — Download dari situs vendor, bukan third-party</li>
          <li>Set as default printer — Cek apakah printer yang benar aktif</li>
          <li>Cek firewall — Port 9100 (RAW printing), 631 (IPP) harus terbuka</li>
        </ul>
        <h3>Network Printer Configuration</h3>
        <pre>1. Temukan IP printer (cetak configuration page)
2. Add printer > The printer I want isn't listed
3. Add printer using TCP/IP address
4. Masukkan IP printer
5. Pilih driver yang sesuai
6. Test print</pre>
        <h3>Print Spooler Reset (Windows)</h3>
        <pre>net stop spooler
del /Q /F /S "%systemroot%\System32\spool\PRINTERS\*.*"
net start spooler</pre>
        <h3>Peripheral Lainnya</h3>
        <ul>
          <li>Monitor — DDC/CI issue, refresh rate, color profile reset</li>
          <li>Webcam — Driver update, privacy shutter, USB bandwidth</li>
          <li>Headset — Audio endpoint setting di Sound Control Panel</li>
          <li>USB Hub — Power delivery issue, driver conflict</li>
          <li>Docking Station — Firmware update, display protocol (DP/HDMI)</li>
        </ul>
      `
    }
  ],

  2: [
    {
      icon: "🔧",
      title: "Advanced System Administration",
      category: "System Administration",
      preview: "Administrasi server Windows dan Linux tingkat lanjut: Group Policy, DNS/DHCP management, server roles, performance tuning.",
      tags: ["Windows Server", "Linux", "Group Policy"],
      content: `
        <p>Tier 2 menangani masalah yang memerlukan akses ke sistem backend dan keahlian teknis mendalam yang melampaui kapabilitas Help Desk.</p>
        <h3>Windows Server Administration</h3>
        <ul>
          <li>Active Directory Domain Services — Schema, trust, replication</li>
          <li>Group Policy Objects (GPO) — Deployment, troubleshooting, resultant set</li>
          <li>DNS Server — Zone management, conditional forwarding, DNSSEC</li>
          <li>DHCP Server — Scope management, reservation, failover</li>
          <li>Windows Server Update Services (WSUS) — Patch management</li>
        </ul>
        <h3>Linux System Administration</h3>
        <ul>
          <li>User & Permission management — chmod, chown, sudoers</li>
          <li>Service management — systemctl start/stop/enable</li>
          <li>Log analysis — journalctl, /var/log/, grep pattern matching</li>
          <li>Package management — apt, yum, dnf, snap</li>
          <li>Cron jobs — Scheduling automated tasks</li>
        </ul>
        <h3>Group Policy Troubleshooting</h3>
        <pre># Check applied GPOs on a machine
gpresult /R /SCOPE COMPUTER

# Force GPO refresh
gpupdate /force

# Detailed HTML report
gpresult /H C:\gpresult.html</pre>
        <h3>Performance Monitoring</h3>
        <ul>
          <li>Performance Monitor (perfmon) — Baseline dan alert threshold</li>
          <li>Resource Monitor — Real-time CPU, memory, disk, network</li>
          <li>Reliability Monitor — Stability index dan event history</li>
          <li>Windows Admin Center — Modern web-based management tool</li>
        </ul>
      `
    },
    {
      icon: "🔒",
      title: "Network Security & Firewall",
      category: "Security",
      preview: "Konfigurasi firewall, analisis network traffic, IDS/IPS management, VPN advanced, dan network segmentation.",
      tags: ["Firewall", "Security", "IDS/IPS", "VPN"],
      content: `
        <p>Keamanan jaringan adalah domain kritis yang memerlukan pemahaman mendalam tentang protokol, ancaman, dan arsitektur keamanan berlapis.</p>
        <h3>Firewall Administration</h3>
        <ul>
          <li>Rule management — Allow/deny berbasis IP, port, protocol, application</li>
          <li>NAT/PAT configuration — Inbound/outbound address translation</li>
          <li>VPN Gateway setup — Site-to-site dan remote access VPN</li>
          <li>Log monitoring — Analisis blocked traffic dan anomali</li>
          <li>Platform umum: Palo Alto, Fortinet FortiGate, Cisco ASA, pfSense</li>
        </ul>
        <h3>Network Intrusion Detection</h3>
        <ul>
          <li>Snort / Suricata — Open source IDS/IPS</li>
          <li>Rule tuning — Reduce false positives tanpa miss true threats</li>
          <li>Alert analysis — Triase dan investigasi alert</li>
          <li>PCAP analysis — Wireshark untuk deep packet inspection</li>
        </ul>
        <h3>Common Network Attacks & Mitigation</h3>
        <ul>
          <li>DDoS — Rate limiting, scrubbing center, anycast routing</li>
          <li>Man-in-the-Middle — Certificate pinning, HSTS, mutual TLS</li>
          <li>Port Scanning — IPS rule, honeypot deployment</li>
          <li>ARP Spoofing — Dynamic ARP Inspection di managed switch</li>
          <li>DNS Poisoning — DNSSEC, DNS over HTTPS/TLS</li>
        </ul>
        <h3>VPN Advanced Configuration</h3>
        <ul>
          <li>IPSec vs SSL/TLS VPN — Kapan menggunakan masing-masing</li>
          <li>Split tunneling — Pertimbangan keamanan dan konfigurasi</li>
          <li>MFA integration — RADIUS dengan TOTP/push notification</li>
          <li>Zero Trust Network Access (ZTNA) sebagai evolusi VPN</li>
        </ul>
      `
    },
    {
      icon: "☁️",
      title: "Cloud Platform Support (AWS/Azure/GCP)",
      category: "Cloud Computing",
      preview: "Support teknis untuk platform cloud: VM management, storage, identity, monitoring, cost optimization, dan troubleshooting cloud resources.",
      tags: ["AWS", "Azure", "GCP", "Cloud"],
      content: `
        <p>Cloud telah menjadi infrastruktur utama perusahaan modern. Tier 2 harus kompeten dalam mengelola dan troubleshoot resource cloud.</p>
        <h3>Microsoft Azure Essentials</h3>
        <ul>
          <li>Virtual Machines — Deployment, sizing, availability sets, extensions</li>
          <li>Azure Active Directory / Entra ID — SSO, Conditional Access, PIM</li>
          <li>Azure Storage — Blob, Files, Queue, Table — access keys & SAS tokens</li>
          <li>Azure Monitor — Metrics, alerts, Log Analytics workspace</li>
          <li>Azure Networking — VNet, Subnet, NSG, Application Gateway</li>
        </ul>
        <h3>AWS Core Services</h3>
        <ul>
          <li>EC2 — Instance types, security groups, key pairs, user data</li>
          <li>IAM — Users, roles, policies, permission boundaries</li>
          <li>S3 — Bucket policies, versioning, lifecycle rules, pre-signed URLs</li>
          <li>CloudWatch — Logs, metrics, alarms, dashboards</li>
          <li>VPC — Subnet, route tables, NAT Gateway, VPC Peering</li>
        </ul>
        <h3>Cloud Troubleshooting Methodology</h3>
        <pre>1. Check service health dashboard
2. Review cloud provider status page
3. Analyze CloudTrail/Activity logs
4. Check resource quotas/limits
5. Verify IAM permissions
6. Review network security groups/NACLs
7. Check billing/cost anomaly</pre>
        <h3>Cost Optimization</h3>
        <ul>
          <li>Right-sizing instances berdasarkan actual usage</li>
          <li>Reserved Instances vs Spot/Preemptible untuk workload tertentu</li>
          <li>Storage lifecycle policies untuk archive/delete data lama</li>
          <li>Tagging strategy untuk cost allocation dan chargeback</li>
        </ul>
      `
    },
    {
      icon: "🗄️",
      title: "Database Administration Basics",
      category: "Database",
      preview: "Administrasi database SQL dan NoSQL: backup/restore, performance tuning, user management, query optimization, dan monitoring.",
      tags: ["SQL", "Database", "Backup", "DBA"],
      content: `
        <p>Database adalah jantung dari hampir semua aplikasi bisnis. Tier 2 perlu mampu menangani masalah database tingkat pertama sebelum eskalasi ke DBA specialist.</p>
        <h3>SQL Server Administration</h3>
        <ul>
          <li>Backup Strategy — Full, Differential, Transaction Log backup</li>
          <li>User management — Login, user, role, permission dengan principle of least privilege</li>
          <li>SQL Agent Jobs — Monitoring dan troubleshooting scheduled jobs</li>
          <li>Database Maintenance — Index rebuild, statistics update, integrity check</li>
          <li>Monitoring — SQL Server Management Studio Activity Monitor</li>
        </ul>
        <h3>Query Performance Troubleshooting</h3>
        <pre>-- Find top 10 expensive queries
SELECT TOP 10 
  total_elapsed_time/execution_count AS avg_time,
  total_logical_reads/execution_count AS avg_reads,
  SUBSTRING(st.text, 1, 200) AS query_text
FROM sys.dm_exec_query_stats qs
CROSS APPLY sys.dm_exec_sql_text(sql_handle) st
ORDER BY avg_time DESC;</pre>
        <h3>MySQL/PostgreSQL Basics</h3>
        <ul>
          <li>Backup — mysqldump / pg_dump untuk logical backup</li>
          <li>Slow query log — Enable dan analyze untuk optimasi</li>
          <li>Connection issues — Max connections, wait_timeout, pool settings</li>
          <li>Replication — Check lag pada read replica</li>
        </ul>
        <h3>NoSQL (MongoDB, Redis)</h3>
        <ul>
          <li>MongoDB — Atlas monitoring, index creation, aggregation pipeline</li>
          <li>Redis — Memory usage, eviction policy, persistence (RDB/AOF)</li>
          <li>Connection pooling — Configuration dan monitoring</li>
        </ul>
      `
    },
    {
      icon: "📱",
      title: "Mobile Device Management (MDM)",
      category: "Endpoint Management",
      preview: "Implementasi dan manajemen MDM: Microsoft Intune, Jamf, enrollment, policy deployment, compliance, dan remote wipe.",
      tags: ["MDM", "Intune", "Jamf", "iOS", "Android"],
      content: `
        <p>Dengan meningkatnya penggunaan perangkat mobile dan kebijakan BYOD, MDM menjadi komponen kritis dalam manajemen endpoint modern.</p>
        <h3>Microsoft Intune</h3>
        <ul>
          <li>Device Enrollment — AAD join, Autopilot, BYOD via Company Portal</li>
          <li>Compliance Policies — Enforce PIN, encryption, OS version minimum</li>
          <li>Configuration Profiles — WiFi, VPN, email, certificates</li>
          <li>App Protection Policies — MAM without enrollment (BYOD)</li>
          <li>Conditional Access — Block non-compliant devices from resources</li>
        </ul>
        <h3>Jamf (Apple Ecosystem)</h3>
        <ul>
          <li>Zero-touch deployment untuk Mac baru via Apple Business Manager</li>
          <li>Configuration profiles untuk macOS dan iOS</li>
          <li>Self Service portal untuk app distribution</li>
          <li>Inventory management dan hardware reporting</li>
        </ul>
        <h3>BYOD Policy Implementation</h3>
        <ul>
          <li>Enrollment flow yang user-friendly dengan instruksi jelas</li>
          <li>Privacy policy — Komunikasikan apa yang bisa dan tidak bisa dilihat IT</li>
          <li>Containerization — Pisahkan data kerja dan personal</li>
          <li>Remote wipe — Corporate wipe vs full device wipe</li>
        </ul>
        <h3>Common MDM Issues</h3>
        <ul>
          <li>Enrollment failure — Cek license assignment, AAD join settings</li>
          <li>App push failed — Cek device compliance, app assignment</li>
          <li>Certificate expired — Renew APNs certificate (Apple)</li>
          <li>Sync delay — Force sync dari portal atau device</li>
        </ul>
      `
    },
    {
      icon: "🛡️",
      title: "Cybersecurity Incident Response",
      category: "Security Operations",
      preview: "Dasar-dasar incident response: identifikasi, containment, eradication, recovery. Analisis malware, phishing, dan data breach handling.",
      tags: ["SIEM", "IR", "Malware", "Forensics"],
      content: `
        <p>Kemampuan merespons insiden keamanan dengan cepat dan terstruktur adalah salah satu skill paling bernilai di dunia IT Support modern.</p>
        <h3>NIST Incident Response Lifecycle</h3>
        <ul>
          <li>Preparation — Policies, tools, training, communication plans</li>
          <li>Detection & Analysis — Identify indicators of compromise (IoC)</li>
          <li>Containment — Isolate affected systems, preserve evidence</li>
          <li>Eradication — Remove malware, patch vulnerability, clean systems</li>
          <li>Recovery — Restore from clean backup, monitor for re-infection</li>
          <li>Post-Incident — Lessons learned, update runbooks</li>
        </ul>
        <h3>Phishing Incident Response</h3>
        <pre>1. User melaporkan phishing email
2. Analisis header email (MX Toolbox, Phishtool)
3. Check apakah ada user yang klik/submit credentials
4. Reset password akun yang terdampak
5. Revoke active sessions
6. Block sender domain di email gateway
7. Report ke PhishTank/Google SafeBrowsing
8. User awareness communication</pre>
        <h3>Malware Response Steps</h3>
        <ul>
          <li>Isolate — Cabut dari jaringan, nonaktifkan WiFi</li>
          <li>Identify — Scan dengan Malwarebytes, Windows Defender offline</li>
          <li>Preserve — Image disk jika forensics diperlukan</li>
          <li>Clean — Gunakan bootable antivirus scanner</li>
          <li>Reimaging — Jika infeksi parah, reimage adalah pilihan terbaik</li>
        </ul>
        <h3>SIEM Basics (Splunk/Sentinel)</h3>
        <ul>
          <li>Log ingestion dan parsing dari berbagai sumber</li>
          <li>Correlation rules dan alert tuning</li>
          <li>Dashboard untuk SOC monitoring</li>
          <li>Threat hunting dengan search queries</li>
        </ul>
      `
    }
  ],

  3: [
    {
      icon: "🏗️",
      title: "Enterprise Architecture & Design",
      category: "Architecture",
      preview: "Merancang arsitektur IT enterprise: high availability, disaster recovery, capacity planning, dan technology roadmap alignment.",
      tags: ["Architecture", "HA", "DR", "Enterprise"],
      content: `
        <p>Tier 3 adalah domain para Subject Matter Expert (SME) yang merancang dan mengoptimalkan arsitektur sistem enterprise yang kompleks.</p>
        <h3>High Availability (HA) Design Principles</h3>
        <ul>
          <li>Eliminate Single Points of Failure (SPOF) di semua tier</li>
          <li>Redundancy design — Active-Active vs Active-Passive</li>
          <li>Load balancing — Layer 4 (transport) dan Layer 7 (application)</li>
          <li>Geographic distribution — Multi-region, multi-AZ deployment</li>
          <li>Health checks dan automated failover</li>
        </ul>
        <h3>Disaster Recovery Metrics</h3>
        <ul>
          <li>RPO (Recovery Point Objective) — Berapa banyak data yang boleh hilang?</li>
          <li>RTO (Recovery Time Objective) — Berapa lama downtime yang dapat ditoleransi?</li>
          <li>MTTR (Mean Time to Repair) — Rata-rata waktu pemulihan</li>
          <li>MTBF (Mean Time Between Failures) — Rata-rata interval antar kegagalan</li>
        </ul>
        <h3>DR Strategy Tiers</h3>
        <ul>
          <li>Tier 0 — No DR (acceptable for non-critical)</li>
          <li>Tier 1 — Data backup offsite, cold recovery (hours-days)</li>
          <li>Tier 2 — Warm standby, partial infrastructure (hours)</li>
          <li>Tier 3 — Hot standby, full infrastructure (minutes)</li>
          <li>Tier 4 — Active-Active, zero downtime (seconds)</li>
        </ul>
        <h3>Capacity Planning Process</h3>
        <ul>
          <li>Collect baseline metrics — CPU, memory, storage, network utilization</li>
          <li>Trend analysis — 3-6 bulan historical data</li>
          <li>Growth projection — Berdasarkan business forecast</li>
          <li>Threshold planning — Scale out sebelum mencapai 70-80% kapasitas</li>
          <li>Cost modeling — CapEx vs OpEx untuk berbagai skenario</li>
        </ul>
      `
    },
    {
      icon: "🔬",
      title: "Root Cause Analysis & Problem Management",
      category: "ITIL Problem Management",
      preview: "Metodologi RCA: 5 Whys, Fishbone Diagram, Fault Tree Analysis. Problem management process dan permanent fix implementation.",
      tags: ["RCA", "ITIL", "Problem Mgmt", "5 Whys"],
      content: `
        <p>Problem Management bertujuan mencegah insiden berulang melalui identifikasi dan eliminasi root cause secara permanen.</p>
        <h3>Perbedaan Incident vs Problem</h3>
        <ul>
          <li>Incident — Interupsi layanan yang butuh solusi cepat (workaround OK)</li>
          <li>Problem — Penyebab mendasar dari satu atau lebih insiden</li>
          <li>Known Error — Problem yang sudah diidentifikasi tapi belum diperbaiki</li>
          <li>Workaround — Solusi sementara untuk Known Error</li>
        </ul>
        <h3>Teknik RCA: 5 Whys</h3>
        <pre>Insiden: Server production down selama 2 jam

Why 1: Mengapa server down?
→ Memory usage mencapai 100%

Why 2: Mengapa memory penuh?
→ Memory leak pada aplikasi

Why 3: Mengapa ada memory leak?
→ Patch terbaru mengandung bug

Why 4: Mengapa bug lolos ke production?
→ Testing environment tidak mencakup load test

Why 5: Mengapa tidak ada load testing?
→ Tidak ada prosedur testing yang terdokumentasi

Root Cause: Tidak ada standar prosedur testing sebelum deployment.</pre>
        <h3>Fishbone (Ishikawa) Diagram Categories</h3>
        <ul>
          <li>People — Skill gap, human error, komunikasi</li>
          <li>Process — Prosedur tidak jelas, tidak diikuti</li>
          <li>Technology — Bug, konfigurasi salah, hardware failure</li>
          <li>Environment — Kondisi fisik, external factors</li>
        </ul>
        <h3>Problem Management KPIs</h3>
        <ul>
          <li>Jumlah Known Errors yang diselesaikan per bulan</li>
          <li>Recurring incident rate (target: menurun setiap kuartal)</li>
          <li>Mean Time to Identify Root Cause</li>
          <li>Permanent fix implementation rate vs workaround</li>
        </ul>
      `
    },
    {
      icon: "⚙️",
      title: "DevOps & Infrastructure as Code",
      category: "DevOps",
      preview: "Implementasi IaC dengan Terraform/Ansible, CI/CD pipelines, containerization dengan Docker & Kubernetes, dan GitOps practices.",
      tags: ["Terraform", "Ansible", "Docker", "K8s", "CI/CD"],
      content: `
        <p>DevOps dan IaC telah merevolusi cara infrastruktur dikelola. Tier 3 SME harus fasih dengan tools dan metodologi modern ini.</p>
        <h3>Infrastructure as Code (IaC)</h3>
        <ul>
          <li>Terraform — Cloud-agnostic provisioning untuk AWS, Azure, GCP</li>
          <li>Ansible — Agentless configuration management dan automation</li>
          <li>Pulumi — IaC menggunakan general-purpose languages (Python, TS)</li>
          <li>CloudFormation / ARM Templates — Native IaC per cloud provider</li>
        </ul>
        <h3>Terraform Workflow</h3>
        <pre>terraform init     # Initialize, download providers
terraform plan     # Preview changes (dry run)
terraform apply    # Apply changes to infrastructure
terraform destroy  # Destroy managed resources

# Best practices:
# - Store state in remote backend (S3/Azure Storage)
# - Use modules for reusable components
# - Implement workspaces for env separation</pre>
        <h3>Container & Kubernetes</h3>
        <ul>
          <li>Docker — Build, ship, run containers consistently</li>
          <li>Kubernetes — Orchestration: scheduling, scaling, self-healing</li>
          <li>Helm — Package manager untuk Kubernetes (Charts)</li>
          <li>kubectl essentials — get, describe, logs, exec, apply, delete</li>
          <li>Service mesh — Istio/Linkerd untuk observability dan security</li>
        </ul>
        <h3>CI/CD Pipeline Design</h3>
        <ul>
          <li>Source Control — Git branch strategy (GitFlow/Trunk-based)</li>
          <li>Build — Compile, unit tests, SAST scan</li>
          <li>Test — Integration tests, E2E, performance tests</li>
          <li>Deploy — Blue/green atau canary deployment strategy</li>
          <li>Monitor — Observability: metrics, logs, traces</li>
        </ul>
      `
    },
    {
      icon: "📡",
      title: "Advanced Networking & SDN",
      category: "Network Engineering",
      preview: "BGP routing, MPLS, SD-WAN, Software Defined Networking, network automation dengan Python/Netmiko, dan network observability.",
      tags: ["BGP", "MPLS", "SD-WAN", "SDN", "Automation"],
      content: `
        <p>Network engineering tingkat expert mencakup protokol routing kompleks, WAN technologies modern, dan network automation yang menggantikan konfigurasi manual.</p>
        <h3>BGP (Border Gateway Protocol)</h3>
        <ul>
          <li>eBGP vs iBGP — External dan Internal BGP peering</li>
          <li>AS Path manipulation — Prepending untuk traffic engineering</li>
          <li>BGP communities — Tagging routes untuk policy control</li>
          <li>Route filtering — Prefix lists, AS path filters, route maps</li>
          <li>BGP security — RPKI, BGP route origin validation</li>
        </ul>
        <h3>SD-WAN Architecture</h3>
        <ul>
          <li>Overlay network diatas multiple underlay (MPLS, broadband, 4G/5G)</li>
          <li>Centralized policy management — Provisioning dari satu console</li>
          <li>Application-aware routing — Route berdasarkan aplikasi dan QoS</li>
          <li>Zero-touch provisioning (ZTP) untuk branch offices</li>
          <li>Vendors: Cisco Viptela, VMware VeloCloud, Fortinet SD-WAN</li>
        </ul>
        <h3>Network Automation dengan Python</h3>
        <pre># Netmiko — SSH ke network devices
from netmiko import ConnectHandler

router = {
    'device_type': 'cisco_ios',
    'ip': '192.168.1.1',
    'username': 'admin',
    'password': 'secret'
}

with ConnectHandler(**router) as net_connect:
    output = net_connect.send_command("show ip route")
    print(output)</pre>
        <h3>Network Observability Stack</h3>
        <ul>
          <li>NetFlow/IPFIX — Traffic flow analysis dan anomaly detection</li>
          <li>SNMP v3 — Secure polling untuk metrics collection</li>
          <li>gRPC/gNMI — Modern telemetry streaming dari network devices</li>
          <li>Stack: Grafana + Prometheus + Telegraf + InfluxDB</li>
        </ul>
      `
    },
    {
      icon: "🔐",
      title: "Zero Trust Security Architecture",
      category: "Security Architecture",
      preview: "Implementasi Zero Trust: identity-centric security, micro-segmentation, SASE, PAM, dan security posture management.",
      tags: ["Zero Trust", "SASE", "PAM", "Micro-seg"],
      content: `
        <p>Zero Trust adalah paradigma keamanan modern: "Never Trust, Always Verify." Tidak ada entitas, di dalam atau di luar jaringan, yang dipercaya secara default.</p>
        <h3>Prinsip Dasar Zero Trust</h3>
        <ul>
          <li>Verify explicitly — Autentikasi dan autorisasi setiap request</li>
          <li>Use least privilege — Minimal access yang diperlukan, just-in-time</li>
          <li>Assume breach — Design system assuming attacker is already inside</li>
        </ul>
        <h3>Zero Trust Pillars</h3>
        <ul>
          <li>Identity — MFA, conditional access, identity protection</li>
          <li>Endpoints — Device compliance, EDR, MDM</li>
          <li>Applications — App proxy, CASB, SaaS security policies</li>
          <li>Network — Micro-segmentation, East-West traffic inspection</li>
          <li>Data — Classification, DLP, encryption at rest dan in transit</li>
        </ul>
        <h3>SASE (Secure Access Service Edge)</h3>
        <ul>
          <li>SD-WAN + Security stack di-deliver dari cloud</li>
          <li>ZTNA menggantikan VPN tradisional</li>
          <li>CASB untuk visibilitas dan kontrol SaaS</li>
          <li>SWG (Secure Web Gateway) untuk internet access</li>
          <li>FWaaS (Firewall as a Service) dari edge nodes</li>
        </ul>
        <h3>Privileged Access Management (PAM)</h3>
        <ul>
          <li>Vault credentials untuk admin accounts</li>
          <li>Session recording untuk privileged sessions</li>
          <li>Just-in-time access — Akses granted hanya saat dibutuhkan</li>
          <li>Tools: CyberArk, BeyondTrust, Delinea (formerly Thycotic)</li>
        </ul>
      `
    },
    {
      icon: "📈",
      title: "ITSM & Service Excellence",
      category: "Service Management",
      preview: "ITIL 4 framework: service value chain, continual improvement, metrics & KPIs, OKRs untuk IT, dan membangun budaya service excellence.",
      tags: ["ITIL4", "ITSM", "KPIs", "OKR", "CSI"],
      content: `
        <p>ITIL 4 menyediakan kerangka kerja komprehensif untuk mengelola layanan IT dengan berfokus pada value co-creation antara IT dan bisnis.</p>
        <h3>ITIL 4 Service Value System</h3>
        <ul>
          <li>Guiding Principles — 7 prinsip universal (focus on value, collaborate, think holistically, dll)</li>
          <li>Governance — Policies, compliance, dan decision-making framework</li>
          <li>Service Value Chain — Plan, improve, engage, design, build, deliver, support</li>
          <li>Practices — 34 management practices (incident, change, problem, dll)</li>
          <li>Continual Improvement — Model Plan-Do-Check-Act terus menerus</li>
        </ul>
        <h3>Key IT Metrics & KPIs</h3>
        <ul>
          <li>Mean Time to Detect (MTTD) — Waktu identifikasi insiden</li>
          <li>Mean Time to Respond (MTTR) — Waktu respons awal</li>
          <li>Mean Time to Resolve (MTTR) — Waktu penyelesaian penuh</li>
          <li>First Call Resolution (FCR) — % tiket selesai saat kontak pertama</li>
          <li>Customer Satisfaction (CSAT/NPS) — Kepuasan pengguna</li>
          <li>SLA Compliance Rate — % tiket diselesaikan dalam SLA</li>
        </ul>
        <h3>OKR (Objectives & Key Results) untuk IT</h3>
        <pre>Objective: Meningkatkan kepuasan pengguna IT
KR1: CSAT score dari 3.8 ke 4.5/5 dalam Q2
KR2: FCR rate dari 65% ke 80%
KR3: Kurangi tiket berulang sebesar 30%

Objective: Meningkatkan ketersediaan layanan
KR1: Uptime 99.9% untuk sistem tier-1
KR2: MTTR ≤ 2 jam untuk insiden P1
KR3: 100% completion on DR drills</pre>
        <h3>Change Management Best Practices</h3>
        <ul>
          <li>CAB (Change Advisory Board) untuk perubahan major</li>
          <li>Standard changes — Pre-approved, low-risk, documented procedure</li>
          <li>Emergency changes — Fast-track process dengan post-implementation review</li>
          <li>Change freeze periods — Hindari perubahan saat peak business periods</li>
        </ul>
      `
    }
  ],

  4: [
    {
      icon: "🏭",
      title: "Vendor Management & Escalation",
      category: "Vendor Relations",
      preview: "Proses eskalasi ke vendor eksternal, pengelolaan SLA kontrak, komunikasi eskalasi yang efektif, dan vendor relationship management.",
      tags: ["Vendor", "SLA Contract", "Escalation"],
      content: `
        <p>Tier 4 melibatkan pihak eksternal — vendor, manufacturer, atau tim engineering khusus. Manajemen relasi dan eskalasi yang efektif sangat kritis di level ini.</p>
        <h3>Kapan Eskalasi ke Tier 4?</h3>
        <ul>
          <li>Bug atau defect pada software vendor (SAP, Oracle, Microsoft)</li>
          <li>Hardware failure yang memerlukan RMA (Return Merchandise Authorization)</li>
          <li>Infrastructure failure di sisi cloud provider (AWS/Azure)</li>
          <li>Isu keamanan yang memerlukan CVE patching dari vendor</li>
          <li>Masalah yang melampaui pengetahuan semua expert internal</li>
        </ul>
        <h3>Proses Eskalasi Vendor yang Efektif</h3>
        <pre>1. Dokumentasikan SEMUA informasi relevan sebelum eskalasi:
   - Environment details (OS, versions, configs)
   - Steps to reproduce
   - Logs, error messages, screenshots
   - Business impact statement
   - Timeline of events

2. Hubungi vendor support dengan severity level yang tepat
3. Tunjuk single point of contact (SPOC) dari pihak Anda
4. Minta case/ticket number dan estimasi response time
5. Eskalasi secara internal kepada vendor manager jika SLA dilanggar</pre>
        <h3>Contract SLA Management</h3>
        <ul>
          <li>Pahami kontrak support (Gold/Platinum/Premier Support)</li>
          <li>Tracking vendor SLA compliance per kuartal</li>
          <li>Service credits — Mekanisme kompensasi jika SLA breach</li>
          <li>Contract renewal negotiation berdasarkan performance data</li>
        </ul>
        <h3>Vendor Communication Best Practices</h3>
        <ul>
          <li>Selalu eskalasi secara profesional, tidak emosional</li>
          <li>Dokumentasikan setiap interaksi dengan vendor</li>
          <li>Bangun relationship dengan TAM (Technical Account Manager)</li>
          <li>Participate dalam vendor beta programs dan user groups</li>
        </ul>
      `
    },
    {
      icon: "🔩",
      title: "Hardware Engineering & Data Center",
      category: "Infrastructure Engineering",
      preview: "Manajemen data center enterprise: rack design, power & cooling, server hardware deep-dive, SAN storage, dan hardware lifecycle.",
      tags: ["Data Center", "SAN", "Server", "Hardware"],
      content: `
        <p>Data center adalah tulang punggung infrastruktur IT enterprise. Tier 4 mencakup isu hardware kompleks yang memerlukan keterlibatan manufacturer atau engineer khusus.</p>
        <h3>Data Center Design Fundamentals</h3>
        <ul>
          <li>Tier Classification — Uptime Institute Tier I-IV (99.671% hingga 99.995%)</li>
          <li>Power — UPS, generator, dual power feeds, PDU redundancy</li>
          <li>Cooling — Hot aisle/cold aisle containment, CRAC/CRAH units</li>
          <li>Fire Suppression — Clean agent (FM-200, Novec 1230)</li>
          <li>Physical Security — Mantraps, biometric, CCTV, access logs</li>
        </ul>
        <h3>Server Hardware Deep Dive</h3>
        <ul>
          <li>RAID levels — RAID 0, 1, 5, 6, 10 — trade-offs performance vs redundancy</li>
          <li>iLO/iDRAC/IPMI — Out-of-band management untuk remote control</li>
          <li>BIOS/UEFI — Boot order, virtualization settings, secure boot</li>
          <li>Memory ECC — Error-correcting code untuk server reliability</li>
          <li>PCIe — NVMe SSDs, GPU, network cards, HBA</li>
        </ul>
        <h3>SAN (Storage Area Network)</h3>
        <ul>
          <li>Fibre Channel vs iSCSI vs NVMe-oF</li>
          <li>Zoning — Hard zoning (WWN-based) untuk security</li>
          <li>LUN management — Provisioning, mapping, masking</li>
          <li>Thin vs Thick provisioning</li>
          <li>All-flash arrays (AFA) vs hybrid storage</li>
        </ul>
        <h3>Hardware Lifecycle Management</h3>
        <ul>
          <li>Asset tracking dari procurement hingga disposal</li>
          <li>End of Life (EOL) dan End of Support (EOS) planning</li>
          <li>Secure data destruction — DoD 5220.22-M, degaussing, shredding</li>
          <li>E-waste compliance — WEEE regulations</li>
        </ul>
      `
    },
    {
      icon: "🧬",
      title: "Software Engineering & Custom Development",
      category: "Software Engineering",
      preview: "Tier 4 custom software development: API integration, internal tooling, automation scripting, dan kolaborasi dengan vendor development teams.",
      tags: ["API", "Development", "Integration", "Python"],
      content: `
        <p>Ketika solusi vendor tidak mencukupi, Tier 4 melibatkan pengembangan custom atau deep integration yang memerlukan kemampuan software engineering.</p>
        <h3>API Integration Development</h3>
        <ul>
          <li>REST API — HTTP methods, authentication (OAuth2, API key, JWT)</li>
          <li>GraphQL — Query language untuk API yang fleksibel</li>
          <li>Webhooks — Event-driven integration antara sistem</li>
          <li>iPaaS (Integration Platform as a Service) — Mulesoft, Boomi, Workato</li>
          <li>Middleware — Message brokers (Kafka, RabbitMQ) untuk async integration</li>
        </ul>
        <h3>Internal Tooling Development</h3>
        <ul>
          <li>PowerShell scripts untuk Windows automation</li>
          <li>Python scripts untuk cross-platform automation</li>
          <li>Low-code platforms — Power Apps, ServiceNow Studio</li>
          <li>Internal dashboards — Grafana, Kibana, custom React apps</li>
        </ul>
        <h3>IT Automation dengan Python</h3>
        <pre>import requests
import json

# Example: Automated server health check via REST API
def check_server_health(server_url, api_token):
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json"
    }
    response = requests.get(
        f"{server_url}/api/v1/health",
        headers=headers,
        timeout=10
    )
    return response.json()

# Batch process multiple servers
servers = ["srv-01", "srv-02", "srv-03"]
for server in servers:
    status = check_server_health(
        f"https://{server}.company.com", 
        "your-api-token"
    )
    print(f"{server}: {status['status']}")</pre>
        <h3>Working with Vendor Dev Teams</h3>
        <ul>
          <li>Dokumentasikan requirements dengan jelas menggunakan user stories</li>
          <li>Defect reporting — Reproducible steps, screenshots, logs</li>
          <li>Feature requests — Business case dan ROI justification</li>
          <li>Testing — UAT participation dan acceptance criteria</li>
        </ul>
      `
    },
    {
      icon: "🌍",
      title: "Global IT Operations & ITIL Governance",
      category: "IT Governance",
      preview: "Mengelola operasional IT global: follow-the-sun support model, ITIL governance framework, audit & compliance, dan IT strategic planning.",
      tags: ["ITIL", "Governance", "Global Ops", "Compliance"],
      content: `
        <p>Operasional IT global memerlukan koordinasi lintas zona waktu, budaya, dan regulasi — dengan tetap mempertahankan konsistensi layanan dan compliance.</p>
        <h3>Follow-the-Sun Support Model</h3>
        <ul>
          <li>24/7 coverage dengan handoff antar region setiap shift</li>
          <li>Standarisasi prosedur dan knowledge base yang universal</li>
          <li>Structured handoff documentation — ongoing incidents, pending items</li>
          <li>Communication tools — Slack, Teams channels per timezone</li>
          <li>Shared ticketing system dengan SLA tracking global</li>
        </ul>
        <h3>IT Governance Frameworks</h3>
        <ul>
          <li>COBIT 2019 — Control Objectives for Information Technology</li>
          <li>ISO/IEC 27001 — Information Security Management System</li>
          <li>SOC 2 Type II — Trust Services Criteria (Security, Availability, etc.)</li>
          <li>PCI DSS — Payment Card Industry Data Security Standard</li>
          <li>GDPR/PDPA — Data privacy dan protection regulations</li>
        </ul>
        <h3>IT Audit & Compliance</h3>
        <ul>
          <li>Access control reviews — Quarterly user access certification</li>
          <li>Change management audit — Documentation dan approval trails</li>
          <li>Vulnerability assessment — Regular scanning dan remediation tracking</li>
          <li>Penetration testing — Annual third-party testing</li>
          <li>Business continuity testing — DR drills, tabletop exercises</li>
        </ul>
        <h3>IT Strategic Planning</h3>
        <ul>
          <li>3-5 year technology roadmap aligned dengan business strategy</li>
          <li>IT budget planning — CapEx vs OpEx balancing</li>
          <li>Technology debt management — Prioritize modernization</li>
          <li>Vendor portfolio rationalization — Reduce tool sprawl</li>
          <li>Digital transformation initiatives — Cloud-first, API-first strategies</li>
        </ul>
      `
    },
    {
      icon: "🤝",
      title: "OEM & Manufacturer Support Engagement",
      category: "OEM Relations",
      preview: "Bekerja dengan OEM support: Cisco TAC, Microsoft Premier, HP Care Pack, Dell ProSupport — proses, tips, dan memaksimalkan support contracts.",
      tags: ["TAC", "Premier Support", "OEM", "Contract"],
      content: `
        <p>Memahami cara bekerja secara efektif dengan OEM support dapat secara signifikan memperpendek waktu resolusi untuk isu kritis yang membutuhkan keterlibatan manufacturer.</p>
        <h3>Major Vendor Support Programs</h3>
        <ul>
          <li>Cisco TAC (Technical Assistance Center) — Tier 1-4 support, SmartNet contracts</li>
          <li>Microsoft Premier/Unified Support — Enterprise-level support dengan TAM</li>
          <li>Dell ProSupport Plus — Predictive issue detection, ProDeploy services</li>
          <li>HPE Pointnext — Technology services untuk HPE hardware</li>
          <li>VMware Global Support — Multi-cloud infrastructure support</li>
        </ul>
        <h3>Maximizing Cisco TAC Engagement</h3>
        <pre>Sebelum membuka case TAC:
✓ Kumpulkan show tech-support output
✓ Catat software version dan hardware model
✓ Buat topology diagram yang relevan
✓ Tulis clear problem statement
✓ Tentukan severity level (S1-S4) dengan tepat

S1 = Production network down, gunakan phone
S2 = Severely degraded, response 2 jam
S3 = Partial impact, response 8 jam
S4 = General query, response 2 hari</pre>
        <h3>Hardware RMA Process</h3>
        <ul>
          <li>Diagnostics — Jalankan vendor diagnostic tools (HP SSD Smart Check, Dell DSET)</li>
          <li>Case creation — Buka case dengan diagnostic output</li>
          <li>RMA approval — Vendor validate dan issue RMA number</li>
          <li>Shipping — Return defective unit, receive replacement</li>
          <li>Data destruction — Pastikan data dihapus sebelum return</li>
        </ul>
        <h3>Software Bug Escalation ke Vendor</h3>
        <ul>
          <li>Isolasi apakah masalah reproducible di clean environment</li>
          <li>Collect core dumps, memory dumps, detailed logs</li>
          <li>Minta vendor untuk membuka Engineering case (jika bukan L1/L2)</li>
          <li>Minta ETA untuk patch atau hotfix</li>
          <li>Explore workaround yang disediakan vendor selama patch development</li>
        </ul>
      `
    },
    {
      icon: "🚀",
      title: "Emerging Technologies & Innovation",
      category: "Innovation",
      preview: "AI/ML di IT Operations (AIOps), edge computing, quantum-safe cryptography, 5G enterprise, dan mempersiapkan infrastruktur untuk masa depan.",
      tags: ["AIOps", "Edge", "AI", "5G", "Quantum"],
      content: `
        <p>Tier 4 juga mencakup evaluasi dan implementasi teknologi emerging yang akan membentuk infrastruktur IT di masa depan.</p>
        <h3>AIOps (Artificial Intelligence for IT Operations)</h3>
        <ul>
          <li>Anomaly detection — ML model untuk identifikasi pola abnormal</li>
          <li>Predictive failure analysis — Mencegah kegagalan sebelum terjadi</li>
          <li>Auto-remediation — Automated response untuk insiden tertentu</li>
          <li>Noise reduction — Korelasi alert untuk kurangi alert fatigue</li>
          <li>Platform: Dynatrace, Moogsoft, IBM Watson AIOps, BigPanda</li>
        </ul>
        <h3>Edge Computing</h3>
        <ul>
          <li>Memproses data dekat sumber untuk mengurangi latency</li>
          <li>Use cases: IoT, autonomous vehicles, AR/VR, real-time analytics</li>
          <li>Edge platforms: AWS Outposts, Azure Stack Edge, Google Distributed Cloud</li>
          <li>5G Private Networks untuk enterprise edge deployments</li>
        </ul>
        <h3>Quantum-Safe Cryptography</h3>
        <ul>
          <li>Quantum computers akan dapat memecahkan RSA/ECC dalam beberapa tahun</li>
          <li>Post-Quantum Cryptography (PQC) algorithms — NIST standardization (2024)</li>
          <li>Harvest now, decrypt later attacks — Data diambil hari ini untuk didekripsi nanti</li>
          <li>Action: Audit cryptographic assets, rencana migrasi ke PQC</li>
        </ul>
        <h3>Mempersiapkan Tim untuk Future Tech</h3>
        <ul>
          <li>Continuous learning culture — Certifications, conferences (AWS re:Invent, Microsoft Ignite)</li>
          <li>Innovation labs — Dedicated time dan resources untuk eksplorasi teknologi baru</li>
          <li>PoC (Proof of Concept) methodology — Test before production adoption</li>
          <li>Technology radar — Tracking tech landscape (ThoughtWorks Tech Radar model)</li>
          <li>Cross-functional collaboration — IT + Business + Data Science untuk inovasi</li>
        </ul>
      `
    }
  ]
};

// ======== RENDER MODULES ========
function renderModules() {
  Object.entries(curriculum).forEach(([tier, modules]) => {
    const grid = document.getElementById(`grid-tier${tier}`);
    if (!grid) return;

    modules.forEach((mod, index) => {
      const card = document.createElement('div');
      card.className = 'module-card';
      card.setAttribute('data-tier', tier);
      card.setAttribute('data-index', index);
      card.innerHTML = `
        <span class="card-index">// ${String(index + 1).padStart(2, '0')}</span>
        <span class="card-icon">${mod.icon}</span>
        <h3 class="card-title">${mod.title}</h3>
        <p class="card-preview">${mod.preview}</p>
        <div class="card-footer">
          <span class="card-tag">${mod.tags[0]}</span>
          <span class="card-arrow">→</span>
        </div>
      `;
      card.addEventListener('click', () => openModal(tier, index));
      grid.appendChild(card);
    });
  });
}

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
