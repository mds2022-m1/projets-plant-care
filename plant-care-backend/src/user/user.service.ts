import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    public getUser(): Promise<User[]> {
        return this.userRepository.find();
    }

    public async getUserById(uuid: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { uuid }
        });
        return user;
    }

    public async createUser(createUserRequest: User): Promise<User> {
        const user = new User;
        user.name = createUserRequest.name;
        user.email = createUserRequest.email;
        user.password = createUserRequest.password;
        user.avatar = createUserRequest.avatar;

        await this.userRepository.save(user);

        return user;
    }

    public async updateUser(uuid: string, updateUserRequest: User): Promise<User> {
        const user = new User;
        user.name = updateUserRequest.name;
        user.email = updateUserRequest.email;
        user.password = updateUserRequest.password;
        user.avatar = updateUserRequest.avatar;

        await this.userRepository.update(uuid, user);

        return user;
    }

    //TODO
    public async deleteUser(uuid: string){
        await this.userRepository.delete(uuid);
    }

    public async findByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email }
        });
        return user;
    }

}
