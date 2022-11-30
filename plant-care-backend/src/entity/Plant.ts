import { Column, ManyToOne } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"
import { Place } from "./Place"

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    uuid: number

    @ManyToOne(() => Place, (place) => place.uuid)
    uuid_place: Place

    @Column()
    name: string

    @Column()
    picture: string
}
