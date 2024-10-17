import express from "express";
import cors from "cors";
import fs from "node:fs/promises";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "PUT"],
  allowedHeaders: ['Content-Type'],
}))

app.use(express.json())

app.get("/places", async (req, res) => {
  try {
    const fileContent = await fs.readFile("")
  } catch (error) {
    
  }
})
