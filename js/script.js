// =====================================================================
// DATA
// =====================================================================

const SERVICES_DATA = [
  { id: "web-dev", title: "Full Stack Web Development", shortDescription: "Premium custom web crafting with cutting-edge designs, dynamic user states, robust database integration, and high speed optimizations.", iconName: "Globe", features: ["Custom Business & Brand Websites", "Interactive Digital Portfolios", "Highly Converting Landing Pages", "E-commerce Web Stores & Gateways", "Tailor-made cloud applications"] },
  { id: "programming", title: "Programming", shortDescription: "High-performance code execution, automated script creation, complex problem-solving, custom API integrations, and robust business logic.", iconName: "CodeXml", features: ["Dynamic Frontend Development", "Scalable Server-Side Backend logic", "Unified RESTful API integration", "Custom JavaScript & TypeScript tools", "Interactive data-handling solutions"] },
  { id: "graphic-design", title: "Graphic Design", shortDescription: "Visually arresting and narrative-driven graphics to establish visual authority. Posters, banners, print designs, and advertising materials.", iconName: "Palette", features: ["Stunning Social Media Graphics", "Branding kits and style guidelines", "Print-ready Posters & Event Flyers", "Corporate Brochure & Logo kits", "Promotional Advertising layouts"] },
  { id: "video-editing", title: "Video Editing", shortDescription: "High-octane visual storytelling. Cinematic cuts, sound design overlays, customized motion graphics, and engagement-boosters.", iconName: "Video", features: ["Engaging Brand Promotional Videos", "Optimized YouTube Video edits", "Fast-paced TikTok / Reels / Shorts", "Fluid Motion Graphics & titles", "Cinematic color grading & design"] },
  { id: "esports-branding", title: "eSports Branding", shortDescription: "Elite-level visual ecosystems for serious teams, streaming personalities, and organizations seeking professional competitive designs.", iconName: "Swords", features: ["Dynamic eSports Mascot Logos", "Custom Jersey & Apparel layouts", "Stream Overlay packages & web assets", "Team Roster Announcement designs", "Welcome banners & match schedule layouts", "Tournament graphics & prize banners"] }
];

const SKILLS_DATA = [
  { name: "HTML", percentage: 95, category: "technical" },
  { name: "CSS", percentage: 90, category: "technical" },
  { name: "Tailwind CSS", percentage: 98, category: "technical" },
  { name: "JavaScript", percentage: 95, category: "technical" },
  { name: "Full Stack Development", percentage: 90, category: "technical" },
  { name: "Programming & APIs", percentage: 88, category: "technical" },
  { name: "Graphic Design", percentage: 95, category: "creative" },
  { name: "Adobe Photoshop", percentage: 92, category: "creative" },
  { name: "Video Editing", percentage: 88, category: "creative" },
  { name: "Branding", percentage: 94, category: "creative" },
  { name: "UI/UX Design", percentage: 85, category: "creative" },
  { name: "eSports Mascot Design", percentage: 96, category: "creative" }
];

