const { db } = require("../config/firebaseAdmin");

/*
  Firestore collection: users
  Document ID: uid
*/

const User = {

  /* CREATE USER */
  async createUser(uid, data) {
    return await db.collection("users").doc(uid).set({
      name: data.name,
      email: data.email,
      role: data.role,
      createdAt: new Date()
    });
  },

  /* GET USER BY UID */
  async getUser(uid) {
    const doc = await db.collection("users").doc(uid).get();

    if (!doc.exists) return null;

    return doc.data();
  },

  /* UPDATE USER */
  async updateUser(uid, data) {
    return await db.collection("users").doc(uid).update(data);
  }

};

module.exports = User;
