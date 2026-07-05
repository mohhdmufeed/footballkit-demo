import { PageShell } from '@/components/page-shell';
import { matchCenterCards } from '@/app/data/football';

export default function MatchCenterPage() {
  return (
    <PageShell eyebrow="Match Center" title="Live match intelligence" description="A premium match hub with live fixtures, score states, and momentum updates.">
      <div className="grid gap-4 lg:grid-cols-3">
        {matchCenterCards.map((match) => (
          <div key={match.title} className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-transparent p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-slate-400">{match.league}</p>
              <span className="soft-pill">{match.state}</span>
            </div>
            <p className="text-xl font-semibold">{match.home} vs {match.away}</p>
            <p className="mt-2 text-sm text-slate-300">{match.minute} into the contest</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