const PROJECTS_DATA = [
  { id: "proj-1", title: "Championship Poster", category: "social_media_graphics", imageUrl: "assets/images/Team Liquid ID MLBB Roster - MPL ID S13.jpg", tags: ["Social Media Banner", "Match Day", "Branding"], description: "A unified suite of social match-day announcements, player-of-the-match awards, and calendar outlines constructed to maintain clean corporate brand alignment across Twitter, Instagram, and Discord channels.", features: ["Premium templates pack", "Cohesive typographic grid system", "Dynamic tournament layouts", "Unified brand color profile"] },
  { id: "proj-2", title: "eSports logo design", category: "esports_logos", imageUrl: "assets/images/esports_logo_1781335710014.jpg", tags: ["Mascot Logo", "Phantom Theme", "Vector Art"], description: "A ghostly cyber-phantom mascot logo with glowing neon accents, custom typography, and a dark holographic shield backdrop for competitive gaming identity.", features: ["Vector scalable artwork", "Neon glow layer effects", "Dual-tone color palette", "Twitch/Discord avatar ready"] },
  { id: "proj-3", title: "OTT Platform website", category: "web_projects", imageUrl: "assets/images/movie.jpg", tags: ["React Dashboard", "Admin UI", "Analytics"], description: "A comprehensive SaaS administration panel with real-time analytics, user management, role-based access, and beautifully animated data visualization widgets.", features: ["Real-time data streams", "Role-based UI states", "Responsive sidebar layout", "Dark/light theme toggle"] },
  { id: "proj-9", title: "E-commerce website", category: "web_projects", imageUrl: "assets/images/web_dashboard_1781335760467.jpg", tags: ["React Dashboard", "Admin UI", "Analytics"], description: "A comprehensive SaaS administration panel with real-time analytics, user management, role-based access, and beautifully animated data visualization widgets.", features: ["Real-time data streams", "Role-based UI states", "Responsive sidebar layout", "Dark/light theme toggle"] },
  { id: "proj-10", title: "Portfolio Website", category: "web_projects", imageUrl: "assets/images/portfolio.jpg", tags: ["React Dashboard", "Admin UI", "Analytics"], description: "A comprehensive SaaS administration panel with real-time analytics, user management, role-based access, and beautifully animated data visualization widgets.", features: ["Real-time data streams", "Role-based UI states", "Responsive sidebar layout", "Dark/light theme toggle"] },
  { id: "proj-4", title: "Jersey Design", category: "jersey_designs", imageUrl: "assets/images/jersey_design_1781335724148.jpg", tags: ["Esports Jersey", "Speed Theme", "Sublimation"], description: "High-velocity racing-inspired esports jersey with aerodynamic stripe patterns, carbon fiber textures, and sponsor-ready chest and sleeve placements.", features: ["Sublimation print ready", "Sponsor panel layouts", "Speed-line gradient effects", "Player name/number zones"] },
  { id: "proj-6", title: "eSports Poster", category: "roster_designs", imageUrl: "assets/images/Marsha Lenathea.jpg", tags: ["Roster Card", "Team Reveal", "Titan Theme"], description: "A bold roster reveal card featuring holographic player portraits, titanium-textured nameplates, and dynamic team role indicators for tournament announcements.", features: ["Player stat overlay slots", "Holographic foil effects", "Role icon indicators", "Social media optimized"] },
  { id: "proj-7", title: "Wellcome Banner", category: "welcome_banners", imageUrl: "assets/images/Player welcome - POSTER DESIGN.jpg", tags: ["Welcome Banner", "Cyber Theme", "Event Start"], description: "An immersive cyber-arena welcome screen with neon grid backgrounds, animated countdown timers, and sponsor showcase panels for major tournament kickoffs.", features: ["Countdown widget included", "Sponsor logo zones", "Neon grid background", "1080p broadcast ready"] },
  { id: "proj-8", title: "MVP Highlight", category: "video_editing", imageUrl: "assets/images/mvp.jpg", tags: ["Cinematic Reel", "MVP Edit", "Sound Design"], description: "A cinematic MVP highlight reel featuring slow-motion clutch moments, custom color grading, bass-synced transitions, and broadcast-style lower thirds.", features: ["Color graded footage", "Synced audio design", "Lower third graphics", "Slow-motion keyframes"] }
];

const ROLES = ["Full Stack Developer", "Creative Programmer", "Graphic Designer", "Cinematic Video Editor", "eSports Branding Specialist"];

// =====================================================================
// ICON RENDERER
// =====================================================================

function getServiceSvg(iconName) {
  var cls = 'h-8 w-8 text-indigo-600 dark:text-cyan-400 transition-transform duration-300';
  switch (iconName) {
    case 'Globe': return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    case 'CodeXml': return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
    case 'Palette': return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.63 1.5-1.5 0-.33-.13-.63-.38-.88-.25-.25-.38-.55-.38-.88 0-.93.63-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z"/></svg>';
    case 'Video': return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>';
    case 'Swords': return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13.5 6.5L17 3h4v4l-3.5 3.5"/><path d="M3 3l7.07 7.07"/><path d="M21 21l-5.5-5.5"/></svg>';
    default: return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 4.25a6.204 6.204 0 0 1 2.42-.418 6.204 6.204 0 0 1 5.604 3.722l.023.055.051.029a6.204 6.204 0 0 1 2.292 2.46 6.204 6.204 0 0 1-.345 6.526l-.038.05.016.06a6.204 6.204 0 0 1-.854 4.358"/><path d="M4.25 9.937a6.204 6.204 0 0 1 4.358-.854l.06.016.05-.038a6.204 6.204 0 0 1 6.526-.345 6.204 6.204 0 0 1 2.46 2.292l.029.051.055.023a6.204 6.204 0 0 1 3.722 5.604"/><path d="M9.937 19.75a6.204 6.204 0 0 1-2.42.418A6.204 6.204 0 0 1 1.913 16.446"/><path d="M6.954 14.5a6.204 6.204 0 0 1-.713-1.912"/></svg>';
  }
}

