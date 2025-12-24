import mongoose from "mongoose";

const CircuitSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Using string for prototype simplicity vs ObjectId ref
    practicalId: { type: String, required: true },
    name: { type: String, required: true },
    data: { type: Object, required: true }, // Stores react-flow JSON
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Circuit = mongoose.model("Circuit", CircuitSchema);
