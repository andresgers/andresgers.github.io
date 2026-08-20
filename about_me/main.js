const TRANSLATIONS = {
  en: {
    nav: {
      hub: "Hub",
      about: "About",
      projects: "Projects",
      research: "Research",
      skills: "Skills",
      education: "Education",
      building: "Building",
      contact: "Contact"
    },
    subtitle: ["Genetics", "Bioinformatics", "Molecular Modeling"],
    about: {
      label: "About me",
      intro: "Andrés, researcher in training working at the intersection of genetics, bioinformatics, and molecular modeling.",
      text: "I use computational tools to study biological systems and explore new perspectives for research problems. If you have a proposal, project, or simply want to exchange ideas, feel free to reach out."
    },
    projectsSection: {
      label: "Featured projects"
    },
    projects: [
      {
        title: "In silico & Bioinformatics Pipeline for Antiviral Flavonoids",
        problem: "Investigate the mechanism of action of natural flavonoids (quercetin and rutin) against HSV DNA polymerase UL30 to identify promising antiviral candidates.",
        action: "Designed automated sequence analysis pipelines, genomic variation profiling, molecular modeling, and docking simulations.",
        technologies: ["Python", "R", "Linux", "Bash", "AutoDock Vina", "BLAST"],
        result: "Identified stable interaction profiles and evaluated genetic variability in the target protein, providing quantitative insights into natural compounds' antiviral potential.",
        url: "https://github.com/andresgers",
        github: true
      },
      {
        title: "Genomic Variant & Structural Impact Toolkit",
        problem: "Need for streamlined analysis and structural impact assessment of genomic variants in viral enzymes.",
        action: "Developed a modular Python toolkit for parsing sequence data, mapping mutations, and automating batch docking workflows.",
        technologies: ["Python", "Pandas", "Biopython", "Bash", "Git"],
        result: "Reduced manual preprocessing time by 70% and enabled reproducible structural analysis across multiple sequence variants.",
        url: "https://github.com/andresgers",
        github: true
      }
    ],
    research: {
      label: "Research & Experience",
      items: [
        {
          role: "Researcher / Undergrad Investigator",
          org: "MADAR Laboratory (UNAM)",
          period: "2024 — Present",
          description: "Genetics, bioinformatics and molecular modeling applied to herpes simplex virus DNA polymerase UL30 and antiviral compounds."
        },
        {
          role: "Bioinformatics & Molecular Modeling Project",
          org: "Academic Thesis / Research",
          period: "2023 — 2024",
          description: "Integration of docking simulations, structural analysis, and genomic variation studies."
        },
        {
          role: "Scientific Presentations & Congresses",
          org: "Genetics & Biotechnology Meetings",
          period: "2023 — 2025",
          description: "Poster presentations and dissemination of research findings in molecular genetics and antiviral screening."
        }
      ]
    },
    skills: {
      label: "Skills & Technologies",
      categories: [
        {
          name: "Bioinformatics",
          items: ["Python", "R", "Linux", "Bash", "BLAST", "AutoDock Vina", "Biopython"]
        },
        {
          name: "Data Analysis",
          items: ["SQL", "Pandas", "NumPy", "R (tidyverse)", "Data Visualization"]
        },
        {
          name: "Development",
          items: ["Git", "GitHub", "Django", "REST APIs", "HTML/CSS/JS"]
        },
        {
          name: "Laboratory",
          items: ["Molecular genetics", "Sequence analysis", "Molecular docking", "PCR & Lab techniques"]
        }
      ]
    },
    education: {
      label: "Education",
      items: [
        {
          degree: "Degree in Genetics (Licenciatura en Genética)",
          institution: "Universidad Nacional de Misiones (UNAM)",
          period: "Completed",
          details: "Rigorous scientific foundation in molecular biology, genetics, bioinformatics, and laboratory methodologies."
        },
        {
          degree: "Specialized Courses & Training",
          institution: "Data Science, Python & Computational Biology",
          period: "Ongoing",
          details: "Continuous professional development in data engineering, software development, and advanced bioinformatics pipelines."
        }
      ]
    },
    building: {
      label: "What I'm building",
      items: [
        {
          title: "Automated Genomic Annotation Pipeline",
          description: "Modular pipeline for high-throughput variant annotation and structural impact prediction."
        },
        {
          title: "Modular Bioinformatics CLI Toolkit",
          description: "Command-line utility in Python for sequence processing, alignment parsing, and docking automation."
        }
      ]
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
        icon: "orcid",
        placeholder: true
      },
      {
        label: "Contact Form",
        description: "Send a message or inquiry via Google Forms",
        url: "#",
        icon: "contact",
        placeholder: true
      }
    ],
    badgeSoon: "soon",
    labels: {
      problem: "Problem:",
      action: "Action:",
      tech: "Technologies:",
      result: "Result:",
      viewCode: "View Code / Project"
    }
  },
  es: {
    nav: {
      hub: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      research: "Investigación",
      skills: "Skills",
      education: "Educación",
      building: "Construyendo",
      contact: "Contacto"
    },
    subtitle: ["Genética", "Bioinformática", "Modelado Molecular"],
    about: {
      label: "Sobre mí",
      intro: "Soy Andrés, investigador en formación, y trabajo en la intersección entre genética, bioinformática y modelado molecular.",
      text: "Utilizo herramientas computacionales para estudiar sistemas biológicos y explorar nuevas perspectivas para abordar problemas de investigación. Si tenés una propuesta, proyecto o simplemente querés intercambiar ideas, no dudes en contactarme."
    },
    projectsSection: {
      label: "Proyectos destacados"
    },
    projects: [
      {
        title: "Pipeline in silico y bioinformático para compuestos antivirales",
        problem: "Investigar el mecanismo de acción de flavonoides naturales (quercetina y rutina) frente a la ADN polimerasa UL30 del VHS para identificar candidatos antivirales.",
        action: "Diseño de pipelines automatizados de análisis de secuencias, perfiles de variación genómica, modelado molecular y simulaciones de acoplamiento (docking).",
        technologies: ["Python", "R", "Linux", "Bash", "AutoDock Vina", "BLAST"],
        result: "Identificación de perfiles de interacción estables y evaluación de la variabilidad genética en la proteína blanco, aportando evidencia cuantitativa sobre el potencial antiviral de los compuestos.",
        url: "https://github.com/andresgers",
        github: true
      },
      {
        title: "Toolkit de Análisis de Variantes Genómicas y Estructura",
        problem: "Necesidad de optimizar el análisis y evaluación del impacto estructural de variantes genómicas en enzimas virales.",
        action: "Desarrollo de un toolkit modular en Python para procesamiento de secuencias, mapeo de mutaciones y automatización de flujos de docking.",
        technologies: ["Python", "Pandas", "Biopython", "Bash", "Git"],
        result: "Reducción del tiempo de preprocesamiento manual en un 70% y habilitación de análisis estructurales reproducibles entre múltiples variantes.",
        url: "https://github.com/andresgers",
        github: true
      }
    ],
    research: {
      label: "Investigación y Experiencia",
      items: [
        {
          role: "Investigador / Tesista",
          org: "Laboratorio MADAR (UNAM)",
          period: "2024 — Presente",
          description: "Genética, bioinformática y modelado molecular aplicados al estudio de la ADN polimerasa UL30 del virus herpes simplex y compuestos antivirales."
        },
        {
          role: "Proyecto de Bioinformática y Modelado Molecular",
          org: "Tesis Académica / Investigación",
          period: "2023 — 2024",
          description: "Integración de simulaciones de docking, análisis estructural y estudios de variación genómica."
        },
        {
          role: "Presentaciones en Congresos y Pósters",
          org: "Jornadas de Genética y Biotecnología",
          period: "2023 — 2025",
          description: "Presentación de pósters y divulgación de resultados científicos en genética molecular y screening antiviral."
        }
      ]
    },
    skills: {
      label: "Habilidades y Tecnologías",
      categories: [
        {
          name: "Bioinformática",
          items: ["Python", "R", "Linux", "Bash", "BLAST", "AutoDock Vina", "Biopython"]
        },
        {
          name: "Análisis de Datos",
          items: ["SQL", "Pandas", "NumPy", "R (tidyverse)", "Visualización de datos"]
        },
        {
          name: "Desarrollo",
          items: ["Git", "GitHub", "Django", "REST APIs", "HTML/CSS/JS"]
        },
        {
          name: "Laboratorio",
          items: ["Genética molecular", "Análisis de secuencias", "Docking molecular", "PCR y técnicas de laboratorio"]
        }
      ]
    },
    education: {
      label: "Educación",
      items: [
        {
          degree: "Licenciatura en Genética",
          institution: "Universidad Nacional de Misiones (UNAM)",
          period: "Completado",
          details: "Sólida formación científica en biología molecular, genética, bioinformática y metodologías de laboratorio."
        },
        {
          degree: "Cursos Especializados y Formación",
          institution: "Ciencia de Datos, Python y Biología Computacional",
          period: "En curso",
          details: "Desarrollo profesional continuo en ingeniería de datos, desarrollo de software y pipelines bioinformáticos avanzados."
        }
      ]
    },
    building: {
      label: "Lo que estoy construyendo",
      items: [
        {
          title: "Pipeline Automatizado de Anotación Genómica",
          description: "Pipeline modular para anotación de variantes de alto rendimiento y predicción de impacto estructural."
        },
        {
          title: "Toolkit Bioinformático CLI Modular",
          description: "Utilidad de línea de comandos en Python para procesamiento de secuencias, parsing de alineamientos y automatización de docking."
        }
      ]
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
        icon: "orcid",
        placeholder: true
      },
      {
        label: "Formulario de contacto",
        description: "Envía un mensaje o consulta mediante Google Forms",
        url: "#",
        icon: "contact",
        placeholder: true
      }
    ],
    badgeSoon: "pronto",
    labels: {
      problem: "Problema:",
      action: "Acción:",
      tech: "Tecnologías:",
      result: "Resultado:",
      viewCode: "Ver Código / Proyecto"
    }
  },
  pt: {
    nav: {
      hub: "Início",
      about: "Sobre",
      projects: "Projetos",
      research: "Pesquisa",
      skills: "Skills",
      education: "Educação",
      building: "Construindo",
      contact: "Contato"
    },
    subtitle: ["Genética", "Bioinformática", "Modelagem Molecular"],
    about: {
      label: "Sobre mim",
      intro: "Andrés, pesquisador em formação trabalhando na interseção entre genética, bioinformática e modelagem molecular.",
      text: "Utilizo ferramentas computacionais para estudar sistemas biológicos e explorar novas perspectivas para problemas de pesquisa. Se você tiver uma proposta, projeto ou quiser trocar ideias, sinta-se à vontade para entrar em contato."
    },
    projectsSection: {
      label: "Projetos em destaque"
    },
    projects: [
      {
        title: "Pipeline in silico e bioinformático para compostos antivirais",
        problem: "Investigar o mecanismo de ação de flavonóides naturais (quercetina e rutina) contra a DNA polimerase UL30 do HSV para identificar candidatos antivirais.",
        action: "Desenvolvimento de pipelines automatizados de análise de sequências, perfis de variação genômica, modelagem molecular e simulações de docking.",
        technologies: ["Python", "R", "Linux", "Bash", "AutoDock Vina", "BLAST"],
        result: "Identificação de perfis de interação estáveis e avaliação da variabilidade genética na proteína-alvo, fornecendo evidências quantitativas sobre o potencial antiviral.",
        url: "https://github.com/andresgers",
        github: true
      },
      {
        title: "Toolkit de Análise de Variantes Genômicas e Estrutura",
        problem: "Necessidade de otimizar a análise e avaliação do impacto estrutural de variantes genômicas em enzimas virais.",
        action: "Desenvolvimento de um toolkit modular em Python para processamento de sequências, mapeamento de mutações e automação de fluxos de docking.",
        technologies: ["Python", "Pandas", "Biopython", "Bash", "Git"],
        result: "Redução do tempo de pré-processamento manual em 70% e habilitação de análises estruturais reprodutíveis entre múltiplas variantes.",
        url: "https://github.com/andresgers",
        github: true
      }
    ],
    research: {
      label: "Pesquisa e Experiência",
      items: [
        {
          role: "Pesquisador / Bolsista",
          org: "Laboratório MADAR (UNAM)",
          period: "2024 — Presente",
          description: "Genética, bioinformática e modelagem molecular aplicadas ao estudo da DNA polimerase UL30 do vírus herpes simplex e compostos antivirais."
        },
        {
          role: "Projeto de Bioinformática e Modelagem Molecular",
          org: "Tese Acadêmica / Pesquisa",
          period: "2023 — 2024",
          description: "Integração de simulações de docking, análise estrutural e estudos de variação genômica."
        },
        {
          role: "Apresentações em Congressos e Pôsteres",
          org: "Jornadas de Genética e Biotecnologia",
          period: "2023 — 2025",
          description: "Apresentação de pôsteres e divulgação de resultados científicos em genética molecular e triagem antiviral."
        }
      ]
    },
    skills: {
      label: "Habilidades e Tecnologias",
      categories: [
        {
          name: "Bioinformática",
          items: ["Python", "R", "Linux", "Bash", "BLAST", "AutoDock Vina", "Biopython"]
        },
        {
          name: "Análise de Dados",
          items: ["SQL", "Pandas", "NumPy", "R (tidyverse)", "Visualização de dados"]
        },
        {
          name: "Desenvolvimento",
          items: ["Git", "GitHub", "Django", "REST APIs", "HTML/CSS/JS"]
        },
        {
          name: "Laboratório",
          items: ["Genética molecular", "Análise de sequências", "Docking molecular", "PCR e técnicas de laboratório"]
        }
      ]
    },
    education: {
      label: "Educação",
      items: [
        {
          degree: "Graduação em Genética",
          institution: "Universidad Nacional de Misiones (UNAM)",
          period: "Concluído",
          details: "Sólida fundação científica em biologia molecular, genética, bioinformática e metodologias de laboratório."
        },
        {
          degree: "Cursos Especializados e Formação",
          institution: "Ciência de Dados, Python e Biologia Computacional",
          period: "Em andamento",
          details: "Desenvolvimento profissional contínuo em engenharia de dados, desenvolvimento de software e pipelines bioinformáticos avançados."
        }
      ]
    },
    building: {
      label: "O que estou construindo",
      items: [
        {
          title: "Pipeline Automatizado de Anotação Genómica",
          description: "Pipeline modular para anotação de variantes de alto rendimento e predição de impacto estrutural."
        },
        {
          title: "Toolkit Bioinformático CLI Modular",
          description: "Utilitário de linha de comando em Python para processamento de sequências, parsing de alinhamentos e automação de docking."
        }
      ]
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
        description: "Perfil académico e profissional",
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
        icon: "orcid",
        placeholder: true
      },
      {
        label: "Formulário de contato",
        description: "Envie uma mensagem ou consulta via Google Forms",
        url: "#",
        icon: "contact",
        placeholder: true
      }
    ],
    badgeSoon: "breve",
    labels: {
      problem: "Problema:",
      action: "Ação:",
      tech: "Tecnologias:",
      result: "Resultado:",
      viewCode: "Ver Código / Projeto"
    }
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

