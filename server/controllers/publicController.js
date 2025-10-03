// Public space - posting rules based on friend count
const posts = [];
const users = {}; // same in-memory users as other controllers ideally shared
exports.createPost = (req,res)=>{
  const {userId, type, content} = req.body; // type: image/video/text
  const user = users[userId] || {friends:0, postsToday:0};
  // posting limits
  let allowed = 0;
  if(user.friends === 0) allowed = 0;
  else if(user.friends === 1) allowed = 1;
  else if(user.friends === 2) allowed = 2;
  else if(user.friends > 10) allowed = Infinity;
  else allowed = 1;
  if(user.postsToday >= allowed) return res.status(403).json({error:'daily post limit reached'});
  user.postsToday = (user.postsToday||0)+1;
  users[userId] = user;
  posts.push({userId, type, content, createdAt:new Date()});
  return res.json({message:'posted', post:posts[posts.length-1]});
};
exports.getPublicFeed = (req,res)=>{
  res.json({posts});
};
