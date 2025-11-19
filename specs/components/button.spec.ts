import { test, expect } from '@playwright/test';

test('4.1 Botón primario con hover', async ({ page }) => {
    // 1. Navegar a la página de inicio
    await page.goto('/');

    await test.step('Buscar botón y verificar estado inicial', async () => {
      // 2. Buscar un botón con clase 'bg-amber-500'
      const button = page.locator('a:has-text("Know more about me")').first();
      
      // 3. Verificar el estado inicial del botón
      await expect(button).toBeVisible();
    });

    await test.step('Aplicar hover y verificar efectos', async () => {
      const button = page.locator('a:has-text("Know more about me")').first();
      
      // 4. Pasar el ratón sobre el botón (hover)
      await button.hover();

      // 5. Esperar a que se complete la transición
      await page.waitForTimeout(300);

      // 6. Verificar que el botón tiene sombra
      const computedStyle = await button.evaluate(el => window.getComputedStyle(el).boxShadow);
      expect(computedStyle).not.toBe('none');
    });
});

test('4.2 Botón con enlace externo', async ({ page }) => {
    // 1. Navegar a la página de inicio (que tiene botones con enlaces externos)
    await page.goto('/');

    await test.step('Buscar botón externo y verificar atributos', async () => {
      // 2. Buscar un botón externo en el footer
      const externalButton = page.locator('a[href*="discord"], a[href*="twitter"], a[href*="linkedin"]').first();
      
      if (await externalButton.count() > 0) {
        // 3. Verificar atributos target='_blank'
        const target = await externalButton.getAttribute('target');
        const rel = await externalButton.getAttribute('rel');
        
        expect(target).toBe('_blank');
        expect(rel).toContain('noopener');
        expect(rel).toContain('noreferrer');
      }
    });
});

test('4.3 Botón deshabilitado durante carga', async ({ page }) => {
    // 1. Navegar a la página
    await page.goto('/');

    await test.step('Desplazarse al footer', async () => {
      const footer = page.locator('footer');
      await footer.scrollIntoViewIfNeeded();
    });

    await test.step('Verificar botón deshabilitado durante envío', async () => {
      // Retrasar la respuesta para capturar el estado deshabilitado
      await page.route('**/api/subscribe', route => {
        setTimeout(() => route.continue(), 2000);
      });

      const emailInput = page.locator('input[type="email"]');
      await emailInput.fill('test@example.com');

      const subscribeButton = page.locator('button:has-text("Subscribe")');
      subscribeButton.click();

      // 2. Verificar que el botón tiene atributo disabled
      await expect(subscribeButton).toBeDisabled();

      // Esperar a que se complete
      await expect(page.locator('text=Thanks for subscribing')).toBeVisible({ timeout: 5000 });
    });
  });
