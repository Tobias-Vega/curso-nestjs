import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>

    <input id="jwt-token" placeholder="Json web Token" />
    <button id="btn">Connect</button>

    <br />

    <span id="server-status">Offline</span>

    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>

  </div>
`

// connectToServer()

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const jwtToken = document.querySelector<HTMLInputElement>("#jwt-token")!
const btnConnect = document.querySelector<HTMLButtonElement>("#btn")!

btnConnect?.addEventListener('click', () => {

  if (jwtToken.value.trim().length <= 0) return alert("Enter a valid jwt token")

  connectToServer(jwtToken.value.trim())
})
