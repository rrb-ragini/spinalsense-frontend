import "./globals.css";

export const metadata = {
  title: "SpinalSense",
  description: "AI Powered Cobb Angle Detection"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--bg)] text-slate-800">
        
        {/* HEADER with LOGO */}
        <header className="w-full bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="SpinalSense Logo" 
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold tracking-tight">SpinalSense</h1>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}
