import { NextResponse } from 'next/server';
import { listTeams } from '@/lib/football-store';

export async function GET() {
  return NextResponse.json(await listTeams());
}
