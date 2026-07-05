import { PageShell } from '@/components/page-shell';

export default function TermsPage() {
  return (
    <PageShell eyebrow="Terms" title="Terms of use" description="The rules, responsibilities, and acceptable use expectations for fans using the platform.">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
        <p>Use of this football experience is governed by a simple set of terms that protect users, content creators, and the platform itself. Expand these pages for full legal coverage in production.</p>
      </div>
    </PageShell>
  );
}
