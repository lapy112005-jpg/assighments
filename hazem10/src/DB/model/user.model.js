import mongoose from "mongoose";

const userSchema =new  mongoose.Schema({
  FirstName:{type:String , required:true},
  lastName:{type:String , required:true},
  email:{type:String , required:true , unique:true},
  password:{type:String , required:true},
  phone:{type:String },
  gender:{type:String , enum:["male","female"] , default:"male"}
},{
  strict:true,
  strictQuery:true,
  timestamps:true
})

userSchema.virtual("username").set(function(value){
  const [fname , lname] = value.split(" ")
  this.set({FirstName:fname , lastName:lname})
})


export const userModel = mongoose.models.user || mongoose.model("user" , userSchema)





























// import { model, Schema } from "mongoose";
// export const users = [];

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     maxLength: 60,
//     minLength: 18,
//   },
// });

// export const userModel = model("user", userSchema);
