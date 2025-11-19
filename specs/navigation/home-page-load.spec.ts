import { test, expect } from '@playwright/test';

test('1.1 Verificar que la página de inicio carga correctamente', async ({ page }) => {
  // 1. Navegar a la URL raíz de la aplicación
  await page.goto('/');
  
  await test.step('Verificar que el título es visible', async () => {
    // 2. Verificar que el título 'Elevate your Software Testing to the next level' es visible
    const title = page.locator('h1:has-text("Elevate your Software Testing")');
    await expect(title).toBeVisible();
  });

  await test.step('Verificar que la imagen del héroe está presente', async () => {
    // 3. Verificar que la imagen del héroe está presente
    const heroImage = page.locator('img[alt="Profile"]');
    await expect(heroImage).toBeVisible();
  });

  await test.step('Verificar que el footer está visible', async () => {
    // 4. Verificar que el footer está visible al final de la página
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test('1.2 Navegar entre páginas principales', async ({ page }) => {
  // 1. Desde la página de inicio, hacer clic en el enlace 'About me' en la navegación
  await page.goto('/');
  
  await test.step('Navegar a About me', async () => {
    await page.click('a:has-text("About me")');
    
    // 2. Verificar que se cargó la página de About
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('h2:has-text("About me")')).toBeVisible();
  });

  await test.step('Navegar a Workshops', async () => {
    // 3. Hacer clic en el enlace 'Workshops' en la navegación
    await page.click('a:has-text("Workshops")');
    
    // 4. Verificar que se cargó la página de Workshops
    await expect(page).toHaveURL(/\/workshops/);
  });

  await test.step('Navegar a Course', async () => {
    // 5. Hacer clic en el enlace 'Course' en la navegación
    await page.click('a:has-text("Course")');
    
    // 6. Verificar que se cargó la página de Courses
    await expect(page).toHaveURL(/\/courses/);
  });
});

test('1.3 Verificar responsividad del menú móvil', async ({ page }) => {
  // 1. Redimensionar la ventana a 375px de ancho (tamaño móvil)
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await test.step('Menú hamburguesa visible en móvil', async () => {
    // 2. Verificar que el menú hamburguesa es visible
    const hamburgerButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(hamburgerButton).toBeVisible();
  });

  await test.step('Expandir menú móvil', async () => {
    // 3. Hacer clic en el botón del menú hamburguesa
    const hamburgerButton = page.locator('button[aria-label="Toggle menu"]');
    await hamburgerButton.click();

    // 4. Verificar que el menú móvil se expande
    const mobileNav = page.locator('[role="navigation"]');
    await expect(mobileNav).toBeVisible();
  });

  await test.step('Cerrar menú después de clic', async () => {
    // 5. Hacer clic en un enlace de navegación (ej: 'About me')
    await page.click('a:has-text("About me")');

    // El menú debería cerrarse después de navegar
    await expect(page).toHaveURL(/\/about/);
  });
});
