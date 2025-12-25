import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Bar - Academic/Govt style */}
      <div className="bg-[#d32f2f] text-white text-xs py-1 px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex gap-4">
          <span>Screen Reader Access</span>
          <span>Skip to Main Content</span>
        </div>
        <div className="flex gap-4">
          <span>A-</span>
          <span>A</span>
          <span>A+</span>
          <span>Select Language</span>
        </div>
      </div>

      {/* Header / Logo Section */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Placeholder for Logo */}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 shrink-0">
              LOGO
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
                Welcome to MMMUT&apos;s Virtual Lab
              </h2>
              <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
                Experience &quot;Prayukti&quot; - The Fusion of Technology and Practical Learning
              </p>
              <p className="text-xs text-gray-400">
                (Established by U.P. Act No. 22 of 2013 of U.P. Government)
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-center md:text-right hidden md:block">
              <p className="font-bold text-sm">Azadi Ka Amrit Mahotsav</p>
              <p className="text-xs text-gray-500">Celebrating 75 Years</p>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Orange/Yellow theme from screenshot */}
        <nav className="bg-[#f57f17] text-white overflow-x-auto">
          <div className="container mx-auto px-0 min-w-max md:min-w-0">
            <ul className="flex text-sm font-medium whitespace-nowrap">
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Home</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">The University</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Academics</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Research & Development</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Campus Facilities</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Training & Placement</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Examination & Results</li>
              <li className="px-4 py-3 hover:bg-[#e65100] cursor-pointer border-r border-orange-600">Contact</li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          {/* Placeholder for Banner Image */}
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
            [Banner Slider Area]
          </div>

          <div className="relative z-20 container mx-auto px-4 text-white">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Prayukti vLAB</h2>
            <p className="text-xl mb-8 drop-shadow-md">Virtual Laboratory for Digital Logic & Design</p>
            <Link href="/login">
              <Button size="lg" className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold px-8 py-6 text-lg shadow-lg border-2 border-white/20">
                Enter Virtual Lab (DLD)
              </Button>
            </Link>
          </div>
        </section>

        {/* Notices & Events Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Events Column */}
            <div className="md:col-span-3 bg-white shadow-sm border rounded-t-lg overflow-hidden">
              <div className="bg-[#f57f17] text-white px-4 py-2 font-bold uppercase text-sm">
                Recent Events
              </div>
              <div className="p-4 space-y-4 h-[300px] overflow-y-auto">
                <div className="border-b pb-2">
                  <p className="text-xs text-[#d32f2f] font-bold">DEC 24, 2025</p>
                  <p className="text-sm hover:underline cursor-pointer">International Conference on Green Technologies</p>
                </div>
                <div className="border-b pb-2">
                  <p className="text-xs text-[#d32f2f] font-bold">DEC 20, 2025</p>
                  <p className="text-sm hover:underline cursor-pointer">Alumni Meet 2025 Registration Open</p>
                </div>
              </div>
            </div>

            {/* Latest News Column (Center) */}
            <div className="md:col-span-6 bg-white shadow-sm border rounded-lg overflow-hidden">
              <div className="bg-[#f57f17] text-white px-4 py-2 font-bold uppercase text-sm flex justify-between">
                <span>Latest News</span>
                <span className="text-xs bg-white text-[#f57f17] px-2 py-0.5 rounded cursor-pointer">View All</span>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex gap-3 items-start border-b pb-3">
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-bold">NEW</span>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Registration for Odd Semester 2025-26 has started. Students are required to complete the process by 30th Dec.
                  </p>
                </div>
                <div className="flex gap-3 items-start border-b pb-3">
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-bold">IMP</span>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Schedule for End Semester Examination (DLD) - Practical & Viva Voce announced.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded border border-orange-100">
                  <h3 className="font-bold text-[#d32f2f] mb-2">Vice Chancellor's Message</h3>
                  <p className="text-xs text-gray-600 italic">"MMMUT is committed to providing world-class technical education..."</p>
                </div>
              </div>
            </div>

            {/* Quick Links / Student Zone */}
            <div className="md:col-span-3 space-y-4">
              <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
                <div className="bg-[#f57f17] text-white px-4 py-2 font-bold uppercase text-sm">
                  Student Zone
                </div>
                <div className="p-2 grid grid-cols-2 gap-2">
                  <div className="text-center p-2 hover:bg-gray-50 cursor-pointer">
                    <span className="block text-2xl mb-1">🎓</span>
                    <span className="text-xs font-semibold">Results</span>
                  </div>
                  <div className="text-center p-2 hover:bg-gray-50 cursor-pointer">
                    <span className="block text-2xl mb-1">📅</span>
                    <span className="text-xs font-semibold">Timetable</span>
                  </div>
                  <div className="text-center p-2 hover:bg-gray-50 cursor-pointer">
                    <span className="block text-2xl mb-1">💸</span>
                    <span className="text-xs font-semibold">Fees</span>
                  </div>
                  <div className="text-center p-2 hover:bg-gray-50 cursor-pointer">
                    <span className="block text-2xl mb-1">📚</span>
                    <span className="text-xs font-semibold">Syllabus</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase inline-block border-b-4 border-[#f57f17] pb-1">Welcome to MMMUT</h2>
            <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed mt-4">
              Madan Mohan Malaviya University of Technology, Gorakhpur has been established in year 2013 by the Government of Uttar Pradesh in the form of a non-affiliating, teaching and research University after reconstituting the Madan Mohan Malaviya Engineering College, Gorakhpur which was established in 1962.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#212121] text-gray-300 py-12 text-sm border-t-4 border-[#d32f2f]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#f57f17] font-bold mb-4 uppercase">Contact Us</h3>
            <p className="mb-2">Madan Mohan Malaviya University of Technology, Gorakhpur</p>
            <p>Phone: +91-551-2273958</p>
            <p>Email: patovc@mmmut.ac.in</p>
          </div>
          <div>
            <h3 className="text-[#f57f17] font-bold mb-4 uppercase">Important Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Tender</li>
              <li className="hover:text-white cursor-pointer">NIRF</li>
              <li className="hover:text-white cursor-pointer">Right to Information</li>
              <li className="hover:text-white cursor-pointer">Grievance Portal</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#f57f17] font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Webmail</li>
              <li className="hover:text-white cursor-pointer">Alumni Association</li>
              <li className="hover:text-white cursor-pointer">Training & Placement</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#f57f17] font-bold mb-4 uppercase">Locate Us</h3>
            <div className="bg-gray-700 h-32 w-full flex items-center justify-center text-xs">
              [Map Placeholder]
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          © 2025 Madan Mohan Malaviya University of Technology. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
