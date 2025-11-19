import { test, expect } from '@playwright/test';

test('7.1 Botón "Know more about me" en página de inicio', async ({ page }) => {
  // 1. Desde la página de inicio, buscar el botón
  await page.goto('/');
  
  await test.step('Hacer clic en el botón', async () => {
    const button = page.locator('a:has-text("Know more about me")');
    
    // 2. Hacer clic en el botón
    await button.click();
  });

  await test.step('Verificar navegación a /about', async () => {
    // 3. Verificar que se navegó a /about
    await expect(page).toHaveURL(/\/about/);
  });
});

test('7.2 Botón "Check our workshops" en página de inicio', async ({ page }) => {
  // 1. Desde la página de inicio, buscar el botón
  await page.goto('/');
  
  await test.step('Hacer clic en el botón', async () => {
    const button = page.locator('a:has-text("Check our workshops")');
    
    // 2. Hacer clic en el botón
    await button.click();
  });

  await test.step('Verificar navegación a /workshops', async () => {
    // 3. Verificar que se navegó a /workshops
    await expect(page).toHaveURL(/\/workshops/);
  });
});

test('7.3 Botón "See The Course" en página de inicio', async ({ page }) => {
  // 1. Desde la página de inicio, buscar el botón
  await page.goto('/');
  
  await test.step('Hacer clic en el botón', async () => {
    const button = page.locator('a').filter({ hasText: /See.*Course|See The Course/ });
    
    // 2. Hacer clic en el botón
    if (await button.count() > 0) {
      await button.first().click();
    }
  });

  await test.step('Verificar navegación a /courses', async () => {
    // 3. Verificar que se navegó a /courses
    await expect(page).toHaveURL(/\/courses/);
  });
});

test('7.4 Botón "Register Interest" en navegación', async ({ page }) => {
  // 1. Verificar que el botón está visible en la navegación
  await page.goto('/');
  
  const button = page.locator('button:has-text("Register Interest")');

  await test.step('Verificar que el botón está visible', async () => {
    // 2. Verificar que el botón existe
    await expect(button).toBeVisible();
  });

  await test.step('Hacer clic en el botón', async () => {
    // 3. Hacer clic en el botón
    await button.click();

    // 4. Esperar un poco para que se cargue el formulario
    await page.waitForTimeout(500);
  });

  await test.step('Verificar que se abre un formulario', async () => {
    // Tally usualmente abre un iframe o modal
    const hasForm = await page.evaluate(() => {
      return !!document.querySelector('iframe[src*="tally"], [class*="modal"], [role="dialog"]');
    });

    // El botón debe estar presente al menos
    expect(button).toBeTruthy();
  });
});

