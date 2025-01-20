
const mongoose = require ("mongoose")


const connectDB = async () => {
    await mongoose.connect
     ("mongodb+srv://sandy:*********i@namastenodejs.cnbpp.mongodb.net/DevTinder")
}



module.exports = connectDB
