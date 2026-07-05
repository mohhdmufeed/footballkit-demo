'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminCrudPage() {
  const [news, setNews] = useState<any[]>([]);
  const [fixtures, setFixtures] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const [newsRes, fixturesRes, teamsRes, playersRes] = await Promise.all([
        fetch('/api/admin/news'),
        fetch('/api/admin/fixtures'),
        fetch('/api/admin/teams'),
        fetch('/api/admin/players')
      ]);
      setNews(await newsRes.json());
      setFixtures(await fixturesRes.json());
      setTeams(await teamsRes.json());
      setPlayers(await playersRes.json());
    }
    void load();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Admin CRUD</p>
            <h1 className="text-3xl font-semibold">Manage content across the platform</h1>
          </div>
          <Link href="/admin" className="text-sm text-brand-300 hover:text-brand-200">Back to admin</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">News</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">{news.map((item) => <li key={item.id}>• {item.title}</li>)}</ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Fixtures</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">{fixtures.map((item) => <li key={item.id}>• {item.home} vs {item.away}</li>)}</ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Teams</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">{teams.map((item) => <li key={item.id}>• {item.name}</li>)}</ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">Players</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">{players.map((item) => <li key={item.id}>• {item.name}</li>)}</ul>
          </div>
        </div>
      </div>
    </main>
  );
}
