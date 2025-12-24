import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft, FlaskConical } from "lucide-react";

// Mock Data for Prototype
const practicalData = {
    1: {
        title: "Study and Verification of Logic Gates",
        aim: "To study and verify the truth tables of basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).",
        theory: `
      <p><strong>Logic Gates</strong> are the basic building blocks of any digital system. It is an electronic circuit having one or more than one input and only one output. The relationship between the input and the output is based on a certain logic.</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li><strong>AND Gate:</strong> Output is high only if all inputs are high.</li>
        <li><strong>OR Gate:</strong> Output is high if at least one input is high.</li>
        <li><strong>NOT Gate:</strong> Output is the complement of the input.</li>
      </ul>
    `,
        procedure: `
      <ol class="list-decimal ml-6 space-y-2">
        <li>Connect the inputs to the logic gate terminals.</li>
        <li>Apply different combinations of logic 0 and 1.</li>
        <li>Observe the output LED status.</li>
        <li>Verify with the truth table.</li>
      </ol>
    `,
    }
};

export default async function PracticalDetail({ params }: { params: Promise<{ id: string }> }) {
    // Await params object for dynamic routing
    const { id } = await params;
    const practical = practicalData[Number(id) as keyof typeof practicalData] || practicalData[1];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/dashboard/dld" className="text-gray-500 hover:text-black hover:bg-gray-100 p-1 rounded-full">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <span className="text-gray-300">|</span>
                    <h1 className="text-lg font-bold text-gray-800 truncate">{practical.title}</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Content (Theory) */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-xl font-bold text-[#d32f2f] mb-4 border-b pb-2">Aim</h2>
                        <p className="text-gray-700">{practical.aim}</p>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-xl font-bold text-[#d32f2f] mb-4 border-b pb-2">Theory</h2>
                        <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: practical.theory }} />
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-xl font-bold text-[#d32f2f] mb-4 border-b pb-2">Procedure</h2>
                        <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: practical.procedure }} />
                    </section>
                </div>

                {/* Right Sidebar (Actions) */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-orange-200">
                        <h3 className="font-bold text-lg mb-2">Ready to Experiment?</h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Launch the virtual simulator to build this circuit and verify the outputs in real-time.
                        </p>
                        <Link href={`/dashboard/dld/${id}/simulation`}>
                            <Button className="w-full bg-[#f57f17] hover:bg-[#e65100] text-lg font-bold py-6 shadow-lg hover:shadow-xl transition-all">
                                <FlaskConical className="mr-2 h-6 w-6" />
                                Enter Simulation
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="font-bold text-md mb-4 text-gray-800">Resources</h3>
                        <ul className="space-y-2 text-sm text-[#d32f2f]">
                            <li className="cursor-pointer hover:underline">Datasheet (7400 Series)</li>
                            <li className="cursor-pointer hover:underline">Video Tutorial</li>
                            <li className="cursor-pointer hover:underline">Viva Questions</li>
                        </ul>
                    </div>
                </div>

            </main>
        </div>
    );
}
