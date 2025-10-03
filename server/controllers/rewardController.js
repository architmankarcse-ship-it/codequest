// Reward system: points and transfer with checks
const users = {}; // simple store {userId:{points:0}}
exports.getPoints = (req,res)=>{
  const userId = req.query.userId;
  const u = users[userId] || {points:0};
  res.json(u);
};
exports.transferPoints = (req,res)=>{
  const {from, to, amount} = req.body;
  if(amount <=0) return res.status(400).json({error:'invalid amount'});
  users[from] = users[from] || {points:0};
  users[to] = users[to] || {points:0};
  if(users[from].points < 10) return res.status(403).json({error:'must have >=10 points to transfer'});
  if(users[from].points < amount) return res.status(403).json({error:'not enough points'});
  users[from].points -= amount;
  users[to].points += amount;
  return res.json({message:'transfer complete'});
};
