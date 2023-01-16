import { Body, Controller, HttpException, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin-user.dto';
import * as bcrypt from 'bcryptjs';



@Controller('token')
export class TokenController {

    constructor(
        private users: UserService,
        private jwts: JwtService
        )
    {}

    @Post('/token')
    async signIn(@Body("Authorization") auth : string) {
        let args = auth && auth.split(" ");
        if(args && args.length == 2 && args[0] == "Basic") {
            const credentials = Buffer.from(args[1], "base64").toString("utf8").split(":");
            const email = credentials[0];
            const password = credentials[1];
            const user = await this.users.findByEmail(email);
            if(user && await bcrypt.compare(password, user.password)){
                const cr = new SignInDto();
                cr.grant_type = "password";
                cr.scope = "*";
                cr.expires_in = "1h";
                cr.access_token = await this.jwts.sign({
                    email: user.email
                },{
                    subject: user.email,
                    expiresIn: "1h"
                });
                return cr;
            }
            else{
                throw new HttpException('Connexion impossible, utilisateur ou mot de passe incorrect', HttpStatus.UNAUTHORIZED)
            }
        }
        throw new UnauthorizedException("Invalid or missing Basic credential ");
    }
}

