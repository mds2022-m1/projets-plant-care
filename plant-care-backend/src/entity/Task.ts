import { Column } from "typeorm"
import { PrimaryGeneratedColumn } from "typeorm"
import { Entity } from "typeorm"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    uuid: number

    @Column()
    uuid_plant: string

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
