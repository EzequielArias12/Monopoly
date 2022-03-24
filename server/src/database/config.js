require('dotenv').config();

const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log("DB En linea");    
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection;