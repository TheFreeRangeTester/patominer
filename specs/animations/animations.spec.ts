import { test, expect } from '@playwright/test';

test('5.1 Animación del título en la página de inicio', async ({ page }) => {
    // 1. Cargar la página de inicio
    await page.goto('/');

    await test.step('Verificar que el título está visible', async () => {
      // 2. Verificar que el título 'Elevate your Software Testing...' está visible
      const title = page.locator('h1:has-text("Elevate your Software Testing")');
      await expect(title).toBeVisible();
    });

    await test.step('Esperar a que se complete la animación', async () => {
      // 3 y 4. Esperar a que se complete la animación (2 segundos)
      await page.waitForTimeout(2000);

      // 5. Verificar que tiene opacidad 1
      const title = page.locator('h1:has-text("Elevate your Software Testing")');
      const opacity = await title.evaluate(el => window.getComputedStyle(el).opacity);
      expect(parseFloat(opacity)).toBe(1);
    });

    await test.step('Verificar sin errores de consola', async () => {
      // 6. Verificar que no hay errores de consola
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      
      // Pequeño delay para capturar errores
      await page.waitForTimeout(100);
      expect(errors).toHaveLength(0);
    });
  });

test('5.2 Animación de scroll de imágenes', async ({ page }) => {
    // 1. Cargar la página de inicio
    await page.goto('/');

    await test.step('Desplazarse lentamente hacia abajo', async () => {
      // 2. Desplazarse lentamente hacia abajo
      await page.evaluate(() => window.scrollBy(0, 800));

      // 3. Esperar a que se ejecute la animación
      await page.waitForTimeout(1000);
    });

    await test.step('Verificar que la imagen About está visible y animada', async () => {
      // 4. Verificar que la imagen About está visible
      const aboutImage = page.locator('img[alt*="About"], img[alt*="about"]');
      
      if (await aboutImage.count() > 0) {
        const opacity = await aboutImage.first().evaluate(el => window.getComputedStyle(el).opacity);
        expect(parseFloat(opacity)).toBe(1);
      }
    });

    await test.step('Continuar desplazando para ver otras secciones', async () => {
      // 5. Continuar desplazando para ver otras secciones
      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(1000);

      // 6. Verificar que las secciones están visibles
      const sections = page.locator('section');
      const count = await sections.count();
      expect(count).toBeGreaterThan(0);
    });
  });

test('5.3 Efecto hover en botones', async ({ page }) => {
    // 1. Navegar a la página
    await page.goto('/');

    await test.step('Encontrar botón y capturar estado inicial', async () => {
      // 2. Encontrar un botón
      const button = page.locator('a:has-text("Know more about me")').first();
      await expect(button).toBeVisible();
    });

    await test.step('Aplicar hover y verificar transformación', async () => {
      const button = page.locator('a:has-text("Know more about me")').first();
      
      // 3. Verificar estado inicial
      const initialTransform = await button.evaluate(el => window.getComputedStyle(el).transform);

      // 4. Pasar el ratón sobre el botón
      await button.hover();
      await page.waitForTimeout(300);

      // 5. Verificar que se traslada (transform cambia)
      const hoverTransform = await button.evaluate(el => window.getComputedStyle(el).transform);
      
      // Debería tener una transformación de traslación
      expect(hoverTransform).not.toBe(initialTransform);
    });

    await test.step('Verificar que vuelve a posición normal', async () => {
      const button = page.locator('a:has-text("Know more about me")').first();
      const initialTransform = await button.evaluate(el => window.getComputedStyle(el).transform);

      // 6. Mover ratón fuera del botón
      await page.mouse.move(0, 0);
      await page.waitForTimeout(300);

      // 7. Verificar que vuelve a su posición normal
      const finalTransform = await button.evaluate(el => window.getComputedStyle(el).transform);
      expect(finalTransform).toBe(initialTransform);
    });
  });

test('5.4 Desactivación de animaciones para usuarios con preferencia de movimiento reducido', async ({ browser }) => {
    // 1. Crear contexto con preferencia de movimiento reducido
    const context = await browser.newContext({
      reducedMotion: 'reduce'
    });

    const page = await context.newPage();

    await test.step('Recargar la página con preferencia reducida', async () => {
      // 2. Recargar la página de inicio
      await page.goto('/');
    });

    await test.step('Verificar que no hay animaciones ejecutándose', async () => {
      // 3. Verificar que no hay animaciones
      const hasAnimations = await page.evaluate(() => {
        return document.querySelectorAll('[style*="animation"]').length;
      });

      // La página debería funcionar sin animaciones
      expect(hasAnimations).toBeLessThanOrEqual(0);
    });

    await test.step('Desplazarse por la página', async () => {
      // 4. Desplazarse por la página
      await page.evaluate(() => window.scrollBy(0, 1000));
      await page.waitForTimeout(500);

      // 5. Verificar que el contenido es accesible
      const title = page.locator('h1:has-text("Elevate")');
      await expect(title).toBeVisible();
    });

    await context.close();
  });
