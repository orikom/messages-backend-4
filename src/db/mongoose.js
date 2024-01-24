const mongoose = require("mongoose");

console.log('mongoose is trying to connect');

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('DB is connected'));


