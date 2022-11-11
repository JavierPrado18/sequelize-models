const {Router}=require("express");
const userLogin = require("../Controllers/auth.controller");

const router=Router();
router.post("/auth/login",userLogin)

module.exports=router;