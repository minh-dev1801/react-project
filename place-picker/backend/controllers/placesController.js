import fs from "node:fs/promises";

export const getPlaces = async (req, res) => {
  try {
    const fileContent = await fs.readFile("./data/places.json", "utf-8");
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    console.error("Error reading or parsing places.json: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
