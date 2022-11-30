import { Column, ManyToOne } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"
import { Plant } from "./Plant"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    uuid: number

    @ManyToOne(() => Plant, (plant) => plant.uuid)
    uuid_plant: Plant
    
    @Column()
    name: string

    @Column()
    note: number

    @Column()
    action_frequency: number

    @Column()
    last_action: Date

    @Column()
    action_type: number

    @Column()
    month: number
}
