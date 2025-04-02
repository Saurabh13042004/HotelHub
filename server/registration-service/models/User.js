const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ['admin', 'homestayOwner', 'agent'], required: true },
  homestay: { type: Schema.Types.ObjectId, ref: 'Homestay' },  
  profitSharing: { type: Number, default: 0 } 
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
