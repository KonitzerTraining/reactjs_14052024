# ReacJS und Kolibri

- https://public-ui.github.io/
- https://github.com/public-ui/kolibri

## Ressourcen 

https://ecma-international.org/publications-and-standards/standards/ecma-262/

Tutorials von w3schools
- https://www.w3schools.com/html/default.asp
- https://www.w3schools.com/js/default.asp
- https://www.w3schools.com/typescript/index.php


Alternativen von Mozilla und Microsoft
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- https://developer.mozilla.org/en-US/docs/Web/JavaScript#tutorials
- https://www.typescriptlang.org/docs/handbook/intro.html

Methoden:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


Build-Werkzeuge

- https://vitejs.dev/guide/
- https://webpack.js.org/

- https://turbo.build/pack/docs

## Einfaches Setup mit Vite 

- Nodejs installieren https://nodejs.org/en

```
node -v
npm create vite@latest demo-ts -- --template vanilla-ts
cd demo-ts
npm install
npm run dev
```

### Begriffe erklärt:

1. **Node.js**:
   Node.js ist eine serverseitige JavaScript-Laufzeitumgebung, die auf der V8-Engine von Google Chrome basiert. Sie ermöglicht es, JavaScript außerhalb des Browsers auszuführen, was die Entwicklung von serverseitigen Anwendungen und Tools erleichtert. Node.js wird häufig für die Entwicklung von Backend-Servern, APIs und command-line tools verwendet.

2. **npm (Node Package Manager)**:
   npm ist der Paketmanager für Node.js. Es ermöglicht Entwicklern, Bibliotheken und Tools einfach zu installieren, zu verwalten und zu teilen. Mit npm können Entwickler benötigte Abhängigkeiten für ihre Projekte installieren und verwalten.

3. **Vite**:
   Vite ist ein modernes Build-Tool und Entwicklungsserver für Webprojekte, das einen schnelleren Entwicklungsprozess ermöglicht. Vite nutzt native ES-Modul-Importe während der Entwicklung und optimiert den Build-Prozess durch Bundling für die Produktion. Es ist besonders für moderne JavaScript-Frameworks wie React, Vue und Svelte optimiert.

4. **Webpack**:
   Webpack ist ein statisches Modul-Bundler für moderne JavaScript-Anwendungen. Es nimmt Module mit Abhängigkeiten und generiert statische Assets, die diese Module darstellen. Webpack ermöglicht die Bündelung und Verwaltung von JavaScript, CSS, Bildern und anderen Dateien, was die Optimierung und Ladezeiten von Webanwendungen verbessert.

5. **React**:
   React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen, die von Facebook entwickelt wurde. Es ermöglicht Entwicklern, wiederverwendbare UI-Komponenten zu erstellen und den Zustand der Anwendung effizient zu verwalten. React nutzt ein virtuelles DOM (Document Object Model) zur Optimierung der Leistung.

6. **TypeScript**:
   TypeScript ist eine von Microsoft entwickelte, typisierte Obermenge von JavaScript, die zu reinem JavaScript kompiliert wird. TypeScript fügt statische Typisierung und Klassenkonzepte hinzu, die die Entwicklung von großen und komplexen Anwendungen erleichtern und Fehler frühzeitig im Entwicklungsprozess erkennen lassen.

### Zusammenhang:

1. **Node.js** bildet die Grundlage für serverseitige JavaScript-Entwicklung und ermöglicht die Nutzung von npm für Paketverwaltung.

2. **npm** ist der zentrale Paketmanager für Node.js und ermöglicht es, Tools wie Webpack und Vite zu installieren und zu verwalten.

3. **Vite** und **Webpack** sind beide Build-Tools, die zur Optimierung und Verwaltung von Webanwendungen verwendet werden. Während Webpack lange Zeit der Standard für das Bundling war, bietet Vite durch seine schnelleren Entwicklungs- und Build-Prozesse eine moderne Alternative.

4. **React** ist eine JavaScript-Bibliothek, die oft in Kombination mit TypeScript verwendet wird, um typisierte, skalierbare Benutzeroberflächen zu erstellen. Beide können durch Build-Tools wie Vite oder Webpack gebündelt und optimiert werden.

