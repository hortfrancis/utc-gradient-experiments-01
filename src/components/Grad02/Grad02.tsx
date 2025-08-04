import './Grad02.css';

function AsBorder() {
  return (
    <div className="grad02-border">
      <div className="grad02-content">
        This div has a linear gradient border with white background
      </div>
    </div>
  )
}

export default function Grad02() {

  return (
    <>
      <h1>Gradient 02</h1>
      <div className="grad02">
        grad02
      </div>

      <h2>As Border</h2>
      <AsBorder />
    </>
  );
};
