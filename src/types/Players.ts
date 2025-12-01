export type Leaderboard = {
  id: string;
  players: Player[];
};

export type Player = {
  id: number;
  name: string;
  last_star_ts: number;
  local_score: number;
  stars: number;
  completion_day_level: object;
};
