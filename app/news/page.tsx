import Link from 'next/link';
import { Clock3, Flame, Newspaper } from 'lucide-react';

const stories = [
  { title: 'Clubs accelerate plans for summer recruitment', category: 'Transfer', time: '18 min ago' },
  { title: 'Managers praise tactical discipline after away win', category: 'Analysis', time: '44 min ago' },
  { title: 'The rise of the next generation of fullbacks', category: 'Features', time: '1 hr ago' }
];

export default function NewsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">News</p>
            <h1 className="text-3xl font-semibold">Latest football coverage</h1>
          </div>
          <Link href="/" className="text-sm text-brand-300 hover:text-brand-200">Back home</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-transparent p-5">
            <div className="mb-3 flex items-center gap-2 text-brand-300"><Flame size={16} /> <span>Trending</span></div>
            <h2 className="text-2xl font-semibold">The comeback story that has changed the title race</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Inside the tactical shift, the key performances, and what it means for the final stretch of the season.</p>
          </div>
          <div className="space-y-3">
            {stories.map((story) => (
              <div key={story.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-brand-300"><Newspaper size={14} /> <span>{story.category}</span></div>
                <p className="font-medium">{story.title}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-400"><Clock3 size={14} /> <span>{story.time}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
