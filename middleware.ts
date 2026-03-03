import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es", "de"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. EXCLUSIÓN CRÍTICA: Ignorar archivos con extensiones (imágenes, pdf, etc.)
  // Esto evita que /hero/image.png se convierta en /es/hero/image.png
  if (
    pathname.includes('.') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  // 2. Si la ruta ya tiene un locale, permitirla
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. Redirigir al locale por defecto si no lo tiene
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    /*
     * Coincidir con todas las rutas excepto:
     * 1. /api (rutas de API)
     * 2. /_next (archivos internos de Next.js)
     * 3. /_static (si usas esta carpeta)
     * 4. Todos los archivos con extensión (ej: .png, .jpg, .svg)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|hero|.*\\..*).*)',
  ],
};