import "reflect-metadata"
import { DataSource } from "typeorm"
import { Place } from "./entity/Place"
import { Plant } from "./entity/Plant"
import { Task } from "./entity/Task"
import { User } from "./entity/User"

export const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mds",
    entities: [Place, Plant, Task, User],
    synchronize: true,
    logging: false,
})
