import Nav from "./Nav";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      {/* Main content with padding for fixed nav */}
      <main className="flex-1 pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Decorative grid lines */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(rgb(249, 115, 22) 1px, transparent 1px),
            linear-gradient(90deg, rgb(249, 115, 22) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} 
      />

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm">
        <p>© 2026 Knight Division Tactical. All rights reserved.</p>
      </footer>
    </div>
  );
}
