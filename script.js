document.addEventListener("DOMContentLoaded", () => {

    const projects = [
        { title: "Proyecto 1", desc: "Aplicación web moderna", img: "foto1.jpeg", tags: ["web"] },
        { title: "Proyecto 2", desc: "Dashboard analytics", img: "foto2.jpeg", tags: ["dashboard"] },
        { title: "Proyecto 3", desc: "Portfolio personal", img: "foto3.jpeg", tags: ["web"] },
        { title: "Proyecto 4", desc: "App móvil tareas", img: "foto4.jpeg", tags: ["mobile"] },
        { title: "Proyecto 5", desc: "Landing page", img: "foto5.jpeg", tags: ["marketing"] },
        { title: "Proyecto 6", desc: "Portal corporativo", img: "foto6.jpeg", tags: ["cms"] },

        { title: "Proyecto 7", desc: "API REST", img: "foto1.jpeg", tags: ["backend"] },
        { title: "Proyecto 8", desc: "Juego 2D", img: "foto2.jpeg", tags: ["frontend"] },
        { title: "Proyecto 9", desc: "Sistema reservas", img: "foto3.jpeg", tags: ["saas"] },
        { title: "Proyecto 10", desc: "App chat", img: "foto4.jpeg", tags: ["realtime"] },
        { title: "Proyecto 11", desc: "Blog técnico", img: "foto5.jpeg", tags: ["content"] },
        { title: "Proyecto 12", desc: "CV interactivo", img: "foto6.jpeg", tags: ["uiux"] },

        { title: "Proyecto 13", desc: "Microservicio auth", img: "foto1.jpeg", tags: ["security"] },
        { title: "Proyecto 14", desc: "Sistema encuestas", img: "foto2.jpeg", tags: ["data"] },
        { title: "Proyecto 15", desc: "Automatización CI/CD", img: "foto3.jpeg", tags: ["devops"] },
        { title: "Proyecto 16", desc: "Plugin CMS", img: "foto4.jpeg", tags: ["cms"] },
        { title: "Proyecto 17", desc: "Prototipo UI", img: "foto5.jpeg", tags: ["uiux"] },
        { title: "Proyecto 18", desc: "Gestor financiero", img: "foto6.jpeg", tags: ["finance"] },

        { title: "Proyecto 19", desc: "App productividad", img: "foto1.jpeg", tags: ["mobile"] },
        { title: "Proyecto 20", desc: "Panel admin", img: "foto2.jpeg", tags: ["dashboard"] }
    ];

    const list = document.getElementById("projects-list");
    const count = document.getElementById("projects-count");
    const search = document.getElementById("project-search");
    const sort = document.getElementById("sort-projects");
    const filterPanel = document.getElementById("filters-panel");
    const filterContainer = document.getElementById("filters-container");
    const toggleFilters = document.getElementById("toggle-filters");

    let activeTag = null;

    const uniqueTags = [...new Set(projects.flatMap(p => p.tags))];

    uniqueTags.forEach(tag => {
        const el = document.createElement("span");
        el.className = "filter-tag";
        el.textContent = tag;
        el.onclick = () => {
            activeTag = activeTag === tag ? null : tag;
            document.querySelectorAll(".filter-tag").forEach(t => t.classList.remove("active"));
            if (activeTag) el.classList.add("active");
            render();
        };
        filterContainer.appendChild(el);
    });

    toggleFilters.onclick = () => {
        filterPanel.classList.toggle("active");
    };

    function render() {
        let filtered = [...projects];

        const q = search.value.toLowerCase();
        if (q) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.desc.toLowerCase().includes(q)
            );
        }

        if (activeTag) {
            filtered = filtered.filter(p => p.tags.includes(activeTag));
        }

        if (sort.value === "alpha") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        list.innerHTML = "";
        filtered.forEach(p => {
            const item = document.createElement("div");
            item.className = "proyecto-item";
            item.innerHTML = `
                <img src="${p.img}" alt="${p.title}">
                <div class="info">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                </div>
            `;
            list.appendChild(item);
        });

        count.textContent = `Mostrando ${filtered.length} proyectos`;
    }

    search.oninput = render;
    sort.onchange = render;

    render();
});
