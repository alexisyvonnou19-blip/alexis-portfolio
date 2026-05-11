"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Qui suis-je ?", href: "/#qui-suis-je" },
  { label: "Photographie", href: "/#photographie" },
  { label: "Création de contenus", href: "/#contenus" },
  { label: "Terrains de jeu", href: "/#domaines" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/88 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/#top" className="flex items-center gap-4 text-stone-950">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-white">
            AY
          </div>

          <span className="text-base font-semibold uppercase tracking-[0.32em] md:text-lg">
            Alexis Yvonnou
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-stone-700 lg:flex xl:gap-12">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="max-w-[140px] text-center leading-tight transition hover:text-stone-950 xl:max-w-none"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="rounded-full bg-stone-950 px-6 py-2.5 text-white transition hover:-translate-y-0.5 hover:bg-stone-800"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white/60 text-stone-950 backdrop-blur-md lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-black/5 bg-[#f7f4ef]/95 px-5 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5 text-lg text-stone-800">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-stone-950"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-stone-950 px-5 py-3 text-center text-sm font-medium text-white"
              >
                Me contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}