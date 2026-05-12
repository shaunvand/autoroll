"use client";
import { useEffect } from "react";

/**
 * FB Login for Business redirect target. Captures ?code= from Meta and
 * passes it back to the Autoroll Android app via the autoroll:// scheme
 * (expo-web-browser's openAuthSessionAsync intercepts this).
 */
export default function FbCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    const error = params.get("error");
    if (error) {
      window.location.replace(`autoroll://fb-callback?error=${encodeURIComponent(error)}`);
      return;
    }
    if (code) {
      const q = new URLSearchParams({ code, ...(state ? { state } : {}) });
      window.location.replace(`autoroll://fb-callback?${q.toString()}`);
    }
  }, []);
  return (
    <main style={{ fontFamily: "-apple-system, Segoe UI, sans-serif", textAlign: "center", paddingTop: 96 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Returning you to Autoroll…</h1>
      <p style={{ color: "#666", marginTop: 12 }}>If nothing happens, switch back to the Autoroll app.</p>
    </main>
  );
}
