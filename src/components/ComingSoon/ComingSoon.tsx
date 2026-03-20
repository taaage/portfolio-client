import "./ComingSoon.css";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="coming-soon-page">
      <h1>{title}</h1>
      <p>Coming soon — this project is under development.</p>
    </div>
  );
}
