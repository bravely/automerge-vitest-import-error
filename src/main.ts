// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import * as Automerge from "@automerge/automerge"
console.log(Automerge)

export const init = () => {
  let doc = Automerge.init()
  doc = Automerge.change(doc, (d: any) => (d.hello = "from automerge-js"))
  console.log(doc)
  const result = JSON.stringify(doc)
  if (typeof document !== "undefined") {
    const element = document.createElement("div")
    element.innerHTML = JSON.stringify(result)
    document.body.appendChild(element)
  } else {
    console.log("node:", result)
  }
  return result
}
