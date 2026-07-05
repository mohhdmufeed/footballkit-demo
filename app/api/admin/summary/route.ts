import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.role || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const [news, fixtures, teams, players, bookmarks, users] = await Promise.all([
    prisma.news.count(),
    prisma.fixture.count(),
    prisma.team.count(),
    prisma.player.count(),
    prisma.bookmark.count(),
    prisma.user.count()
  ]);

  return NextResponse.json({ news, fixtures, teams, players, bookmarks, users });
}
