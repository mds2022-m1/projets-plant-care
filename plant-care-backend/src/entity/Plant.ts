import { Column, ManyToOne } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"
import { Place } from "./Place"

@Entity()
export class Plant {
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @ManyToOne(() => Place, (place) => place.uuid, {
        onDelete : "CASCADE"
    })
    uuidPlace: Place

    @Column({
        type: "varchar",
        length: 20,
        nullable: false})
    name: string        

    @Column({
        type: "varchar",
        length: 20,
        nullable: true})
    picture: string
}
