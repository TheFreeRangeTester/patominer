import { test, expect } from '@playwright/test';

test('3.1 Suscribirse a newsletter con email válido', async ({ page }) => {
    // 1. Navegar a la página
    await page.goto('/');

    await test.step('Desplazarse hasta el footer', async () => {
      // 2. Desplazarse hasta el footer donde está el formulario de newsletter
      const footer = page.locator('footer');
      await footer.scrollIntoViewIfNeeded();
    });

    await test.step('Verificar que el input de email es visible', async () => {
      // 3. Verificar que el input de email es visible
      const emailInput = page.locator('input[type="email"]');
      await expect(emailInput).toBeVisible();
    });

    await test.step('Escribir email válido y suscribirse', async () => {
      // 4. Escribir un email válido (test@example.com) en el campo de email
      const emailInput = page.locator('input[type="email"]');
      await emailInput.fill('test@example.com');

      // 5. Hacer clic en el botón 'Subscribe'
      const subscribeButton = page.locator('button:has-text("Subscribe")');
      await subscribeButton.click();

      // 6. Esperar a que la solicitud se complete (2-3 segundos)
      await expect(page.locator('text=Thanks for subscribing')).toBeVisible({ timeout: 3000 });
    });

    await test.step('Verificar que el campo se limpia', async () => {
      // 7. Verificar que el campo de email se limpia después de la suscripción
      const emailInput = page.locator('input[type="email"]');
      await expect(emailInput).toHaveValue('');
    });
  });

test('3.2 Rechazar email inválido en newsletter', async ({ page }) => {
    // 1. Navegar a la página
    await page.goto('/');

    await test.step('Desplazarse hasta el footer', async () => {
      // 2. Desplazarse hasta el footer
      const footer = page.locator('footer');
      await footer.scrollIntoViewIfNeeded();
    });

    await test.step('Validación HTML5 para email inválido', async () => {
      // 3. Intentar escribir un email inválido (test@)
      const emailInput = page.locator('input[type="email"]');
      
      // Intentar escribir y validar
      await emailInput.fill('test@');
      
      const subscribeButton = page.locator('button:has-text("Subscribe")');
      
      // El navegador debe mostrar validación HTML5
      const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
      expect(validationMessage.length).toBeGreaterThan(0);
    });

    await test.step('Validación para email sin dominio', async () => {
      // 5. Escribir un email sin dominio (testuser)
      const emailInput = page.locator('input[type="email"]');
      await emailInput.fill('testuser');
      
      // 6. Verificar que el navegador rechaza el formato
      const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
      expect(validationMessage.length).toBeGreaterThan(0);
    });
  });

test('3.3 Manejar error de suscripción', async ({ page }) => {
    // 1. Navegar a la página
    await page.goto('/');

    await test.step('Simular fallo de red', async () => {
      const footer = page.locator('footer');
      await footer.scrollIntoViewIfNeeded();

      // 2. Simular fallo de red interceptando la solicitud
      await page.route('**/api/subscribe', route => route.abort());
    });

    await test.step('Intentar suscribirse con error de red', async () => {
      // 3. Escribir un email válido
      const emailInput = page.locator('input[type="email"]');
      await emailInput.fill('test@example.com');

      // 4. Hacer clic en 'Subscribe'
      const subscribeButton = page.locator('button:has-text("Subscribe")');
      await subscribeButton.click();

      // 5. Verificar que aparece un mensaje de error
      await expect(page.locator('text=Failed')).toBeVisible({ timeout: 3000 });
    });
  });

test('3.4 Validar feedback visual durante suscripción', async ({ page }) => {
    // 1. Navegar a la página
    await page.goto('/');

    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    await test.step('Escribir email válido', async () => {
      // 2. Escribir un email válido
      const emailInput = page.locator('input[type="email"]');
      await emailInput.fill('test@example.com');
    });

    await test.step('Verificar estado de carga durante envío', async () => {
      // Retrasar la respuesta para ver el estado de carga
      await page.route('**/api/subscribe', route => {
        setTimeout(() => route.continue(), 2000);
      });

      const subscribeButton = page.locator('button:has-text("Subscribe")');
      
      // 3. Hacer clic en Subscribe
      subscribeButton.click();

      // 4. Inmediatamente verificar que el botón muestra 'Subscribing...'
      await expect(subscribeButton).toContainText('Subscribing', { timeout: 1000 });

      // 5. Verificar que el botón está deshabilitado
      await expect(subscribeButton).toBeDisabled();

      // 6. Esperar a que se complete
      await expect(page.locator('text=Thanks for subscribing')).toBeVisible({ timeout: 5000 });
    });
  });
