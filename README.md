# Controlador de Temperatura con Historial

## 📌 Objetivo del Ejercicio

El objetivo de este ejercicio es que construyas una pequeña aplicación en React para controlar una temperatura, mostrar un mensaje dinámico en pantalla y guardar un historial de los cambios realizados.

Trabajarás con los conceptos de `useState`, props y renderizado condicional en React.

---

## 📂 Funcionalidades

Vais a desarrollar:

- Un componente para visualizar la temperatura actual y un mensaje según el valor.
- Unos botones para subir, bajar y resetear la temperatura.
- Un listado que muestra el historial de cambios con la hora exacta en la que se realizó cada uno.

---

## 🎯 Requisitos

- Usar `useState` para gestionar:
  - La temperatura actual.
  - El historial de cambios.
- Dividir la aplicación en **tres componentes principales**:
  - `TemperatureDisplay`: muestra la temperatura y el mensaje.
  - `TemperatureControls`: muestra los botones.
  - `HistoryList`: muestra el historial.

---

## 🔧 Comportamientos esperados

- La temperatura empieza en **20 °C**.
- Cada clic en los botones `+` o `-` debe aumentar o disminuir 1 grado.
- El botón **Reset** debe:
  - Volver a 20 °C.
  - Borrar el historial.
- El historial debe mostrar algo como:
  ```
  [14:03:22] → 21 °C
  ```
- El mensaje y el color cambia según la temperatura:
  - Menor de 15: `"¡Hace frío!"`
  - Entre 15 y 25: `"Temperatura agradable"`
  - Mayor de 25: `"¡Hace calor!"`

---

## 🛠️ Pasos para Realizar el Ejercicio

### 1️⃣ Preparar el proyecto

- Forkead este repositorio y clonadlo en local.
- Ejecutad el siguiente comando para iniciar el proyecto:

```bash
npm i
npm run dev
```

- Cread una estructura como esta:

```
src/
├── App.jsx
├── components/
│   ├── TemperatureDisplay.jsx
│   ├── TemperatureControls.jsx
│   └── HistoryList.jsx
```

### 2️⃣ Crear los componentes

#### 🔹 TemperatureDisplay

- Recibe la temperatura como prop.
- Muestra el valor actual y un mensaje según el rango.

#### 🔹 TemperatureControls

- Recibe como props las funciones para subir, bajar y resetear la temperatura.
- Muestra tres botones con esas acciones.

#### 🔹 HistoryList

- Muestra una lista con cada cambio de temperatura.
- Usa `toLocaleTimeString()` para formatear la hora.

---

## 🚀 Bonus

Si terminas antes, intenta añadir:

- Limita la temperatura entre 0 y 40 grados.
- Añade un pequeño `setTimeout` para simular carga antes de mostrar el historial.
- Guarda el historial en `localStorage`.

---
# temperature-controller
