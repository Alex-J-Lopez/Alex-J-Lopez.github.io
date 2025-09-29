import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text column */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Hi — I’m Alex Lopez.</h1>
            <p className="text-lg text-slate-200 mb-6">
              I am a software engineer who builds polished full stack solutions. Browse my work below or get in touch.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-5 py-3 rounded-md shadow">About</Link>
              <Link href="/projects" className="inline-block border border-slate-400 text-slate-200 px-5 py-3 rounded-md hover:bg-white/5">Projects</Link>
              <a href="/about#resume" target="_blank" rel="noreferrer" className="inline-block text-sm text-slate-300 px-4 py-3">Resume</a>
            </div>
          </div>

          {/* Image collage column */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-200" style={{ aspectRatio: '4 / 5' }}>
              <Image src="/media/PersonalImages/Headshots/Vertical.jpg" alt="Portrait" fill className="object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden shadow bg-gray-200" style={{ aspectRatio: '1 / 1' }}>
                <Image src="/media/PersonalImages/Headshots/Hiking.jpg" alt="Hiking" fill className="object-cover" />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow bg-gray-200" style={{ aspectRatio: '16 / 9' }}>
                <Image src="/media/PersonalImages/Headshots/Horizontal.jpg" alt="Landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Features / quick links */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white/5 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
              <p className="text-slate-200">A selection of recent work blending UI, game logic, and hardware integrations.</p>
            </article>
            <article className="bg-white/5 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-slate-200">I document projects and nature — photos are used throughout this site.</p>
            </article>
            <article className="bg-white/5 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
              <p className="text-slate-200">Email or connect on GitHub / LinkedIn — links are available on every page.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
