import { PageShell } from '@/components/page-shell';
import { transferItems } from '@/app/data/football';

export default function TransfersPage() {
  return (
    <PageShell eyebrow="Transfers" title="The market is heating up" description="Follow the latest transfer stories, fees, and major club movements.">
      <div className="space-y-3">
        {transferItems.map((item) => (
          <div key={item.player} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold">{item.player}</p>
              <p className="text-sm text-slate-400">{item.from} → {item.to}</p>
            </div>
            <div className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">{item.fee}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
