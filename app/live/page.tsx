import { PageShell } from '@/components/page-shell';

const liveCards = [
  { league: 'Premier League', home: 'Arsenal', away: 'Chelsea', status: 'Live • 67\'' },
  { league: 'La Liga', home: 'Real Madrid', away: 'Barcelona', status: 'Live • 54\'' },
  { league: 'Serie A', home: 'Inter', away: 'Juventus', status: 'Live • 41\'' }
];

export default function LivePage() {
  return (
    <PageShell eyebrow="Live" title="Live matches and momentum" description="Follow the action with a premium live feed experience and instant match state updates.">
      <div className="grid gap-4 lg:grid-cols-3">
        {liveCards.map((card) => (
          <div key={card.league} className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-transparent p-5">
            <p className="text-sm text-slate-400">{card.league}</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{card.home}</p>
                <p className="text-sm text-slate-400">Home</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{card.away}</p>
                <p className="text-sm text-slate-400">Away</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-brand-300">{card.status}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
