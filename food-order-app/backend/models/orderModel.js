import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ordersFilePath = path.join(__dirname, "../data/orders.json");

export const getAllOrders = async () => {
  try {
    const data = await fs.readFile(ordersFilePath, "utf-8");

    return JSON.parse(data);
  } catch (error) {
    throw new Error("Error reading orders data.");
  }
};

export const saveAllOrders = async (orders) => {
  try {
    await fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2));
  } catch (error) {
    throw new Error("Error writting orders data.");
  }
};

export const addOrder = async (order) => {
  const orders = await getAllOrders();
  orders.push(order);
  await saveAllOrders(orders);
};
