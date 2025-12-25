import express from "express";
import { Circuit } from "../models/Circuit.js";

const router = express.Router();

// GET all circuits for a user (prototype: passing userId in query)
router.get("/", async (req, res) => {
    const { userId } = req.query;
    try {
        const circuits = await Circuit.find({ userId }).sort({ updatedAt: -1 });
        res.json(circuits);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch circuits" });
    }
});

// GET one circuit
router.get("/:id", async (req, res) => {
    try {
        const circuit = await Circuit.findById(req.params.id);
        if (!circuit) return res.status(404).json({ error: "Circuit not found" });
        res.json(circuit);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch circuit" });
    }
});

// CREATE a circuit
router.post("/", async (req, res) => {
    const { userId, practicalId, name, data } = req.body;
    try {
        const newCircuit = new Circuit({ userId, practicalId, name, data });
        await newCircuit.save();
        res.status(201).json(newCircuit);
    } catch (err) {
        res.status(500).json({ error: "Failed to save circuit" });
    }
});

// UPDATE a circuit
router.put("/:id", async (req, res) => {
    const { data, name } = req.body;
    try {
        const updatedCircuit = await Circuit.findByIdAndUpdate(
            req.params.id,
            { data, name, updatedAt: Date.now() },
            { new: true }
        );
        res.json(updatedCircuit);
    } catch (err) {
        res.status(500).json({ error: "Failed to update circuit" });
    }
});

export default router;
