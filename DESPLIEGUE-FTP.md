# Cómo desplegar Patagonisima por FTP

Esta web está configurada como **sitio estático** (`output: 'export'` en `next.config.mjs`).
Al hacer el build se genera una carpeta **`out/`** con todos los archivos HTML/CSS/JS
listos para subir a cualquier hosting por FTP (no necesita Node.js en el servidor).

> IMPORTANTE: nunca compartas tu usuario y contraseña de FTP con nadie ni los pegues en un chat.
> Se usan solo en tu cliente FTP (FileZilla) desde tu computadora.

---

## Paso 1 — Descargar el proyecto

En v0, hacé clic en el botón de los tres puntos (arriba a la derecha) → **"Download ZIP"**.
Descomprimí el archivo en una carpeta de tu computadora.

## Paso 2 — Instalar Node.js y generar el build

1. Instalá [Node.js](https://nodejs.org) (versión LTS) si no lo tenés.
2. Abrí una terminal dentro de la carpeta del proyecto y ejecutá:

   ```bash
   npm install -g pnpm
   pnpm install
   pnpm build
   ```

3. Al terminar, se crea la carpeta **`out/`** con toda la web estática.

## Paso 3 — Subir por FTP con FileZilla

1. Descargá e instalá [FileZilla](https://filezilla-project.org) (gratis).
2. Conectate con los datos que te dio tu hosting:
   - **Servidor (Host):** tu servidor FTP
   - **Nombre de usuario**
   - **Contraseña**
   - **Puerto:** `21` para FTP normal (o el que te hayan indicado)
3. En el panel derecho (servidor remoto), entrá a la carpeta pública de tu hosting.
   Normalmente se llama **`public_html`**, `www` o `htdocs`.
4. Subí **todo el contenido que está DENTRO de la carpeta `out/`**
   (no la carpeta `out` en sí). Es decir: `index.html`, la carpeta `_next/`,
   `productos/`, `historia/`, `maridajes/`, `calafate/`, `images/`, etc.

## Paso 4 — Verificar

Visitá tu dominio en el navegador. La web debería cargar completa.

---

## ¿Mi hosting es compatible?

Si no estás seguro de qué tipo de hosting tenés, hacé esta prueba rápida:
subí un archivo `index.html` simple a `public_html` y visitá tu dominio.
Si lo ves, tu hosting sirve archivos estáticos y esta solución funciona perfecto.
No hace falta Node.js en el servidor, porque el build ya lo hiciste en tu PC.

## Qué funciona en la versión estática

- Todo el contenido y navegación entre páginas.
- Cambio de idioma (ES / EN).
- Filtros del catálogo de productos.
- Botones de WhatsApp y enlaces de contacto.

Todo funciona del lado del navegador, así que no necesita servidor.

## Cada vez que hagas cambios en v0

Repetí el **Paso 1** (descargar ZIP) y el **Paso 2** (`pnpm build`),
y volvé a subir el contenido de la carpeta `out/` por FTP, reemplazando los archivos anteriores.

---

## Nota técnica

En `next.config.mjs` están activadas estas opciones para el export estático:

- `output: 'export'` → genera el sitio estático en `out/`.
- `trailingSlash: true` → cada ruta se crea como carpeta con su `index.html`
  (`/productos/index.html`), lo que funciona mejor en hosting FTP.
- `images.unoptimized: true` → las imágenes no requieren el optimizador de Next.js.
