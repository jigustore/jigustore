import {
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { LuConstruction } from "react-icons/lu";

const App = () => {
  const product = [0, 1, 2];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="shrink-0 flex items-center">
              <span className="text-2xl font-black tracking-tighter text-blue-600">
                Jigustore
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
              <a href="#store" className="hover:text-blue-600 transition">
                Store
              </a>
              <a href="#tech" className="hover:text-blue-600 transition">
                Technology
              </a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                <HiOutlineShoppingCart /> Cart
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="p-30 px-4 flex flex-col justify-evenly"
      >
        <div className="max-w-7xl mx-auto text-center flex flex-col justify-evenly gap-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Build the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">
              Unthinkable.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
              Browse Components
            </button>
          </div>
        </div>
      </header>

      <section id="store" className="py-5 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-5">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Components</h2>
            <p className="text-slate-500">
              In-stock and ready for immediate deployment.
            </p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline hidden sm:block">
            View all products →
          </button>
        </div>
        <div className="w-full grid grid-cols-3 gap-10">
          {product.map((ind) => {
            return (
              <div
                key={ind}
                className="min-h-32 min-w-32 border bg-blue-500 rounded-xl flex flex-col justify-center items-center"
              >
                <span className="text-white font-bold text-8xl text-center">
                  {ind + 1}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-red-500/20 p-4 rounded-xl w-full flex flex-col justify-center items-center">
        <LuConstruction className="text-blue-500 text-8xl" />
        <span className="p-3 text-2xl animate-pulse">
          Website under construction! Visit soon
        </span>
      </div>

      <footer className="bg-slate-900 text-white py-4">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Jigustore All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
