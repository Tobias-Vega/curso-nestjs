import axios from 'axios';
import type { Move, PokeAPIResponse } from '../interfaces/poke-api-response.interface';

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

  async getMoves(): Promise<Move[]> {
    // const moves = 10;

    const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }

}

export const charmander = new Pokemon(4, 'Charmander');

// console.log(charmander.scream());

charmander.getMoves();
