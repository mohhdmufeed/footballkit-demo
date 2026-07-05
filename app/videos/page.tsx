import { PageShell } from '@/components/page-shell';
import { videoItems } from '@/app/data/football';

export default function VideosPage() {
  return (
    <PageShell eyebrow="Videos" title="Moments, analysis, and highlights" description="Curated video content for fans who want both the emotion and the insight.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {videoItems.map((video) => (
          <div key={video.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold">{video.title}</p>
            <p className="mt-2 text-sm text-slate-400">{video.duration}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
