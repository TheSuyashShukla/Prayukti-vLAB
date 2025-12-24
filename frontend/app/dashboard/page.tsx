import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-[#d32f2f]">Prayukti vLAB <span className="text-gray-500 font-normal">| Student Dashboard</span></h1>
                    <div className="flex gap-4 items-center">
                        <span className="text-sm font-medium">Hello, Student</span>
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">Logout</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Subjects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* DLD Subject Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 group">
                        <div className="h-32 bg-orange-100 flex items-center justify-center">
                            <span className="text-4xl">⚡</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#d32f2f] transition-colors">Digital Logic & Design (DLD)</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Master the fundamentals of digital electronics, logic gates, and circuit design.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
                                <Link href="/dashboard/dld">
                                    <Button className="bg-[#f57f17] hover:bg-[#e65100]">Enter Lab</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for future subjects */}
                    <div className="bg-white rounded-lg shadow-sm border border-dashed border-gray-300 flex flex-col items-center justify-center p-8 opacity-60">
                        <span className="text-2xl mb-2 text-gray-400">➕</span>
                        <p className="font-medium text-gray-400">More Subjects Coming Soon</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800">Recent Circuits</h2>
                <div className="bg-white rounded-lg shadow-sm border p-8 text-center text-gray-500">
                    <p>No saved circuits found. Start by entering a subject lab!</p>
                </div>
            </main>
        </div>
    );
}
