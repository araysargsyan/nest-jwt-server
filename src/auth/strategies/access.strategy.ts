import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccessStrategies extends PassportStrategy(
  JWTStrategy,
  'accessToken',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'accessToken',
    });
  }

  validate(payload: any) {
    return payload;
  }
}
