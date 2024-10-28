import fs from "node:fs/promises";
import { getAvailableMeals } from "../models/mealModel.js";

export const getAllMeals = async (req, res) => {
  try {
    const mealsData = await getAvailableMeals();

    res.status(200).json(mealsData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
