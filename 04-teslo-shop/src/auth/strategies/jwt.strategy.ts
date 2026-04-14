import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../interfaces/payload.interface';

export class JwtStrategy extends PassportStrategy(Strategy) {

  async function validate(payload: JwtPayload): Promise<User> {
    const { email } = payload;

    return ;
  }
}
