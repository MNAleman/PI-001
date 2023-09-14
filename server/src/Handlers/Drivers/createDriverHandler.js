// const {createDriverDB}= require('../../Controllers/Drivers/CreateDriverController')

// const createDriverHandler = async (req, res) => {
//      const {name, lastname, description,image,nationality,birthdate, team} = req.body;
//      res.status(200).send(`soy el post drivers de ${name} del equipo${team}`);
//      try {
//         const response = await createDriverDB(name, lastname, description,image,nationality,birthdate, team)
//         res.status(200).json(response)
// } catch (error) {
//         res.status(400).jsno({error: error.message})
        
// }

// };

// module.exports = { createDriverHandler };