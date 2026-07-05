'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error || 'Registration failed.');
      return;
    }
    setMessage('Account created. You can sign in now.');
    router.push('/login');
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10">
      <div className="panel w-full p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Register</p>
        <h1 className="mt-2 text-3xl font-semibold">Create your FootKit account</h1>
        <p className="mt-2 text-slate-300">Access your dashboard, favorite clubs, and personalized football insights.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3" placeholder="Display name" value={name} onChange={(event) => setName(event.target.value)} />
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {message ? <p className="text-sm text-brand-300">{message}</p> : null}
          <button className="w-full rounded-full bg-brand-500 px-4 py-3 font-medium text-black" type="submit">Create account</button>
        </form>
        <div className="mt-4 text-sm text-slate-400">
          Already have an account? <Link href="/login" className="text-brand-300">Sign in</Link>
        </div>
      </div>
    </main>
  );
}
