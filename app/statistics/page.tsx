import { PageShell } from '@/components/page-shell';
import { statRows } from '@/app/data/football';

export default function StatisticsPage() {
  return (
    <PageShell eyebrow="Statistics" title="Performance data and xG" description="Explore the numbers behind the matchday story with advanced football metrics.">
      <div className="grid gap-4 md:grid-cols-2">
        {statRows.map((row) => (
          <div key={row.category} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">{row.category}</p>
            <p className="mt-2 text-3xl font-semibold text-brand-200">{row.value}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