// =====================================================================
// PRELOADER
// =====================================================================

(function initPreloader() {
  var preloader = document.getElementById('preloader');
  var progressBar = document.getElementById('progress-bar');
  var progressText = document.getElementById('progress-text');
  var loaded = 0;
  var interval = setInterval(function() {
    loaded += Math.floor(Math.random() * 25) + 10;
    if (loaded >= 100) { loaded = 100; clearInterval(interval); }
    progressBar.style.width = Math.min(loaded, 100) + '%';
    progressText.textContent = Math.min(loaded, 100) + '%';
    if (loaded >= 100) {
      setTimeout(function() {
        preloader.classList.add('preloader-exit');
        setTimeout(function() {
          preloader.style.display = 'none';
          initScrollReveal();
          initSkillsObserver();
        }, 500);
      }, 300);
    }
  }, 80);
})();

// =====================================================================
// THEME
// =====================================================================

var darkMode;

(function initTheme() {
  var saved = localStorage.getItem('theme');
  darkMode = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme();
})();

function applyTheme() {
  var moonIcon = document.getElementById('theme-icon-moon');
  var sunIcon = document.getElementById('theme-icon-sun');
  var moonDef = document.getElementById('theme-icon-moon-default');
  if (darkMode) {
    document.documentElement.classList.add('dark');
    if (moonDef) moonDef.style.display = 'none';
    if (moonIcon) moonIcon.style.display = '';
    if (sunIcon) sunIcon.style.display = 'none';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    if (moonDef) moonDef.style.display = '';
    if (moonIcon) moonIcon.style.display = 'none';
    if (sunIcon) sunIcon.style.display = 'none';
    localStorage.setItem('theme', 'light');
  }
}

function toggleTheme() { darkMode = !darkMode; applyTheme(); }

// =====================================================================
// MOBILE MENU
// =====================================================================

var mobileMenuOpen = false;

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  var menu = document.getElementById('mobile-menu');
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');
  if (!menu || !menuIcon || !closeIcon) return;
  if (mobileMenuOpen) {
    menu.style.height = menu.scrollHeight + 'px';
    menu.style.opacity = '1';
    menuIcon.style.display = 'none';
    closeIcon.style.display = '';
  } else {
    menu.style.height = '0';
    menu.style.opacity = '0';
    menuIcon.style.display = '';
    closeIcon.style.display = 'none';
  }
}

function closeMobileMenu() {
  if (mobileMenuOpen) {
    mobileMenuOpen = false;
    var menu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    if (menu) { menu.style.height = '0'; menu.style.opacity = '0'; }
    if (menuIcon) menuIcon.style.display = '';
    if (closeIcon) closeIcon.style.display = 'none';
  }
}

// =====================================================================
// SMOOTH SCROLL
// =====================================================================

function scrollToId(id) {
  closeMobileMenu();
  var el = document.getElementById(id);
  if (el) {
    var offset = 80;
    var pos = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }
}

// =====================================================================
// ACTIVE SECTION TRACKING
// =====================================================================

(function initActiveSection() {
  var sections = ['home', 'services', 'skills', 'products', 'contact'];
  var navLinks = document.querySelectorAll('.nav-link');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function updateActive() {
    var current = sections.find(function(s) {
      var el = document.getElementById(s);
      if (!el) return false;
      var rect = el.getBoundingClientRect();
      return rect.top <= 160 && rect.bottom >= 160;
    });
    if (!current) return;

    navLinks.forEach(function(link) {
      link.classList.remove('text-indigo-600', 'dark:text-cyan-400', 'bg-slate-100', 'dark:bg-slate-800/50');
      link.classList.add('text-slate-600', 'dark:text-slate-300');
      if (link.dataset.section === current) {
        link.classList.add('text-indigo-600', 'dark:text-cyan-400', 'bg-slate-100', 'dark:bg-slate-800/50');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      }
    });
    mobileLinks.forEach(function(link) {
      link.classList.remove('text-indigo-600', 'dark:text-cyan-400', 'bg-slate-100', 'dark:bg-slate-850');
      link.classList.add('text-slate-600', 'dark:text-slate-300');
      if (link.textContent.trim() === current) {
        link.classList.add('text-indigo-600', 'dark:text-cyan-400', 'bg-slate-100', 'dark:bg-slate-850');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      }
    });
  }
  window.addEventListener('scroll', updateActive);
  updateActive();
})();

