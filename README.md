# Notes App React - Mi primera App con react

## Características principales

- **CRUD completo:** Crea, lee, actualiza y elimina notas.
- **Consumo de API REST:** Todas las notas se almacenan y gestionan a través de una API externa (Beeceptor).
- **Diseño responsivo:** Inspirado en pergaminos y fondos nórdicos/vikingos.
- **Gestión de errores:** Mensajes claros si la API falla.
- **Enlaces a tu portafolio y GitHub.**

## Estructura del proyecto

```
react-notes-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── papirofondo.jpg
│   ├── components/
│   │   ├── CreateNote.jsx
│   │   ├── CreateNote.css
│   │   ├── HeaderComponent.jsx
│   │   ├── HeaderComponent.css
│   │   ├── NoteCard.jsx
│   │   └── NoteCard.css
│   ├── context/
│   │   └── note.context.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── NotesPage.jsx
│   │   └── NotePage.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Instalación y uso

1. **Clona el repositorio:**
   ```
   git clone https://github.com/cristian-micchele-dev/notes-app-react
   cd react-notes-app
   ```
2. **Instala dependencias:**
   ```
   npm install
   ```
3. **Inicia la app en modo desarrollo:**
   ```
   npm run dev
   ```
4. **Abre en tu navegador:**
   Visita `http://localhost:5173` (o el puerto que indique la terminal).

## Estructura de carpetas y archivos clave

- **src/components/**
  - `HeaderComponent.jsx` y `.css`: Header con navegación y estilo papiro.
  - `CreateNote.jsx` y `.css`: Formulario para crear nuevas notas.
  - `NoteCard.jsx` y `.css`: Tarjeta individual de nota, con edición y borrado.
- **src/context/note.context.jsx**: Contexto global para manejar el estado de las notas y la comunicación con la API.
- **src/pages/**
  - `HomePage.jsx` y `.css`: Portada con bienvenida, enlaces y fondo nórdico.
  - `NotesPage.jsx` y `NotePage.css`: Página principal de notas, CRUD y fondo nórdico.
- **src/index.css**: Reset y estilos globales.

## Personalización
- Cambia el fondo en `HomePage.css` y `NotePage.css` para otro estilo nórdico/vikingo si lo deseas.
- Puedes modificar los colores en los archivos `.css` para adaptar la app a tu gusto.

## API utilizada
- [Beeceptor](https://beeceptor.com/) (endpoint personalizado, puedes cambiarlo en `src/context/note.context.jsx`)

## Autor
- Cristian Micchele
- [Portafolio](https://portfolio-cristian-backend.vercel.app/)
- [GitHub](https://github.com/cristian-micchele-dev)

---

¡Gracias por probar y contribuir a este proyecto! Si tienes sugerencias o encuentras bugs, abre un issue o un pull request.
