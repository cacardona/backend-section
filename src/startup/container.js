//inyeccion de container, como clase, como valor, como funcion
const { createContainer, asClass, asValue, asFunction} = require("awilix");

//config
const config = require("../config");
const app = require(".");

//services
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()   //se pone bind para que express no cambie el scope
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;