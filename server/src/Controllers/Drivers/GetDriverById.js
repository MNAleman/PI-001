// const axios = require ('axios');
// const URL = "http://localhost:5000/drivers"

// const getDriverById = async(req, res)=>{
//     try {
//         const {id} =req.params;
//         const {name, lastname, description,image,nationality,birthdate, team} = (await axios.get (URL + Number(id))).data
//         const driver = {
//             id: +id,
//             name,
//             lastname,
//             description,
//             image,
//             nationality,
//             birthdate
//         }
//         return driver.name ? res.status(200).json(driver) : res.status(404).send ('No encontrado')

//     }catch (error){
//         res.status(500).send(error.message)
//     }

// };
// module.exports= {getDriverById}
