/* ============================================================
   Ismail Ally — Portfolio Interactions
   - Navigation, scroll effects, typing animation
   - Contact form opens the visitor's email app (works on Android/Gmail)
   - Translations: English, Français, Kiswahili, Ikirundi
   ============================================================ */

/* ---------- Translations ---------- */
const I18N = {
  en: {
    nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact", nav_cta: "Let's Talk",
    badge_available: "Available for new projects",
    hero_greeting: "Hello, I'm",
    hero_desc: "An AI Engineer who works with different programming languages. I build websites, Android and Windows apps — and I use AI across different fields to create intelligent agents and smarter solutions.",
    btn_projects: "View My Projects", btn_contact: "Contact Me",
    visual_role: "AI Engineer & Developer",
    chip_problem_solver: "Problem Solver", chip_ai_agents: "AI Agents",
    scroll_down: "Scroll down",

    kicker_about: "01 / About",
    title_about: 'A little <span class="gradient-text">about me</span>',
    subtitle_about: "Passionate about technology, from the hardware up to intelligent software.",
    about_p1: "I'm Ismail Ally. I hold a diploma in Informatique de Maintenance, which gave me a solid foundation in both software and hardware.",
    about_p2: "I enjoy turning ideas into real products — whether that's a responsive website, an Android app, a Windows application, or an intelligent agent powered by AI. I'm constantly learning and exploring how different programming languages and AI tools can solve everyday problems.",
    text_link: "Let's work together",
    info_diploma: "Diploma", info_diploma_val: "Informatique de Maintenance",
    info_strength: "Strength", info_strength_val: "Software & Hardware",
    info_focus: "Focus", info_focus_val: "Web, Android, Windows & AI",
    info_available: "Availability", info_available_val: "Open to new projects",

    kicker_skills: "02 / Skills",
    title_skills: 'My skills & <span class="gradient-text">knowledge</span>',
    subtitle_skills: "The tools and technologies I use to bring ideas to life.",
    skill_web_title: "Web Development", skill_web_desc: "Building responsive, modern websites with clean and user-friendly interfaces.",
    skill_android_title: "Android Apps", skill_android_desc: "Programming mobile applications for Android with smooth and intuitive experiences.",
    skill_windows_title: "Windows Apps", skill_windows_desc: "Creating desktop applications for Windows to solve tasks efficiently.",
    skill_ai_title: "Artificial Intelligence", skill_ai_desc: "Using AI across different fields and building intelligent agents that automate work.",
    proficiency_title: "Technical proficiency",
    bar_web: "Web Development", bar_android: "Android Development", bar_windows: "Windows Apps", bar_ai: "AI & Agents",

    kicker_projects: "03 / Projects",
    title_projects: 'Things I\'ve <span class="gradient-text">built</span>',
    subtitle_projects: "A project I'm proud of — take a look at the live website.",
    proj2_tag2: "Frontend",
    proj2_desc: "A modern React frontend application with a polished, responsive user interface.",
    link_visit: "Visit Website",

    kicker_contact: "04 / Contact",
    title_contact: 'Let\'s get <span class="gradient-text">in touch</span>',
    subtitle_contact: "Have a project or an idea? Send me a message and let's make it happen.",
    contact_heading: "Contact details",
    contact_intro: "Feel free to reach out through any of the channels below — I'd love to hear from you.",
    contact_email: "Email", contact_whatsapp: "WhatsApp", contact_github: "GitHub",
    form_name: "Your name", form_email: "Your email", form_message: "Message",
    ph_name: "Ismail Ally", ph_email: "you@example.com", ph_message: "Tell me about your project...",
    btn_send: "Send Message",
    form_hint: "This opens your email app — please press Send there.",
    form_opening: "Your email app is opening — please press Send to finish.",
    footer_rights: "All rights reserved.", footer_built: "Built with HTML, CSS & JavaScript"
  },

  fr: {
    nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences", nav_projects: "Projets", nav_contact: "Contact", nav_cta: "Parlons-en",
    badge_available: "Disponible pour de nouveaux projets",
    hero_greeting: "Bonjour, je suis",
    hero_desc: "Un ingénieur IA qui maîtrise différents langages de programmation. Je crée des sites web, des applications Android et Windows — et j'utilise l'IA dans différents domaines pour concevoir des agents intelligents et des solutions plus performantes.",
    btn_projects: "Voir mes projets", btn_contact: "Me contacter",
    visual_role: "Ingénieur IA & Développeur",
    chip_problem_solver: "Résolveur de problèmes", chip_ai_agents: "Agents IA",
    scroll_down: "Défiler",

    kicker_about: "01 / À propos",
    title_about: 'Quelques mots <span class="gradient-text">sur moi</span>',
    subtitle_about: "Passionné par la technologie, du matériel aux logiciels intelligents.",
    about_p1: "Je m'appelle Ismail Ally. Je suis titulaire d'un diplôme en Informatique de Maintenance, qui m'a donné de solides bases en logiciel et en matériel.",
    about_p2: "J'aime transformer les idées en produits concrets — site web, application Android, application Windows ou agent intelligent piloté par l'IA. J'apprends et j'explore constamment comment les langages de programmation et les outils d'IA peuvent résoudre les problèmes du quotidien.",
    text_link: "Travaillons ensemble",
    info_diploma: "Diplôme", info_diploma_val: "Informatique de Maintenance",
    info_strength: "Atout", info_strength_val: "Logiciel & Matériel",
    info_focus: "Axes", info_focus_val: "Web, Android, Windows & IA",
    info_available: "Disponibilité", info_available_val: "Ouvert aux nouveaux projets",

    kicker_skills: "02 / Compétences",
    title_skills: 'Mes compétences et <span class="gradient-text">connaissances</span>',
    subtitle_skills: "Les outils et technologies que j'utilise pour concrétiser les idées.",
    skill_web_title: "Développement web", skill_web_desc: "Création de sites web modernes et adaptés à tous les écrans, avec des interfaces propres et faciles à utiliser.",
    skill_android_title: "Applications Android", skill_android_desc: "Programmation d'applications mobiles Android avec des expériences fluides et intuitives.",
    skill_windows_title: "Applications Windows", skill_windows_desc: "Création d'applications de bureau Windows pour résoudre les tâches efficacement.",
    skill_ai_title: "Intelligence artificielle", skill_ai_desc: "Utilisation de l'IA dans différents domaines et création d'agents intelligents qui automatisent les tâches.",
    proficiency_title: "Compétences techniques",
    bar_web: "Développement web", bar_android: "Développement Android", bar_windows: "Applications Windows", bar_ai: "IA & Agents",

    kicker_projects: "03 / Projets",
    title_projects: 'Ce que j\'ai <span class="gradient-text">réalisé</span>',
    subtitle_projects: "Un projet dont je suis fier — découvrez le site en ligne.",
    proj2_tag2: "Frontend",
    proj2_desc: "Une application frontend React moderne avec une interface utilisateur soignée et adaptée à tous les écrans.",
    link_visit: "Voir le site",

    kicker_contact: "04 / Contact",
    title_contact: 'Entrons en <span class="gradient-text">contact</span>',
    subtitle_contact: "Vous avez un projet ou une idée ? Envoyez-moi un message et réalisons-le ensemble.",
    contact_heading: "Coordonnées",
    contact_intro: "N'hésitez pas à me joindre par l'un des canaux ci-dessous — je serai ravi de vous lire.",
    contact_email: "E-mail", contact_whatsapp: "WhatsApp", contact_github: "GitHub",
    form_name: "Votre nom", form_email: "Votre e-mail", form_message: "Message",
    ph_name: "Ismail Ally", ph_email: "vous@exemple.com", ph_message: "Parlez-moi de votre projet...",
    btn_send: "Envoyer le message",
    form_hint: "Cela ouvre votre application e-mail — appuyez sur Envoyer.",
    form_opening: "Votre application e-mail s'ouvre — appuyez sur Envoyer pour terminer.",
    footer_rights: "Tous droits réservés.", footer_built: "Construit avec HTML, CSS et JavaScript"
  },

  sw: {
    nav_home: "Nyumbani", nav_about: "Kuhusu", nav_skills: "Ujuzi", nav_projects: "Miradi", nav_contact: "Mawasiliano", nav_cta: "Tuongee",
    badge_available: "Tayari kwa miradi mipya",
    hero_greeting: "Habari, mimi ni",
    hero_desc: "Mhandisi wa AI anayefahamu lugha mbalimbali za programu. Ninatengeneza tovuti, programu za Android na Windows — na nitumia AI katika nyanja mbalimbali kuunda wakala wenye akili na suluhisho bora zaidi.",
    btn_projects: "Tazama miradi yangu", btn_contact: "Wasiliana nami",
    visual_role: "Mhandisi wa AI & Msanidi",
    chip_problem_solver: "Mtatuzi wa matatizo", chip_ai_agents: "Wakala wa AI",
    scroll_down: "Tembeza chini",

    kicker_about: "01 / Kuhusu",
    title_about: 'Kujua <span class="gradient-text">kidogo kuhusu mimi</span>',
    subtitle_about: "Napenda teknolojia, kutoka vifaa hadi programu mahiri.",
    about_p1: "Mimi ni Ismail Ally. Nina diploma ya Informatique de Maintenance, ambayo ilinipa msingi mzuri katika programu na vifaa.",
    about_p2: "Napenda kubadilisha mawazo kuwa bidhaa halisi — iwe tovuti, programu ya Android, programu ya Windows, au wakala mahiri unaotumia AI. Ninajifunza na kuchunguza kila wakati jinsi lugha za programu na zana za AI zinavyotatua matatizo ya kila siku.",
    text_link: "Tufanye kazi pamoja",
    info_diploma: "Diploma", info_diploma_val: "Informatique de Maintenance",
    info_strength: "Nguvu", info_strength_val: "Programu & Vifaa",
    info_focus: "Mwelekeo", info_focus_val: "Tovuti, Android, Windows & AI",
    info_available: "Upatikanaji", info_available_val: "Tayari kwa miradi mipya",

    kicker_skills: "02 / Ujuzi",
    title_skills: 'Ujuzi na <span class="gradient-text">maarifa</span> yangu',
    subtitle_skills: "Zana na teknolojia ninazotumia kutengeneza mawazo.",
    skill_web_title: "Utengenezaji wa Tovuti", skill_web_desc: "Kutengeneza tovuti za kisasa zinazofaa kwenye skrini zote, zenye kiolesura safi na rahisi kutumia.",
    skill_android_title: "Programu za Android", skill_android_desc: "Kuandaa programu za simu za Android zenye uzoefu mzuri na rahisi.",
    skill_windows_title: "Programu za Windows", skill_windows_desc: "Kutengeneza programu za mezani za Windows kutatua kazi kwa ufanisi.",
    skill_ai_title: "Akili Bandia (AI)", skill_ai_desc: "Kutumia AI katika nyanja mbalimbali na kuunda wakala mahiri wanaofanya kazi kiotomatiki.",
    proficiency_title: "Ujuzi wa kiufundi",
    bar_web: "Utengenezaji wa tovuti", bar_android: "Utengenezaji wa Android", bar_windows: "Programu za Windows", bar_ai: "AI & Wakala",

    kicker_projects: "03 / Miradi",
    title_projects: 'Vitu nime<span class="gradient-text">vitengeneza</span>',
    subtitle_projects: "Mradi ninoujivunia — tazama tovuti ya mtandaoni.",
    proj2_tag2: "Frontend",
    proj2_desc: "Tovuti ya kisasa ya React yenye kiolesura maridadi kinachofaa kwenye skrini zote.",
    link_visit: "Tembelea Tovuti",

    kicker_contact: "04 / Mawasiliano",
    title_contact: 'Tu<span class="gradient-text">wasiliane</span>',
    subtitle_contact: "Una mradi au wazo? Nitume ujumbe na tuliandalie pamoja.",
    contact_heading: "Taarifa za mawasiliano",
    contact_intro: "Karibu unifikie kupitia njia zilizo hapa chini — ningefurahi kusikia kutoka kwako.",
    contact_email: "Barua pepe", contact_whatsapp: "WhatsApp", contact_github: "GitHub",
    form_name: "Jina lako", form_email: "Barua pepe yako", form_message: "Ujumbe",
    ph_name: "Ismail Ally", ph_email: "wewe@example.com", ph_message: "Niambie kuhusu mradi wako...",
    btn_send: "Tuma Ujumbe",
    form_hint: "Hii itafungua programu yako ya barua pepe — bonyeza Tuma.",
    form_opening: "Programu ya barua pepe inafunguka — bonyeza Tuma kumaliza.",
    footer_rights: "Haki zote zimehifadhiwa.", footer_built: "Imetengenezwa kwa HTML, CSS na JavaScript"
  },

  rn: {
    nav_home: "Murugo", nav_about: "Ivyerekeye", nav_skills: "Ubumenyi", nav_projects: "Imishinga", nav_contact: "Itumanaho", nav_cta: "Tuvugane",
    badge_available: "Ndi witeguriye imishinga mishya",
    hero_greeting: "Muraho, ndi",
    hero_desc: "Ndi injeniyeri wa AI izesa indimi zitandukanye za porogaramu. Nubaka urubuga, porogaramu za Android n'iza Windows — kandi nkoresha AI mu nzego zitandukanye kugira nde abakozi b'ubwenge n'ibisubizo vyiza.",
    btn_projects: "Tazama imishinga yanje", btn_contact: "Ndwandikire",
    visual_role: "Injeniyeri wa AI & Umwanditsi",
    chip_problem_solver: "Umuranduzi w'ibibazo", chip_ai_agents: "Abakozi ba AI",
    scroll_down: "Manuka hasi",

    kicker_about: "01 / Ivyerekeye",
    title_about: 'Ivyerekeye <span class="gradient-text">je</span>',
    subtitle_about: "Nkunda ikorwa, kuva ku bikoresho gushika kuri porogaramu z'ubwenge.",
    about_p1: "Ndi Ismail Ally. Ndi n'impapuro z'ubumenyi mu « Informatique de Maintenance », zanpa ubumenyi bukomeye mu bikoresho na porogaramu.",
    about_p2: "Nkunda guhindura ivyiyumviro mu bikorwa vya nyabene — yaba urubuga, porogaramu ya Android, porogaramu ya Windows, canke umukozi w'ubwenge akoresha AI. Ndi n'umwete wo kwiga no gukoresha indimi za porogaramu n'ibikoresho vya AI kugira ndandure ibibazo vya misi yose.",
    text_link: "Tugire ubufatanye",
    info_diploma: "Impapuro", info_diploma_val: "Informatique de Maintenance",
    info_strength: "Ubushobozi", info_strength_val: "Porogaramu & Ibikoresho",
    info_focus: "Ivyo nkora", info_focus_val: "Urubuga, Android, Windows & AI",
    info_available: "Kwiteguriye", info_available_val: "Ndi witeguriye imishinga mishya",

    kicker_skills: "02 / Ubumenyi",
    title_skills: 'Ubumenyi <span class="gradient-text">bwange</span>',
    subtitle_skills: "Ibikoresho n'ubuhanga nkoresha kugira nshyire ivyiyumviro mu nkora.",
    skill_web_title: "Uguhenda urubuga", skill_web_desc: "Kubaka urubuga rw'iki gihe rushinga ku mashini zose, rufise kibesho kizwi kandi corohe gukoresha.",
    skill_android_title: "Porogaramu za Android", skill_android_desc: "Kwandika porogaramu za Android zitanga ubunararibonye bwiza kandi butagoranye.",
    skill_windows_title: "Porogaramu za Windows", skill_windows_desc: "Kubaka porogaramu za Windows zo kumuzingo kugira zirangure imirimo neza.",
    skill_ai_title: "Ubwenge Buhimbanyi (AI)", skill_ai_desc: "Gukoresha AI mu nzego zitandukanye no kubaka abakozi b'ubwenge bakora ibintu vyikora.",
    proficiency_title: "Ubumenyi bwa tekinike",
    bar_web: "Uguhenda urubuga", bar_android: "Uguhenda Android", bar_windows: "Porogaramu za Windows", bar_ai: "AI & Abakozi",

    kicker_projects: "03 / Imishinga",
    title_projects: 'Ivyo nari <span class="gradient-text">nakoze</span>',
    subtitle_projects: "Umushinga nkirabira — tazama urubuga kuri internet.",
    proj2_tag2: "Frontend",
    proj2_desc: "Urubuga rwa React rw'iki gihe rufise kibesho cyiza kandi gishinga ku mashini zose.",
    link_visit: "Tazama Urubuga",

    kicker_contact: "04 / Itumanaho",
    title_contact: 'Tugire <span class="gradient-text">itumanaho</span>',
    subtitle_contact: "Ufise umushinga canke ivyiyumviro? Wandikire, tuhakorere hamwe.",
    contact_heading: "Amakuru y'itumanaho",
    contact_intro: "Usabwa kundwandikira kuri imwe muri izi nzira — nkanezerwa kumva amakuru yawe.",
    contact_email: "Imeyili", contact_whatsapp: "WhatsApp", contact_github: "GitHub",
    form_name: "Izina ryawe", form_email: "Imeyili yawe", form_message: "Ubutumwa",
    ph_name: "Ismail Ally", ph_email: "wewe@example.com", ph_message: "Mbwire kuri umushinga wawe...",
    btn_send: "Ohereza Ubutumwa",
    form_hint: "Ibi bizifungura porogaramu ya imeyili — ganya Ohereza.",
    form_opening: "Porogaramu ya imeyili irafunguka — ganya Ohereza kugira uhereze.",
    footer_rights: "Uburenganzira bwose bwashizweho.", footer_built: "Yubatswe na HTML, CSS na JavaScript"
  }
};

