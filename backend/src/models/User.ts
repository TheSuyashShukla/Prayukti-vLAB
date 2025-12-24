import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["student", "faculty", "admin"], default: "student" },
    createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", UserSchema);
