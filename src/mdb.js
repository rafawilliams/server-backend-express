const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect('mongodb://rafa/nodebackend',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("mongo database connect");
}



module.exports = {connect};