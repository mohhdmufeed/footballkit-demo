import { PageShell } from '@/components/page-shell';
import { playerCards } from '@/app/data/football';

export default function PlayersPage() {
  return (
    <PageShell eyebrow="Players" title="The stars shaping the season" description="Explore the elite players driving momentum, output, and headlines.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {playerCards.map((player) => (
          <div key={player.slug} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold">{player.name}</p>
            <p className="mt-2 text-sm text-slate-400">{player.club}</p>
            <p className="mt-3 text-sm text-brand-300">{player.position}</p>
            <p className="mt-2 text-sm text-slate-300">{player.stat}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
