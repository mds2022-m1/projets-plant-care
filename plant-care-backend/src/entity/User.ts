import { Column } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    uuid: number

    @Column()
    uuid_github: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    avatar: string
}
    