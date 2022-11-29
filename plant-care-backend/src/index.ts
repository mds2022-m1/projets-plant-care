import "reflect-metadata"
import { DataSource } from "typeorm"
import { Place } from "./entity/Place"
import { Plant } from "./entity/Plant"
import { Task } from "./entity/Task"
import { User } from "./entity/User"

const AppDataSource = new DataSource({
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

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {
        const user = new User()
        user.name = 'antoine'
        user.password = '123456'
        user.email = 'antoine@orange.fr'
        user.avatar = 123456

        await AppDataSource.manager.save(user)
    
        console.log(User, "has been saved")
      })
    .catch((error) => console.log(error))
