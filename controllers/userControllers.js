const userModel = require('../models/users')

exports.createUser = async(req,res,next) =>{
  const {username , email , phoneNo } = req.body;
  try {
    const user = await userModel.findOne({email:email});

    if(user) return res.status(400).json({message:"User with this email alredy exists"});

    const newUser = await userModel.create({
      username:username,
      email:email,
      phoneNo:phoneNo
    })

    res.status(200).json({newUser}) 

  } catch (error) {
    res.status(400).json({message:error})
  }
}