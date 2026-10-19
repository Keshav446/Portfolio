
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes folder se backend/resumes tak
const resumeDirectory = path.resolve(__dirname, "../../resumes");

router.get("/pdf", (req, res) => {
  const filePath = path.join(
    resumeDirectory,
    "KeshavMaheshwari_RE.pdf"
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "PDF resume not found.",
    });
  }

  return res.download(filePath, "KeshavMaheshwari_RE.pdf");
});

router.get("/docx", (req, res) => {
  const filePath = path.join(
    resumeDirectory,
    "KeshavMaheshwari_RE.docx"
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "Word resume not found.",
    });
  }

  return res.download(filePath, "KeshavMaheshwari_RE.docx");
});
console.log("Resume directory:", resumeDirectory);
console.log("Files found:", fs.readdirSync(resumeDirectory));

export default router;
