import './style.css';
// import { name, age } from './bases/01-types';
import { bulbasaur } from './bases/02-objects';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${bulbasaur.name}!!!</h1>
`
