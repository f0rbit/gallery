import { MetaProvider, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import "@f0rbit/ui/styles";
import "./styles/global.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <ErrorBoundary
            fallback={(err) => (
              <div class="error-page">
                <h1>Something went wrong</h1>
                <p>{err.message}</p>
                <a href="/">Back to home</a>
              </div>
            )}
          >
            <Suspense>{props.children}</Suspense>
          </ErrorBoundary>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
