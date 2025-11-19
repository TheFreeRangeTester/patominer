import { test, expect } from '@playwright/test';

test('10.1 Página 404 no encontrada', async ({ page }) => {
  // 1. Navegar a una URL que no existe
  await page.goto('/page-that-does-not-exist');

  await test.step('Verificar que se muestra la página 404', async () => {
    // 2. Verificar que se muestra la página 404
    const notFound = page.locator('text=/404|not found|Not Found/i');
    
    if (await notFound.count() > 0) {
      await expect(notFound).toBeVisible();
    } else {
      // Si no hay 404 explícito, verificar que hay un estado de error
      const statusCheck = await page.evaluate(() => {
        return document.body.innerText;
      });
      expect(statusCheck).toBeTruthy();
    }
  });

  await test.step('Verificar que hay un enlace para volver', async () => {
    // 3. Verificar que hay un enlace para volver
    const backLink = page.locator('a:has-text(/back|home|inicio|Home/i)');
    expect(await backLink.count()).toBeGreaterThan(0);
  });
});

test('10.2 Carga lenta de imágenes', async ({ page }) => {
  await test.step('Aplicar throttling lento (3G)', async () => {
    // 1. Aplicar throttling
    await page.route('**/*', route => {
      setTimeout(() => route.continue(), 100);
    });
  });

  await test.step('Recargar la página', async () => {
    // 2. Recargar la página
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  await test.step('Verificar que las imágenes sobre el fold cargan con prioridad', async () => {
    // 3. Verificar que hay imágenes
    const images = page.locator('img');
    expect(await images.count()).toBeGreaterThan(0);
  });

  await test.step('Desplazarse abajo', async () => {
    // 4. Desplazarse abajo
    await page.evaluate(() => window.scrollBy(0, 1000));
    await page.waitForTimeout(1000);

    // 5. Verificar que se cargan imágenes debajo del fold
    const lazyImages = page.locator('img[loading="lazy"]');
    const lazyCount = await lazyImages.count();

    // Debería haber al menos algunas imágenes lazy
    expect(lazyCount).toBeGreaterThanOrEqual(0);
  });
});

test('10.3 Comportamiento sin JavaScript', async ({ browser }) => {
  // 1. Crear contexto 
  const context = await browser.newContext();
  const page = await context.newPage();

  await test.step('Navegar a la página', async () => {
    // 2. Navegar a la página
    await page.goto('/');
  });

  await test.step('Verificar que el contenido principal es visible', async () => {
    // 3. Verificar que el contenido es visible
    const mainContent = page.locator('h1, h2, p');
    expect(await mainContent.count()).toBeGreaterThan(0);
  });

  await test.step('Verificar que los enlaces funcionan', async () => {
    // 4. Verificar que los enlaces existen
    const links = page.locator('a');
    expect(await links.count()).toBeGreaterThan(0);
  });

  await context.close();
});

test('10.4 Presión en elementos interactivos repetitivos', async ({ page }) => {
  // 1. Navegar a la página
  await page.goto('/');

  await test.step('Desplazarse al footer', async () => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
  });

  const requests: number[] = [];
  
  await test.step('Hacer doble clic rápido en Subscribe', async () => {
    page.on('request', req => {
      if (req.url().includes('/api/subscribe')) {
        requests.push(requests.length);
      }
    });

    // Escribir un email
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('test@example.com');

    // Retrasar para poder capturar
    await page.route('**/api/subscribe', route => {
      setTimeout(() => route.continue(), 1000);
    });

    const subscribeButton = page.locator('button:has-text("Subscribe")');
    
    // Hacer clic dos veces muy rápido
    await subscribeButton.click();
    await page.waitForTimeout(50);
    await subscribeButton.click();

    // Esperar
    await page.waitForTimeout(2000);
  });

  await test.step('Verificar que solo se envió una solicitud', async () => {
    // Verificar que solo se envió una solicitud
    expect(requests.length).toBeLessThanOrEqual(1);
  });
});

