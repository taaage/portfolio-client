import { Link } from "react-router-dom";
import "./StravaAiDescriptions.css";

const setupSteps = [
  "Deploy the service with your Gemini API key and a private service key.",
  "Set your writing instructions, maximum length, and optional link.",
  "Connect your Strava webhook backend to the generation endpoint.",
];

export default function StravaAiDescriptions() {
  return (
    <main className="strava-ai-page" aria-labelledby="strava-ai-title">
      <header className="strava-ai-heading">
        <p className="strava-ai-kicker">Self-hosted · Gemini · Strava</p>
        <h1 id="strava-ai-title">
          Ride descriptions,<br />
          <span>written your way.</span>
        </h1>
        <p className="strava-ai-intro">
          Generate concise activity descriptions from ride metrics, with your
          own Gemini key, writing style, and length limit. The service never
          needs your Strava refresh token.
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
        Next.js API · Google Gemini · Activity data is not stored by the service
      </footer>
    </main>
  );
}