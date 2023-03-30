import {Schema,model} from "mongoose"

const noteSchema = new Schema ({
  title: String,
  description: String
},{
  versionKey: false,
  timestamps: true
});

export default model("Note", noteSchema);