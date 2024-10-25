import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  handler: (req, res) => {
    res
      .status(429)
      .json({
        message:
          "Bạn đã vượt quá giới hạn yêu cầu. Vui lòng thử lại sau 1 phút.",
      });
  },
});

app.use(limiter);

app.use(
  cors({
    origin: CORS_ORIGIN,
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
