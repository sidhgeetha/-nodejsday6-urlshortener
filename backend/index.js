import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import userRouter from "./Routers/user.router.js";
import { nanoid } from "nanoid";
import Url from "./Models/url.js";

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: [
      "https://main--cerulean-raindrop-2dcc3f.netlify.app",
      "https://nodejsday6-urlshortener.onrender.com",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());

connectDB();

app.use("/api/user", userRouter);
app.post("/api/shorten-url", async (req, res) => {
  console.log("test");
  console.log(req.body);
  const { url: originalUrl } = req.body;
  console.log({ url: originalUrl });

  try {
    // Check if the URL already exists in the database
    let url = await Url.findOne({ originalUrl });

    if (url) {
      // If URL already exists, return the existing short URL
      res.json({
        originalUrl: url.originalUrl,
        shortUrl: url.shortUrl,
        status: 200,
      });
    } else {
      // If URL doesn't exist, generate a short code and save it to the database
      const urlCode = nanoid(6);
      const shortUrl = `http://localhost:4000/${urlCode}`;

      url = new Url({
        originalUrl,
        shortUrl,
        urlCode,
      });

      // Save the new URL document to the database
      await url.save();

      // Return the original and short URLs in the response
      res.json({
        originalUrl: url.originalUrl,
        shortUrl: url.shortUrl,
        status: 200,
      });
    }
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json("Server error");
  }
});

app.get("/api/listurls", async (req, res) => {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

app.listen(port, () => {
  console.log("App is lestening in the port", port);
});
