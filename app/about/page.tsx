import Link from 'next/link';
import { Goal, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
            <h1 className="text-3xl font-semibold">A premium football destination</h1>
          </div>
          <Link href="/" className="text-sm text-brand-300 hover:text-brand-200">Back home</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-transparent p-6">
            <div className="mb-4 flex items-center gap-2 text-brand-300"><Goal size={18} /> <span>Why FootKit</span></div>
            <p className="text-slate-300">FootKit blends editorial quality, live football data, and polished UI to create a destination that feels fast, modern, and deeply immersive.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-2 text-brand-300"><Sparkles size={18} /> <span>Experience</span></div>
            <ul className="space-y-2 text-slate-300">
              <li>• Live scores and match cards</li>
              <li>• Rich football news and storytelling</li>
              <li>• Clean, responsive dashboard presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
