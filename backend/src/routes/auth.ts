import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
    const { email } = req.body;

    if (!email || !email.endsWith("@mmmut.ac.in")) {
        return res.status(403).json({ message: "Access Denied: Invalid Domain" });
    }

    // In a real app, send OTP email here.
    // For prototype, just return success.

    return res.json({
        message: "Verification initiated",
        debug_otp: "123456"
    });
});

export default router;
