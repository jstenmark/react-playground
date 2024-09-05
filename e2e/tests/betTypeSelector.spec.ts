import { test, expect } from '@playwright/test'

test.describe('BetTypeSelector Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('should display the default bet type', async ({ page }) => {
    const selectedBetType = await page.locator('input[value="V75"]')
    await expect(selectedBetType).toBeVisible()
  })

  test('should change bet type on select change', async ({ page }) => {
    await page.click('label:has-text("Bet typ")')

    await page.click('li:has-text("V86")')

    const selectedBetType = await page.locator('input[value="V86"]')
    await expect(selectedBetType).toBeVisible()
  })
})
