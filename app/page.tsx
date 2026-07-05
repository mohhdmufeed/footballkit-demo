'use client';

import Link from 'next/link';
import { BadgeCheck, BarChart3, CalendarDays, Clock3, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const liveMatches = [
  { league: 'Premier League', home: 'Arsenal', away: 'Chelsea', minute: '67\'', score: '2-1' },
  { league: 'La Liga', home: 'Real Madrid', away: 'Barcelona', minute: '54\'', score: '1-0' },
  { league: 'Serie A', home: 'Inter', away: 'Juventus', minute: '41\'', score: '0-0' }
];

const featuredNews = [
  { title: 'City edge title race after dramatic late winner', tag: 'Breaking', time: '12 min ago' },
  { title: 'Young star shines as national side prepare for World Cup', tag: 'Trending', time: '32 min ago' },
  { title: 'Transfer window heats up with elite winger linked to Europe', tag: 'Transfer', time: '1 hr ago' }
];

const standings = [
  { pos: 1, team: 'Arsenal', pts: 54 },
  { pos: 2, team: 'City', pts: 49 },
  { pos: 3, team: 'Liverpool', pts: 47 }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header className="panel mb-8 flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-300">FootKit</p>
          <h1 className="text-xl font-semibold">The premium football experience</h1>
        </div>
        <nav className="hidden gap-4 text-sm text-slate-300 md:flex">
          <Link href="/news" className="transition hover:text-white">News</Link>
          <Link href="/fixtures" className="transition hover:text-white">Fixtures</Link>
          <Link href="/tables" className="transition hover:text-white">Tables</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
        </nav>
      </header>

      <section className="panel relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(33,184,79,0.18),transparent_35%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-5 flex items-center gap-2 text-sm text-brand-200">
              <Sparkles size={16} />
              <span>Premium football intelligence</span>
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Modern football coverage built for the fans who want every detail.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              Track live scores, read breaking news, explore standings, and dive into match analytics in a polished experience that feels as premium as the game itself.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/live" className="rounded-full bg-brand-500 px-5 py-3 font-medium text-black transition hover:bg-brand-400">Watch live</Link>
              <Link href="/news" className="rounded-full border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:border-brand-400">Read latest</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="soft-pill">Live feeds</span>
              <span className="soft-pill">Real-time stats</span>
              <span className="soft-pill">Smart insights</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="grid gap-4">
            <div className="rounded-3xl border border-brand-500/20 bg-black/30 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Featured match</p>
                  <p className="text-lg font-semibold">Champions League</p>
                </div>
                <span className="soft-pill">Live</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-xl font-semibold">Madrid</p>
                  <p className="text-sm text-slate-400">Home</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-semibold">2 - 1</p>
                  <p className="text-sm text-slate-400">67'</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold">Inter</p>
                  <p className="text-sm text-slate-400">Away</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-brand-300"><BarChart3 size={16} /> <span>Analytics</span></div>
                <p className="text-3xl font-semibold">94%</p>
                <p className="text-sm text-slate-400">Match prediction confidence</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-brand-300"><ShieldCheck size={16} /> <span>Trusted</span></div>
                <p className="text-3xl font-semibold">24/7</p>
                <p className="text-sm text-slate-400">Coverage and alerts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <div className="panel p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live matches</p>
              <h3 className="text-xl font-semibold">Momentum on the pitch</h3>
            </div>
            <Link href="/live" className="text-sm text-brand-300 hover:text-brand-200">View all</Link>
          </div>
          <div className="space-y-3">
            {liveMatches.map((match) => (
              <div key={match.league} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div>
                  <p className="text-sm text-slate-400">{match.league}</p>
                  <p className="font-medium">{match.home} vs {match.away}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{match.score}</p>
                  <p className="text-sm text-slate-400">{match.minute}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Top stories</p>
              <h3 className="text-xl font-semibold">Breaking & trending</h3>
            </div>
            <Link href="/news" className="text-sm text-brand-300 hover:text-brand-200">More</Link>
          </div>
          <div className="space-y-3">
            {featuredNews.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-brand-300">
                  <BadgeCheck size={16} />
                  <span>{item.tag}</span>
                </div>
                <p className="font-medium">{item.title}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                  <Clock3 size={14} />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr,0.8fr]">
        <div className="panel p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">League table</p>
              <h3 className="text-xl font-semibold">Standings snapshot</h3>
            </div>
            <Link href="/tables" className="text-sm text-brand-300 hover:text-brand-200">Full table</Link>
          </div>
          <div className="space-y-3">
            {standings.map((item) => (
              <div key={item.team} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-200">{item.pos}</span>
                  <span className="font-medium">{item.team}</span>
                </div>
                <span className="text-sm text-slate-300">{item.pts} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Highlights</p>
              <h3 className="text-xl font-semibold">Watch & relive</h3>
            </div>
            <Link href="/videos" className="text-sm text-brand-300 hover:text-brand-200">Watch now</Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/20 to-transparent p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Top 10 moments</p>
                <p className="mt-2 text-xl font-semibold">Breathtaking goals from the weekend</p>
              </div>
              <div className="rounded-full border border-brand-500/20 bg-black/30 p-3">
                <PlayCircle className="text-brand-300" size={28} />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
              <CalendarDays size={16} />
              <span>Premier League, La Liga, Champions League</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 FootKit. Built for football fans everywhere.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
