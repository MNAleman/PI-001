const getTeamsHandler = (req,res)=>{
    const{teams} = req.params
    res.status(200).send, (`Estos son todos los equipos${teams}`);
};

module.exports = {getTeamsHandler};