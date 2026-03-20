import "./Strava.css";

export default function Strava() {
  return (
    <div className="strava-page">
      <h1>🤖 Strava AI Descriptions <span className="strava-author">by taaage</span></h1>
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

      <h2>Features</h2>
      <ul>
        <li>Free and open source</li>
        <li>Powered by Google Gemini AI</li>
        <li>Customizable description prompts</li>
        <li>Easy deployment on Vercel</li>
      </ul>

      <p>
        <a href="https://github.com/taaage/strava-descriptions" target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </p>
    </div>
  );
}
