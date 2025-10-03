// Upload controller enforcing time window and file constraints
const fs = require('fs');
const path = require('path');

// Helper: IST hour check (14-19 allowed)
function isAllowedUploadTime(){
  const now = new Date();
  // convert to IST offset +5:30
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const ist = new Date(utc + (5.5*60*60*1000));
  const hour = ist.getHours();
  return hour >= 14 && hour < 19;
}

exports.uploadVideo = (req,res)=>{
  // expecting multipart form with file metadata in body for the stub
  const {filename, sizeBytes, durationSeconds, uploader} = req.body;
  if(!isAllowedUploadTime()) return res.status(403).json({error:'uploads allowed only between 14:00-19:00 IST'});
  if(sizeBytes > 50*1024*1024) return res.status(400).json({error:'file too large >50MB'});
  if(durationSeconds > 120) return res.status(400).json({error:'video too long >2 minutes'});
  // In real app, stream to S3 or similar. Here we simulate saving metadata.
  return res.json({message:'video upload accepted (mock)', filename});
};
