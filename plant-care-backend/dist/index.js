"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Post_1 = require("./entity/Post");
const Category_1 = require("./entity/Category");
const Photo_1 = require("./entity/Photo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mds",
    synchronize: true,
    logging: true,
    entities: [Post_1.Post, Category_1.Category, Photo_1.Photo],
    subscribers: [],
    migrations: [],
});
exports.AppDataSource.initialize()
    .then(() => {
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map