import "reflect-metadata"
import { DataSource } from "typeorm"
import { AppDataSource } from "../dist"
import { Place } from "./entity/Place"
import { Plant } from "./entity/Plant"
import { Task } from "./entity/Task"
import { User } from "./entity/User"

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {
        const user = new User()
        user.uuid_github = 'antoine-github'
        user.name = 'antoine'
        user.password = '123456'
        user.email = 'antoine@orange.fr'
        user.avatar = '123456.png'
        await AppDataSource.manager.save(user)
        console.log(User, "has been saved")

        const place = new Place()
        place.name = 'salon'
        place.uuid_user = user
        await AppDataSource.manager.save(place)
        console.log(Place, "has been saved")

        const plant = new Plant()
        plant.uuid_place = place
        plant.name = 'tulipe'
        plant.picture = 'image.png'
        
        await AppDataSource.manager.save(plant)
        console.log(Plant, "has been saved")

        let date: Date = new Date();

        const task = new Task()
        task.uuid_plant = plant
        task.name = 'arrosage'
        task.note = 'bien arroser le pied'
        task.frequency_type = 'Month/Year/Day'
        task.last_action = date
        task.month = '[2.3.4]'
        task.action_frequency = 2
        await AppDataSource.manager.save(task)
        console.log(Task, "has been saved")
      })
    .catch((error) => console.log(error))
