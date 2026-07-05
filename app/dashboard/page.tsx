'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Bookmark, Shield, Sparkles, Star } from 'lucide-react';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Dashboard</p>
            <h1 className="text-3xl font-semibold">Welcome, {session?.user?.name || 'fan'}</h1>
            <p className="mt-2 text-slate-300">Your personalized football hub with bookmarks, predictions, and saved insights.</p>
          </div>
          <Link href="/" className="text-sm text-brand-300 hover:text-brand-200">Back home</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-brand-300"><Bookmark size={16} /> <span>Bookmarks</span></div>
            <p className="text-lg font-semibold">Saved stories and fixtures</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-brand-300"><Star size={16} /> <span>Favorites</span></div>
            <p className="text-lg font-semibold">Track your preferred clubs and players</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-brand-300"><Shield size={16} /> <span>Role</span></div>
            <p className="text-lg font-semibold">{session?.user?.role || 'USER'}</p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-transparent p-5">
          <div className="flex items-center gap-2 text-brand-300"><Sparkles size={16} /> <span>Next upgrade</span></div>
          <p className="mt-2 text-slate-300">The dashboard is ready for real persistence, favorites, and bookmark management through Prisma-backed APIs.</p>
        </div>
      </div>
    </main>
  );
}
