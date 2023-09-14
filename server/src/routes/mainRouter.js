const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");


const router = Router();

router.use("/drivers", driversRouter);
//mainRouter.use("/teams", teamsRouter);


// mainRouter.use("/driver/:idDriver", getDriverById);
// mainRouter.use("/drivers/name?=${id}", getDriverByName);
// mainRouter.use("/post", postRouter);


// mainRouter.get("/drivers/idDriver:",(req,res)=>{
//     res.status(200).send ('Detalle del driver');
// });
// mainRouter.get ("/drivers/name?=${id}", (req,res)=>{
//     res.status(200).send ('Estos son los dirvers encontrados por query');
// });
// mainRouter.post("/drivers", (req, res)=>{
//     res.status (200).send ('Crear un nuevo driver');
// });
// mainRouter.get ("/teams", (req,res)=>{
//     res.status(200).send, ('Estos son todos los equipos');



module.exports = mainRouter;

