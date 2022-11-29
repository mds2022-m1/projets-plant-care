import { Column } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    uuid: number

    @Column()
    uuid_user: string

    @Column()
    name: string
}
