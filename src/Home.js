import React from "react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white min-h-screen">
      <main>
        <section className="text-center py-10 bg-yellow-400 text-black">
          <h1 className="text-4xl font-bold mb-4">Welcome to VisionNest</h1>
          <p className="text-xl">Revolutionizing Interior Design with VR & Smart Solutions</p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 p-6">
          <div className="bg-zinc-900 text-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">3D from 2D + VR Tours</h2>
            <p className="mt-2">We convert your 2D floor plans into realistic 3D interiors and let you explore them in virtual reality.</p>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="3D Interior Example"
              className="mt-4 rounded-xl shadow-lg"
            />
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">Labour Marketplace</h2>
            <p className="mt-2">Find skilled professionals like carpenters, masons, painters, polishers, and tile layers at your fingertips.</p>
            <img
              src="https://images.unsplash.com/photo-1581092160620-1c722be25af7"
              alt="Marketplace Example"
              className="mt-4 rounded-xl shadow-lg"
            />
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">Smart To-let Boards</h2>
            <p className="mt-2">Our QR-enabled boards link to static pages with all the property details for potential renters.</p>
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
              alt="To-let Board Example"
              className="mt-4 rounded-xl shadow-lg"
            />
          </div>
        </section>

        <section className="text-center py-10">
          <div className="transition-opacity duration-1000 opacity-100">
            <h2 className="text-3xl font-bold text-yellow-400">Get Started With Us</h2>
            <p className="mt-2">Design your dream space, visualize it in VR, connect with workers, and list rentals smartly!</p>
            <button
              className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              aria-label="Contact Us Button"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        &copy; {currentYear} VisionNest. All rights reserved.
      </footer>
    </div>
  );
}
