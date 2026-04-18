import { test, expect } from '@playwright/test'

const routes = [
  { path: '/services', name: /services/i },
  { path: '/portfolio', name: /portfolio/i },
  { path: '/cybersecurity', name: /cyber/i },
  { path: '/documents', name: /documents|certif/i },
  { path: '/skills', name: /skills|compétences/i },
  { path: '/contact', name: /contact/i },
]

test.describe('navigation', () => {
  for (const { path, name } of routes) {
    test(`route ${path} renders without crashing`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', (e) => errors.push(e.message))
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      expect(errors, errors.join('\n')).toEqual([])
      await expect(page.locator('main, [role="main"]').first()).toBeVisible()
      void name
    })
  }

  test('404 route renders the error page', async ({ page }) => {
    await page.goto('/this-path-does-not-exist')
    await expect(page.getByText(/404|not found|introuvable/i).first()).toBeVisible()
  })
})
