import { ProductResult } from './productResponse'

export enum BetType {
  V75 = 'V75',
  V86 = 'V86',
  GS75 = 'GS75',
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface BetTypeState {
  betType: BetType
  results: ProductResult[]
  status: Status
}
