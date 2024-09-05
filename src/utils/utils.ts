export const formatRaceName = (name: string, maxLength = 50): string => {
  if (!name) return ''
  const trimmedName = name.trim()
  return trimmedName.length > maxLength ? `${trimmedName.slice(0, maxLength)}...` : trimmedName
}
