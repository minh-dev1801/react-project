import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import placesRoutes from "./routes/placesRoutes.js";
import userPlacesRoutes from "./routes/userPlacesRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "PUT"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(compression());
app.use(morgan("dev"));
app.use(helmet());

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use("/places", placesRoutes);
app.use("/user-places", userPlacesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
