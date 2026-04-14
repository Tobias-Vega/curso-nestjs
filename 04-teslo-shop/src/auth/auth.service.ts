import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRespository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRespository.create(createUserDto);

      await this.userRespository.save(user);

      return user;
    } catch (error) {
      this.handleDbErrors(error);
    }
  }

  private handleDbErrors(error: any): never {
    if (error.code === '23505') {
      throw new ConflictException(error.detail);
    }

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
