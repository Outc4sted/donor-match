import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const validEmail = 'test@email.com'
const validMessage = 'This is a valid message'

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('renders contact form with turnstile and sets page title', async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Contact me/)
    await expect(page.getByRole('form')).toBeVisible()
    await expect(page.locator('[class="cf-turnstile"]')).toBeEmpty()
    await expect(page).toHaveScreenshot()
  })

  test('successfully submits form', async ({ page }) => {
    await page.route('/', async (route) => {
      await route.fulfill({
        body: 'Email sent!',
        contentType: 'text/plain;charset=UTF-8',
      })
    })

    await page.getByLabel('Email').fill(validEmail)
    await page.getByLabel('Message').fill(validMessage)
    await page.getByRole('button', { name: /submit/i }).click()

    await expect(
      page.getByText('Thank you! Your message is on the way.'),
    ).toBeVisible()
    await expect(page).toHaveScreenshot()
  })

  test('displays form error when form cannot be submitted', async ({
    page,
  }) => {
    await page.route('/', async (route) => {
      await route.fulfill({
        status: 500,
      })
    })

    await page.getByLabel('Email').fill(validEmail)
    await page.getByLabel('Message').fill(validMessage)
    await page.getByRole('button', { name: /submit/i }).click()

    await expect(
      page.getByText('There was an error sending your message.'),
    ).toBeVisible()
    await expect(page).toHaveScreenshot()
  })

  test('disables submit button until all form inputs have a value', async ({
    page,
  }) => {
    const submitShouldBeDisabled = async () =>
      expect(page.getByRole('button', { name: /submit/i })).toBeDisabled()

    await submitShouldBeDisabled()

    await page.getByLabel('Email').fill(validEmail)
    await page.getByLabel('Message').fill('')
    await submitShouldBeDisabled()

    await page.getByLabel('Email').fill('')
    await page.getByLabel('Message').fill(validMessage)
    await submitShouldBeDisabled()

    await page.getByLabel('Email').fill(validEmail)
    await page.getByLabel('Message').fill(validMessage)
    await expect(
      page.getByRole('button', { name: /submit/i }),
    ).not.toBeDisabled()
  })

  test('displays field error when email is invalid', async ({ page }) => {
    await page.getByLabel('Email').fill('invalid email')
    await page.getByLabel('Message').fill(validMessage)
    await page.getByRole('button', { name: /submit/i }).click()

    await expect(page.getByText('Please provide a valid email')).toBeVisible()
    await expect(page).toHaveScreenshot()
  })

  test('displays field error when message is invalid', async ({ page }) => {
    await page.getByLabel('Email').fill(validEmail)
    await page.getByLabel('Message').fill('too short')
    await page.getByRole('button', { name: /submit/i }).click()

    await expect(
      page.getByText('Your message must be at least 10 characters'),
    ).toBeVisible()

    await page.getByLabel('Message').fill('                   ')
    await page.getByRole('button', { name: /submit/i }).click()
    await expect(page.getByText('You must provide a message')).toBeVisible()
  })

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({
      page,
    }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
