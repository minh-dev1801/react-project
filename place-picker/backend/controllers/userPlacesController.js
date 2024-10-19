import fs from "node:fs/promises";
import Joi from "joi";

const userPlacesSchema = Joi.object({
  places: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      image: Joi.object({
        src: Joi.string().required(),
        alt: Joi.string().required(),
      }),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    })
  ),
});

export const getUserPlaces = async (req, res) => {
  try {
    const fileContent = await fs.readFile("./data/user-places.json", "utf-8");
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    console.error("Error reading or parse user-places.json: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUserPlaces = async (req, res) => {
  try {
    const { error, value } = userPlacesSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { places } = value;
    await fs.writeFile(
      "./data/user-places.json",
      JSON.stringify(places, null, 2),
      "utf-8"
    );
    res.status(200).json({ message: "User places updated!" });
  } catch (error) {
    console.error("Error writing user-places.json", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
