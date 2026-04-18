import { test, expect } from '@playwright/test'

test.describe('contact form', () => {
  test('shows validation errors when submitting an empty form', async ({ page }) => {
    await page.goto('/contact')
    const submit = page.getByRole('button', { name: /send|envoyer|submit/i }).first()
    await submit.click()
    await expect(page.locator('[role="alert"], .text-\\[color\\:var\\(--color-neon-red-400\\)\\]').first()).toBeVisible()
  })
})