/* Role titles used by the typing animation, one list per language */
const ROLES = {
  en: ["AI Engineer", "Web Developer", "Android App Developer", "Windows App Developer", "AI Agent Builder"],
  fr: ["Ingénieur IA", "Développeur web", "Développeur d'apps Android", "Développeur d'apps Windows", "Créateur d'agents IA"],
  sw: ["Mhandisi wa AI", "Msanidi wa Tovuti", "Msanidi wa Programu za Android", "Msanidi wa Programu za Windows", "Mtengenezaji wa Wakala wa AI"],
  rn: ["Injeniyeri wa AI", "Umwanditsi w'urubuga", "Umwanditsi wa porogaramu za Android", "Umwanditsi wa porogaramu za Windows", "Umwubatsi w'abakozi ba AI"]
};

document.addEventListener("DOMContentLoaded", () => {
  /* ================= Language switching ================= */
  let currentLang = localStorage.getItem("ismail-portfolio-lang") || "en";
  if (!I18N[currentLang]) currentLang = "en";

  const languageSelect = document.getElementById("languageSelect");

  function applyLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    const dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value === undefined) return;
      if (value.includes("<")) el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = dict[el.dataset.i18nPlaceholder];
      if (value !== undefined) el.placeholder = value;
    });

    if (languageSelect) languageSelect.value = lang;
    localStorage.setItem("ismail-portfolio-lang", lang);
    resetTyping();
  }

  languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));

  /* ================= Mobile navigation ================= */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");

  const closeMenu = () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinkItems.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  /* ================= Sticky navbar & back-to-top ================= */
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  const handleScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ================= Active nav link ================= */
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinkItems.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  document.querySelectorAll("section[id]").forEach((section) => navObserver.observe(section));

  /* ================= Reveal on scroll ================= */
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el, index) => {
    el.style.transitionDelay = `${(index % 4) * 80}ms`;
    revealObserver.observe(el);
  });

  /* ================= Animated skill bars ================= */
  const barObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.level}%`;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".bar-fill").forEach((bar) => barObserver.observe(bar));

  /* ================= Typing animation ================= */
  const typedText = document.getElementById("typed-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimer = null;

  function type() {
    const roles = ROLES[currentLang] || ROLES.en;
    const word = roles[roleIndex];

    if (isDeleting) {
      typedText.textContent = word.substring(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    } else {
      typedText.textContent = word.substring(0, ++charIndex);
      if (charIndex === word.length) {
        isDeleting = true;
        typingTimer = setTimeout(type, 1800);
        return;
      }
    }

    typingTimer = setTimeout(type, isDeleting ? 55 : 110);
  }

  function resetTyping() {
    clearTimeout(typingTimer);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typedText.textContent = "";
    type();
  }

  /* ================= Contact form =================
     A static website cannot send email by itself. The form builds a
     prefilled email and opens the visitor's mail app (Gmail on Android),
     where they simply press Send. */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  const recipient = "alyprograma@gmail.com";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const message = form.elements.namedItem("message").value.trim();

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    formNote.dataset.mailto = mailto;
    formNote.textContent = I18N[currentLang].form_opening;
    window.location.href = mailto;
  });

  /* ================= Footer year ================= */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ================= Apply saved language at startup ================= */
  applyLanguage(currentLang);
});
