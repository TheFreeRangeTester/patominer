# FutureProofTester - Plan de Pruebas

## Application Overview

FutureProofTester es una aplicación web Next.js que funciona como plataforma de educación en QA Engineering. La aplicación incluye: página de inicio con animaciones GSAP, navegación responsiva, alternancia de tema claro/oscuro, formulario de newsletter, múltiples páginas de servicios (workshops, cursos, consultoría, tutorías, conferencias), y diferentes componentes reutilizables. La aplicación está optimizada para móvil y escritorio con Tailwind CSS.

## Test Scenarios

### 1. Navegación y Estructura

**Seed:** `seed.spec.ts`

#### 1.1. Verificar que la página de inicio carga correctamente

**File:** `specs/navigation/home-page-load.spec.ts`

**Steps:**
  1. Navegar a la URL raíz de la aplicación
  2. Verificar que el título 'Elevate your Software Testing to the next level' es visible
  3. Verificar que la imagen del héroe está presente
  4. Verificar que el footer está visible al final de la página

**Expected Results:**
  - La página de inicio carga sin errores
  - El título principal es visible en la pantalla
  - La imagen del héroe se renderiza correctamente
  - El footer contiene los enlaces de redes sociales

#### 1.2. Navegar entre páginas principales

**File:** `specs/navigation/navigation-links.spec.ts`

**Steps:**
  1. Desde la página de inicio, hacer clic en el enlace 'About me' en la navegación
  2. Verificar que se cargó la página de About
  3. Hacer clic en el enlace 'Workshops' en la navegación
  4. Verificar que se cargó la página de Workshops
  5. Hacer clic en el enlace 'Course' en la navegación
  6. Verificar que se cargó la página de Courses

**Expected Results:**
  - Cada enlace de navegación conduce a su página correspondiente
  - Las URLs cambian correctamente
  - El contenido de cada página se renderiza apropiadamante

#### 1.3. Verificar responsividad del menú móvil

**File:** `specs/navigation/mobile-menu.spec.ts`

**Steps:**
  1. Redimensionar la ventana a 375px de ancho (tamaño móvil)
  2. Verificar que el menú hamburguesa es visible
  3. Hacer clic en el botón del menú hamburguesa
  4. Verificar que el menú móvil se expande
  5. Hacer clic en un enlace de navegación (ej: 'About me')
  6. Verificar que el menú se cierra automáticamente después de hacer clic

**Expected Results:**
  - El menú hamburguesa aparece en dispositivos móviles
  - El menú se expande y contrae suavemente
  - Los enlaces dentro del menú móvil son clicables
  - El menú se cierra después de seleccionar un enlace

#### 1.4. Verificar breadcrumbs en páginas específicas

**File:** `specs/navigation/breadcrumbs.spec.ts`

**Steps:**
  1. Navegar a /workshops/from-manual-to-automation-testing
  2. Verificar que existe un elemento de migas de pan
  3. Verificar que las migas contienen 'Workshops' y el título del taller específico
  4. Hacer clic en 'Workshops' en las migas
  5. Verificar que se regresa a la página de workshops

**Expected Results:**
  - Las migas de pan son visibles en páginas profundas
  - El usuario puede navegar hacia atrás usando las migas
  - Las migas reflejan la ruta actual correctamente

### 2. Alternancia de Tema (Dark/Light)

**Seed:** `seed.spec.ts`

#### 2.1. Cambiar del modo claro al oscuro

**File:** `specs/theme/theme-toggle-light-to-dark.spec.ts`

**Steps:**
  1. Verificar que la página está en modo claro inicialmente
  2. Hacer clic en el botón de alternancia de tema (icono de luna)
  3. Esperar 500ms para que se complete la animación
  4. Verificar que la página ahora tiene clase 'dark'
  5. Verificar que los iconos SVG cambiaron (luna por sol)
  6. Recargar la página

**Expected Results:**
  - El modo oscuro se activa correctamente
  - El icono cambia de luna a sol
  - Las clases CSS 'dark' se aplican a los elementos
  - Después de recargar, la página permanece en modo oscuro

