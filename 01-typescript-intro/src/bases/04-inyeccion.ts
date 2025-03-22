import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';
import { Move, PokeapiResponse } from '../interface/pokeapi-response.interface';

export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`;
  }
  

  constructor(
    public readonly id: number, 
    public name: string,
    // DI
    private readonly http: HttpAdapter,
    ) {}


    scream() {
      console.log(`${this.name.toUpperCase() !!}`)
    }

    speak() {
      console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {

      const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')

      
      console.log(data.moves);

      return data.moves;
    }
}

const pokeApiFetch = new PokeApiFetchAdapter();
const pokeApiAxios = new PokeApiAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);

console.log(charmander.getMoves()); 