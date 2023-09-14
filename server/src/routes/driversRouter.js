const { Router } = require("express");
const {getDriversHandler} = require ("../Handlers/Drivers/getDriversHandler");
//const {getDriverById} = require ("../Handlers/Drivers/getDriverById");
//const {createDriverHandler} = require("../Handlers/Drivers/createDriverHandler");
//const getNameHandler = ("../Handlers/getNameHandler")

const driversRouter = Router();



driversRouter.get("/", getDriversHandler);
//driversRouter.get("/:id", getDriverById);
//driversRouter.post("/", createDriverHandler);
//driversRouter.get ("/name.forename={name}", getNameHandler);


module.exports = driversRouter;