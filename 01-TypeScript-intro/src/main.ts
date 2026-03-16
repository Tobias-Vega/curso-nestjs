import './style.css';
import { name, age } from './bases/01-types';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${name} ${age}!!!</h1>
`
