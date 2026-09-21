import { defineMiddleware } from "astro:middleware";

function isKeystaticPath(pathname: string) {
  return (
    pathname === "/keystatic" ||
    pathname.startsWith("/keystatic/") ||
    pathname.startsWith("/api/keystatic")
  );
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  // Production Cloudflare builds omit Keystatic. If those routes ever appear
  // without GitHub-mode auth configured, refuse them instead of exposing writes.
  const githubModeConfigured =
    import.meta.env.PUBLIC_KEYSTATIC_STORAGE === "github" ||
    Boolean(import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG);
  if (import.meta.env.PROD && isKeystaticPath(ctx.url.pathname) && !githubModeConfigured) {
    return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain" } });
  }

  const response = await next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
});
