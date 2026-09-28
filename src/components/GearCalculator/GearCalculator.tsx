import "./GearCalculator.css";

const GEAR_CALCULATOR_URL =
  import.meta.env.VITE_GEAR_CALCULATOR_URL ??
  "https://gears.tiggenilsson.se/";

export default function GearCalculator() {
  return (
    <iframe
      className="gear-calculator-frame"
      src={GEAR_CALCULATOR_URL}
      title="Cycling Gear Calculator"
    />
  );
}