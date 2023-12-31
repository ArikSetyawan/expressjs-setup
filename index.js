import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})