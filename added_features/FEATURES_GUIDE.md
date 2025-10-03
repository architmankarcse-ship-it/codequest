# FEATURES_GUIDE

This repository includes stub implementations for the requested features. Replace MOCK OTP and PAYMENT flows with real providers before production.

Endpoints:
- POST /api/auth/google {idToken, email}
- POST /api/auth/phone/request-otp {phone}
- POST /api/auth/phone/verify {phone, otp, email}
- POST /api/upload/video {filename, sizeBytes, durationSeconds, uploader}
- POST /api/public/post {userId, type, content}
- GET  /api/public/feed
- POST /api/subscription/create {userId, plan}
- POST /api/reward/transfer {from, to, amount}
- GET  /api/reward/me?userId=...
- POST /api/password/request {userId}
- POST /api/password/reset {userId, newPassword}
- GET  /api/password/generate

Notes:
- Time checks use server local time converted to IST.
- Video upload checks are stubbed: replace with real multipart file handling (multer + S3).
- Payment restricted to 10:00-11:00 IST.
- Multilanguage & front-end integration left as an exercise; translations added under client/i18n.
