const express = require("express");
const { isAdmin, userAuth } = require("./Middleware/auth");

const app = express();

const userModel = require("./Models/userModel")
const connectDB = require("./DataBase/db")


app.use(express.json())

app.post("/signup",async (req,res)=>{
   
    
    const user = new userModel(req.body);


    try{
        await user.save();

        res.send("User signup successfully")



    }catch(err){

        res.status(400).send("usr is not signed in")

    } 

    

    
})

// find the user

app.get("/user",async (req,res)=> {
      const userEmail = req.body.emailId;


      try{
        const user = await userModel.find({emailId:userEmail})

        if(user.length == 0){
            res.status(404).send("user did not found");
        }else{
            res.send(user)
        }
       
      }catch(err){
        res.status(400).send("user not found");

      }

})


// find the all user

app.get("/feed" , async (req, res)=>{

    try{
        const user = await  userModel.find({});
        res.send(user);
    }catch(e){
        res.status(400).send("user is not found")
    }


})



// find the user using

app.get("/userr", async (req , res)=> {

    const email = req.body.emailId;
    try{
        console.log(email);
        const users = await new userModel.findOne({emailId:email})
        // if(users.length === 0){
        //     res.status(404).send("Nhi mila kuch");
        // }

        res.send(users)
    }catch(err){
        res.status(400).send("User is not find");

    }
})


app.get("/delete", async (req , res) => {

    const user = await userModel.deleteOne({emailId:"akshaaaay@gmail.com"});
    console.log(user);
    res.send(user);
    
})



app.delete("/user", async (req,res)=> {
    const userId = req.body.userId;

    try{
        const user = await userModel.findByIdAndDelete({_id:userId})
        res.send("user delete ho gya")
    }catch(err){
        res.status(400).send("user is not available")
    }

})



app.patch("/user", async(req, res)=>{

    const data = req.body;


    

})





//App.js




















connectDB().then(()=>{
    console.log("DataBase is connected");

    app.listen(1111,()=>{
        console.log("server is running at port : 3000")
    })


}).catch((err)=>{
    console.log("Database is not connected ")
})
