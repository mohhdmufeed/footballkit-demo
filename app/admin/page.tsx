import Link from 'next/link';
import { BarChart3, Newspaper, ShieldCheck, Trophy, Users } from 'lucide-react';
import { getAdminSummary } from '@/lib/football-store';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const summary = await getAdminSummary();

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Admin</p>
            <h1 className="text-3xl font-semibold">Operations dashboard</h1>
          </div>
          <Link href="/" className="text-sm text-brand-300 hover:text-brand-200">Back home</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'News items', value: summary.totals.news, icon: Newspaper },
            { label: 'Fixtures', value: summary.totals.fixtures, icon: Trophy },
            { label: 'Teams', value: summary.totals.teams, icon: Users },
            { label: 'Predictions', value: summary.totals.predictions, icon: BarChart3 }
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center gap-2 text-brand-300"><Icon size={16} /> <span>{card.label}</span></div>
                <p className="text-3xl font-semibold">{card.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex items-center gap-2 text-brand-300"><ShieldCheck size={16} /> <span>Secure admin access</span></div>
            <p className="text-slate-300">Protected API routes now require an admin header key and the dashboard reads from the shared store.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold">Latest content</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {summary.latestNews.map((item) => <li key={item.id}>• {item.title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
