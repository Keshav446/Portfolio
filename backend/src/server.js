
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "10kb" }));
app.use("/api/contact", contactRoutes);
app.use((err, req, res, next) => {
  console.error("API ERROR:", err);
  res.status(500).json({
    success: false,
    message: err.message,
  });
});
app.use("/api/resume", resumeRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio backend is running!",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
