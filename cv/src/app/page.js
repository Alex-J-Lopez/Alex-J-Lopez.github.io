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
              <a href="/about#resume" rel="noreferrer" className="inline-block border border-slate-400 text-slate-200 px-5 py-3 rounded-md hover:bg-white/5">Resume</a>
            </div>
          </div>

          {/* Image column */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-200" style={{ aspectRatio: '3 / 2' }}>
              <img src="/media/PersonalImages/Headshots/selfie.jpg" alt="Portrait of Alexander Lopez" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
