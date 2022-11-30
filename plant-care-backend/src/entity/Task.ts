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
    note: string

    @Column()
    frequency_type: string

    @Column()
    last_action: Date

    @Column()
    month: string

    @Column()
    action_frequency: number
}
