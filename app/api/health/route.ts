import { NextResponse } from 'next/server';
import { getHealthSnapshot } from '@/lib/football-store';

export async function GET() {
  return NextResponse.json(await getHealthSnapshot());
}
