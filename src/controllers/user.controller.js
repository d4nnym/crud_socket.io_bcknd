import User from "../models/User.js";

export const createUser = async (data)=>{
 
  const user = new User(data);
  await user.save();
}

export const getUsers = async () =>{
  const users = await User.find()
  return users;
}

export const getUser = async (data) =>{
  const id= data._id;
  const user = await User.findById(id)
  return user;
}


