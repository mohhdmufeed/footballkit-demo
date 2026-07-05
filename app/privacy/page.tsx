import { PageShell } from '@/components/page-shell';

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Privacy" title="Privacy policy" description="How data is handled across the platform and the standards behind the experience.">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
        <p>This demo site uses local content and placeholder privacy language. Production deployments should add strict consent controls, data retention policies, and clear disclosures.</p>
      </div>
    </PageShell>
  );
}