// =====================================================================
// TYPEWRITER
// =====================================================================

(function initTypewriter() {
  var el = document.getElementById('typewriter');
  if (!el) return;
  var index = 0, subText = '', deleting = false;
  function tick() {
    var fullText = ROLES[index];
    subText = deleting ? fullText.slice(0, subText.length - 1) : fullText.slice(0, subText.length + 1);
    el.textContent = subText;
    var delay = deleting ? 40 : 85;
    if (!deleting && subText === fullText) { delay = 1800; deleting = true; }
    else if (deleting && subText === '') { deleting = false; index = (index + 1) % ROLES.length; }
    setTimeout(tick, delay);
  }
  tick();
})();

// =====================================================================
// SERVICES RENDER
// =====================================================================

(function renderServices() {
  var grid = document.getElementById('services-grid');
  if (!grid) return;
  SERVICES_DATA.forEach(function(svc, idx) {
    var card = document.createElement('div');
    card.className = 'scroll-reveal group relative bg-[#fcfdfe] dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-xs hover:shadow-xl hover:border-indigo-600/30 dark:hover:border-cyan-400/20 hover:-translate-y-1.5 transition-all duration-300';
    var feats = svc.features.map(function(f) {
      return '<li class="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-400"><svg class="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>' + f + '</span></li>';
    }).join('');
    var num = (idx + 1).toString().padStart(2, '0');
    card.innerHTML = '<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>' +
      '<div class="flex items-center justify-between mb-6"><div class="p-3.5 bg-slate-100 dark:bg-slate-850 group-hover:bg-indigo-600/10 dark:group-hover:bg-cyan-500/10 rounded-xl transition-all duration-300 inline-block">' + getServiceSvg(svc.iconName) + '</div><span class="font-mono text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-805 px-2.5 py-1 rounded">' + num + '</span></div>' +
      '<h4 class="font-display font-semibold text-lg sm:text-xl text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">' + svc.title + '</h4>' +
      '<p class="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">' + svc.shortDescription + '</p>' +
      '<ul class="mb-8 space-y-2.5">' + feats + '</ul>' +
      '<button onclick="scrollToId(\'contact\')" class="w-full inline-flex justify-between items-center px-4 py-2.5 text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 bg-slate-100/75 hover:bg-indigo-600 group-hover:bg-indigo-600 dark:bg-slate-800/40 dark:hover:bg-cyan-500 dark:group-hover:bg-cyan-500 hover:text-white dark:hover:text-white dark:group-hover:text-white rounded-lg transition-all duration-300 cursor-pointer"><span>Request Proposal</span><svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>';
    grid.appendChild(card);
  });
})();

// =====================================================================
// SKILLS RENDER
// =====================================================================

(function renderSkills() {
  var container = document.getElementById('skills-container');
  if (!container) return;
  var tech = SKILLS_DATA.filter(function(s) { return s.category === 'technical'; });
  var creative = SKILLS_DATA.filter(function(s) { return s.category === 'creative'; });

  function buildBox(title, icon, skills) {
    var bars = skills.map(function(s) {
      return '<div class="space-y-1.5"><div class="flex justify-between font-medium text-xs"><span class="text-slate-800 dark:text-slate-200">' + s.name + '</span><span class="text-indigo-600 dark:text-cyan-400 font-mono">' + s.percentage + '%</span></div><div class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"><div class="skill-bar h-full rounded-full skill-bar-fill" style="width:0%" data-width="' + s.percentage + '"></div></div></div>';
    }).join('');
    return '<div class="space-y-6 text-left"><div class="flex items-center space-x-2 pb-2 border-b border-slate-200/60 dark:border-slate-800/60">' + icon + '<span class="font-display font-bold text-sm tracking-wide text-indigo-600 dark:text-cyan-400 uppercase">' + title + '</span></div><div class="space-y-4">' + bars + '</div></div>';
  }

  container.innerHTML = buildBox('Technical Skills', '<svg class="h-5 w-5 text-indigo-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', tech) +
    buildBox('Creative Skills', '<svg class="h-5 w-5 text-indigo-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.63 1.5-1.5 0-.33-.13-.63-.38-.88-.25-.25-.38-.55-.38-.88 0-.93.63-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z"/></svg>', creative);
})();

