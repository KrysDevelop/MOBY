# Mi Página Web Personal

Una página web moderna y responsiva que presenta mi portafolio profesional y proyectos personales.

## 🌐 Demo en Vivo

**URL del sitio:** [https://lovely-kangaroo-60931f.netlify.app/](https://lovely-kangaroo-60931f.netlify.app/)

*Sitio hosteado gratuitamente en Netlify*

## 📋 Descripción

Esta es mi página web personal donde muestro mis habilidades, experiencia profesional y proyectos destacados. El sitio cuenta con un diseño moderno, navegación intuitiva y está optimizado para todos los dispositivos.

## ✨ Características

- 📱 **Diseño Responsivo** - Perfecto en móviles, tablets y desktop
- ⚡ **Carga Rápida** - Optimizado con Netlify CDN
- 🎨 **Interfaz Moderna** - Diseño limpio y profesional
- 📧 **Formulario de Contacto** - Netlify Forms integrado
- 🚀 **Despliegue Automático** - CI/CD con Git
- 🔍 **SEO Optimizado** - Meta tags y estructura semántica
- 🌟 **Animaciones Suaves** - Transiciones CSS elegantes

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica moderna
- **CSS3** - Estilos avanzados con Flexbox/Grid
- **JavaScript ES6+** - Interactividad y funcionalidad dinámica
- **Netlify** - Hosting y servicios backend
- **Git** - Control de versiones
- **Responsive Design** - Compatible con todos los dispositivos

## 📁 Estructura del Proyecto

```
├── index.html              # Página principal
├── about.html              # Página sobre mí
├── portfolio.html          # Portafolio de proyectos
├── contact.html            # Página de contacto
├── css/
│   ├── styles.css         # Estilos principales
│   ├── responsive.css     # Media queries
│   └── animations.css     # Animaciones CSS
├── js/
│   ├── main.js           # JavaScript principal
│   ├── portfolio.js      # Funcionalidad del portafolio
│   └── contact.js        # Manejo de formularios
├── images/
│   ├── profile/          # Fotos de perfil
│   ├── projects/         # Capturas de proyectos
│   └── icons/            # Iconos y elementos gráficos
├── assets/
│   ├── cv/               # Curriculum vitae
│   └── documents/        # Documentos adicionales
├── _redirects            # Configuración de redirects de Netlify
├── netlify.toml          # Configuración de build
└── README.md             # Este archivo
```

## 🚀 Desarrollo Local

### Prerrequisitos
- Navegador web moderno
- Editor de código (VS Code recomendado)
- Git instalado
- Node.js (opcional, para herramientas de desarrollo)

### Configuración del entorno:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Desarrollo local**
   ```bash
   # Opción 1: Servidor HTTP simple con Python
   python -m http.server 8000
   
   # Opción 2: Con Node.js y live-server
   npx live-server
   
   # Opción 3: Extensión Live Server en VS Code
   # Clic derecho en index.html > "Open with Live Server"
   ```

3. **Abrir en el navegador**
   ```
   http://localhost:8000
   ```

## 🌐 Despliegue en Netlify

### Despliegue Automático (Recomendado)
1. Conecta tu repositorio de GitHub con Netlify
2. Configura el build command (si es necesario)
3. Los cambios se despliegan automáticamente con cada push

### Configuración de Build
```toml
# netlify.toml
[build]
  publish = "."
  command = "echo 'No build command needed for static site'"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Despliegue Manual
```bash
# Arrastrar y soltar la carpeta en Netlify Dashboard
# O usar Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir .
```

## 📱 Funcionalidades

### Secciones Principales
- **Inicio** - Presentación y llamada a la acción
- **Sobre Mí** - Información personal y profesional
- **Portafolio** - Proyectos destacados con detalles
- **Contacto** - Formulario funcional con Netlify Forms

### Características Técnicas
- **Formularios**: Integración con Netlify Forms
- **Analytics**: Google Analytics integrado
- **Performance**: Optimización de imágenes y CSS
- **Accesibilidad**: Cumple con estándares WCAG

## 🎨 Personalización

### Colores y Temas
Modifica las variables CSS en `css/styles.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### Contenido
Actualiza el contenido en los archivos HTML correspondientes o en el archivo de configuración JSON si usas un sistema de datos dinámico.

## 📊 Estadísticas del Sitio

- **Performance Score**: 95+
- **Accessibility**: AAA
- **SEO Score**: 100
- **Tiempo de Carga**: < 2 segundos

## 🔧 Mantenimiento

### Actualizaciones Regulares
- Revisar enlaces externos mensualmente
- Actualizar información de contacto
- Añadir nuevos proyectos al portafolio
- Optimizar imágenes periódicamente

### Monitoreo
- Google Analytics para métricas
- Netlify Analytics para datos de rendimiento
- Uptime monitoring para disponibilidad

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias de mejora:

1. Abre un Issue describiendo el problema
2. Fork el repositorio
3. Crea una rama para tu feature
4. Haz commit de tus cambios
5. Envía un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Website**: [https://lovely-kangaroo-60931f.netlify.app/](https://lovely-kangaroo-60931f.netlify.app/)
- **Email**: tu-email@ejemplo.com
- **LinkedIn**: [Tu perfil de LinkedIn]
- **GitHub**: [Tu perfil de GitHub]

---

⭐ **¡No olvides dar una estrella al repositorio si te gustó el proyecto!**