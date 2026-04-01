import "./HomeAssistant.css";

const DASHBOARD_URL = import.meta.env.VITE_HOME_ASSISTANT_URL ?? "https://home.tiggenilsson.se/";

export default function HomeAssistant() {
  return (
    <iframe
      className="home-assistant-frame"
      src={DASHBOARD_URL}
      title="Home Assistant Dashboard"
    />
  );
}
