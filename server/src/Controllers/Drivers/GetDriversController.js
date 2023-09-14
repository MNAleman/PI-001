const { Drivers } = require('../../db');
const { Teams } = require('../../db');
//const api = require ('../../../api/db.json');
const axios = require('axios');

const { Error } = require('sequelize');

//const URL = 'http://localhost:5000/drivers'

const getAllDriversApi = async () => {
    const respuestaApi = await axios.get('http://localhost:5000/drivers')

    const drivers = respuestaApi.data.map((driver) => {
        return {
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.lastname.surename,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            birthdate: driver.dob,
            team: driver.teams
        };
    });
    return drivers;

};

const getDriversDb = async () => {
    const respuestaDb = await Drivers.findAll({
        include: [{
            model: Teams,
            attributes: ['name'],
            through: { attributes: [] },
        }],
    });
    const driverDb = respuestaDb.map((driver)=>{
        return {
            id: driver.id,
            name: driver.name,
            lastname: driver.lastname,
            description: driver,
            image: driver.image,
            nationality: driver.nationality,
            birthdate: driver.birthdate,
            team: driver.teams,
            from_DB: true
        };

    })
    return driverDb; 

};
const getDrivers = async()=>{
    let driversApi = await getAllDriversApi();
    let driversDb = await  getDriversDb();
    if(driversDb){
        let allDrivers = [...driversApi, ...driversDb];

    } else {
        allDrivers = driversApi
    }
    return allDrivers;
};

module.exports = {getDrivers};
