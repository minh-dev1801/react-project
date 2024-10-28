import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mealsFilePath = path.join(__dirname, "../data/available-meals.json");

export const getAvailableMeals = async () => {
  try {
    const data = await fs.readFile(mealsFilePath, "utf-8");

    return JSON.parse(data);
  } catch (error) {
    throw new Error("Error reading meals data.");
  }
};
