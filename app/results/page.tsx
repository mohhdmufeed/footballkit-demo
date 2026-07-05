import { PageShell } from '@/components/page-shell';

const results = [
  { league: 'Premier League', home: 'Man United', away: 'Tottenham', score: '1-0' },
  { league: 'Bundesliga', home: 'Bayern', away: 'Dortmund', score: '3-2' },
  { league: 'Ligue 1', home: 'PSG', away: 'Marseille', score: '2-1' }
];

export default function ResultsPage() {
  return (
    <PageShell eyebrow="Results" title="Recent match results" description="Review the latest completed games, scorelines, and moments that shaped the weekend.">
      <div className="space-y-3">
        {results.map((result) => (
          <div key={result.home} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <div>
              <p className="text-sm text-slate-400">{result.league}</p>
              <p className="font-semibold">{result.home} vs {result.away}</p>
            </div>
            <div className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">{result.score}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
