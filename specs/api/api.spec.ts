import { test, expect } from '@playwright/test';

test('11.1 Endpoint POST /api/subscribe con email válido', async ({ request }) => {
  await test.step('Hacer una solicitud POST con email válido', async () => {
    // Usar un email único para evitar duplicados en el backend
    const email = `test+${Date.now()}@example.com`;
    // 1. Hacer una solicitud POST a /api/subscribe
    const response = await request.post('/api/subscribe', {
      data: { email }
    });

    // 2. Verificar que se retorna un status 2xx
    expect(response.ok()).toBeTruthy();
  });

  await test.step('Verificar que la respuesta contiene un mensaje de éxito (si aplica)', async () => {
    const email = `test+${Date.now()}@example.com`;
    const response = await request.post('/api/subscribe', {
      data: { email }
    });

    // 3. Verificar que la respuesta contiene un mensaje cuando existe body JSON
    let body = null;
    try {
      body = await response.json();
    } catch (e) {
      // no body, está bien
    }

    if (body) {
      expect(body.message || body.success).toBeTruthy();
    } else {
      expect(response.ok()).toBeTruthy();
    }
  });
});

test('11.2 Endpoint POST /api/subscribe con email inválido', async ({ request }) => {
  await test.step('Hacer una solicitud POST con email inválido', async () => {
    // 1. Hacer una solicitud POST con email inválido
    const response = await request.post('/api/subscribe', {
      data: { email: 'invalid-email' }
    });

    // 2. Verificar que se retorna un error 4xx o 5xx
    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(600);
  });
});

test('11.3 Endpoint POST /api/subscribe sin email', async ({ request }) => {
  await test.step('Hacer una solicitud POST sin el campo email', async () => {
    // 1. Hacer una solicitud sin email
    const response = await request.post('/api/subscribe', {
      data: {}
    });

    // 2. Verificar que se retorna un error 4xx o 5xx
    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(600);
  });
});

