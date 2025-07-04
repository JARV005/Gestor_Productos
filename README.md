📄 README.md
markdown
Copiar
Editar
# 🛠️ Proyecto: Gestión de Productos con Fetch API y JSON Server

Este proyecto implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de productos, utilizando **JavaScript**, **Fetch API** y un **servidor simulado con JSON Server**. La interacción se realiza mediante botones en una página HTML, y los resultados se muestran en la consola del navegador.

---

## 📂 Estructura del Proyecto

Entregable-W3-JS/
│
├── index.html # Interfaz con botones de control
└── assets/
├── js/
│ └── gestion_api.js # Lógica JS que realiza operaciones CRUD
└── json/
└── db.json # Base de datos simulada para JSON Server

---

## 🚀 Requisitos

- [Node.js](https://nodejs.org/)
- [JSON Server](https://github.com/typicode/json-server)

Instalación de JSON Server globalmente:

```bash
npm install -g json-server
```bash
▶️ Cómo ejecutar el proyecto
Clona o descarga este repositorio en tu equipo.

Abre una terminal y ubícate en la carpeta del proyecto.

Ejecuta el servidor JSON apuntando al archivo db.json:



json-server --watch ./assets/json/db.json
Esto iniciará el servidor en http://localhost:3000.

Abre el archivo index.html en tu navegador.

Usa los botones para probar las operaciones:

Obtener productos

Crear producto

Actualizar producto

Eliminar producto

Todos los resultados se mostrarán en la consola del navegador (F12 → pestaña "Console").

📋 Funcionalidades implementadas
✅ Obtener y visualizar todos los productos (GET)

✅ Crear un nuevo producto con validación (POST)

✅ Actualizar un producto existente por ID (PUT)

✅ Eliminar un producto por ID (DELETE)

✅ Manejo de errores y validación básica de entradas

📌 Notas
El archivo db.json contiene productos con estructura en inglés (name, price) pero los mensajes están en español.

El ID usado en las funciones de actualizar y eliminar está codificado para pruebas (ID 1 y 2 respectivamente). Puedes cambiarlo en el código si es necesario.

🧑‍💻 Autor
Johan Rivera