function renderProjects(lang = "en") {
  const container = document.getElementById("projects-list");
  if (!container) return;
  container.innerHTML = "";
  const t = TRANSLATIONS[lang];
  const fragment = document.createDocumentFragment();

  t.projects.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = proj.title;

    const details = document.createElement("div");
    details.className = "project-details";

    const problem = document.createElement("p");
    problem.innerHTML = `<strong>${t.labels.problem}</strong> ${proj.problem}`;

    const action = document.createElement("p");
    action.innerHTML = `<strong>${t.labels.action}</strong> ${proj.action}`;

    const techWrap = document.createElement("div");
    techWrap.className = "project-tech";
    const techLabel = document.createElement("span");
    techLabel.innerHTML = `<strong>${t.labels.tech}</strong> `;
    techWrap.appendChild(techLabel);

    proj.technologies.forEach((tech) => {
      const badge = document.createElement("span");
      badge.className = "tech-badge";
      badge.textContent = tech;
      techWrap.appendChild(badge);
    });

    const result = document.createElement("p");
    result.innerHTML = `<strong>${t.labels.result}</strong> ${proj.result}`;

    details.append(problem, action, techWrap, result);

    if (proj.url) {
      const link = document.createElement("a");
      link.href = proj.url;
      link.className = "project-link";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = `<span>${t.labels.viewCode}</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">${ICONS.arrow}</svg>`;
      details.appendChild(link);
    }

    card.append(title, details);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function renderResearch(lang = "en") {
  const container = document.getElementById("research-list");
  if (!container) return;
  container.innerHTML = "";
  const t = TRANSLATIONS[lang];
  const fragment = document.createDocumentFragment();

  t.research.items.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline-item";

    el.innerHTML = `
      <div class="timeline-meta">
        <span class="timeline-period">${item.period}</span>
        <span class="timeline-org">${item.org}</span>
      </div>
      <h3 class="timeline-role">${item.role}</h3>
      <p class="timeline-desc">${item.description}</p>
    `;
    fragment.appendChild(el);
  });

  container.appendChild(fragment);
}