#### 2.2. Cambiar del modo oscuro al claro

**File:** `specs/theme/theme-toggle-dark-to-light.spec.ts`

**Steps:**
  1. Abrir las herramientas de desarrollador
  2. Ejecutar: localStorage.setItem('theme', 'dark')
  3. Recargar la página
  4. Verificar que la página está en modo oscuro
  5. Hacer clic en el botón de alternancia (icono de sol)
  6. Esperar 500ms para que se complete la animación
  7. Verificar que la página vuelve al modo claro

**Expected Results:**
  - El modo claro se activa correctamente
  - El icono cambia de sol a luna
  - Los colores cambian a la paleta de modo claro
  - localStorage se actualiza correctamente

#### 2.3. Persistencia del tema en localStorage

**File:** `specs/theme/theme-persistence.spec.ts`

**Steps:**
  1. Cambiar al modo oscuro y hacer clic en el botón toggle
  2. Verificar que localStorage contiene 'theme: dark'
  3. Abrir una nueva pestaña del navegador en la misma aplicación
  4. Verificar que la nueva pestaña hereda el tema oscuro de localStorage
  5. Cambiar el tema en la nueva pestaña a claro
  6. Ir a la pestaña anterior y recargar

**Expected Results:**
  - El tema se guarda en localStorage
  - Nuevas pestañas heredan el tema guardado
  - El tema es consistente entre pestañas y sesiones

#### 2.4. Tema de acuerdo a preferencias del sistema

**File:** `specs/theme/theme-system-preference.spec.ts`

**Steps:**
  1. Limpiar localStorage (abrir DevTools > Storage > LocalStorage > Borrar 'theme')
  2. Verificar que el navegador está configurado para preferencias de color oscuro en el SO
  3. Recargar la página
  4. Verificar que la aplicación detecta y usa el tema oscuro del sistema

**Expected Results:**
  - Sin localStorage, la app usa la preferencia del sistema
  - El tema se establece correctamente basado en las preferencias del SO

### 3. Suscripción a Newsletter

**Seed:** `seed.spec.ts`

#### 3.1. Suscribirse a newsletter con email válido

**File:** `specs/newsletter/newsletter-subscribe-valid.spec.ts`

**Steps:**
  1. Desplazarse hasta el footer donde está el formulario de newsletter
  2. Verificar que el input de email es visible
  3. Escribir un email válido (test@example.com) en el campo de email
  4. Hacer clic en el botón 'Subscribe'
  5. Esperar a que la solicitud se complete (2-3 segundos)
  6. Verificar que aparece el mensaje '¡Thanks for subscribing!'
  7. Verificar que el campo de email se limpia después de la suscripción

**Expected Results:**
  - El formulario acepta un email válido
  - Se realiza una solicitud POST a /api/subscribe
  - Se muestra un mensaje de éxito
  - El campo se limpia automáticamente

#### 3.2. Rechazar email inválido en newsletter

**File:** `specs/newsletter/newsletter-subscribe-invalid.spec.ts`

**Steps:**
  1. Desplazarse hasta el footer
  2. Intentar escribir un email inválido (test@) en el campo de email
  3. Hacer clic en el botón 'Subscribe'
  4. Verificar que el navegador muestra una validación HTML5
  5. Escribir un email sin dominio (testuser) y hacer clic nuevamente
  6. Verificar que el navegador rechaza el formato

**Expected Results:**
  - El navegador valida el formato de email en el cliente
  - No se envían solicitudes con emails inválidos

#### 3.3. Manejar error de suscripción

**File:** `specs/newsletter/newsletter-subscribe-error.spec.ts`

**Steps:**
  1. Abrir DevTools y habilitar throttling de red (Offline)
  2. Escribir un email válido en el campo de newsletter
  3. Hacer clic en 'Subscribe'
  4. Verificar que aparece un mensaje de error
  5. Reactivar la conexión de red

**Expected Results:**
  - Se muestra un mensaje de error cuando falla la solicitud
  - El usuario puede intentar suscribirse nuevamente

#### 3.4. Validar feedback visual durante suscripción

