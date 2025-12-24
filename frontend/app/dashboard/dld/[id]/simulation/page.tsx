import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CircuitCanvas from "@/components/simulation/CircuitCanvas";

export default async function SimulationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
            {/* Simulation Header */}
            <header className="bg-white border-b shadow-sm h-14 flex items-center px-4 justify-between shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <Link href={`/dashboard/dld/${id}`} className="text-gray-500 hover:text-black p-1">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="font-bold text-gray-800">DLD Simulation Workbench <span className="text-gray-400 text-sm font-normal">| Practical {id}</span></h1>
                </div>
            </header>

            {/* Main Workbench Area */}
            <main className="flex-1 relative">
                <CircuitCanvas />
            </main>
        </div>
    );
}
