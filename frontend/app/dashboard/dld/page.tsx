import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlayCircle } from "lucide-react";

const practicals = [
    { id: 1, title: "Study and Verification of Logic Gates", difficulty: "Easy" },
    { id: 2, title: "Design and Implementation of Half Adder and Full Adder", difficulty: "Medium" },
    { id: 3, title: "Design and Implementation of Half Subtractor and Full Subtractor", difficulty: "Medium" },
    { id: 4, title: "Design of 4-bit Binary to Gray Code Converter", difficulty: "Hard" },
];

export default function DLDPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/dashboard" className="text-gray-500 hover:text-black">Dashboard</Link>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <h1 className="text-xl font-bold text-[#d32f2f]">Digital Logic & Design</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">List of Experiments</h2>
                    <div className="flex gap-2">
                        <Button variant="outline">Progress Report</Button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    {practicals.map((p, index) => (
                        <div key={p.id} className="p-4 border-b last:border-b-0 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">{p.title}</h3>
                                    <span className={`text-xs px-2 py-0.5 rounded ${p.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                            p.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                        }`}>{p.difficulty}</span>
                                </div>
                            </div>
                            <Link href={`/dashboard/dld/${p.id}`}>
                                <Button variant="ghost" className="gap-2 text-[#d32f2f] hover:text-[#b71c1c] hover:bg-red-50">
                                    Start Practical <PlayCircle className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