**File:** `specs/newsletter/newsletter-loading-state.spec.ts`

**Steps:**
  1. Escribir un email válido en el campo de newsletter
  2. Hacer clic en 'Subscribe'
  3. Inmediatamente verificar que el botón muestra 'Subscribing...'
  4. Verificar que el botón está deshabilitado (disabled)
  5. Esperar a que se complete la solicitud

**Expected Results:**
  - El botón muestra estado de carga
  - El botón se deshabilita durante el envío
  - El botón vuelve a su estado normal después de completarse

### 4. Componentes Reutilizables (Button)

**Seed:** `seed.spec.ts`

#### 4.1. Botón primario con hover

**File:** `specs/components/button-primary-hover.spec.ts`

**Steps:**
  1. Navegar a la página de inicio
  2. Buscar un botón con clase 'bg-amber-500' o similar
  3. Verificar el estado inicial del botón
  4. Pasar el ratón sobre el botón (hover)
  5. Verificar que el botón se traslada -2px en X y -2px en Y
  6. Verificar que aparece una sombra

**Expected Results:**
  - El botón cambia de escala al hacer hover
  - La sombra se aplica correctamente
  - La transición es suave

#### 4.2. Botón con enlace externo

**File:** `specs/components/button-external-link.spec.ts`

**Steps:**
  1. Navegar a una página con un botón externo (ej: enlace a Discord en About)
  2. Verificar que el botón tiene atributos target='_blank'
  3. Verificar que el botón tiene rel='noopener noreferrer'
  4. Hacer clic en el botón
  5. Verificar que se abre en una nueva pestaña

**Expected Results:**
  - Los botones externos abren en nueva pestaña
  - Los atributos de seguridad están presentes

#### 4.3. Botón deshabilitado

**File:** `specs/components/button-disabled.spec.ts`

**Steps:**
  1. En el formulario de newsletter, durante el envío de datos
  2. Verificar que el botón tiene atributo disabled
  3. Intentar hacer clic en el botón deshabilitado
  4. Verificar que no se disparan eventos de clic

**Expected Results:**
  - El botón deshabilitado no responde a clics
  - El cursor cambia a 'not-allowed'
  - El estilo visual indica que está deshabilitado

### 5. Animaciones y Efectos Visuales

**Seed:** `seed.spec.ts`

#### 5.1. Animación del título en la página de inicio

**File:** `specs/animations/hero-title-animation.spec.ts`

**Steps:**
  1. Cargar la página de inicio
  2. Verificar que el título 'Elevate your Software Testing...' está visible
  3. Verificar que las palabras del título tienen opacidad inicial baja (animación de entrada)
  4. Esperar a que se complete la animación (2 segundos)
  5. Verificar que todas las palabras tienen opacidad 1

**Expected Results:**
  - La animación de split text se ejecuta
  - Las palabras se animan con un retraso
  - La animación se completa sin errores de consola

#### 5.2. Animación de scroll de imágenes

**File:** `specs/animations/scroll-trigger-animation.spec.ts`

**Steps:**
  1. Cargar la página de inicio
  2. Desplazarse lentamente hacia abajo
  3. Verificar que la imagen de 'About' aparece con una animación (fade-in + translation)
  4. Continuar desplazando para ver otras secciones
  5. Verificar que cada sección se anima al entrar en el viewport

**Expected Results:**
  - Las imágenes se animan al entrar en el viewport
  - La animación incluye traslación Y y cambio de opacidad
  - No hay saltos o parpadeos durante la animación

#### 5.3. Efecto hover en botones

**File:** `specs/animations/button-hover-effect.spec.ts`

**Steps:**
  1. Navegar a cualquier página con botones
  2. Verificar el estado inicial del botón
  3. Pasar el ratón sobre el botón
  4. Verificar que el botón se traslada hacia la izquierda-arriba
  5. Hacer clic en el botón
  6. Verificar que vuelve a su posición normal

**Expected Results:**
  - El efecto hover funciona suavemente
  - El botón se traslada y muestra sombra
  - El efecto se revierte al mover el ratón

