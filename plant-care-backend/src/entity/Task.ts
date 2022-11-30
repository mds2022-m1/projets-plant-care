import { Column, ManyToOne } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"
import { Plant } from "./Plant"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    uuid: number

    @ManyToOne(() => Plant, (plant) => plant.uuid)
    uuidPlant: Plant
    
    @Column()
    name: string

    @Column()
    note: string

    @Column()
    frequencyType: string

    @Column()
    lastAction: Date

    @Column()
    month: string

    @Column()
    actionFrequency: number
}
