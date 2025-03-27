import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModule: Model<Pokemon>
  ){}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    try {
      const pokemon = await this.pokemonModule.create(createPokemonDto);
      return pokemon;
      
    } catch (error) {
      this.handleExecptions(error)
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {

    let pokemon: Pokemon | null = null;

    if (!isNaN(+term)) {
      pokemon = await this.pokemonModule.findOne({ no: term })
    }

    // MongoID
    if (isValidObjectId(term) && !pokemon) {
      pokemon = await this.pokemonModule
      .findById(term)
    }

    // Name
    if (!pokemon) {
      pokemon = await this.pokemonModule.findOne({ name: term.toLowerCase().trim()})
    }

    if (!pokemon) throw new NotFoundException(`Pokemon with id, name or no "${term}" not found`);

    return pokemon;

  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    try {
      const pokemon = await this.findOne(term);
  
      if (updatePokemonDto.name)
        updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
  
      await pokemon.updateOne(updatePokemonDto)
  
  
      return {...pokemon.toJSON(), ...updatePokemonDto};
      
    } catch (error) {
      this.handleExecptions(error)
    }

  }

  async remove(id: string) {

    const { deletedCount, acknowledged } = await this.pokemonModule.deleteOne({ _id: id });

    if (deletedCount === 0)
      throw new BadRequestException(`Pokemon with id "${id}" not found`);

    return;
  }

  private handleExecptions(error: any) {
    if (error.code === 11000) {
        throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`)
      }
      console.log(error)
      throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`)
  }
}
