export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Intro and CTAs */}
          <div className="md:col-span-2">
            <div className="bg-white/5 p-8 rounded-xl shadow-md">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Welcome,
                <br />
                My name is Alex Lopez
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                I'm studying Software Engineering at the Milwaukee School of Engineering. I enjoy building polished front-end
                experiences, learning new languages and tools, and creating projects that combine hardware and software.
                When I'm not coding I like exploring outdoors with a camera in hand and tackling hands-on electronics work.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="#resume"
                  className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-md shadow"
                  rel="noreferrer"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="inline-block border border-slate-400 text-slate-200 px-4 py-2 rounded-md hover:bg-white/5"
                >
                  Contact
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/3 p-3 rounded">Front-end</div>
                <div className="bg-white/3 p-3 rounded">Game Dev</div>
                <div className="bg-white/3 p-3 rounded">Embedded</div>
                <div className="bg-white/3 p-3 rounded">Photography</div>
              </div>
            </div>
          </div>

          {/* Right: Image collage */}
          <aside className="md:col-span-1">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-200" style={{ aspectRatio: '4 / 5' }}>
                <img
                  src="/media/PersonalImages/Headshots/Horizontal.jpg"
                  alt="Alex portrait vertical"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden shadow bg-gray-200" style={{ aspectRatio: '1 / 1' }}>
                  <img
                    src="/media/PersonalImages/Headshots/Hiking.jpg"
                    alt="Outdoors"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow bg-gray-200" style={{ aspectRatio: '16 / 9' }}>
                  <img
                    src="/media/PersonalImages/Headshots/Selfie.jpg"
                    alt="Landscape"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Who am I section */}
        <section className="mt-12">
          <div className="bg-white/3 rounded-xl p-8 shadow-inner">
            <h2 className="text-3xl font-bold mb-4 text-center text-slate-50">Who am I?</h2>
            <div className="prose prose-invert max-w-none text-lg leading-relaxed">
              <p>
                I'm a person who loves nature, adventure, and technology. I grew up in Wausau, Wisconsin — a place surrounded by forests, lakes, and hills.
                I spent my childhood exploring the outdoors, and I also developed an early interest in electronics and tinkering.
              </p>
              <p>
                I pursued software engineering at Milwaukee School of Engineering. I enjoy combining software and physical systems,
                whether that's building web experiences or experimenting with hardware projects. I also like photography and spending time with
                friends and family when I'm not working on projects.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <article>
          <h1 className="text-3xl font-bold mb-6">Resume</h1>
          <p className="text-lg mb-8">Please feel free to take a look at my resume below</p>

          <div className="max-w-4xl mx-auto">
            {/* Show iframe on medium+ screens; many mobile browsers block or don't render PDFs in iframes reliably */}
            <div className="hidden md:block">
              <iframe
                src="/Resume_Alexander_Lopez.pdf"
                title="Resume"
                className="w-full md:w-11/12 h-[80vh] border-0 rounded-lg mx-auto"
              ></iframe>
            </div>

            {/* Mobile fallback: explicit link to open/download the PDF */}
            <div className="md:hidden text-center">
              <a
                href="/Resume_Alexander_Lopez.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-md shadow"
              >
                Open Resume (PDF)
              </a>
              <p className="text-sm text-slate-300 mt-3">If the preview doesn't appear on your device, tap the link above to open or download the PDF.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