#### 5.4. Desactivación de animaciones para usuarios con preferencia de movimiento reducido

**File:** `specs/animations/prefers-reduced-motion.spec.ts`

**Steps:**
  1. Abrir DevTools y emular preferencias de movimiento reducido
  2. Recargar la página de inicio
  3. Verificar que las animaciones no se ejecutan
  4. Desplazarse por la página
  5. Verificar que no hay animaciones de scroll

**Expected Results:**
  - Las animaciones se desactivan cuando 'prefers-reduced-motion' está activo
  - La página sigue siendo accesible sin animaciones

### 6. Páginas de Servicios (Workshops, Cursos, etc.)

**Seed:** `seed.spec.ts`

#### 6.1. Cargar página de workshops

**File:** `specs/services/workshops-page-load.spec.ts`

**Steps:**
  1. Hacer clic en 'Workshops' en la navegación
  2. Esperar a que la página cargue completamente
  3. Verificar que se muestran las tarjetas de workshops
  4. Contar el número de workshops mostrados
  5. Verificar que cada tarjeta contiene: imagen, título, descripción, precio

**Expected Results:**
  - La página de workshops carga sin errores
  - Se muestran al menos 2 workshops (From Manual to Automation, Advanced Test Engineering)
  - Cada tarjeta tiene toda la información requerida

#### 6.2. Información de workshop específico

**File:** `specs/services/workshop-details.spec.ts`

**Steps:**
  1. Navegar a la página de workshops
  2. Hacer clic en el primer workshop 'From Manual to Automation Testing'
  3. Verificar que se cargó la página de detalles del workshop
  4. Verificar que se muestran: título, descripción, fecha de inicio, duración, precio, horario
  5. Verificar que existe un botón de compra

**Expected Results:**
  - La página de detalles carga correctamente
  - Se muestran todos los detalles del workshop
  - El botón de compra es visible

#### 6.3. Cargar página de cursos

**File:** `specs/services/courses-page-load.spec.ts`

**Steps:**
  1. Hacer clic en 'Course' en la navegación
  2. Esperar a que la página cargue
  3. Verificar que se muestra contenido sobre el curso

**Expected Results:**
  - La página de cursos carga sin errores
  - Se muestran detalles del curso

#### 6.4. Cargar página de About

**File:** `specs/services/about-page-load.spec.ts`

**Steps:**
  1. Hacer clic en 'About me' en la navegación
  2. Esperar a que la página cargue completamente
  3. Verificar que se muestran imágenes personales
  4. Verificar que se muestra texto sobre Pato Miner
  5. Verificar que existen enlaces a recursos externos

**Expected Results:**
  - La página de About carga sin errores
  - Se muestran múltiples imágenes
  - El contenido es visible y legible

#### 6.5. Cargar página de Consultoría

**File:** `specs/services/consultations-page-load.spec.ts`

**Steps:**
  1. Hacer clic en 'Consultations' desde la página de inicio
  2. Esperar a que la página cargue
  3. Verificar que existe un formulario de contacto o CTA

**Expected Results:**
  - La página carga correctamente
  - Se muestra contenido sobre servicios de consultoría

### 7. Funcionalidad de Botones y CTAs

**Seed:** `seed.spec.ts`

#### 7.1. Botón 'Know more about me' en página de inicio

**File:** `specs/cta/about-button.spec.ts`

**Steps:**
  1. Desde la página de inicio, buscar el botón 'Know more about me'
  2. Hacer clic en el botón
  3. Verificar que se navegó a /about

**Expected Results:**
  - El botón es funcional
  - La navegación a About es correcta

#### 7.2. Botón 'Check our workshops' en página de inicio

**File:** `specs/cta/workshops-button.spec.ts`

**Steps:**
  1. Desde la página de inicio, buscar el botón 'Check our workshops'
  2. Hacer clic en el botón
  3. Verificar que se navegó a /workshops

**Expected Results:**
  - El botón es funcional
  - La navegación a Workshops es correcta

#### 7.3. Botón 'See The Course' en página de inicio

