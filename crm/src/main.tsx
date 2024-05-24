import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.scss';

import { register } from "@public-ui/components";
import { defineCustomElements } from "@public-ui/components/dist/loader";

//@ts-expect-error Missing d.ts file
import { DEFAULT } from "@public-ui/themes";

register(DEFAULT, defineCustomElements)
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.warn);