// Password reset with rate limit (1 per day) and generator
const resetRequests = {}; // user-> {lastRequest: date string}
const users = {}; // userId -> {password}
function randPassword(){
  // generate 10-char random with upper and lower only
  const lowers = 'abcdefghijklmnopqrstuvwxyz';
  const uppers = lowers.toUpperCase();
  let out='';
  for(let i=0;i<10;i++){
    const pool = Math.random() < 0.5 ? lowers : uppers;
    out += pool.charAt(Math.floor(Math.random()*pool.length));
  }
  return out;
}
exports.requestReset = (req,res)=>{
  const {userId} = req.body;
  const today = new Date().toISOString().slice(0,10);
  if(resetRequests[userId] && resetRequests[userId]===today) return res.status(429).json({error:'only one reset request per day allowed'});
  resetRequests[userId]=today;
  // send OTP via email/phone mocked
  return res.json({message:'reset requested (mock)'});
};
exports.resetPassword = (req,res)=>{
  const {userId, newPassword} = req.body;
  users[userId] = users[userId] || {};
  users[userId].password = newPassword;
  return res.json({message:'password reset (mock)'});
};
exports.generatePassword = (req,res)=>{
  const p = randPassword();
  res.json({password:p});
};