**File:** `specs/cta/courses-button.spec.ts`

**Steps:**
  1. Desde la página de inicio, buscar el botón 'See The Course 😱'
  2. Hacer clic en el botón
  3. Verificar que se navegó a /courses

**Expected Results:**
  - El botón es funcional
  - La navegación a Courses es correcta

#### 7.4. Botón 'Register Interest' en navegación

**File:** `specs/cta/register-interest-button.spec.ts`

**Steps:**
  1. Verificar que el botón 'Register Interest' está visible en la navegación
  2. Hacer clic en el botón
  3. Verificar que se abre un formulario de Tally embebido

**Expected Results:**
  - El botón 'Register Interest' abre el formulario de registro

### 8. Responsividad y Diseño Adaptativo

**Seed:** `seed.spec.ts`

#### 8.1. Diseño móvil en viewport de 375px

**File:** `specs/responsive/mobile-375px.spec.ts`

**Steps:**
  1. Redimensionar el navegador a 375px x 667px
  2. Recargar la página de inicio
  3. Verificar que el texto principal es legible
  4. Verificar que los botones están en tamaño móvil
  5. Verificar que las imágenes se escalan correctamente
  6. Hacer scroll vertical y verificar que todo es accesible

**Expected Results:**
  - El layout se adapta correctamente a móvil
  - No hay overflow horizontal
  - El texto es legible sin zoom

#### 8.2. Diseño tablet en viewport de 768px

**File:** `specs/responsive/tablet-768px.spec.ts`

**Steps:**
  1. Redimensionar el navegador a 768px x 1024px
  2. Recargar la página de inicio
  3. Verificar que el layout es de dos columnas donde corresponda
  4. Verificar que los botones tienen tamaño apropiado

**Expected Results:**
  - El layout de tablet funciona correctamente
  - Los elementos se distribuyen adecuadamente

#### 8.3. Diseño desktop en viewport de 1920px

**File:** `specs/responsive/desktop-1920px.spec.ts`

**Steps:**
  1. Redimensionar el navegador a 1920px x 1080px
  2. Recargar la página de inicio
  3. Verificar que todos los elementos están correctamente posicionados
  4. Verificar que el contenido no se estira excesivamente

**Expected Results:**
  - El layout desktop es óptimo
  - Los elementos mantienen proporciones correctas

#### 8.4. Imágenes con srcset se cargan correctamente

**File:** `specs/responsive/images-srcset.spec.ts`

**Steps:**
  1. Abrir DevTools > Network
  2. Redimensionar a 375px
  3. Recargar la página
  4. Verificar que se cargan imágenes optimizadas para móvil
  5. Redimensionar a 1920px
  6. Recargar la página
  7. Verificar que se cargan imágenes de mayor resolución

**Expected Results:**
  - Las imágenes se optimizan según el viewport
  - Se usan los tamaños correctos del atributo sizes

### 9. Accesibilidad

**Seed:** `seed.spec.ts`

#### 9.1. Navegación por teclado

**File:** `specs/accessibility/keyboard-navigation.spec.ts`

**Steps:**
  1. Presionar Tab para navegar por los enlaces
  2. Verificar que el orden de tabulación es lógico (de arriba a abajo)
  3. Presionar Enter en un enlace enfocado
  4. Verificar que se navega a la página correcta

**Expected Results:**
  - Todos los elementos interactivos son accesibles por teclado
  - El orden de tabulación es correcto

#### 9.2. Labels accesibles en formularios

**File:** `specs/accessibility/form-labels.spec.ts`

**Steps:**
  1. En el formulario de newsletter, inspeccionar el input de email
  2. Verificar que tiene atributo aria-label o está asociado a un label
  3. Inspeccionar el botón Submit
  4. Verificar que tiene aria-label o texto descriptivo

**Expected Results:**
  - Los inputs tienen labels accesibles
  - Los botones tienen labels descriptivos

#### 9.3. Contraste de colores

**File:** `specs/accessibility/color-contrast.spec.ts`

