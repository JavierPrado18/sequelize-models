const bcrypt=require("bcrypt")
const Users = require("../models/users.models")

class AuthService{
    static async login(email,password){
        try {
            const result=await Users.findOne({
                where:{email}
            })
            const isValid=bcrypt.compareSync(password,result.password)//para comparar la contraseña con la contra hasheada
            return isValid;//retorna true or false
        } catch (error) {
            throw error
        }
    }
}

module.exports=AuthService;