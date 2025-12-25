"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";

// Use environment variable for API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Strict Domain Check
        if (!email.endsWith("@mmmut.ac.in")) {
            setError("Access Restricted: Only @mmmut.ac.in emails are allowed.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            setSent(true);
            // specific logic for prototype: direct login simulation
            // localStorage.setItem("user", JSON.stringify({ email, role: "student" }));
            // setTimeout(() => router.push("/dashboard"), 1000);

        } catch (err: any) {
            // use mock for now if backend not fully ready or connection failed
            if (email.endsWith("@mmmut.ac.in")) {
                console.log("Mock login success");
                setSent(true);
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-[#d32f2f] p-6 text-center">
                    <h1 className="text-white text-2xl font-bold">Prayukti vLAB</h1>
                    <p className="text-red-100 text-sm">Validating Identity</p>
                </div>

                <div className="p-8">
                    {!sent ? (
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    University Email ID
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="rollno@mmmut.ac.in"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#d32f2f] focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Please enter your official email ending with @mmmut.ac.in
                                </p>
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
                                    {error}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#f57f17] hover:bg-[#e65100] text-white font-bold py-2"
                            >
                                {loading ? <Loader2 className="animate-spin h-5 w-5 mx-auto" /> : "Verify & Enter"}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                                ✓
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Check your Email</h3>
                            <p className="text-sm text-gray-600">
                                We have sent a magic link/OTP to <strong>{email}</strong>.
                                <br />
                                (For this prototype, clicking "Continue" simulates verification)
                            </p>
                            <Button
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        localStorage.setItem("token", "mock-jwt-token");
                                        localStorage.setItem("user", JSON.stringify({ email }));
                                    }
                                    router.push("/dashboard");
                                }}
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                            >
                                Continue to API Dashboard (Simulation)
                            </Button>
                        </div>
                    )}
                </div>

                <div className="bg-gray-50 p-4 text-center text-xs text-gray-500">
                    &copy; 2025 MMMUT Gorakhpur
                </div>
            </div>
        </div>
    );
}
