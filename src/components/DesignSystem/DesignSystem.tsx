import "./DesignSystem.css";

const DESIGN_SYSTEM_URL = "https://design.tiggenilsson.se/";

export default function DesignSystem() {
  return (
    <iframe
      className="design-system-frame"
      src={DESIGN_SYSTEM_URL}
      title="Design System"
    />
  );
}
