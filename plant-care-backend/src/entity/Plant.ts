import { Column } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    uuid: number

    @Column()
    uuid_place: string

    @Column()
    name: string

    @Column()
    picture: number
}
