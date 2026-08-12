const CONFIG = {
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
      url: "#",
      icon: "linkedin",
      placeholder: true
    },
    {
      label: "Laboratory",
      description: "Research group and institutional information",
      url: "#",
      icon: "flask",
      placeholder: true
    },
    {
      label: "Laboratory social networks",
      description: "News, projects and research activities",
      url: "#",
      icon: "megaphone",
      placeholder: true
    },
    {
      label: "Thesis / Project",
      description: "Thesis, poster and supplementary material",
      url: "#",
      icon: "document",
      placeholder: true
    },
    {
      label: "ORCID",
      description: "Researcher identifier and publications",
      url: "#",
      icon: "orcid",
      placeholder: true
    }
  ]
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
  arrow:
    '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'
};

function renderLinks() {
  const container = document.getElementById("links");
  const fragment = document.createDocumentFragment();

  CONFIG.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.className = "link-card";

    if (link.placeholder) {
      a.classList.add("is-placeholder");
      a.setAttribute("aria-disabled", "true");
      a.setAttribute("title", "Link coming soon");
    } else {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }

    const FILL_ICONS = ["github", "linkedin"];

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
    if (link.placeholder) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "soon";
      label.appendChild(badge);
    }
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
  });

  container.appendChild(fragment);
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

renderLinks();
initReveal();
