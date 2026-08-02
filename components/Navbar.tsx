export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-full -translate-x-1/2">
<nav className="mx-auto flex w-[88%] max-w-6xl items-center justify-between px-6 py-2">
          <h1 className="text-xl font-bold text-red-500">
          RedFrame Studio
        </h1>

        {/* Navigation */}
<ul className="hidden items-center gap-8 rounded-full border border-white/10 bg-black/40 px-8 py-3 backdrop-blur-xl md:flex">          <li>
            <a
              href="#hero"
              className="text-gray-200 transition duration-300 hover:text-red-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="text-gray-200 transition duration-300 hover:text-red-500"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="text-gray-200 transition duration-300 hover:text-red-500"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-200 transition duration-300 hover:text-red-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
<button className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 hover:scale-105">          Get Started
        </button>
      </nav>
    </header>
  );
}