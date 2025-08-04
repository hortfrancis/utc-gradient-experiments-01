import './Grad01.css';

function AsBorder() {
  return (
    <div className="grad01-border">
      <div className="grad01-content">
        This div has a gradient border with white background
      </div>
    </div>
  )
}

export default function Grad01() {

  return (
    <>
      <h1>Gradient 01</h1>
      <div className="grad01">
        grad01
      </div>

      <h2>As Border</h2>
      <AsBorder />
    </>
  );
};
