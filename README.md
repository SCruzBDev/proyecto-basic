# Proyecto Basic — Maquetación Nivel 3

Taller 1: recreación de un proyecto de maquetación nivel 3 de [frontendpractice.com](https://www.frontendpractice.com/projects/basic), basado en el sitio real de [BASIC/DEPT®](https://www.basicagency.com).

## Objetivo

Practicar HTML y CSS recreando el layout, tipografía, colores y estructura de un sitio real, enfocándose en:
- Hover effects
- Diseño único
- Scroll events
- Elementos arrastrables

## Paleta de colores

| Color | Hex |
|---|---|
| Rosa | `#f9cdcd` |
| Oscuro | `#252422` |
| Claro | `#f4f4f4` |

## Estructura del proyecto

```
proyecto-basic/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
└── README.md
```

## Secciones incluidas

1. Header — fijo, con menú de navegación y botón hamburguesa para móvil
2. Hero — título principal y lista de premios/reconocimientos
3. Press — logos de AdAge, The Webby Awards y Campaign
4. Intro — texto descriptivo de la agencia y logo grande "B/D®"
5. Gallery — galería de 3 imágenes
6. Featured Engagements — tabs con casos de Google, KFC, Wilson y AT&T
7. Spotlight — cita destacada sobre fondo oscuro
8. Featured News — artículos de prensa recientes
9. Footer — newsletter, redes sociales, iniciativas y oficinas

## Cómo verlo

Clona el repositorio y abre `index.html` en tu navegador:

```bash
git clone https://github.com/SCruzBDev/proyecto-basic.git
cd proyecto-basic
```

Recomendado: usar la extensión Live Server de VS Code para recarga automática mientras editas.

## Rama de trabajo

Todo el desarrollo de este taller se hizo en la rama `proyecto`:

```bash
git checkout proyecto
```

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox, Grid, variables CSS)
- JavaScript vanilla

## Pendientes / mejoras futuras

- Funcionalidad de los tabs en "Featured Engagements" (cambiar tarjeta activa al hacer clic)
- Menú móvil funcional (abrir/cerrar con el botón hamburguesa)
- Animaciones de scroll (tipo Locomotive Scroll)
- Reemplazar imágenes placeholder por fotos propias
- Slider arrastrable en "Featured Engagements"
