const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = {
    "type": "service_account",
    "project_id": "the-dev-hub-2d8bd",
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n") : undefined,
    "client_email": "firebase-adminsdk-du6pt@the-dev-hub-2d8bd.iam.gserviceaccount.com",
    "client_id": "103179745526509368491",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-du6pt%40the-dev-hub-2d8bd.iam.gserviceaccount.com"
  }
  

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  module.exports = admin;