function renderSkills(lang = "en") {
  const container = document.getElementById("skills-grid");
  if (!container) return;
  container.innerHTML = "";
  const t = TRANSLATIONS[lang];
  const fragment = document.createDocumentFragment();

  t.skills.categories.forEach((cat) => {
    const box = document.createElement("div");
    box.className = "skill-category-card";

    const catTitle = document.createElement("h3");
    catTitle.className = "skill-category-title";
    catTitle.textContent = cat.name;

    const list = document.createElement("div");
    list.className = "skill-items";

    cat.items.forEach((skill) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      list.appendChild(tag);
    });

    box.append(catTitle, list);
    fragment.appendChild(box);
  });

  container.appendChild(fragment);
}

function renderEducation(lang = "en") {
  const container = document.getElementById("education-list");
  if (!container) return;
  container.innerHTML = "";
  const t = TRANSLATIONS[lang];
  const fragment = document.createDocumentFragment();

  t.education.items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "education-card";

    card.innerHTML = `
      <div class="education-header">
        <h3 class="education-degree">${item.degree}</h3>
        <span class="education-period">${item.period}</span>
      </div>
      <p class="education-inst">${item.institution}</p>
      <p class="education-details">${item.details}</p>
    `;
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function renderBuilding(lang = "en") {
  const container = document.getElementById("building-list");
  if (!container) return;
  container.innerHTML = "";
  const t = TRANSLATIONS[lang];
  const fragment = document.createDocumentFragment();

  t.building.items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "building-card";

    card.innerHTML = `
      <h3 class="building-title">${item.title}</h3>
      <p class="building-desc">${item.description}</p>
    `;
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function renderLinks(lang = "en") {
  const container = document.getElementById("links");
  if (!container) return;
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

      if (link.placeholder) {
        a.classList.add("is-placeholder");
        a.setAttribute("aria-disabled", "true");
        a.setAttribute("title", lang === "es" ? "Próximamente" : lang === "pt" ? "Em breve" : "Link coming soon");
      } else {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }

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
        badge.textContent = t.badgeSoon;
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

  // Update about section
  const aboutTitle = document.getElementById("about-title");
  if (aboutTitle) aboutTitle.textContent = t.about.label;

  const aboutIntro = document.querySelector(".about-intro");
  if (aboutIntro) aboutIntro.textContent = t.about.intro;

  const aboutText = document.querySelector(".about-text");
  if (aboutText) aboutText.textContent = t.about.text;

  // Update section titles
  const projectsTitle = document.getElementById("projects-title");
  if (projectsTitle) projectsTitle.textContent = t.projectsSection.label;

  const researchTitle = document.getElementById("research-title");
  if (researchTitle) researchTitle.textContent = t.research.label;

  const skillsTitle = document.getElementById("skills-title");
  if (skillsTitle) skillsTitle.textContent = t.skills.label;

  const educationTitle = document.getElementById("education-title");
  if (educationTitle) educationTitle.textContent = t.education.label;

  const buildingTitle = document.getElementById("building-title");
  if (buildingTitle) buildingTitle.textContent = t.building.label;

  // Update footer
  const footerText = document.querySelector(".footer p");
  if (footerText) footerText.textContent = t.footer;

  // Render components
  renderProjects(lang);
  renderResearch(lang);
  renderSkills(lang);
  renderEducation(lang);
  renderBuilding(lang);
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
    { threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          const href = link.getAttribute("href");
          if (href === `#${id}` || (id === "hero" && href === "#hero")) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
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
  initScrollSpy();
});
