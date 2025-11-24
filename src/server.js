// // // import express from "express";
// // // import cors from "cors";
// // // import dotenv from "dotenv";
// // // import authRoutes from "./routes/authRoutes.js";
// // // import farmRoutes from "./routes/farmRoutes.js";
// // // import { sequelize } from "./models/index.js";

// // // dotenv.config();

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // ROUTES
// // // app.use("/api/auth", authRoutes);
// // // app.use("/api/farms", farmRoutes);

// // // app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// // // // DATABASE CONNECTION
// // // (async () => {
// // //   try {
// // //     await sequelize.authenticate();
// // //     console.log("✅ Database connected successfully");

// // //     await sequelize.sync({ alter: true });
// // //     console.log("📦 Models synced");
// // //   } catch (err) {
// // //     console.error("❌ DB Error", err);
// // //   }
// // // })();

// // // const PORT = process.env.PORT || 4000;
// // // app.listen(PORT, () => console.log("🚀 Server running on port", PORT));




// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import authRoutes from "./routes/authRoutes.js";
// // import farmRoutes from "./routes/farmRoutes.js";
// // import { sequelize } from "./models/index.js";

// // dotenv.config();

// // const app = express();

// // // ✅ FIXED CORS
// // app.use(
// //   cors({
// //     origin: "http://localhost:5173", // your Vite frontend
// //     credentials: true,               // allow cookies / auth
// //   })
// // );

// // app.use(express.json());

// // // ROUTES
// // app.use("/api/auth", authRoutes);
// // app.use("/api/farms", farmRoutes);

// // // Test endpoint
// // app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// // // DATABASE CONNECTION
// // (async () => {
// //   try {
// //     await sequelize.authenticate();
// //     console.log("✅ Database connected successfully");

// //     await sequelize.sync({ alter: true });
// //     console.log("📦 Models synced");
// //   } catch (err) {
// //     console.error("❌ DB Error", err);
// //   }
// // })();

// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, () => console.log("🚀 Server running on port", PORT));
// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import authRoutes from "./routes/authRoutes.js";
// // import farmRoutes from "./routes/farmRoutes.js";
// // import { sequelize } from "./models/index.js";

// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // ROUTES
// // app.use("/api/auth", authRoutes);
// // app.use("/api/farms", farmRoutes);

// // // HEALTH CHECK
// // app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// // // DATABASE
// // (async () => {
// //   try {
// //     await sequelize.authenticate();
// //     console.log("✅ Database connected successfully");

// //     await sequelize.sync({ alter: true });
// //     console.log("📦 Models synced");
// //   } catch (err) {
// //     console.error("❌ DB Error", err);
// //   }
// // })();

// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // import express from "express";
// // import cors from "cors";
// // import cookieParser from "cookie-parser";
// // import dotenv from "dotenv";
// // import { sequelize } from "./models/index.js";
// // import authRoutes from "./routes/authRoutes.js";

// // dotenv.config();

// // const app = express();

// // // FIX CORS
// // app.use(cors({
// //   origin: "http://localhost:5173",
// //   credentials: true
// // }));

// // // Accept OPTIONS preflight
// // app.options("*", cors({
// //   origin: "http://localhost:5173",
// //   credentials: true
// // }));

// // app.use(express.json());
// // app.use(cookieParser());

// // // Routes
// // app.use("/api/auth", authRoutes);

// // // Database connect
// // sequelize.sync()
// //   .then(() => console.log("DB synced"))
// //   .catch(err => console.log("DB error:", err));

// // app.listen(4000, () => console.log("Server running on port 4000"));


// // import express from "express";
// // import cors from "cors";
// // import cookieParser from "cookie-parser";
// // import dotenv from "dotenv";
// // import { sequelize } from "./models/index.js";

// // import authRoutes from "./routes/authRoutes.js";
// // import farmRoutes from "./routes/farmRoutes.js";

// // dotenv.config();

// // const app = express();

// // app.use(cors({
// //   origin: "http://localhost:5173",
// //   credentials: true
// // }));

// // app.options("*", cors({
// //   origin: "http://localhost:5173",
// //   credentials: true
// // }));

// // app.use(express.json());
// // app.use(cookieParser());

// // // Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/farms", farmRoutes);   // <-- YOU FORGOT THIS

// // // DB sync
// // sequelize.sync()
// //   .then(() => console.log("DB synced"))
// //   .catch(err => console.log("DB error:", err));

// // app.listen(4000, () => console.log("Server running on port 4000"));


// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import { sequelize } from "./models/index.js";
// import authRoutes from "./routes/authRoutes.js";
// import farmRoutes from "./routes/farmRoutes.js";
// import animalRoutes from "./routes/animalRoutes.js";

// app.use("/api/animals", animalRoutes);

// dotenv.config();

// const app = express();

// // FIX CORS
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// // ROUTES
// app.use("/api/auth", authRoutes);
// app.use("/api/farms", farmRoutes);  // <-- IMPORTANT

// // DB
// sequelize.sync()
//   .then(() => console.log("DB synced"))
//   .catch(err => console.log("DB error:", err));

// app.listen(4000, () => console.log("Server running on port 4000"));


// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import farmRoutes from "./routes/farmRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import animalRoutes from "./routes/animalRoutes.js";  // <-- imported here
// import { sequelize } from "./models/index.js";
// const app = express();   // <--- MUST COME FIRST

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true,
// }));

// app.use(express.json());
// app.use(cookieParser());

// // --- Routes (AFTER app initialized) ---
// app.use("/api/auth", authRoutes);
// app.use("/api/farms", farmRoutes);
// app.use("/api/animals", animalRoutes);  // <-- MUST BE HERE
// sequelize.sync({ alter: true })
//   .then(() => console.log("DB Synced"))
//   .catch((err) => console.error("DB sync error:", err));
// // --- DB Connection & server start ---
// app.listen(4000, () => console.log("Server running on port 4000"));



// src/server.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import farmRoutes from "./routes/farmRoutes.js";
import animalRoutes from "./routes/animalRoutes.js";
import { sequelize } from "./models/index.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/farms", farmRoutes);
app.use("/api/animals", animalRoutes);

const PORT = process.env.PORT || 7000;

// Sync DB and start server
(async () => {
  try {
    await sequelize.sync({ alter: true }); // safe: updates tables without dropping data
    console.log("DB Synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("DB sync error:", err);
    process.exit(1);
  }
})();
