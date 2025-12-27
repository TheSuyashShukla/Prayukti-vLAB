"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
            <h1 className="text-6xl font-bold text-[#d32f2f] mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md text-center">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button className="bg-[#f57f17] hover:bg-[#e65100] text-white font-bold">
                    Return Home
                </Button>
            </Link>
        </div>
    );
}
