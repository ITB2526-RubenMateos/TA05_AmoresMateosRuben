const proyectos = [
    { titulo: "Proyecto 1 - Aplicación Web", descripcion: "Plataforma moderna con arquitectura escalable.", imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", tecnologias: ["React", "Node.js", "SQL"], link: "#" },
    { titulo: "Proyecto 2 - Dashboard Analytics", descripcion: "Dashboard interactivo para análisis de datos.", imagen: "https://images.unsplash.com/photo-1551288049-bbbda5366fd9", tecnologias: ["Python", "Machine Learning"], link: "#" },
    { titulo: "Proyecto 3 - App Móvil", descripcion: "Gestión de tareas diarias y productividad.", imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", tecnologias: ["Android", "Java"], link: "#" },
    { titulo: "Proyecto 4 - E-commerce", descripcion: "Tienda online con pasarela de pago segura.", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", tecnologias: ["PHP", "SQL"], link: "#" },
    { titulo: "Proyecto 5 - Portfolio Personal", descripcion: "Portfolio responsive para mostrar trabajos.", imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", tecnologias: ["HTML", "CSS", "JavaScript"], link: "#" },
    { titulo: "Proyecto 6 - API REST", descripcion: "Backend robusto con autenticación JWT.", imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", tecnologias: ["Node.js", "Express", "MongoDB"], link: "#" },
    { titulo: "Proyecto 7 - Blog Técnico", descripcion: "Artículos sobre ciberseguridad y hacking ético.", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", tecnologias: ["Ciberseguridad", "PHP"], link: "#" },
    { titulo: "Proyecto 8 - Sistema de Reservas", descripcion: "Gestión de citas para clínicas o negocios.", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", tecnologias: ["React", "Node.js"], link: "#" },
    { titulo: "Proyecto 9 - Landing Page", descripcion: "Alta conversión para marketing digital.", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", tecnologias: ["HTML", "CSS"], link: "#" },
    { titulo: "Proyecto 10 - Chat Real-time", descripcion: "Mensajería instantánea usando WebSockets.", imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", tecnologias: ["Node.js", "JavaScript"], link: "#" },
    { titulo: "Proyecto 11 - Plataforma Cursos", descripcion: "LMS para educación online con vídeos.", imagen: "https://images.unsplash.com/photo-1501504905252-473c47e087f8", tecnologias: ["React", "SQL"], link: "#" },
    { titulo: "Proyecto 12 - App Finanzas", descripcion: "Control de gastos y presupuestos personales.", imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f", tecnologias: ["Android", "iOS"], link: "#" },
    { titulo: "Proyecto 13 - Help Desk", descripcion: "Sistema de tickets y soporte al cliente.", imagen: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", tecnologias: ["PHP", "SQL"], link: "#" },
    { titulo: "Proyecto 14 - Monitor de Red", descripcion: "Escaneo de puertos y alertas de tráfico.", imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48", tecnologias: ["Ciberseguridad", "Python"], link: "#" },
    { titulo: "Proyecto 15 - Galería de Arte", descripcion: "Exposición virtual de obras digitales.", imagen: "https://images.unsplash.com/photo-1561214115-f2f134cc4912", tecnologias: ["iOS", "Swift"], link: "#" },
    { titulo: "Proyecto 16 - CRM Ventas", descripcion: "Gestión de clientes y embudos de venta.", imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978", tecnologias: ["HTML", "CSS", "JavaScript"], link: "#" },
    { titulo: "Proyecto 17 - Gestión Inventario", descripcion: "Control de stock para almacenes.", imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", tecnologias: ["Node.js", "SQL"], link: "#" },
    { titulo: "Proyecto 18 - App Fitness", descripcion: "Rutinas de ejercicio y contador de calorías.", imagen: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438", tecnologias: ["Android", "iOS"], link: "#" },
    { titulo: "Proyecto 19 - Predicción Precios", descripcion: "IA para predecir precios inmobiliarios.", imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa", tecnologias: ["Python", "Machine Learning"], link: "#" },
    { titulo: "Proyecto 20 - Sistema Votación", descripcion: "Encuestas seguras con resultados en vivo.", imagen: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c", tecnologias: ["React", "Node.js"], link: "#" }
];

// La función de filtrado y renderizado se mantiene igual que en tu archivo original 
// pero asegúrate de que el event listener esté correctamente vinculado.