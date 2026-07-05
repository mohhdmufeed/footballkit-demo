import { PageShell } from '@/components/page-shell';

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Get in touch" description="Questions, partnerships, or feedback for the football experience.">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
        <p>Reach out through the team inbox for media enquiries, product feedback, or custom experience requests.</p>
      </div>
    </PageShell>
  );
}
