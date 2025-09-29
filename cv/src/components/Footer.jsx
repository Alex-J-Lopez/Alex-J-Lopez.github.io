export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <section id="ContactInfo" className="InfoSection">
          <article id="ContactArticle" className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-slate-50">Contact Me</h2>

            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/Alex-J-Lopez"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-md"
              >
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/alexander-lopez-j"
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-slate-600 text-slate-200 px-4 py-2 rounded-md hover:bg-white/5"
              >
                Linkedin
              </a>

              <a
                href="mailto:alex.jlopez@outlook.com"
                className="inline-block text-slate-200 px-4 py-2 rounded-md border border-transparent hover:bg-white/5"
              >
                Email
              </a>
            </div>
          </article>

          <p className="mt-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Alexander J. Lopez</p>
        </section>
      </div>
    </footer>
  );
}
