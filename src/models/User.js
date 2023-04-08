import {Schema,model} from "mongoose"

const user = new Schema({
  name : String,
  lastname: String,
  info: String 
},{
  versionKey: false,
  timestamps: true
}) 

export default model('User',user)