import { promises as fs } from 'fs';
import path from 'path';

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  featured: boolean;
  author: string;
  createdAt: string;
};

export type FixtureItem = {
  id: string;
  home: string;
  away: string;
  competition: string;
  kickoff: string;
  status: 'Scheduled' | 'Live' | 'Finished';
  createdAt: string;
};

export type TeamItem = {
  id: string;
  name: string;
  league: string;
  form: string;
  coach: string;
};

export type PlayerItem = {
  id: string;
  name: string;
  club: string;
  position: string;
  stat: string;
};

export type StandingItem = {
  id: string;
  team: string;
  played: number;
  pts: number;
};

export type PredictionItem = {
  id: string;
  match: string;
  prediction: string;
  confidence: string;
  createdAt: string;
};

export type StoreData = {
  news: NewsItem[];
  fixtures: FixtureItem[];
  teams: TeamItem[];
  players: PlayerItem[];
  standings: StandingItem[];
  predictions: PredictionItem[];
  updatedAt: string;
};

const STORE_PATH = path.join(process.cwd(), 'data', 'football-store.json');
const ADMIN_KEY = process.env.ADMIN_API_KEY || 'footkit-admin-secret';

const initialData: StoreData = {
  news: [
    { id: 'n1', title: 'City edge title race after dramatic late winner', excerpt: 'A late strike delivered the result that shifted the momentum.', category: 'Breaking', featured: true, author: 'A. Singh', createdAt: '2026-07-05T08:00:00.000Z' },
    { id: 'n2', title: 'Young star shines as national side prepare for World Cup', excerpt: 'The academy graduate looks ready for the biggest stage.', category: 'Trending', featured: false, author: 'L. Chen', createdAt: '2026-07-05T08:15:00.000Z' }
  ],
  fixtures: [
    { id: 'f1', home: 'Arsenal', away: 'Chelsea', competition: 'Premier League', kickoff: '2026-07-06T19:00:00.000Z', status: 'Scheduled', createdAt: '2026-07-05T07:00:00.000Z' },
    { id: 'f2', home: 'Real Madrid', away: 'Barcelona', competition: 'La Liga', kickoff: '2026-07-06T17:30:00.000Z', status: 'Live', createdAt: '2026-07-05T07:05:00.000Z' }
  ],
  teams: [
    { id: 't1', name: 'Arsenal', league: 'Premier League', form: 'W-W-D', coach: 'Mikel Arteta' },
    { id: 't2', name: 'Real Madrid', league: 'La Liga', form: 'W-D-W', coach: 'Carlo Ancelotti' },
    { id: 't3', name: 'Bayern', league: 'Bundesliga', form: 'W-W-L', coach: 'Vincent Kompany' }
  ],
  players: [
    { id: 'p1', name: 'Vinícius Júnior', club: 'Real Madrid', position: 'Winger', stat: '14 goals' },
    { id: 'p2', name: 'Harry Kane', club: 'Bayern', position: 'Striker', stat: '21 goals' },
    { id: 'p3', name: 'Rodri', club: 'Manchester City', position: 'Midfielder', stat: '7 goals' }
  ],
  standings: [
    { id: 's1', team: 'Arsenal', played: 34, pts: 54 },
    { id: 's2', team: 'City', played: 34, pts: 49 },
    { id: 's3', team: 'Liverpool', played: 34, pts: 47 }
  ],
  predictions: [
    { id: 'pr1', match: 'Arsenal vs Chelsea', prediction: 'Arsenal 2-1 Chelsea', confidence: '94%', createdAt: '2026-07-05T07:30:00.000Z' }
  ],
  updatedAt: new Date().toISOString()
};

async function ensureStoreFile() {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify(initialData, null, 2));
  }
}

async function readStore(): Promise<StoreData> {
  await ensureStoreFile();
  const text = await fs.readFile(STORE_PATH, 'utf8');
  return JSON.parse(text) as StoreData;
}

async function writeStore(data: StoreData) {
  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify({ ...data, updatedAt: new Date().toISOString() }, null, 2));
}

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') throw new Error('Expected a string value.');
  const cleaned = value.trim().replace(/\s+/g, ' ');
  if (!cleaned) throw new Error('Value cannot be empty.');
  if (cleaned.length > maxLength) throw new Error(`Value exceeds ${maxLength} characters.`);
  return cleaned;
}

function sanitizeBoolean(value: unknown) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string' && value.toLowerCase() === 'true') return true;
  if (typeof value === 'string' && value.toLowerCase() === 'false') return false;
  return false;
}

export async function getHealthSnapshot() {
  const store = await readStore();
  return {
    status: 'ok',
    counts: {
      news: store.news.length,
      fixtures: store.fixtures.length,
      teams: store.teams.length,
      players: store.players.length,
      standings: store.standings.length,
      predictions: store.predictions.length
    },
    updatedAt: store.updatedAt
  };
}

export async function listNews() {
  const store = await readStore();
  return store.news.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createNews(input: Partial<NewsItem>) {
  const store = await readStore();
  const news = {
    id: `n-${Date.now()}`,
    title: sanitizeText(input.title, 120),
    excerpt: sanitizeText(input.excerpt || '', 220),
    category: sanitizeText(input.category || 'General', 40),
    featured: sanitizeBoolean(input.featured),
    author: sanitizeText(input.author || 'FootKit', 60),
    createdAt: new Date().toISOString()
  } satisfies NewsItem;

  const nextStore = { ...store, news: [news, ...store.news] };
  await writeStore(nextStore);
  return news;
}

export async function listFixtures() {
  const store = await readStore();
  return store.fixtures.sort((a, b) => a.kickoff.localeCompare(b.kickoff));
}

export async function createFixture(input: Partial<FixtureItem>) {
  const store = await readStore();
  const fixture = {
    id: `f-${Date.now()}`,
    home: sanitizeText(input.home, 80),
    away: sanitizeText(input.away, 80),
    competition: sanitizeText(input.competition || 'League', 80),
    kickoff: sanitizeText(input.kickoff || new Date().toISOString(), 80),
    status: (input.status as FixtureItem['status']) || 'Scheduled',
    createdAt: new Date().toISOString()
  } satisfies FixtureItem;
  const nextStore = { ...store, fixtures: [fixture, ...store.fixtures] };
  await writeStore(nextStore);
  return fixture;
}

export async function listTeams() {
  const store = await readStore();
  return store.teams;
}

export async function listPlayers() {
  const store = await readStore();
  return store.players;
}

export async function listStandings() {
  const store = await readStore();
  return store.standings.sort((a, b) => b.pts - a.pts);
}

export async function createPrediction(input: Partial<PredictionItem>) {
  const store = await readStore();
  const prediction = {
    id: `pr-${Date.now()}`,
    match: sanitizeText(input.match, 80),
    prediction: sanitizeText(input.prediction, 120),
    confidence: sanitizeText(input.confidence || '80%', 12),
    createdAt: new Date().toISOString()
  } satisfies PredictionItem;
  const nextStore = { ...store, predictions: [prediction, ...store.predictions] };
  await writeStore(nextStore);
  return prediction;
}

export async function getAdminSummary() {
  const store = await readStore();
  return {
    totals: {
      news: store.news.length,
      fixtures: store.fixtures.length,
      teams: store.teams.length,
      players: store.players.length,
      standings: store.standings.length,
      predictions: store.predictions.length
    },
    latestNews: store.news.slice(0, 3),
    latestFixtures: store.fixtures.slice(0, 3)
  };
}

export function isAdminRequest(request: Request) {
  const providedKey = request.headers.get('x-admin-key');
  return providedKey === ADMIN_KEY;
}
