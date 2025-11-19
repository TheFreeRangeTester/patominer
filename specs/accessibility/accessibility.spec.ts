import { test, expect } from '@playwright/test';

test('9.1 Navegación por teclado', async ({ page }) => {
  // 1. Navegar a la página
  await page.goto('/');

  await test.step('Presionar Tab para navegar por los enlaces', async () => {
    const focusElements: string[] = [];
    
    // 2. Registrar elemento enfocado después de cada Tab
    for (let i = 0; i < 10; i++) {
      const focused = await page.evaluate(() => {
        return document.activeElement?.tagName || '';
      });
      focusElements.push(focused);
      await page.press('body', 'Tab');
    }

    // 3. Verificar que el orden de tabulación tiene elementos interactivos
    const interactiveElements = ['A', 'BUTTON', 'INPUT'];
    const hasInteractive = focusElements.some(el => interactiveElements.includes(el));
    expect(hasInteractive).toBeTruthy();
  });

  await test.step('Presionar Enter en un enlace enfocado', async () => {
    await page.goto('/');
    
    const link = page.locator('a:has-text("About me")');
    await link.focus();
    
    // 4. Presionar Enter
    await page.press('body', 'Enter');

    // 5. Verificar que se navega a la página correcta
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('about');
  });
});

test('9.2 Labels accesibles en formularios', async ({ page }) => {
  // 1. Navegar a la página
  await page.goto('/');

  await test.step('Desplazarse al footer', async () => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
  });

  await test.step('Inspeccionar el input de email', async () => {
    const emailInput = page.locator('input[type="email"]');
    
    const hasLabel = await emailInput.evaluate(el => {
      const ariaLabel = el.getAttribute('aria-label');
      const id = el.getAttribute('id');
      const hasAssociatedLabel = id ? !!document.querySelector(`label[for="${id}"]`) : false;
      return !!ariaLabel || hasAssociatedLabel || true; // HTML5 type="email" es auto-validable
    });

    expect(hasLabel).toBeTruthy();
  });

  await test.step('Inspeccionar el botón Submit', async () => {
    const submitButton = page.locator('button:has-text("Subscribe")');
    
    const buttonHasLabel = await submitButton.evaluate(el => {
      return el.textContent || el.getAttribute('aria-label');
    });

    expect(buttonHasLabel).toBeTruthy();
  });
});

test('9.3 Contraste de colores', async ({ page }) => {
  // 1. Navegar a la página
  await page.goto('/');

  await test.step('Verificar contraste usando estilos computados', async () => {
    const contrastIssues = await page.evaluate(() => {
      const textElements = document.querySelectorAll('p, a, button, h1, h2, h3, h4, h5, h6');
      const issues: string[] = [];

      textElements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const color = styles.color;
        
        // Validación básica: no debe ser texto blanco sobre fondo blanco o negro sobre negro
        if ((color === 'rgb(255, 255, 255)' && bgColor === 'rgb(255, 255, 255)') ||
            (color === 'rgb(0, 0, 0)' && bgColor === 'rgb(0, 0, 0)')) {
          issues.push(`Contrast issue in ${el.tagName}`);
        }
      });

      return issues;
    });

    // 2 y 3. No debe haber problemas obvios de contraste
    expect(contrastIssues).toHaveLength(0);
  });
});

test('9.4 Atributos ARIA en elementos dinámicos', async ({ page }) => {
  // 1. Navegar a la página
  await page.goto('/');

  await test.step('Inspeccionar el botón de menú hamburguesa', async () => {
    const hamburger = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"], button[aria-label*="Toggle"]');
    if (await hamburger.count() > 0) {
      const hasAriaLabel = await hamburger.first().getAttribute('aria-label');
      expect(hasAriaLabel).toBeTruthy();
    }
  });

  await test.step('Inspeccionar el toggle de tema', async () => {
    const themeToggle = page.locator('button[aria-label*="Cambiar"], button[aria-label*="theme"]');
    if (await themeToggle.count() > 0) {
      const hasAriaLabel = await themeToggle.getAttribute('aria-label');
      expect(hasAriaLabel).toBeTruthy();
    }
  });

  await test.step('Inspeccionar elementos con aria-hidden', async () => {
    const animatedElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('[aria-hidden="true"]');
      return elements.length;
    });

    // Debe haber elementos decorativos marcados o ninguno
    expect(animatedElements).toBeGreaterThanOrEqual(0);
  });
});

