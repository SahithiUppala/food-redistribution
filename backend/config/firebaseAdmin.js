const admin = require("firebase-admin");
require("dotenv").config(); // Load env variables


admin.initializeApp({ 
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  }),
  databaseURL: "https://food-redistribution-fafd1.firebaseio.com"
});


/* 🔥 SERVICES */
const db = admin.firestore();
const auth = admin.auth();


/* EXPORT BOTH */
module.exports = {
  admin,
  db,
  auth
};
