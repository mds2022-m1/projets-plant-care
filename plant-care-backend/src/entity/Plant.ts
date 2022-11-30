import { Column, ManyToOne } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"
import { Place } from "./Place"

@Entity()
export class Plant {
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @ManyToOne(() => Place, (place) => place.uuid)
    uuidPlace: Place

    @Column()
    name: string

    @Column()
    picture: string
}
