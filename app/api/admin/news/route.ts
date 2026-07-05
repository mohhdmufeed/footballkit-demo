import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.role || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const items = await prisma.news.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.role || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await request.json();
  const item = await prisma.news.create({
    data: {
      title: String(body.title || ''),
      excerpt: String(body.excerpt || ''),
      category: String(body.category || 'General'),
      featured: Boolean(body.featured),
      author: String(body.author || 'Admin'),
      content: String(body.content || ''),
      authorId: String(session.user.id || '')
    }
  });
  return NextResponse.json(item, { status: 201 });
}
