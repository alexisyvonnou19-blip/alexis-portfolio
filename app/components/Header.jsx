"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navigationLinks = [
  { label: "Profil", href: "/#qui-suis-je" },
  { label: "Photos", href: "/#photographie" },
  { label: "Contenus", href: "/#contenus" },
  { label: "Univers", href: "/#domaines" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/5 bg-[#f7f4ef]/88 px-4 py-3 shadow-lg shadow-stone-900/5 backdrop-blur-2xl md:px-5">
        <Link
          href="/#top"
          className="group flex items-center gap-3 text-stone-950"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-white transition duration-300 group-hover:scale-95">
            AY
          </div>

          <div className="leading-none">
            <span className="block text-sm font-semibold uppercase tracking-[0.32em] md:text-base">
              Alexis Yvonnou
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-stone-400 md:block">
              Photo · contenus · communication
            </span>
          </div>
        </Link>

        <div className="hidden items-center rounded-full border border-black/5 bg-white/55 p-1 text-sm text-stone-600 backdrop-blur-xl lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition duration-300 hover:bg-stone-950 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
          >
            Contact
            <ArrowRight
              size={15}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white/75 text-stone-950 shadow-sm backdrop-blur-md lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-black/5 bg-[#f7f4ef]/96 p-4 shadow-2xl shadow-stone-900/12 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-2xl bg-white/50 px-5 py-4 text-lg font-semibold tracking-[-0.03em] text-stone-950 transition duration-300 hover:bg-stone-950 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-semibold tracking-[0.25em] text-stone-400 transition group-hover:text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-between rounded-2xl bg-stone-950 px-5 py-4 text-lg font-semibold tracking-[-0.03em] text-white"
              >
                Me contacter
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}