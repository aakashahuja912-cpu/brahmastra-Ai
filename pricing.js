import { PRICING_MATRIX } from '../constants'

/**
 * Calculate price based on billing cycle and currency.
 * Annual Price = Base × RegionMultiplier × 12 × 0.8 (20% off)
 * Monthly Price = Base × RegionMultiplier
 */
export function calcPrice(basePrice, currencyKey, isAnnual) {
  const { multiplier } = PRICING_MATRIX.currencies[currencyKey]
  const monthly = basePrice * multiplier
  if (isAnnual) {
    return (monthly * 12 * PRICING_MATRIX.annualDiscount) / 12 // per-month equivalent
  }
  return monthly
}

export function formatPrice(amount, currencyKey) {
  const { symbol } = PRICING_MATRIX.currencies[currencyKey]
  // INR: no decimals; USD/EUR: no decimals for clean display
  return `${symbol}${Math.round(amount).toLocaleString()}`
}
