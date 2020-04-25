require('dotenv').config();
const app = require("./src/app.js");
const port = process.env.PORT || 3000;
const {connect} = require('./src/mdb.js');

async function main(){

  //mongo database connect
  await connect();  

  // express applicacion
  await app.listen(port);
  console.log("Server running");
}

main();