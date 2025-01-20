const isAdmin = (req,res,next)=>{

    console.log("Admin is Authenticating");

    const token = "xyz"

    const isAdmin = token === "xyz"


    if(isAdmin){
        next();
    }else{
        res.send("Bsdk Admin nhi hai tu")
    }
}


const userAuth = (req, res,next)=>{

    const username = "BSDK";
    const isUser= username == "BsSDK"

    if(isUser){
        next();
    }else{
        res.send("BSDK Phele User Ho")
    }
}

module.exports={
    isAdmin,
    userAuth
}