import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { ConfigService } from "@nestjs/config/dist";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    //TODO mettre un type jwtPayload à la place du any
    async validate(payload: any): Promise<any> {
        return {
            id: payload.id,
            email: payload.email,
        }
    }
}