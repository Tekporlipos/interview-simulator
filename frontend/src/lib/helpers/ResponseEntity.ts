export function ResponseEntity(data: any, status: number = 200): Response {
  return new Response(data, {
    status: status,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": process.env["APP_URL"]!,
      "access-control-allow-methods": "GET, POST, PUT, PATCH, DELETE",
      "access-control-allow-headers": "Content-Type, Authorization",
      "access-control-allow-credentials": "true",
      "access-control-expose-headers": "X-Custom-Header, Another-Header",
      "content-security-policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline'; img-src data: https:",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-xss-protection": "1; mode=block",
      "strict-transport-security":
        "max-age=31536000; includeSubDomains; preload",
      "referrer-policy": "strict-origin-when-cross-origin",
    },
  });
}

export function getResponseTypeEntity(audioData: any) {
  if (audioData) {
    return new Response(audioData, {
      status: 200,
      headers: {
        "Content-Type": "audio/mp3",
        "access-control-allow-origin": process.env["APP_URL"]!,
        "access-control-allow-methods": "GET, POST, PUT, PATCH, DELETE",
        "access-control-allow-headers": "Content-Type, Authorization",
        "access-control-allow-credentials": "true",
        "access-control-expose-headers": "X-Custom-Header, Another-Header",
        "content-security-policy":
          "default-src 'self'; script-src 'self' 'unsafe-inline'; img-src data: https:",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
        "x-xss-protection": "1; mode=block",
        "strict-transport-security":
          "max-age=31536000; includeSubDomains; preload",
        "referrer-policy": "strict-origin-when-cross-origin",
      },
    });
  }
  return new Response("Internal Server Error", {
    status: 500,
  });
}