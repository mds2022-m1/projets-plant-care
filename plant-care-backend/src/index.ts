import "reflect-metadata"
import { DataSource } from "typeorm"
import { AppDataSource } from "./data-source"
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
        user.uuidGithub = 'antoine-github'
        user.name = 'antoine'
        user.password = '123456'
        user.email = 'antoine@orange.fr'
        user.avatar = '123456.png'
        await AppDataSource.manager.save(user)
        console.log(User, "has been saved")

        const place = new Place()
        place.name = 'salon'
        place.uuidUser = user
        await AppDataSource.manager.save(place)
        console.log(Place, "has been saved")

        const plant = new Plant()
        plant.uuidPlace = place
        plant.name = 'tulipe'
        plant.picture = 'image.png'
        
        await AppDataSource.manager.save(plant)
        console.log(Plant, "has been saved")

        let date: Date = new Date();

        const task = new Task()
        task.uuidPlant = plant
        task.name = 'arrosage'
        task.note = 'bien arroser le pied'
        task.frequencyType = 'Month/Year/Day'
        task.lastAction = date
        task.month = '[2.3.4]'
        task.actionFrequency = 2
        await AppDataSource.manager.save(task)
        console.log(Task, "has been saved")
      })
    .catch((error) => console.log(error))
