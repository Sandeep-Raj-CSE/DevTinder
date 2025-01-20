
const mongoose = require ("mongoose")


const connectDB = async () => {
    await mongoose.connect
     ("mongodb+srv://sandy:805135Bhai@namastenodejs.cnbpp.mongodb.net/DevTinder")
}



module.exports = connectDB
