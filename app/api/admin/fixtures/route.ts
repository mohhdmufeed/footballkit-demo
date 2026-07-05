import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.role || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const items = await prisma.fixture.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.role || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await request.json();
  const item = await prisma.fixture.create({
    data: {
      home: String(body.home || ''),
      away: String(body.away || ''),
      competition: String(body.competition || 'League'),
      kickoff: String(body.kickoff || new Date().toISOString()),
      status: String(body.status || 'Scheduled')
    }
  });
  return NextResponse.json(item, { status: 201 });
}
