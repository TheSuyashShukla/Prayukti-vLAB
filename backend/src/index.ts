import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    credentials: true
}));
app.use(express.json());

import authRoutes from "./routes/auth";

import mongoose from "mongoose";
import circuitRoutes from "./routes/circuit";

// ... existing auth import

app.use("/api/auth", authRoutes);
app.use("/api/circuits", circuitRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/prayukti-vlab")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.json({ message: "Prayukti vLAB API is running" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
