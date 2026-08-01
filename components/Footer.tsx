import { Mail, Globe, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-red-500">
  RedFrame Studio
              </h2>

            <p className="mt-4 leading-7 text-gray-400">
              We create modern digital experiences through innovative design,
              development, and branding solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#hero"
                  className="transition duration-300 hover:text-red-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition duration-300 hover:text-red-500"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="transition duration-300 hover:text-red-500"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-red-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Connect With Us
            </h3>

            <div className="flex gap-4">
              <a
                href="mailto:hello@pixelstudio.com"
                className="rounded-full bg-zinc-900 p-3 transition duration-300 hover:bg-red-600"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/dharaniseran"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-900 p-3 transition duration-300 hover:bg-red-600"
              >
                <Phone size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-zinc-900 p-3 transition duration-300 hover:bg-red-600"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}

        <div className="mt-10 text-center">
          <a
            href="#hero"
            className="inline-block rounded-full bg-red-600 px-6 py-3 font-semibold transition duration-300 hover:bg-red-700"
          >
            ↑ Back to Top
          </a>
        </div>

        {/* Copyright */}

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} RedFrame Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}