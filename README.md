# ASTRA — Battle Grounds

A locally playable, original third-person combat and building game inspired by the supplied Fortnite references. Fight 14 AI rivals across a hand-designed 640 × 640 map—approximately three times the original map's area—with three towns, two lakes, forests, construction areas, and 20 enterable buildings.

Choose **Sunny Springs**, **Copper Crossing**, or **Harbor Heights** as your starting town. All three locations share one explorable map.

## Launch

Use Node.js 20.19+ or 22.12+ and a current desktop browser.

```sh
npm install
npm run dev
```

Open the localhost URL printed in the terminal (normally **http://localhost:5173**). In the 3D lobby, choose a starting town and click **PLAY**. This captures your mouse and enables synthesized audio. **Esc** releases your mouse and pauses the match; **M** returns to the lobby.

The lobby includes working town selection, controls, graphics settings, and locally saved match, elimination, and victory statistics. Its destination cards use screenshots captured from the playable world.

## Controls

| Action | Control |
| --- | --- |
| Move | W A S D |
| Look | Mouse |
| Sprint | Left Shift + W |
| Jump | Space |
| Crouch | C or Ctrl |
| Fire / swing / drink equipped potion | Left mouse |
| Aim | Right mouse |
| Reload | R |
| Select pickaxe / rifle / shotgun / SMG / shield slot | 1 / 2 / 3 / 4 / 5 |
| Cycle inventory | Mouse wheel |
| Collect loot / search a chest | E |
| Use medkit | F |
| Toggle building | Q |
| Wall / floor / ramp / pyramid in build mode | 1 / 2 / 3 / 4 |
| Place build | Left mouse (hold for repeated placement) |
| Rotate build | G or R |
| Change wood / stone / metal | B |
| Controls overlay | H |
| Toggle graphics quality | P |
| Pause | Esc |
| Return to lobby | M |

You and every rival start with **nothing**: no weapons, pickaxe, ammunition, shields, medkits, or building materials. You begin at 100 health and zero shield. Empty slots show no equipment; selecting a slot does not grant its item.

Use **E** near ground loot to collect it or near a chest to open it, then collect the chest's contents. Loot is shared: a player or bot can claim each item only once. Rivals must physically find weapons before they can shoot, consume finite ammunition, and reload from their reserves. Eliminated rivals drop equipment and supplies they actually own.

Nearby supplies at each starting area let you gear up quickly. Find a firearm and ammunition, then collect a pickaxe for harvesting. To build, first loot wood from a chest or use a collected pickaxe to harvest trees, rocks, and metal barrels. Every structure costs **10** of the selected material; starting empty means you cannot build immediately.

Eliminate all 14 rivals to win. They search for loot, patrol, pursue, strafe, retreat, heal, and shoot; terrain, town walls, and builds block gunfire. Shield absorbs damage before health. Shield potions take 2.5 seconds and restore 50 shield; medkits take 4 seconds and restore full health. Taking damage interrupts consumption.

Blue building previews indicate valid placement; red previews indicate obstruction, duplication, or insufficient resources. Floors, ramps, and pyramids support the player; walls block movement and shots. Builds have material-specific durability and can be destroyed. Houses have open entrances, interior props, chests, and loot; shallow lakes and docks are traversable. Restart or return to the lobby from the pause and match-result screens. Each new match resets everyone to empty inventories.

## Build and validation

```sh
npm run build
npm run preview
```

The production build is emitted to `dist/`. It requires no remote models, textures, fonts, or audio at runtime.

With the development server running, run the browser gameplay checks:

```sh
npm test
```

Tests use installed Google Chrome on macOS/Linux, or Playwright Chromium. Set `CHROME_PATH` to a browser executable if necessary; `npx playwright install chromium` supplies Playwright's browser. Set `GAME_URL` to test a different development-server address. Screenshots and test results are saved in `artifacts/`.

The browser checks cover the lobby and town selector, empty starting inventories, bots collecting shared loot, equipment ownership, mouse capture, movement, combat, finite ammunition, consumables, building and collision, harvesting, restart, and browser errors. They also load the destination screenshots and exercise the graphics controls.

## Project

- `src/main.js` — game loop, physics, camera, input, combat, AI, loot, match state
- `src/inventory.js` — shared player/bot ownership, loot transfers, ammunition, and empty inventory rules
- `src/world.js` — original terrain, vegetation, buildings, sky, water, props, map data
- `src/character.js` — articulated original characters, weapons, procedural animations
- `src/building.js` — grid placement, previews, materials, support surfaces, durability
- `src/hud.js` / `src/style.css` — gameplay HUD, owned inventory, minimap, controls, pause and results
- `src/menu.js` / `src/menu.css` — live 3D lobby, town selection, settings, controls, and saved statistics
- `src/audio.js` / `src/effects.js` — synthesized sound, tracers, impacts, elimination effects
- `public/screenshots/` — genuine in-game screenshots used by the lobby's destination cards
- `tests/gameplay.mjs` — automated browser playtest

All rendered geometry, textures, icons, and sounds are created in this project. The seven supplied images in `Reference pictures/` were inspected as visual references and are not loaded or redistributed by the game build. No extracted Fortnite assets, logos, models, or sounds are used. Three.js and Vite are installed from npm with their respective licenses.
