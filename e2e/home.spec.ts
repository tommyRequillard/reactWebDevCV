import { test, expect } from '@playwright/test'

test.describe('home (CV)', () => {
  test('renders the CV page with a visible heading', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/CV|Tommy|Requillard/i)
    const heading = page.getByRole('heading', { level: 1 }).first()
    await expect(heading).toBeVisible()
  })

  test('has a working theme toggle', async ({ page }) => {
    await page.goto('/cv')
    const html = page.locator('html')
    const initialTheme = await html.getAttribute('data-theme')
    const toggle = page.getByRole('button', { name: /theme|thème/i }).first()
    await toggle.click()
    await expect.poll(async () => await html.getAttribute('data-theme')).not.toBe(initialTheme)
  })
})
