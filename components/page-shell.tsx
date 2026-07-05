import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function PageShell({
  title,
  eyebrow,
  description,
  children
}: {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-2 max-w-2xl text-slate-300">{description}</p>
          </div>
          <Link href="/" className="flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200">
            <ArrowLeft size={16} />
            <span>Back home</span>
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}
