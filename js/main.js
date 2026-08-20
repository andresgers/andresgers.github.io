const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      research: "Research",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    },
    subtitle: ["Genetics", "Bioinformatics", "Molecular Modeling"],
    featured: {
      label: "Featured research",
      title: "In silico analysis of flavonoids against HSV DNA polymerase UL30",
      desc: "Molecular docking, genomic variation and structural analysis applied to the study of potential antiviral compounds."
    },
    about: {
      label: "About the project",
      content: "This project integrates bioinformatics, genetic variation analysis and molecular modeling to study the interactions of <strong>quercetin</strong> and <strong>rutin</strong> with the DNA polymerase UL30 of herpes simplex virus (HSV). By combining docking simulations with structural and genomic analysis, the work explores the potential of natural flavonoids as candidate antiviral compounds."
    },
    footer: "Research Hub · 2026",
    links: [
      {
        label: "GitHub",
        description: "Code, data and research resources",
        url: "https://github.com/andresgers",
        icon: "github"
      },
      {
        label: "LinkedIn",
        description: "Academic and professional profile",
        url: "https://www.linkedin.com/in/andresgers/",
        icon: "linkedin"
      },
      {
        label: "Laboratory",
        description: "MADAR Laboratory website and Instagram",
        icon: "flask",
        subLinks: [
          { label: "Website", url: "https://andresgers.github.io/laboratorio_madar" },
          { label: "Instagram", url: "https://www.instagram.com/madar.unam/" }
        ]
      },
      {
        label: "Thesis / Project",
        description: "Thesis, code and supplementary material",
        url: "https://github.com/andresgers/tesis_HSV",
        icon: "document"
      },
      {
        label: "ORCID",
        description: "Researcher identifier and publications",
        url: "#",
        icon: "orcid"
      },
      {
        label: "Contact Form",
        description: "Send a message or inquiry via Google Forms",
        url: "#",
        icon: "contact"
      }
    ],
    badgeSoon: "soon"
  },
  es: {
    nav: {
      home: "Inicio",
      research: "Investigación",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto"
    },
    subtitle: ["Genética", "Bioinformática", "Modelado Molecular"],
    featured: {
      label: "Investigación destacada",
      title: "Análisis in silico de flavonoides contra la ADN polimerasa UL30 de VHS",
      desc: "Acoplamiento molecular, variación genómica y análisis estructural aplicado al estudio de potenciales compuestos antivirales."
    },
    about: {
      label: "Sobre el proyecto",
      content: "Este proyecto integra bioinformática, análisis de variación genética y modelado molecular para estudiar las interacciones de la <strong>quercetina</strong> y la <strong>rutina</strong> con la ADN polimerasa UL30 del virus herpes simplex (VHS). Combinando simulaciones de docking con análisis estructural y genómico, el trabajo explora el potencial de los flavonoides naturales como candidatos a compuestos antivirales."
    },
    footer: "Centro de Investigación · 2026",
    links: [
      {
        label: "GitHub",
        description: "Código, datos y recursos de investigación",
        url: "https://github.com/andresgers",
        icon: "github"
      },
      {
        label: "LinkedIn",
        description: "Perfil académico y profesional",
        url: "https://www.linkedin.com/in/andresgers/",
        icon: "linkedin"
      },
      {
        label: "Laboratorio",
        description: "Sitio web e Instagram del Laboratorio MADAR",
        icon: "flask",
        subLinks: [
          { label: "Sitio web", url: "https://andresgers.github.io/laboratorio_madar" },
          { label: "Instagram", url: "https://www.instagram.com/madar.unam/" }
        ]
      },
      {
        label: "Tesis / Proyecto",
        description: "Tesis, código y material suplementario",
        url: "https://github.com/andresgers/tesis_HSV",
        icon: "document"
      },
      {
        label: "ORCID",
        description: "Identificador de investigador y publicaciones",
        url: "#",
        icon: "orcid"
      },
      {
        label: "Formulario de contacto",
        description: "Envía un mensaje o consulta mediante Google Forms",
        url: "#",
        icon: "contact"
      }
    ],
    badgeSoon: "pronto"
  },
  pt: {
    nav: {
      home: "Início",
      research: "Pesquisa",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato"
    },
    subtitle: ["Genética", "Bioinformática", "Modelagem Molecular"],
    featured: {
      label: "Pesquisa em destaque",
      title: "Análise in silico de flavonóides contra a DNA polimerase UL30 do HSV",
      desc: "Docking molecular, variação genômica e análise estrutural aplicada ao estudo de potenciais compostos antivirais."
    },
    about: {
      label: "Sobre o projeto",
      content: "Este projeto integra bioinformática, análise de variação genética e modelagem molecular para estudar as interações da <strong>quercetina</strong> e da <strong>rutina</strong> com a DNA polimerase UL30 do vírus herpes simplex (HSV). Combinando simulações de docking com análise estrutural e genômica, o trabalho explora o potencial de flavonóides naturais como candidatos a compostos antivirais."
    },
    footer: "Centro de Pesquisa · 2026",
    links: [
      {
        label: "GitHub",
        description: "Código, dados e recursos de pesquisa",
        url: "https://github.com/andresgers",
        icon: "github"
      },
      {
        label: "LinkedIn",
        description: "Perfil acadêmico e profissional",
        url: "https://www.linkedin.com/in/andresgers/",
        icon: "linkedin"
      },
      {
        label: "Laboratório",
        description: "Site e Instagram do Laboratório MADAR",
        icon: "flask",
        subLinks: [
          { label: "Site", url: "https://andresgers.github.io/laboratorio_madar" },
          { label: "Instagram", url: "https://www.instagram.com/madar.unam/" }
        ]
      },
      {
        label: "Tese / Projeto",
        description: "Tese, código e material suplementar",
        url: "https://github.com/andresgers/tesis_HSV",
        icon: "document"
      },
      {
        label: "ORCID",
        description: "Identificador de pesquisador e publicações",
        url: "#",
        icon: "orcid"
      },
      {
        label: "Formulário de contato",
        description: "Envie uma mensagem ou consulta via Google Forms",
        url: "#",
        icon: "contact"
      }
    ],
    badgeSoon: "breve"
  }
};

