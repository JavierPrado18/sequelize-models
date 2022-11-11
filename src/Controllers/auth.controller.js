const AuthService=require("../Services/auth.services")
const userLogin=async(req,res,next)=>{
    try {
        const{email,password}=req.body;
        const result=await AuthService.login(email,password);
        result ?res.status(200).json({message:"logueado exitoso"}):
        res.status(401).json({message:"Contraseña incorrecta"})
    } catch (error) {
        next({
            message:"Algo salio mal con la authenticacion",
            status:401,
            errorContent:error
        })
    }
}
module.exports=userLogin;