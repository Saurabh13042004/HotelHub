const Homestay = require('../models/Homestay');
const User = require('../models/User');

exports.registerHomestay = async (req, res) => {
  try {
    const { name, location, phoneNumber, upiId, noOfRooms, doubleRooms, tripleRooms, ratePerRoom, ratePerPerson, roomCategories, ownerId } = req.body;
    // Create the homestay record
    const newHomestay = new Homestay({
      name,
      location,
      phoneNumber,
      upiId,
      noOfRooms,
      doubleRooms,
      tripleRooms,
      ratePerRoom,
      ratePerPerson,
      roomCategories
    });
    const savedHomestay = await newHomestay.save();
    // Optionally update the owner’s user record to link this homestay
    if (ownerId) {
      await User.findByIdAndUpdate(ownerId, { homestay: savedHomestay._id });
    }
    res.json({ message: 'Homestay registered successfully and pending approval', homestay: savedHomestay });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPendingHomestays = async (req, res) => {
  try {
    const pendingHomestays = await Homestay.find({ approved: false });
    res.json({ homestays: pendingHomestays });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.approveHomestay = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHomestay = await Homestay.findByIdAndUpdate(id, { approved: true }, { new: true });
    res.json({ message: 'Homestay approved successfully', homestay: updatedHomestay });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
