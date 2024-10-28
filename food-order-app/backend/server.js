import express from "express";
import cors from "cors";

import mealsRoutes from "./routes/mealsRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CORS_ORIGIN,
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.static("public"));
app.use(express.json());

app.use("/meals", mealsRoutes);
app.use("/orders", orderRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
