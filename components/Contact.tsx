"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validate() {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let valid = true;

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We'd love to hear about your next project.
          </p>
        </div>

        {/* Two Columns */}

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
            <h3 className="mb-6 text-3xl font-bold">
              Let's Work Together
            </h3>

            <p className="mb-10 leading-8 text-gray-400">
              Whether you're launching a new brand, building a website,
              or improving your digital presence, we're here to help
              turn your ideas into reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-600/20 p-3">
                  <Mail className="text-red-500" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <h4 className="font-semibold">
hello@redframestudio.com
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-600/20 p-3">
                  <Phone className="text-red-500" />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <h4 className="font-semibold">
                    +91 98765 43210
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-600/20 p-3">
                  <MapPin className="text-red-500" />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <h4 className="font-semibold">
                    Chennai, India
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-zinc-800 bg-zinc-900 p-10"
          >
            {/* Name */}

            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none transition focus:border-red-500"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none transition focus:border-red-500"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}

            <div>
              <textarea
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none transition focus:border-red-500"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-red-600 py-4 font-semibold transition duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-center font-medium text-green-400">
                ✅ Thank you! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}