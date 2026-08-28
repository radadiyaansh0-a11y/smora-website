import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-5 py-4 border-b">
        <h1 className="text-2xl font-bold">Smora</h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border px-4 py-2"
        >
          Menu
        </button>
      </header>

      {menuOpen && (
        <nav className="border-b px-5 py-4">
          <div className="flex flex-col gap-3">
            <button>Home</button>
            <button>Explore</button>
            <button>About</button>
          </div>
        </nav>
      )}

      <main className="px-5 py-16 text-center">
        <h2 className="text-4xl font-bold">
          Welcome to Smora
        </h2>

        <p className="mt-4 text-gray-600">
          Your new website starts here.
        </p>

        <button className="mt-8 rounded-xl bg-black px-7 py-3 font-semibold text-white">
          Get Started
        </button>
      </main>
    </div>
  );
}