import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-bold tracking-tight">
            Smora
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border px-4 py-2 text-sm font-medium"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t px-5 py-4">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <main id="home">
        <section className="mx-auto max-w-6xl px-5 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-600">
              Welcome to Smora
            </p>

            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Discover something
              <span className="block text-purple-600">
                better.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              A simple, modern and beautiful experience
              designed for everyone.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white shadow-lg">
                Get Started
              </button>

              <button className="rounded-xl border px-7 py-3 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="bg-gray-50 px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h3 className="text-center text-3xl font-bold">
              Everything you need
            </h3>

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-3xl">✨</div>
                <h4 className="mt-5 text-xl font-bold">
                  Simple
                </h4>
                <p className="mt-3 text-gray-600">
                  Clean and easy to use without unnecessary
                  complications.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-3xl">⚡</div>
                <h4 className="mt-5 text-xl font-bold">
                  Fast
                </h4>
                <p className="mt-3 text-gray-600">
                  A smooth experience built with modern
                  technology.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-3xl">🔒</div>
                <h4 className="mt-5 text-xl font-bold">
                  Reliable
                </h4>
                <p className="mt-3 text-gray-600">
                  Designed with a focus on a dependable
                  experience.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-4xl px-5 py-20 text-center"
        >
          <h3 className="text-3xl font-bold">
            About Smora
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            Smora is a modern web experience. This project
            is being built with React and Tailwind CSS.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t px-5 py-8 text-center text-sm text-gray-500">
        © 2026 Smora. All rights reserved.
      </footer>

    </div>
  );
}