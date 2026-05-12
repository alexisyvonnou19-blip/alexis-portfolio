"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkoyegry");

  if (state.succeeded) {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-stone-950">
          Message envoyé.
        </h3>

        <p className="mt-4 text-stone-600 leading-8">
          Merci pour votre message.  
          Je vous répondrai dès que possible.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-8 shadow-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-medium text-stone-700">
            Nom
          </label>

          <input
            type="text"
            name="name"
            required
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-950 outline-none transition focus:border-stone-950"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-stone-700">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-950 outline-none transition focus:border-stone-950"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-3 block text-sm font-medium text-stone-700">
          Projet / société
        </label>

        <input
          type="text"
          name="project"
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-950 outline-none transition focus:border-stone-950"
        />
      </div>

      <div className="mt-6">
        <label className="mb-3 block text-sm font-medium text-stone-700">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows="6"
          required
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-950 outline-none transition focus:border-stone-950"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
      >
        Envoyer le message
      </button>
    </motion.form>
  );
}