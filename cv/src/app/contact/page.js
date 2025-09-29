"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name') || 'No name';
    const from = form.get('email') || '';
    const subject = form.get('subject') || 'Contact from website';
    const message = form.get('message') || '';

    const bodyLines = [
      `From: ${name}`,
      from ? `Reply-to: ${from}` : '',
      '',
      message,
    ].filter(Boolean).join('\n');

    const mailto = `mailto:alex.jlopez@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;

    setSending(true);
    // open mail client
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/5 p-8 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-slate-200 mb-6">I'd love to hear from you. Below are a few ways to get in touch — or send a message using the form.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <aside className="space-y-4">
              <div className="bg-white/6 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Quick links</h3>
                <div className="flex flex-col gap-3">
                  <a className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-md text-center" href="https://github.com/Alex-J-Lopez" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="inline-block border border-slate-600 text-slate-200 px-4 py-2 rounded-md text-center hover:bg-white/5" href="https://www.linkedin.com/in/alexander-lopez-j" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="inline-block text-slate-200 px-4 py-2 rounded-md text-center hover:bg-white/5" href="mailto:alex.jlopez@outlook.com">Email</a>
                </div>
              </div>

              <div className="bg-white/6 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Availability</h3>
                <p className="text-slate-200">Open to full time jobs, collaborative projects, and freelance work. Response time typically within a few business days.</p>
              </div>
            </aside>

            <section>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm text-slate-200">Your name</span>
                    <input name="name" type="text" className="mt-1 block w-full rounded-md bg-white/5 border border-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400" placeholder="Your name" required />
                  </label>
                  <label className="block">
                    <span className="text-sm text-slate-200">Your email</span>
                    <input name="email" type="email" className="mt-1 block w-full rounded-md bg-white/5 border border-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400" placeholder="you@example.com" required />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm text-slate-200">Subject</span>
                  <input name="subject" type="text" className="mt-1 block w-full rounded-md bg-white/5 border border-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400" placeholder="Subject" />
                </label>

                <label className="block">
                  <span className="text-sm text-slate-200">Message</span>
                  <textarea name="message" rows={6} className="mt-1 block w-full rounded-md bg-white/5 border border-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400" placeholder="Write your message here..." required></textarea>
                </label>

                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-md" disabled={sending}>
                    {sending ? 'Opening mail client...' : 'Send message'}
                  </button>
                  {sent && <span className="text-sm text-emerald-300">Mail client opened — check your email app to finish sending.</span>}
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
