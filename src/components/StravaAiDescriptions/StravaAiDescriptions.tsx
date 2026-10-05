import { Link } from "react-router-dom";
import "./StravaAiDescriptions.css";

const setupSteps = [
  "Create a dedicated Strava API app and authorize one athlete.",
  "Configure Postgres, Gemini, writing instructions, and description length.",
  "Deploy the service and register its webhook with Strava.",
];

export default function StravaAiDescriptions() {
  return (
    <main className="strava-ai-page" aria-labelledby="strava-ai-title">
      <header className="strava-ai-heading">
        <p className="strava-ai-kicker">Self-hosted · Strava · Gemini</p>
        <h1 id="strava-ai-title">
          Ride descriptions,<br />
          <span>written your way.</span>
        </h1>
        <p className="strava-ai-intro">
          A standalone Strava integration that turns new activity metrics into
          descriptions using your own Gemini key, writing style, and length
          limit. Each deployment manages its own webhook and rotating Strava
          refresh token.
        </p>
        <div className="strava-ai-actions">
          <a
            href="https://github.com/taaage/strava-ai-descriptions"
            target="_blank"
            rel="noreferrer"
          >
            Source and setup guide <span aria-hidden="true">↗</span>
          </a>
          <Link to="/">Back to selected work</Link>
        </div>
      </header>

      <section className="strava-ai-setup" aria-labelledby="strava-ai-setup-title">
        <div className="strava-ai-section-heading">
          <p className="strava-ai-kicker">How to self-host</p>
          <h2 id="strava-ai-setup-title">Your account. Your settings.</h2>
        </div>
        <ol>
          {setupSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="strava-ai-footer">
        Next.js API · Google Gemini · Postgres-backed token rotation
      </footer>
    </main>
  );
}