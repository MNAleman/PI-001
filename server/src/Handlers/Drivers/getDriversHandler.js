const { getDrivers } = require('../Controllers/Drivers/GetDriversController');

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const respuesta = getDrivers();
            return res.status(200).send(respuesta);
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = { getDriversHandler };

// Recibir la Request
// Unificar datos
// Devolver la respuesta
// Invoca al controller --> EL HANDLER NUNCAAA INTERACTUA CON FUENTES EXTERNAS DE INFO  (EL CONTROLLER ES OTRA FUNCIÓN)
//   /:id => params
//  query
// body ===>  info
