// Subscription stub: enforce payment time 10-11 IST, plans and invoice email mock
const plans = {
  free:{price:0, daily:1},
  bronze:{price:100, daily:5},
  silver:{price:300, daily:10},
  gold:{price:1000, daily:Infinity}
};
function isPaymentAllowed(){
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const ist = new Date(utc + (5.5*60*60*1000));
  const hour = ist.getHours();
  return hour >= 10 && hour < 11;
}
exports.createSubscription = (req,res)=>{
  const {userId, plan} = req.body;
  if(!isPaymentAllowed()) return res.status(403).json({error:'payments allowed only between 10:00-11:00 IST'});
  if(!plans[plan]) return res.status(400).json({error:'invalid plan'});
  // mock payment charge...
  // send invoice by email (mock)
  return res.json({message:'subscription created (mock)', plan:plans[plan]});
};
