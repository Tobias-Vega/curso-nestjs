import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../entities/user.entity";
import { JwtPayload } from "../interfaces/jwt-payload.interfaces";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {


  constructor(
    @InjectRepository(User)
    private readonly userRepostiory: Repository<User>,
    configService: ConfigService
  ){

    const jwtSecret = configService.get('JWT_SECRET')

    if(!jwtSecret)
      throw new Error("env JWT_SECRET is not defined")

    super({
      secretOrKey: jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

    })
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;

    const user = await this.userRepostiory.findOneBy({ id })

    if (!user) 
      throw new UnauthorizedException('Token not valid')

    if (!user.isActive) 
      throw new UnauthorizedException('User is inactive, talk with an admin')

    return user;

  }
}