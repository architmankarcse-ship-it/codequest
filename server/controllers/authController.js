// AUTH controller (stubs) - replace MOCK implementations with real providers
const users = {}; // simple in-memory user store keyed by email/phone

exports.googleAuth = async (req, res) => {
  // Expecting {idToken, email}
  const {idToken, email} = req.body;
  if(!email) return res.status(400).json({error:'email required'});
  // Normally verify idToken with Google
  users[email] = users[email] || {email, friends:0, points:0};
  return res.json({message:'google auth success (mock)', user:users[email]});
};

let otpStore = {}; // phone -> otp
exports.phoneOtp = (req,res)=>{
  const {phone} = req.body;
  if(!phone) return res.status(400).json({error:'phone required'});
  const otp = Math.floor(100000 + Math.random()*900000).toString();
  otpStore[phone] = otp;
  console.log('MOCK OTP for',phone,otp);
  return res.json({message:'otp sent (mock)'});
};
exports.verifyOtp = (req,res)=>{
  const {phone, otp, email} = req.body;
  if(otpStore[phone] !== otp) return res.status(400).json({error:'invalid otp'});
  const key = email || phone;
  users[key] = users[key] || {email:key, friends:0, points:0};
  return res.json({message:'phone verified', user:users[key]});
};
