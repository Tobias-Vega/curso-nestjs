import { charmander } from './bases/04-injection';
import './style.css';
// import { name, age } from './bases/01-types';
// import { bulbasaur } from './bases/02-objects';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}!</h1>
`
