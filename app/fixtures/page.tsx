import Link from 'next/link';
import { CalendarDays, Clock3 } from 'lucide-react';

const fixtures = [
  { date: 'Sat, 12 Jul', home: 'Milan', away: 'Napoli', time: '20:00' },
  { date: 'Sun, 13 Jul', home: 'Atletico', away: 'Sevilla', time: '18:30' },
  { date: 'Mon, 14 Jul', home: 'Bayern', away: 'Leverkusen', time: '20:45' }
];

export default function FixturesPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Fixtures</p>
            <h1 className="text-3xl font-semibold">Upcoming matches</h1>
          </div>
          <Link href="/" className="text-sm text-brand-300 hover:text-brand-200">Back home</Link>
        </div>
        <div className="space-y-3">
          {fixtures.map((fixture) => (
            <div key={fixture.home} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-3">
                  <CalendarDays size={18} className="text-brand-300" />
                </div>
                <div>
                  <p className="font-medium">{fixture.home} vs {fixture.away}</p>
                  <p className="text-sm text-slate-400">{fixture.date}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-400 sm:mt-0">
                <Clock3 size={14} />
                <span>{fixture.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
