import { PageShell } from '@/components/page-shell';
import { galleryItems } from '@/app/data/football';

export default function GalleryPage() {
  return (
    <PageShell eyebrow="Gallery" title="Visuals from the world of football" description="A polished gallery surface for matchday imagery and iconic football moments.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-slate-400">{item.caption}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
