const nodemailer = require('nodemailer');


const otpStore = {};


const generateUpiLink = (transactionId, amount) => {
  return `upi://pay?pa=merchant@upi&pn=HotelBooking&tr=${transactionId}&am=${amount}&cu=INR`;
};

// Sends an email with the OTP using nodemailer
const sendEmailNotification = async (email, otp) => {
  // Configure transporter – replace with your credentials or use environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password'
    }
  });
  
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Your OTP for Payment Verification',
    text: `Your OTP is ${otp}. It will expire in 10 minutes.`
  };
  
  return transporter.sendMail(mailOptions);
};

const initiatePayment = async (data) => {
  const { email, amount } = data;
  const transactionId = Date.now().toString();
  const upiLink = generateUpiLink(transactionId, amount);
  
  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store OTP against the transaction ID
  otpStore[transactionId] = otp;
  
  // Send OTP email
  await sendEmailNotification(email, otp);
  
  return {
    upiLink,
    transactionId,
    message: 'OTP sent to your email. Please verify to complete the payment.'
  };
};

const verifyOTP = async (data) => {
  const { transactionId, otp: inputOtp } = data;
  if (otpStore[transactionId] && otpStore[transactionId] === inputOtp) {
    // OTP is correct – proceed with payment confirmation (e.g., update booking status)
    delete otpStore[transactionId]; // clear OTP after successful verification
    return { message: 'OTP verified. Payment successful.' };
  } else {
    throw new Error('Invalid OTP.');
  }
};

module.exports = { initiatePayment, verifyOTP };
