import mongoose from 'mongoose';

//Creating user Database
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true }
}, {
  timestamps: true
});
//model name and schema
const User = mongoose.model('User', userSchema);
export default User;