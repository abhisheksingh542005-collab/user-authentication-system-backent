import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongo from "./config/db.js";
import userRoutes from "./routes/user.js";
import noteRoutes from"./routes/note.js";

dotenv.config();

connectToMongo();

const app = express();

app.use(
  cors({
    origin: "https://user-authentication-system-frontent.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRoutes);
app.use("/api/v1/notes",noteRoutes);

app.get("/", (req, res) => {
  res.send("api is running");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});
