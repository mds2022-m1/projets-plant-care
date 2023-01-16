import { Column } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column()
    uuidGithub: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    avatar: string

    @Column({default: '09:00'})
    notif: string

    @Column({default: '4'})
    delayNotif: string
}
    