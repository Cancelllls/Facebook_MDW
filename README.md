# 🍄 Super Mario Bros - JavaScript Edition

Welcome to the **Super Mario Bros - JavaScript Edition**, a complete standalone recreation of the classic NES game, optimized to run fully offline in your web browser!

## ✨ Features

- **Fully Offline**: Zero external dependencies. All graphics, sounds, and logic are bundled internally.
- **Level Selector**: Play the first full world (Levels 1-1, 1-2, 1-3, and 1-4) directly from the start menu.
- **Classic Gameplay**: Accurate block-breaking physics, momentum-based jumping, and authentic enemy behaviors.
- **Cross-Platform Controls**:
  - **Keyboard**: Play using the traditional Arrow Keys or WASD for movement. `X` or `K` to Jump. `Z` or `J` to Sprint.
  - **Mobile Touch**: Fully responsive on-screen buttons for touch-screen devices.
- **Modern Rendering**: Uses CSS-based pixel-perfect scaling (`image-rendering: pixelated`) for incredibly fast and crisp performance without the heavy overhead of manual canvas scaling.

## 🚀 How to Play

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Select your desired level on the **Start Screen**.
4. The game will automatically grab focus—just start running!

## 🎮 Controls

| Action | Primary Key | Secondary Key |
| :--- | :--- | :--- |
| **Move Left** | Left Arrow | `A` |
| **Move Right** | Right Arrow | `D` |
| **Crouch/Pipe** | Down Arrow | `S` |
| **Jump** | `X` | `K` |
| **Sprint / Fire** | `Z` | `J` |

*Touch controls are available on the bottom of the screen for mobile users.*

## 📁 Project Structure

The project has been completely overhauled from its original Google Apps Script (GAS) format into a clean, standard web structure:

*   **`index.html`**: The main entry point containing the game canvas and start screen UI.
*   **`css/style.css`**: Hardware-accelerated styling for pixel-perfect scaling.
*   **`js/assets.js`**: Contains all Base64-encoded game assets (audio and sprites).
*   **`js/mario.js`**: The core game engine, physics, level generation, and input handler.

## 🛠️ Recent Optimizations

- **Addressed Performance bottlenecks:** Resized internal canvas to native 256x240 and offloaded upscaling to CSS.
- **Bug Fixes:**
  - Resolved the "Void" bug by aligning player spawn coordinates with generated floor logic.
  - Resolved game freezes upon breaking blocks by implementing universal `rubbleSprite` fallbacks.
  - Fixed mobile touch events immediately canceling by applying global event capture (`preventDefault`).
- **Expanded Content:** Hand-built Levels 1-2, 1-3, and 1-4 using the engine's built-in Level generator.

---
*Created for educational and archival purposes.*