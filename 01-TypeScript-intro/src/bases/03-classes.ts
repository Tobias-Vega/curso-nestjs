import axios from 'axios';

export class Pokemon {

  get imageUrl(): string {
    return `httpS://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves() {
    // const moves = 10;

    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }

}

export const charmander = new Pokemon(4, 'Charmander');

// console.log(charmander.scream());

charmander.getMoves();