// =====================================================================
// SKILLS OBSERVER
// =====================================================================

var skillsAnimated = false;

function initSkillsObserver() {
  var container = document.getElementById('skills-container');
  if (!container) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !skillsAnimated) {
        skillsAnimated = true;
        var bars = container.querySelectorAll('.skill-bar');
        bars.forEach(function(bar) {
          var w = bar.getAttribute('data-width');
          setTimeout(function() { bar.style.width = w + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.1 });
  observer.observe(container);
}

// =====================================================================
// PORTFOLIO - PAGINATION
// =====================================================================

var PER_PAGE = 8;
var currentPage = 0;

function renderProjects() {
  var container = document.getElementById('projects-grid');
  if (!container) return;
  container.innerHTML = '';

  var totalPages = Math.ceil(PROJECTS_DATA.length / PER_PAGE);
  var start = currentPage * PER_PAGE;
  var items = PROJECTS_DATA.slice(start, start + PER_PAGE);

  items.forEach(function(project, idx) {
    var card = document.createElement('div');
    card.className = 'group relative bg-white dark:bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/40 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/15 dark:hover:shadow-cyan-500/10 hover:border-indigo-300/60 dark:hover:border-cyan-400/30 transition-all duration-400 text-left';
    card.dataset.projectId = project.id;
    card.style.animation = 'cardEntrance 0.4s ease forwards';
    card.style.animationDelay = (idx * 0.05) + 's';

    var tagsHtml = project.tags.slice(0, 2).map(function(t) {
      return '<span class="font-mono text-[9px] text-indigo-500/70 dark:text-cyan-400/60 font-medium">#' + t + '</span>';
    }).join('');

    card.innerHTML =
      '<div class="h-52 overflow-hidden relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-950">' +
        '<img src="' + project.imageUrl + '" alt="' + project.title + '" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" referrerpolicy="no-referrer" />' +
        '<div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">' +
          '<button class="view-project-btn px-6 py-2.5 bg-white text-indigo-700 font-display text-xs font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-200 pointer-events-auto cursor-pointer">' +
            'View Project' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="p-5 space-y-3">' +
        '<h4 class="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">' + project.title + '</h4>' +
        '<div class="flex flex-wrap gap-1.5">' + tagsHtml + '</div>' +
        '<button class="view-project-btn w-full mt-2 inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 px-3 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 pointer-events-auto cursor-pointer">' +
          'View Project' +
          '<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
        '</button>' +
      '</div>';
    container.appendChild(card);
  });

  updateButtons();
  renderPagination(totalPages);
}

function updateButtons() {
  var totalPages = Math.ceil(PROJECTS_DATA.length / PER_PAGE);
  document.getElementById('projects-prev').disabled = currentPage === 0;
  document.getElementById('projects-next').disabled = currentPage >= totalPages - 1;
}

function renderPagination(totalPages) {
  var container = document.getElementById('projects-pagination');
  if (!container) return;
  container.innerHTML = '';

  for (var i = 0; i < totalPages; i++) {
    var dot = document.createElement('button');
    dot.className = 'w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ' +
      (i === currentPage
        ? 'bg-indigo-600 dark:bg-cyan-400 w-6'
        : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500');
    dot.setAttribute('aria-label', 'Page ' + (i + 1));
    dot.addEventListener('click', function(page) {
      return function() {
        currentPage = page;
        renderProjects();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    }(i));
    container.appendChild(dot);
  }
}

renderProjects();

document.getElementById('projects-prev').addEventListener('click', function() {
  if (currentPage > 0) { currentPage--; renderProjects(); }
});

document.getElementById('projects-next').addEventListener('click', function() {
  var totalPages = Math.ceil(PROJECTS_DATA.length / PER_PAGE);
  if (currentPage < totalPages - 1) { currentPage++; renderProjects(); }
});

// Event delegation for project cards
document.getElementById('projects-grid').addEventListener('click', function(e) {
  var btn = e.target.closest('.view-project-btn');
  if (!btn) return;
  var card = btn.closest('[data-project-id]');
  if (card) openModal(card.dataset.projectId);
});

// =====================================================================
// MODAL
// =====================================================================

function openModal(projectId) {
  var project = PROJECTS_DATA.find(function(p) { return p.id === projectId; });
  if (!project) return;

  document.getElementById('modal-image').src = project.imageUrl;
  document.getElementById('modal-image').alt = project.title;

  var overlay = document.getElementById('details-modal-overlay');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var overlay = document.getElementById('details-modal-overlay');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

function hireFromModal() { closeModal(); scrollToId('contact'); }

document.getElementById('details-modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var overlay = document.getElementById('details-modal-overlay');
    if (overlay.classList.contains('show')) closeModal();
  }
});

// =====================================================================
// BACK TO TOP
// =====================================================================

(function initBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('show', window.scrollY > 500);
  });
})();

