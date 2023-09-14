const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
   console.log(`Server listening on port ${PORT}`);
server.listen(PORT, () => {
});
}).catch(error => console.error(error)
);
