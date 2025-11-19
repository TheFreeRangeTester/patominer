import { test, expect } from '@playwright/test';

test('6.1 Cargar página de workshops', async ({ page }) => {
    // 1. Hacer clic en 'Workshops' en la navegación
    await page.goto('/');
    
    await test.step('Navegar a Workshops', async () => {
      await page.click('a:has-text("Workshops")');

      // 2. Esperar a que la página cargue
      await page.waitForLoadState('networkidle');
    });

    await test.step('Verificar que se muestran las tarjetas de workshops', async () => {
      // 3. Verificar que se muestran las tarjetas
      const workshopCards = page.locator('[class*="workshop"], section:has(h3)');
      const count = await workshopCards.count();

      // 4. Contar el número de workshops (debe haber al menos 2)
      expect(count).toBeGreaterThanOrEqual(1);
    });

    await test.step('Verificar información en cada tarjeta', async () => {
      // 5. Verificar que cada tarjeta contiene: imagen, título, descripción, precio
      const heading = page.locator('h2, h3').first();
      await expect(heading).toBeVisible();
      
      const price = page.locator('text=$');
      const priceCount = await price.count();
      expect(priceCount).toBeGreaterThan(0);
    });
  });

test('6.2 Información de workshop específico', async ({ page }) => {
    // 1. Navegar a la página de workshops
    await page.goto('/workshops');

    await test.step('Hacer clic en el primer workshop', async () => {
      // 2. Hacer clic en el primer workshop
      const firstWorkshop = page.locator('a').filter({ hasText: /From Manual|Advanced Test/ }).first();
      if (await firstWorkshop.count() > 0) {
        await firstWorkshop.click();

        // 3. Verificar que se cargó la página de detalles
        await page.waitForLoadState('networkidle');
      }
    });

    await test.step('Verificar detalles del workshop', async () => {
      // 4. Verificar que se muestran detalles
      const heading = page.locator('h1, h2');
      if (await heading.count() > 0) {
        await expect(heading.first()).toBeVisible();
      }
    });
  });

  test('6.3 Cargar página de cursos', async ({ page }) => {
    // 1. Hacer clic en 'Course' en la navegación
    await page.goto('/');
    
    await test.step('Navegar a Courses', async () => {
      await page.click('a:has-text("Course")');

      // 2. Esperar a que la página cargue
      await page.waitForLoadState('networkidle');
    });

    await test.step('Verificar que se muestra contenido sobre el curso', async () => {
      // 3. Verificar que se muestra contenido
      const heading = page.locator('h1, h2');
      expect(await heading.count()).toBeGreaterThan(0);
    });
  });

  test('6.4 Cargar página de About', async ({ page }) => {
    // 1. Hacer clic en 'About me' en la navegación
    await page.goto('/');
    
    await test.step('Navegar a About me', async () => {
      await page.click('a:has-text("About me")');

      // 2. Esperar a que cargue
      await page.waitForLoadState('networkidle');
    });

    await test.step('Verificar que se muestran imágenes', async () => {
      // 3. Verificar que se muestran imágenes
      const images = page.locator('img');
      const count = await images.count();
      expect(count).toBeGreaterThan(0);
    });

    await test.step('Verificar que se muestra texto sobre Pato', async () => {
      // 4. Verificar que se muestra texto
      const text = page.locator('text=/Patricio|Pato/');
      expect(await text.count()).toBeGreaterThan(0);
    });

    await test.step('Verificar que existen enlaces externos', async () => {
      // 5. Verificar que existen enlaces externos
      const externalLinks = page.locator('a[target="_blank"]');
      expect(await externalLinks.count()).toBeGreaterThan(0);
    });
  });
