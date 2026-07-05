import { NextResponse } from 'next/server';
import { createFixture, isAdminRequest, listFixtures } from '@/lib/football-store';

export async function GET() {
  return NextResponse.json(await listFixtures());
}

export async function POST(request: Request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const item = await createFixture(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
