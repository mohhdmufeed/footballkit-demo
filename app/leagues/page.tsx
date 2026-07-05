import { PageShell } from '@/components/page-shell';
import { leagueCards } from '@/app/data/football';

export default function LeaguesPage() {
  return (
    <PageShell eyebrow="Leagues" title="Elite competitions and global football" description="Discover the major leagues, their stature, and the football culture behind them.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {leagueCards.map((league) => (
          <div key={league.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold">{league.name}</p>
            <p className="mt-2 text-sm text-slate-400">{league.region}</p>
            <p className="mt-3 text-sm text-brand-300">{league.level}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
