import { PageShell } from '@/components/page-shell';

const table = [
  { pos: 1, team: 'Arsenal', pts: 54 },
  { pos: 2, team: 'City', pts: 49 },
  { pos: 3, team: 'Liverpool', pts: 47 }
];

export default function TablesPage() {
  return (
    <PageShell eyebrow="Tables" title="League tables and standings" description="Stay atop the title race with clear, elegant standings for top competitions.">
      <div className="space-y-3">
        {table.map((row) => (
          <div key={row.team} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-200">{row.pos}</span>
              <span className="font-semibold">{row.team}</span>
            </div>
            <span className="text-sm text-slate-300">{row.pts} pts</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
