import { nanoid } from "nanoid";
import Url from "../models/url.model";

const Url = require("../Models/url");
const { nanoid } = require("nanoid");

// Controller method to create a shortened URL
exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const urlCode = nanoid(6);

    // Create a new URL document
    const newUrl = new Url({
      originalUrl,
      urlCode,
    });

    await newUrl.save();

    res.status(200).json({
      message: "Short URL created successfully",
      shortUrl: `${req.protocol}://${req.get("host")}/${urlCode}`,
    });
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
