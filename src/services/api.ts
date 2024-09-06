import { ProductResponse } from '../types/productResponse'
import { GameResponse } from '../types/gameResponse'

const API_URL = process.env.REACT_APP_API_URL

export async function getProductDetails(betType: string): Promise<ProductResponse> {
  const response = await fetch(`${API_URL}/products/${betType}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch product details for bet type: ${betType}`)
  }

  const data: ProductResponse = await response.json()

  return data
}

export async function getGameDetails(id: string): Promise<GameResponse> {
  const response = await fetch(`${API_URL}/games/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch game details for ID: ${id}`)
  }

  const data: GameResponse = await response.json()
  return data
}
