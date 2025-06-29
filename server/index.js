require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const os = require("os");
const errorMiddleWare = require("./Middleware/Error");
const { otp } = require("./Model/admin");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Environment Variables
const port = process.env.PORT || 8000;
const dbUrl = process.env.DBURL;

// **Database Connection**
mongoose
  .connect(dbUrl)
  .then(() => {
    otp
      .createIndexes({ createdAt: 1, expireAfterSeconds: 120 })
      .then(() => console.log("✅ OTP indexes ensured"))
      .catch(() => console.log("⚠️ OTP indexes already exist"));

    console.log("✅ Connected to MongoDB successfully!");
  })
  .catch((error) => console.log("❌ Error connecting to MongoDB:", error));

// **Routes Configuration**
app.use("/", require("./Routes/studentRoutes"));
app.use("/admin", require("./Routes/adminRoutes"));

// **Start Server on 0.0.0.0 for external access**
app.listen(port, "0.0.0.0", () => {
  const networkInterfaces = os.networkInterfaces();
  const localIP =
    networkInterfaces["Wi-Fi"]?.find((iface) => iface.family === "IPv4")?.address ||
    networkInterfaces["Ethernet"]?.find((iface) => iface.family === "IPv4")?.address ||
    "localhost";

  console.log(`🚀 Server running at http://${localIP}:${port}/`);
});

// **Global Error Middleware**
app.use(errorMiddleWare);
