import "./StravaDashboard.css";

const DASHBOARD_URL = "https://strava.tiggenilsson.se/";

export default function StravaDashboard() {
  return (
    <iframe
      className="strava-dashboard-frame"
      src={DASHBOARD_URL}
      title="Strava Dashboard"
    />
  );
}
