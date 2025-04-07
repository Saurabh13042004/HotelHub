const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for room categories (e.g., blocks with single, double, triple, and other rooms)
const roomCategorySchema = new Schema({
  categoryName: { type: String, required: true },
  singleRooms: { type: Number, default: 0 },
  doubleRooms: { type: Number, default: 0 },
  tripleRooms: { type: Number, default: 0 },
  otherRooms: { type: Number, default: 0 }
}, { _id: false });

const homestaySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  upiId: { type: String, required: true },
  noOfRooms: { type: Number, required: true },
  doubleRooms: { type: Number, required: true },
  tripleRooms: { type: Number, required: true },
  ratePerRoom: { type: Number, required: true },
  ratePerPerson: { type: Number, required: true },
  roomCategories: [roomCategorySchema],
  approved: { type: Boolean, default: false } // Approval flag by super admin
}, { timestamps: true });

module.exports = mongoose.model('Homestay', homestaySchema);
