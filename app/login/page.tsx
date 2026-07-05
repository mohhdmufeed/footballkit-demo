'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const result = await signIn('credentials', { redirect: false, email, password });
    if (result?.error) {
      setError('Invalid email or password.');
      return;
    }
    router.push('/dashboard');
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10">
      <div className="panel w-full p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Login</p>
        <h1 className="mt-2 text-3xl font-semibold">Welcome back to FootKit</h1>
        <p className="mt-2 text-slate-300">Sign in to access your dashboard, bookmarks, and saved predictions.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button className="w-full rounded-full bg-brand-500 px-4 py-3 font-medium text-black" type="submit">Sign in</button>
        </form>
        <div className="mt-4 text-sm text-slate-400">
          Need an account? <Link href="/register" className="text-brand-300">Create one</Link>
        </div>
      </div>
    </main>
  );
}