**Steps:**
  1. Usar herramienta de accesibilidad (ej: axe, Wave) en DevTools
  2. Ejecutar análisis de accesibilidad en la página de inicio
  3. Verificar que no hay errores de contraste

**Expected Results:**
  - El contraste de color cumple con WCAG AA
  - No hay errores de accesibilidad reportados

#### 9.4. Atributos ARIA en elementos dinámicos

**File:** `specs/accessibility/aria-attributes.spec.ts`

**Steps:**
  1. Inspeccionar el botón de menú hamburguesa
  2. Verificar que tiene aria-label
  3. Inspeccionar el toggle de tema
  4. Verificar que tiene aria-label dinámico que cambia
  5. Inspeccionar elementos con animaciones de split text
  6. Verificar que tienen aria-hidden='true'

**Expected Results:**
  - Los elementos dinámicos tienen aria-labels apropiados
  - Los elementos decorativos están marcados como aria-hidden

### 10. Casos Límite y Manejo de Errores

**Seed:** `seed.spec.ts`

#### 10.1. Página 404 no encontrada

**File:** `specs/edge-cases/404-page.spec.ts`

**Steps:**
  1. Navegar a una URL que no existe (/page-that-does-not-exist)
  2. Verificar que se muestra la página 404

**Expected Results:**
  - Se muestra una página 404 apropiada
  - Hay un enlace para volver a la página de inicio

#### 10.2. Carga lenta de imágenes

**File:** `specs/edge-cases/image-lazy-loading.spec.ts`

**Steps:**
  1. Abrir DevTools > Network
  2. Aplicar throttling lento (3G)
  3. Recargar la página
  4. Verificar que las imágenes sobre el fold cargan con prioridad
  5. Desplazarse abajo
  6. Verificar que las imágenes debajo del fold cargan bajo demanda

**Expected Results:**
  - Las imágenes con lazy loading cargan eficientemente
  - Las imágenes priority cargan primero

#### 10.3. Comportamiento sin JavaScript

**File:** `specs/edge-cases/no-javascript.spec.ts`

**Steps:**
  1. Abrir DevTools > Disable JavaScript
  2. Navegar a la página de inicio
  3. Verificar que el contenido principal es visible
  4. Verificar que la navegación funciona (enlaces simples)
  5. Reactivar JavaScript

**Expected Results:**
  - La aplicación muestra contenido sin JS
  - Los enlaces básicos funcionan sin JS

#### 10.4. Presión en elementos interactivos repetitivos

**File:** `specs/edge-cases/double-click.spec.ts`

**Steps:**
  1. En el formulario de newsletter, hacer doble clic rápido en 'Subscribe'
  2. Verificar que solo se envía una solicitud

**Expected Results:**
  - Las solicitudes duplicadas se previenen
  - Solo se procesa una suscripción

### 11. API y Backend

**Seed:** `seed.spec.ts`

#### 11.1. Endpoint POST /api/subscribe con email válido

**File:** `specs/api/subscribe-valid.spec.ts`

**Steps:**
  1. Hacer una solicitud POST a /api/subscribe
  2. Incluir JSON: { email: 'test@example.com' }
  3. Verificar que se retorna status 200
  4. Verificar que la respuesta contiene un mensaje de éxito

**Expected Results:**
  - La API acepta emails válidos
  - Se retorna código de estado 200

#### 11.2. Endpoint POST /api/subscribe con email inválido

**File:** `specs/api/subscribe-invalid.spec.ts`

**Steps:**
  1. Hacer una solicitud POST a /api/subscribe
  2. Incluir JSON: { email: 'invalid-email' }
  3. Verificar que se retorna un código de error (400 o similar)

**Expected Results:**
  - La API valida el formato de email
  - Se retorna un error apropiado

#### 11.3. Endpoint POST /api/subscribe sin email

**File:** `specs/api/subscribe-missing-email.spec.ts`

**Steps:**
  1. Hacer una solicitud POST a /api/subscribe
  2. Omitir el campo email o enviarlo vacío
  3. Verificar que se retorna un error (400 o 422)

**Expected Results:**
  - La API requiere el campo email
  - Se retorna un error cuando falta
