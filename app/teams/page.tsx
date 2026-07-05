import { PageShell } from '@/components/page-shell';

const teams = ['Arsenal', 'Real Madrid', 'Bayern', 'Inter', 'PSG'];

export default function TeamsPage() {
  return (
    <PageShell eyebrow="Teams" title="Clubs, rosters, and stories" description="Browse standout teams and discover their form, squads, and latest headlines.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <div key={team} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold">{team}</p>
            <p className="mt-2 text-sm text-slate-400">Premium club profile and latest results ready for expansion.</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
