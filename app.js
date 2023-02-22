const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/db")
    .then(() => console.log("Connect DB Success"))
    .catch((error) => console.log(error))
    
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String }
})

const userModel = new mongoose.model("sudoarun",userSchema);

const create = async() => {
    const user = new userModel({
        name: "Arun",
        email:"arunrajorya@gmail.com"
    })
    const savedUser = await user.save() 
    console.log(savedUser);
}






create();