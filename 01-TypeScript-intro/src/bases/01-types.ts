

export let name: string = 'Tobías';
export const age: number = 20;
export const isValid: boolean = true;

console.log({isValid});

name = 'Melissa';

export const templateString = ` Esto es un string
multilínea
que puede tener
" dobles
'simples
inyectar valores ${name}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}
`

console.log(templateString);
