import fs from "node:fs/promises";

export const getMeals = async (req, res) => {
  try {
    const fileContent = await fs.readFile(
      "./data/available-meals.json",
      "utf-8"
    );
    const mealsData = JSON.parse(fileContent);
    res.status(200).json(mealsData);
  } catch (error) {
    console.error("Error reading or parsing available-meals.json: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
