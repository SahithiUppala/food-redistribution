/* =====================================================
   📦 IMPORTS
===================================================== */

const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

/* 🔥 FIREBASE INIT */
require("./config/firebaseAdmin");
console.log("Firebase loaded");


/* =====================================================
   🚀 APP INIT
===================================================== */

const app = express();


/* =====================================================
   🛡️ MIDDLEWARE
===================================================== */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* =====================================================
   📡 API ROUTES
===================================================== */

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/donor",
  require("./routes/donationRoutes")
);

app.use(
  "/ngo",
  require("./routes/ngoRoutes")
);

app.use(
  "/volunteer",
  require("./routes/volunteerRoutes")
);

app.use(
  "/tracking",
  require("./routes/trackingRoutes")
);


/* =====================================================
   🧪 HEALTH CHECK ROUTE
===================================================== */

app.get("/api/health", (req, res) => {
  res.json({
    status: "Server running ✅"
  });
});


/* =====================================================
   🌐 SERVE FRONTEND (OPTIONAL)
   Only used if you host frontend via backend
===================================================== */

const frontendPath =
  path.join(__dirname, "../frontend");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(frontendPath, "index.html")
  );
});


/* =====================================================
   ❌ 404 HANDLER
===================================================== */

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});


/* =====================================================
   🚨 GLOBAL ERROR HANDLER
===================================================== */

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error"
  });
});


/* =====================================================
   🟢 START SERVER
===================================================== */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});
