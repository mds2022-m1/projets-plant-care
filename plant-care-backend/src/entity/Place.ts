import { Column, ManyToOne } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"
import { User } from "./User"

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    uuid: number

    @ManyToOne(() => User, (user) => user.uuid)
    uuid_user: User


    @Column()
    name: string
}