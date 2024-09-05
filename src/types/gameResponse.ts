export interface GameResponse {
  '@type': string
  currentVersion: number
  id: string
  newBettingSystem: boolean
  pools: any
  races: GameRace[]
  status: string
  type: string
}

export interface GameRace {
  date: string
  name: string
  distance: number
  id: string
  mediaId: string
  mergedPools: any[]
  number: number
  pools: any
  prize: string
  result: {
    victoryMargin: string
  }
  scheduledStartTime: string // "2024-08-25T15:00:00"
  sport: string
  startMethod: string
  starts: GameStart[]
  startTime: string
  status: string // "results"
  terms: string[]
  track: {
    condition: string
    countryCode: string
    id: number
    name: string // "Charlottenlund"
  }
}

export interface GameStart {
  distance: number
  driver: {
    firstName: string
    id: number
    lastName: string
    license: string
    shortName: string
    silks: string
    statistics: any
  }
  horse: GameStartHorse
  id: string // "2024-08-25_55_6_1"
  number: number
  pools: any
  postPosition: number
  result: any
}

export interface GameStartHorse {
  age: number
  color: string
  foreignOwned: boolean
  money: number
  name: string
  nationality: string
  owner: {
    name: string
  }
  pedigree: Pedigree
  record: any
  sex: string
  shoes: any
  statistics: any
  sulky: any
  trainer: {
    firstName: string
    lastName: string
    license: string
    shortName: string
  }
}

interface Pedigree {
  father: Parent
  grandfather: Parent
  mother: Parent
}

interface Parent {
  name: string
}
