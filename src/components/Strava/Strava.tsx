import "./Strava.css";

export default function Strava() {
  return (
    <div className="strava-page">
      <h1>Strava AI Descriptions 🤖</h1>
      <p>
        This app automatically generates AI-powered descriptions for your Strava
        activities using webhooks and Google Gemini.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>You upload a new activity to Strava</li>
        <li>Strava sends a webhook notification</li>
        <li>AI analyzes your activity data</li>
        <li>A personalized description is added automatically</li>
      </ol>

      <h2>Project Structure</h2>
      <pre className="strava-tree">{`app/
├── api/
│   └── webhook/
│       └── route.ts          # Webhook endpoint
├── services/
│   ├── strava.service.ts     # Strava API integration
│   └── ai.service.ts         # Gemini AI generation
└── config/
    └── constants.ts          # API URLs and config`}</pre>

      <h2>Tech Stack</h2>
      <ul>
        <li>Next.js API Routes</li>
        <li>Google Gemini AI</li>
        <li>Strava API</li>
        <li>Vercel</li>
      </ul>

      <p>
        <a href="https://github.com/taaage/strava-descriptions" target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </p>
    </div>
  );
}
