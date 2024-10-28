import { addOrder } from "../models/orderModel.js";

const validateOrder = (order) => {
  if (
    !order ||
    !order.items ||
    !Array.isArray(order.items) ||
    order.items.length === 0
  ) {
    return {
      valid: false,
      message: "Missing data.",
    };
  }

  const { customer } = order;
  if (
    !customer ||
    !customer.email ||
    !customer.email.includes("@") ||
    !customer.name ||
    customer.name.trim() === "" ||
    !customer.street ||
    customer.street.trim() === "" ||
    !customer["postal-code"] ||
    customer["postal-code"].trim() === "" ||
    !customer.city ||
    customer.city.trim() === ""
  ) {
    return {
      valid: false,
      message:
        "Missing data: Email, name, street, postal code or city is missing.",
    };
  }

  return { valid: true };
};

export const createOrder = async (req, res) => {
  const orderData = req.body.order;

  const validation = validateOrder(orderData);
  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toFixed(0),
  };

  try {
    await addOrder(newOrder);
    return res.status(201).json({ message: "Order created!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};
