import { test, expect } from '@playwright/test';


test('LMPH APP home page rendered', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page.locator('h1')).toHaveText(/Welcome to LMPH App!/);
});

test('Employees Page', async ({ page }) => {
    await page.goto('http://localhost:5173/employees');
    await expect(page.locator('table')).toBeTruthy();
});

test('Employee Add Form', async ({ page }) => {
    await page.goto('http://localhost:5173/employee/add');
    await expect(page.locator('form')).toBeTruthy();
});

test('Employee Edit Form', async ({ page }) => {
    await page.goto('http://localhost:5173/employee/61');
    await expect(page.locator('form')).toBeTruthy();
});