import { test, expect } from '@playwright/test';

test('8.1 Diseño móvil en viewport de 375px', async ({ page }) => {
  // 1. Redimensionar a 375px
  await page.setViewportSize({ width: 375, height: 667 });

  await test.step('Recargar la página de inicio', async () => {
    // 2. Recargar la página
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  await test.step('Verificar que el texto principal es legible', async () => {
    // 3. Verificar que el texto es legible
    const title = page.locator('h1:has-text("Elevate")');
    await expect(title).toBeVisible();
  });

  await test.step('Verificar que los botones están en tamaño móvil', async () => {
    // 4. Verificar que los botones están en tamaño móvil
    const buttons = page.locator('a, button').filter({ hasText: /button|Click|more|Subscribe/ });
    for (let i = 0; i < Math.min(await buttons.count(), 2); i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      expect(box?.width).toBeLessThanOrEqual(375);
    }
  });

  await test.step('Verificar que las imágenes se escalan', async () => {
    // 5. Verificar que las imágenes se escalan
    const images = page.locator('img');
    for (let i = 0; i < Math.min(await images.count(), 2); i++) {
      const img = images.nth(i);
      const box = await img.boundingBox();
      if (box) {
        expect(box.width).toBeLessThanOrEqual(375);
      }
    }
  });

  await test.step('Hacer scroll vertical y verificar accesibilidad', async () => {
    // 6. Hacer scroll y verificar accesibilidad
    await page.evaluate(() => window.scrollBy(0, 500));
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test('8.2 Diseño tablet en viewport de 768px', async ({ page }) => {
  // 1. Redimensionar a 768px
  await page.setViewportSize({ width: 768, height: 1024 });

  await test.step('Recargar la página', async () => {
    // 2. Recargar la página
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  await test.step('Verificar que el layout está optimizado', async () => {
    // 3 y 4. Verificar que el layout es apropiado
    const sections = page.locator('section');
    for (let i = 0; i < Math.min(await sections.count(), 2); i++) {
      const section = sections.nth(i);
      const box = await section.boundingBox();
      expect(box?.width).toBeLessThanOrEqual(768);
    }
  });
});

test('8.3 Diseño desktop en viewport de 1920px', async ({ page }) => {
  // 1. Redimensionar a 1920px
  await page.setViewportSize({ width: 1920, height: 1080 });

  await test.step('Recargar la página', async () => {
    // 2. Recargar la página
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  await test.step('Verificar que todos los elementos están posicionados correctamente', async () => {
    // 3. Verificar posicionamiento
    const container = page.locator('[class*="container"]').first();
    const box = await container.boundingBox();
    
    if (box) {
      // El contenedor no debería ocupar todo el ancho
      expect(box.width).toBeLessThan(1920 * 0.95);
    }
  });

  await test.step('Verificar que el contenido no se estira excesivamente', async () => {
    // 4. Verificar que el contenido no se estira
    const maxWidth = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('[class*="container"], [class*="max-w"]'));
      return Math.max(...elements.map(el => (el as HTMLElement).offsetWidth));
    });

    expect(maxWidth).toBeLessThan(1920);
  });
});

test('8.4 Imágenes con srcset se cargan correctamente', async ({ page }) => {
  const loadedImages: string[] = [];
  
  await test.step('Monitorear carga de imágenes en móvil', async () => {
    page.on('response', response => {
      if (response.url().includes('/images/')) {
        loadedImages.push(response.url());
      }
    });

    // 2. Redimensionar a 375px
    await page.setViewportSize({ width: 375, height: 667 });

    // 3. Recargar la página
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  const mobileImageCount = loadedImages.length;

  await test.step('Monitorear carga de imágenes en desktop', async () => {
    loadedImages.length = 0;

    // 4. Redimensionar a 1920px
    await page.setViewportSize({ width: 1920, height: 1080 });

    // 5. Recargar la página
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  const desktopImageCount = loadedImages.length;

  await test.step('Verificar que se cargaron imágenes', async () => {
    // 6. Verificar que se cargaron imágenes
    expect(mobileImageCount).toBeGreaterThan(0);
    expect(desktopImageCount).toBeGreaterThan(0);
  });
});

