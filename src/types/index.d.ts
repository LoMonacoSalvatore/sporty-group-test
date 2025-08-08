export interface League {
  idLeague: string
  strLeague: string
  strSport: string
  strLeagueAlternate: string
}

export interface Leagues {
  leagues: League[]
}

interface Season {
  strSeason: string
  strBadge: string
}

export interface Seasons {
  seaons: Season[]
}
