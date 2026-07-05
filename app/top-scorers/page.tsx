import { PageShell } from '@/components/page-shell';
import { topScorers } from '@/app/data/football';

export default function TopScorersPage() {
  return (
    <PageShell eyebrow="Top Scorers" title="Golden boot contenders" description="The players leading the scoring charts and turning games in their favor.">
      <div className="space-y-3">
        {topScorers.map((player) => (
          <div key={player.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <div>
              <p className="font-semibold">{player.name}</p>
              <p className="text-sm text-slate-400">{player.club}</p>
            </div>
            <div className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">{player.goals} goals</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
