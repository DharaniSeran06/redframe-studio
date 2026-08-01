export default function Navbar() {
  return (
<header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">
  RedFrame Studio
</h1>
        {/* Navigation */}
        <ul className="hidden gap-8 md:flex">
          <li>
          <a
  href="#hero"
  className="text-white transition hover:text-red-500"
>
  Home
</a>
          </li>

          <li>
            <a
              href="#services"
              className="text-white transition hover:text-red-500"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="text-white transition hover:text-red-600"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white transition hover:text-red-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700">
          Get Started
        </button>
      </nav>
    </header>
  );
}