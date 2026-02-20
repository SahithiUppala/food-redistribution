const { auth, db } = require("../config/firebaseAdmin");
const User = require("../models/User");

/* REGISTER */
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name
    });

    await User.createUser(userRecord.uid, {
      name,
      email,
      role
    });

    res.status(201).json({
      message: "User registered successfully",
      uid: userRecord.uid
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* LOGIN */
exports.login = async (req, res) => {
  try {
    const { email } = req.body;

    const userRecord =
      await auth.getUserByEmail(email);

    const doc =
      await db.collection("users")
      .doc(userRecord.uid)
      .get();

    res.json({
      uid: userRecord.uid,
      name: doc.data().name,
      role: doc.data().role
    });

  } catch (err) {
    res.status(400).json({
      error: "Invalid login"
    });
  }
};
