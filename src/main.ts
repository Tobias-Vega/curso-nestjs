// import { name, age } from './bases/01-types'
// import { bulbasaur, charmander } from './bases/02-objects'
import { charmander } from './bases/06-decorators2';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>Hello ${charmander.name} ${charmander.id}</h1>
`
