"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{ padding: "48px 24px", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <h1 className="h1" style={{ color: "#dc2626" }}>Something went wrong</h1>
        <p style={{ color: "var(--color-muted)", marginBottom: "24px" }}>
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <button
          onClick={reset}
          className="cta-button"
        >
          Try again
        </button>
        <p style={{ marginTop: "24px" }}>
          <a href="/" style={{ color: "var(--color-primary)" }}>← Back to homepage</a>
        </p>
      </div>
    </main>
  );
}