// =====================================================================
// SCROLL REVEAL
// =====================================================================

function initScrollReveal() {
  var revealEls = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-scale');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(function(el) { observer.observe(el); });
}

// =====================================================================
// CONTACT FORM (FIXED)
// =====================================================================

(function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var inputs = {
    fullName: document.getElementById('fullName'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
  };
  var errors = {
    fullName: document.getElementById('fullName-error'),
    email: document.getElementById('email-error'),
    subject: document.getElementById('subject-error'),
    message: document.getElementById('message-error')
  };
  var submitBtn = document.getElementById('submit-form-btn');
  var submitContent = document.getElementById('submit-btn-content');
  var successBanner = document.getElementById('form-success');

  function showError(el, msg) {
    if (!el) return;
    el.style.display = 'flex';
    el.innerHTML = '<svg class="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ' + msg;
    el.parentElement.classList.add('error-shake');
    setTimeout(function() { el.parentElement.classList.remove('error-shake'); }, 400);
  }

  function clearError(el) { if (el) { el.style.display = 'none'; el.innerHTML = ''; } }

  function markInvalid(input) {
    if (!input) return;
    input.classList.add('border-red-500/60', 'focus:border-red-500');
    input.classList.remove('border-slate-200', 'dark:border-slate-800/80', 'focus:border-indigo-650', 'dark:focus:border-cyan-400');
  }

  function markValid(input) {
    if (!input) return;
    input.classList.remove('border-red-500/60', 'focus:border-red-500');
    input.classList.add('border-slate-200', 'dark:border-slate-800/80', 'focus:border-indigo-650', 'dark:focus:border-cyan-400');
  }

  function validate() {
    var valid = true;
    if (!inputs.fullName.value.trim()) { showError(errors.fullName, 'Please provide your full name.'); markInvalid(inputs.fullName); valid = false; }
    else { clearError(errors.fullName); markValid(inputs.fullName); }

    if (!inputs.email.value.trim()) { showError(errors.email, 'Please specify your email address.'); markInvalid(inputs.email); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email.value)) { showError(errors.email, 'Please enter a valid email format.'); markInvalid(inputs.email); valid = false; }
    else { clearError(errors.email); markValid(inputs.email); }

    if (!inputs.subject.value.trim()) { showError(errors.subject, 'Please enter a subject line.'); markInvalid(inputs.subject); valid = false; }
    else { clearError(errors.subject); markValid(inputs.subject); }

    if (!inputs.message.value.trim()) { showError(errors.message, 'Message cannot be empty.'); markInvalid(inputs.message); valid = false; }
    else if (inputs.message.value.trim().length < 10) { showError(errors.message, 'Message must be at least 10 characters long.'); markInvalid(inputs.message); valid = false; }
    else { clearError(errors.message); markValid(inputs.message); }
    return valid;
  }

  // Clear errors on input
  Object.keys(inputs).forEach(function(key) {
    var input = inputs[key];
    if (!input) return;
    input.addEventListener('input', function() {
      var errEl = errors[key];
      if (errEl && errEl.style.display !== 'none') { clearError(errEl); markValid(input); }
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitContent.innerHTML = '<span class="flex items-center space-x-2"><svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg><span>Dispatching...</span></span>';

    setTimeout(function() {
      submitBtn.disabled = false;
      submitContent.innerHTML = '<svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg><span>Dispatch Inquiry Pitch</span>';
      inputs.fullName.value = ''; inputs.email.value = ''; inputs.subject.value = ''; inputs.message.value = '';
      if (successBanner) {
        successBanner.style.display = 'flex';
        successBanner.classList.add('form-success-show');
      }
      setTimeout(function() { if (successBanner) { successBanner.style.display = 'none'; } }, 5000);
    }, 1200);
  });
})();

function dismissSuccess() {
  var banner = document.getElementById('form-success');
  if (banner) banner.style.display = 'none';
}
