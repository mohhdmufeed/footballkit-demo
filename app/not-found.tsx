import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-10">
      <div className="panel max-w-xl p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border border-brand-500/20 bg-brand-500/10 p-4 text-brand-300">
            <Compass size={28} />
          </div>
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">404</p>
        <h1 className="mt-2 text-3xl font-semibold">The page you are looking for is not here.</h1>
        <p className="mt-3 text-slate-300">Return to the home feed and get back into the action.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-500 px-5 py-3 font-medium text-black transition hover:bg-brand-400">Go home</Link>
      </div>
    </main>
  );
}
