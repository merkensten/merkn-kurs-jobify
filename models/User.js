import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide a name'], trim: true },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    trim: true,
    minlength: [6, 'Password must be at least 6 characters'],
  },
  lastName: {
    type: String,
    trim: true,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    default: 'my city',
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next()
});

export default mongoose.model('User', UserSchema);
