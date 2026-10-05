import "./ComingSoon.css";

type ComingSoonProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  highlights?: string[];
};

export default function ComingSoon({
  title,
  eyebrow = "Project in progress",
  description = "This project is currently under development.",
  highlights,
}: ComingSoonProps) {
  return (
    <main className="coming-soon-page" aria-labelledby="coming-soon-title">
      <p className="coming-soon-kicker">{eyebrow}</p>
      <h1 id="coming-soon-title">
        {title}<span>.</span>
      </h1>
      <p className="coming-soon-description">{description}</p>
      {highlights && (
        <ul className="coming-soon-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <p className="coming-soon-status">
        <span aria-hidden="true" /> Currently in development
      </p>
    </main>
  );
}