5. **TypeScript** verbessert die Entwicklungsproduktivität und Code-Qualität in JavaScript-Projekten. Es wird häufig in Projekten verwendet, die mit Node.js, React und Build-Tools wie Vite und Webpack entwickelt werden, um den Code sicherer und wartbarer zu machen.

Zusammengefasst: Node.js und npm bilden die Grundlage für die Installation und Verwaltung von JavaScript-Tools. Vite und Webpack sind wichtige Build-Tools, die die Entwicklung und Optimierung von Webanwendungen erleichtern. React und TypeScript sind moderne Technologien, die oft zusammen verwendet werden, um leistungsfähige und skalierbare Webanwendungen zu erstellen.

## npm Befehle

Hier sind einige typische npm-Befehle mit kurzer Erklärung:

1. **`npm init`**:
   Erstellt eine neue `package.json` Datei, die grundlegende Informationen über das Projekt enthält und Abhängigkeiten verwaltet.
   
   ```sh
   npm init
   ```

2. **`npm install`** oder **`npm i`**:
   Installiert alle im `package.json` angegebenen Abhängigkeiten in das `node_modules` Verzeichnis.

   ```sh
   npm install
   npm i
   ```

3. **`npm install <package>`**:
   Installiert ein bestimmtes Paket und fügt es als Abhängigkeit in der `package.json` hinzu. Mit dem Flag `--save` wird es zu den Produktionsabhängigkeiten (`dependencies`), und mit `--save-dev` zu den Entwicklungsabhängigkeiten (`devDependencies`) hinzugefügt.

   ```sh
   npm install <package>
   npm install <package> --save
   npm install <package> --save-dev
   ```

4. **`npm update`**:
   Aktualisiert alle Pakete im `node_modules` Verzeichnis auf ihre neuesten Versionen, die mit den Semver-Bereichen in der `package.json` Datei kompatibel sind.

   ```sh
   npm update
   ```

5. **`npm uninstall <package>`** oder **`npm remove <package>`**:
   Entfernt ein Paket aus dem `node_modules` Verzeichnis und aktualisiert die `package.json` Datei entsprechend.

   ```sh
   npm uninstall <package>
   npm remove <package>
   ```

6. **`npm run <script>`**:
   Führt ein im `scripts` Abschnitt der `package.json` definiertes Skript aus. Zum Beispiel kann `npm start` das `start` Skript ausführen.

   ```sh
   npm run <script>
   npm run start
   ```

7. **`npm list`** oder **`npm ls`**:
   Listet die installierten Pakete und ihre Abhängigkeiten auf.

   ```sh
   npm list
   npm ls
   ```

8. **`npm audit`**:
   Führt eine Sicherheitsüberprüfung der installierten Pakete durch und listet potenzielle Sicherheitslücken auf.

   ```sh
   npm audit
   ```

9. **`npm audit fix`**:
   Versucht automatisch, gefundene Sicherheitslücken zu beheben, indem die betroffenen Pakete aktualisiert werden.

   ```sh
   npm audit fix
   ```

10. **`npm cache clean --force`**:
    Löscht den npm-Cache, um Platz zu schaffen oder bei Cache-Problemen zu helfen.

    ```sh
    npm cache clean --force
    ```

11. **`npm outdated`**:
    Zeigt eine Liste der installierten Pakete, die veraltet sind und eine neuere Version verfügbar haben.

    ```sh
    npm outdated
    ```

12. **`npm version <update_type>`**:
    Erhöht die Version des Projekts basierend auf den Semver-Konventionen (`patch`, `minor`, `major`) und aktualisiert die `package.json`.

    ```sh
    npm version patch
    npm version minor
    npm version major
    ```

Diese Befehle sind die Grundlage für die Arbeit mit npm und decken die häufigsten Aufgaben in der Paketverwaltung und Projektverwaltung ab.

## Mock Backend mit Markdown

```
mkdir backend
cd backend
npm init -y
npm install json-server@0.17.4
```

package.json 

```
  "private": true,
  "scripts": {
    "start": "json-server -w db.json -d 700 -p 3002"
  },
```

Server starten

```
npm start
```