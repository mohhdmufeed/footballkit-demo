export type LeagueCard = {
  name: string;
  region: string;
  level: string;
};

export type MatchCard = {
  title: string;
  league: string;
  home: string;
  away: string;
  state: string;
  minute: string;
};

export type PlayerCard = {
  name: string;
  club: string;
  position: string;
  stat: string;
  slug: string;
};

export type TransferItem = {
  player: string;
  from: string;
  to: string;
  fee: string;
};

export type StatRow = {
  category: string;
  value: string;
};

export const leagueCards: LeagueCard[] = [
  { name: 'Premier League', region: 'England', level: 'Top Flight' },
  { name: 'La Liga', region: 'Spain', level: 'Top Flight' },
  { name: 'Serie A', region: 'Italy', level: 'Top Flight' },
  { name: 'Bundesliga', region: 'Germany', level: 'Top Flight' },
  { name: 'Ligue 1', region: 'France', level: 'Top Flight' },
  { name: 'Champions League', region: 'Europe', level: 'Elite' }
];

export const matchCenterCards: MatchCard[] = [
  { title: 'Arsenal vs Chelsea', league: 'Premier League', home: 'Arsenal', away: 'Chelsea', state: 'Live', minute: '67\'' },
  { title: 'Real Madrid vs Barcelona', league: 'La Liga', home: 'Real Madrid', away: 'Barcelona', state: 'Live', minute: '54\'' },
  { title: 'Inter vs Juventus', league: 'Serie A', home: 'Inter', away: 'Juventus', state: 'Halftime', minute: '45\'' }
];

export const playerCards: PlayerCard[] = [
  { name: 'Vinícius Júnior', club: 'Real Madrid', position: 'Winger', stat: '14 goals', slug: 'vinicius-junior' },
  { name: 'Harry Kane', club: 'Bayern', position: 'Striker', stat: '21 goals', slug: 'harry-kane' },
  { name: 'Rodri', club: 'Manchester City', position: 'Midfielder', stat: '7 goals', slug: 'rodri' }
];

export const transferItems: TransferItem[] = [
  { player: 'M. Olise', from: 'Crystal Palace', to: 'Bayern', fee: '€60m' },
  { player: 'L. Yamal', from: 'Barcelona', to: 'Real Madrid', fee: '€120m' },
  { player: 'S. Guirassy', from: 'Stuttgart', to: 'Inter', fee: '€35m' }
];

export const statRows: StatRow[] = [
  { category: 'Possession', value: '62%' },
  { category: 'Shots', value: '14' },
  { category: 'Expected Goals', value: '2.4' },
  { category: 'Corners', value: '7' }
];

export const topScorers = [
  { name: 'Harry Kane', club: 'Bayern', goals: 21 },
  { name: 'Vinícius Júnior', club: 'Real Madrid', goals: 18 },
  { name: 'Mbappé', club: 'Real Madrid', goals: 17 }
];

export const topAssists = [
  { name: 'Rodri', club: 'Manchester City', assists: 11 },
  { name: 'Kevin De Bruyne', club: 'Napoli', assists: 9 },
  { name: 'L. Modrić', club: 'Real Madrid', assists: 8 }
];

export const goalkeepers = [
  { name: 'Gianluigi Donnarumma', club: 'PSG', saves: 84 },
  { name: 'Ederson', club: 'Manchester City', saves: 77 },
  { name: 'Alisson', club: 'Liverpool', saves: 73 }
];

export const galleryItems = [
  { title: 'Champions League Night', caption: 'Aerial views and atmosphere from the latest clash.' },
  { title: 'Training Ground', caption: 'Tactical prep and elite conditioning sessions.' },
  { title: 'Fan Celebration', caption: 'Supporters lighting up the city after a dramatic win.' }
];

export const videoItems = [
  { title: 'Top 10 goals of the week', duration: '12:08' },
  { title: 'Tactical masterclass from the weekend', duration: '09:27' },
  { title: 'Post-match reactions from the managers', duration: '07:54' }
];

export const pollOptions = ['Arsenal', 'Real Madrid', 'Bayern'];

export const communityPosts = [
  { author: 'Mina', text: 'The latest tactical shift looks like the turning point for the title race.' },
  { author: 'Owen', text: 'This squad depth is frightening; I’m backing them to go all the way.' }
];