const ICONS = {
  github:
    '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
  linkedin:
    '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.063zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  flask:
    '<path d="M10 2v6.5l-5.6 9.35A2 2 0 0 0 6.11 21h11.78a2 2 0 0 0 1.71-3.15L14 8.5V2"/><path d="M8.5 2h7"/><path d="M7 15h10"/>',
  megaphone:
    '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  document:
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  orcid:
    '<circle cx="12" cy="12" r="9"/><path d="M9.5 9v6"/><path d="M11.5 9h2a1.8 1.8 0 0 1 0 3.6h-2"/>',
  contact:
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  arrow:
    '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'
};

function renderLinks(lang = "en") {
  const container = document.getElementById("links");
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const t = TRANSLATIONS[lang];

  t.links.forEach((link) => {
    const FILL_ICONS = ["github", "linkedin"];

    if (link.subLinks) {
      const details = document.createElement("details");
      details.className = "link-card dropdown-card";

      const summary = document.createElement("summary");
      summary.className = "link-summary";

      const icon = document.createElement("span");
      icon.className = "link-icon";
      icon.setAttribute("aria-hidden", "true");
      const attrs = FILL_ICONS.includes(link.icon)
        ? 'viewBox="0 0 24 24" fill="currentColor"'
        : 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
      icon.innerHTML = `<svg ${attrs}>${ICONS[link.icon]}</svg>`;

      const text = document.createElement("span");
      text.className = "link-text";
      const label = document.createElement("span");
      label.className = "link-label";
      label.textContent = link.label;
      const desc = document.createElement("p");
      desc.className = "link-desc";
      desc.textContent = link.description;
      text.append(label, desc);

      const arrow = document.createElement("span");
      arrow.className = "link-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">${ICONS.arrow}</svg>`;

      summary.append(icon, text, arrow);

      const dropdownContent = document.createElement("div");
      dropdownContent.className = "dropdown-content";

      link.subLinks.forEach((sub) => {
        const subA = document.createElement("a");
        subA.href = sub.url;
        subA.className = "dropdown-item";
        subA.target = "_blank";
        subA.rel = "noopener noreferrer";
        subA.innerHTML = `<span>${sub.label}</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14">${ICONS.arrow}</svg>`;
        dropdownContent.appendChild(subA);
      });

      details.append(summary, dropdownContent);
      fragment.appendChild(details);
    } else {
      const a = document.createElement("a");
      a.href = link.url;
      a.className = "link-card";
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");

      const icon = document.createElement("span");
      icon.className = "link-icon";
      icon.setAttribute("aria-hidden", "true");
      const attrs = FILL_ICONS.includes(link.icon)
        ? 'viewBox="0 0 24 24" fill="currentColor"'
        : 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
      icon.innerHTML = `<svg ${attrs}>${ICONS[link.icon]}</svg>`;

      const text = document.createElement("span");
      text.className = "link-text";
      const label = document.createElement("span");
      label.className = "link-label";
      label.textContent = link.label;
      const desc = document.createElement("p");
      desc.className = "link-desc";
      desc.textContent = link.description;
      text.append(label, desc);

      const arrow = document.createElement("span");
      arrow.className = "link-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">${ICONS.arrow}</svg>`;

      a.append(icon, text, arrow);
      fragment.appendChild(a);
    }
  });

  container.appendChild(fragment);
}

function setLanguage(lang) {
  localStorage.setItem("andres_lang", lang);
  document.documentElement.setAttribute("lang", lang);
  const t = TRANSLATIONS[lang];

  // Update nav links
  document.querySelectorAll("[data-i18n-nav]").forEach((el) => {
    const key = el.getAttribute("data-i18n-nav");
    if (t.nav[key]) el.textContent = t.nav[key];
  });

  // Update subtitle
  const subtitleEl = document.querySelector(".subtitle");
  if (subtitleEl) {
    subtitleEl.innerHTML = t.subtitle.map((s) => `<span>${s}</span>`).join("");
  }

  // Update featured research
  const featuredLabel = document.getElementById("featured-title");
  if (featuredLabel) featuredLabel.textContent = t.featured.label;

  const featuredTitle = document.querySelector(".featured-title");
  if (featuredTitle) featuredTitle.textContent = t.featured.title;

  const featuredDesc = document.querySelector(".featured-desc");
  if (featuredDesc) featuredDesc.textContent = t.featured.desc;

  // Update about section
  const aboutTitle = document.getElementById("about-title");
  if (aboutTitle) aboutTitle.textContent = t.about.label;

  const aboutText = document.querySelector(".about-text");
  if (aboutText) aboutText.innerHTML = t.about.content;

  // Update footer
  const footerText = document.querySelector(".footer p");
  if (footerText) footerText.textContent = t.footer;

  // Re-render links
  renderLinks(lang);

  // Update active lang buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (hasReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("andres_lang") || "en";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  initReveal();
});
