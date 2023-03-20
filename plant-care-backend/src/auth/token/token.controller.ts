import { Body, Controller, HttpException, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin-user.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDao } from '../../Interfaces/login.interface';



@Controller('auth')
export class TokenController {

    constructor(
        private users: UserService,
        private jwts: JwtService
    ) { }

    @Post('/token')
    async signIn(@Body() body: LoginDao) {
        if (body) {
            const email = body.username;
            const password = body.password;
            const user = await this.users.findByEmail(email);
            if (user && await bcrypt.compare(password, user.password)) {
                const cr = new SignInDto();
                cr.grant_type = "password";
                cr.scope = "*";
                cr.expires_in = "1h";
                cr.access_token = await this.jwts.sign({
                    email: user.email
                }, {
                    subject: user.email,
                    expiresIn: "1h",
                    secret: process.env.JWT_TOKEN_SECRET
                }, 
                
                );
                return cr;
            }
            else {
                throw new HttpException('Connexion impossible, utilisateur ou mot de passe incorrect', HttpStatus.UNAUTHORIZED)
            }
        }
        throw new UnauthorizedException("Invalid or missing Basic credential ");
    }
}

