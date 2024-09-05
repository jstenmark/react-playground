export interface ProductResponse {
  betType: string
  upcoming: any[]
  results: ProductResult[]
}

export interface ProductResult {
  id: string
  tracks: ProductResultTrack[]
  totalToWin: number
  startTime: string
  addOns: string[]
}

interface ProductResultTrack {
  id: number
  name: string
}
