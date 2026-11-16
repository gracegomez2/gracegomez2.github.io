# G2 - Grace Gomez

Sitio web estatico de marca personal para **Grace Gomez** bajo la marca **G2**, enfocado en **Contaduria Publica**, **Big Data** e **Inteligencia de Negocios**, listo para publicarse en **GitHub Pages**.

## Estructura de archivos

- `index.html`: Pagina principal con secciones de Inicio, Fortalezas, Propuesta de Valor, Perfil/Experiencia, Soluciones G2 y Contacto.
- `styles.css`: Estilos responsivos, paleta ejecutiva (azul marino, dorado y gris claro) y animaciones de entrada modernas con respeto por `prefers-reduced-motion`.
- `script.js`: Menu movil accesible, estado de barra superior al hacer scroll y formulario estatico compatible con GitHub Pages.
- `favicon.svg`: Monograma vectorial `G2`.

## Personalizacion rapida antes de publicar

1. En `index.html`, busca los comentarios `<!-- Reemplazar ... -->` dentro de la seccion `#experiencia` para agregar tu universidad, tarjeta profesional, especializaciones y logros especificos.
2. Actualiza el correo `contacto@g2tienda.com` (en `index.html` y en el atributo `data-email` del formulario) y los enlaces de LinkedIn y GitHub en la seccion `#contacto`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub:
   - Para pagina personal principal: `<tu-usuario>.github.io`
   - O para proyecto: `g2-tienda`
2. Sube estos archivos a la rama `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: sitio inicial G2 para Grace Gomez"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings > Pages > Build and deployment**, selecciona **Deploy from a branch**, elige la rama `main` y la carpeta `/ (root)`.
